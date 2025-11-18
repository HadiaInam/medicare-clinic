import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    image: {type: String, required:true},
    speciality: {type: String, required:true},
    education: {type: String, required:true},
    experience: {type: Number, required:true},
    position: {type: String, required:true},
    about: {type: String, required:true},
    topDoctor: {type: Boolean, required:true},
    available: {type: Boolean, required:true, default:true},
    fees: {type: Number, required:true},
    location: {type: String, required:true},
    languages: {type: String, required:true},
    date: {type: Number, required:true},
    slots_booked: {type: Object, default:{}}
}, {minimize: false})

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)
export default doctorModel