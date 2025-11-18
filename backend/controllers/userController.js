import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import Stripe from 'stripe'
const registerUser = async (req,res) => {

    try {
        
        const {name, email, password, phone, date, gender} = req.body

        if (!name || !password || !email || !phone || !date){
            return res.json({success: false, message:"Missing details"})
        }

        if (!validator.isEmail(email)){
            return res.json({success: false, message: 'Enter a valid email'})
        }
        
        if (!validator.isMobilePhone(phone)){
            return res.json({success:false, message: 'Enter a valid phone number'})
        }

        if (password.length < 8){
            return res.json({success:false, message:"Enter a strong email"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password: hashedPassword,
            phone,
            dob: date,
            gender

        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const loginUser = async (req, res) => {

    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success: false, message: 'User does not exist'})

        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success:false, message: "Invalid Credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const bookAppointment = async (req,res) => {

    try {
        const {userId, docId, slotDate, slotTime} = req.body
        const docData = await doctorModel.findById(docId).select('-password')

        if(!docData.available){
            return res.json({success:false, message:'Doctor not available'})
        }

        let slots_booked = docData.slots_booked

        if(slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)){
                return res.json({success:false, message:'Slot not available'})
            } else {
                slots_booked[slotDate].push(slotTime)
            }

        } else {
            slots_booked[slotDate] = []
            slots_booked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')

        delete docData.slots_booked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        await doctorModel.findByIdAndUpdate(docId, {slots_booked})

        res.json({success: true, message:'Appointment Booked'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    } 
}

const listAppointments = async (req, res) => {

    try {
         const {userId} = req.body
         
         const appointments= await appointmentModel.find({userId})

         res.json({success:true, appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

const cancelAppointment = async (req, res) => {

    try {
        
        const {userId, appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData.userId != userId){
            return res.json({success:false, message: 'Unauthorised action'})
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})

        const {docId, slotDate, slotTime} = appointmentData
        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e !== slotTime)
        await doctorModel.findByIdAndUpdate(docId, {slots_booked})
        res.json({success:true, message: 'Appointment cancelled'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }

}

const stripePayment = async (req,res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const {name, fee, id} = req.body;

    const lineItems = [{
        price_data:{
            currency: 'cad',
            product_data:{
                name:name,

            },
            unit_amount: Math.round(Number(fee)*100),
        },
        quantity: 1
    }];


    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode: "payment",
        success_url: `${process.env.FRONTEND_URL}/my-appointments?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: process.env.FRONTEND_URL + '/my-appointments',
    })

     await appointmentModel.findByIdAndUpdate(id, {payment: true})
     
    

    res.json({url:session.url})

}
export {registerUser, loginUser, bookAppointment, listAppointments, cancelAppointment, stripePayment}

