import express from 'express'
import { appointmentCancel, appointmentComplete, doctorDashboard, doctorList, doctorProfile, getDoctorAppointments, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middleware/authDoctor.js'

const doctorRouter = new express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/get-appointments', authDoctor, getDoctorAppointments)
doctorRouter.post('/complete', authDoctor, appointmentComplete)
doctorRouter.post('/cancel', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/get-profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)

export default doctorRouter