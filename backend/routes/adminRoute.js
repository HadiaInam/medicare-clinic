import express from 'express'
import { addDoctor, adminDashboard, allAppointments, allDoctors, cancelAppointmentAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import { loginAdmin } from '../controllers/adminController.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin ,upload.single('image'),  addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', authAdmin, allDoctors)
adminRouter.post('/change-availability', authAdmin, changeAvailability)
adminRouter.get('/list-appointments', authAdmin, allAppointments)
adminRouter.post('/cancel-appointment', authAdmin, cancelAppointmentAdmin)
adminRouter.post('/dashboard-data', authAdmin, adminDashboard)
export default adminRouter
