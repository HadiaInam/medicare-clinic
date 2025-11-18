import express from 'express'
import {bookAppointment, cancelAppointment, listAppointments, loginUser, registerUser, stripePayment} from '../controllers/userController.js'
import authUser from '../middleware/authUser.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/book-appointment', authUser, bookAppointment)

userRouter.get('/appointments', authUser, listAppointments)
userRouter.post('/cancel-appointment', authUser, cancelAppointment)
userRouter.post('/payment', authUser, stripePayment)
export default userRouter