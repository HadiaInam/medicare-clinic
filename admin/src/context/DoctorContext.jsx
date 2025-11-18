import { useState } from 'react'
import {createContext} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
export const DoctorContext = createContext()

const DoctorContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ?localStorage.getItem('dToken') : '')
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)
    const [profile, setProfile] = useState(false)
    const getAppointments = async () => {
        try {
           const {data} = await axios.get(backendUrl + '/api/doctor/get-appointments', {headers: {dToken}}) 

           if (data.success){
            setAppointments(data.appointments.reverse())
           } else{
            toast.error(data.message)
           }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const completeAppointment = async (appointmentId) => {

        try {
            const {data} = await axios.post(backendUrl + '/api/doctor/complete', {appointmentId}, {headers: {dToken}})
            if (data.success){
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }
     const cancelAppointment = async (appointmentId) => {

        try {
            const {data} = await axios.post(backendUrl + '/api/doctor/cancel', {appointmentId}, {headers: {dToken}})
            if (data.success){
                toast.success(data.message)
                getAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const getDashData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/dashboard', {headers: {dToken}})
            if(data.success){
                setDashData(data.dashData)
            } else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }
    const getProfileData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/get-profile', {headers: {dToken}} )
            if (data.success){
                setProfile(data.profileData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    const value ={
        backendUrl,
        dToken, setDToken,
        appointments, setAppointments,
        getAppointments,
        cancelAppointment, completeAppointment,
        getDashData,
        dashData, setDashData,
        setProfile, profile,
        getProfileData,
    }

    return(
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider