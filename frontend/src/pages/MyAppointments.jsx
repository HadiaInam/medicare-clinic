import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import { useState } from 'react'
import {loadStripe} from '@stripe/stripe-js';

const MyAppointments = () => {

  const {backendUrl, token, getDoctorsData} = useContext(AppContext)
  const sessionId = new URLSearchParams(window.location.search).get("session_id");
  const [appointments, setAppointments] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    
  }
  const getUserAppointments = async () => {

    try {

      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers: {token}})

      if (data.success){
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers: {token}})
      if (data.success){
        toast.success(data.message)
        getUserAppointments()
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
      getDoctorsData()
    }
 
  }, [token])

  const stripePayment = async (name, fee, id) => {
    
    const {data} = await axios.post(backendUrl + '/api/user/payment', {name, fee, id}, {headers: {token} })
    window.location.href = data.url;

    getDoctorsData()

  }


  return appointments && (
    <div className="">
      <div className='text-xl mt-10 text-blue-400'>My Appointments</div>
      <div className="flex flex-col">
        {appointments.map((item, index) => (
          <div className=" border-b border-gray-400 py-5 grid md:grid-cols-[1fr_2fr_1fr_1fr] grid-cols-2">
            <div className="flex flex-shrink-0">
              <img src={item.docData.image} alt="" className='pt-5 lg:px-8 px-2 mx-auto bg-blue-400/20 w-40 h-40' />
            </div>
            <div className="flex flex-col justify-center px-5">
              <p className="text-lg font-bold">{item.docData.name}</p>
              <p className="text-sm">{item.docData.speciality} - {item.docData.position}</p>
              <p className="font-bold text-sm mt-5">Address: </p>
              <p className="text-sm">{item.docData.location}</p>
              <p className="text-sm mt-1"><span className="font-bold">Date & Time: </span> {slotDateFormat(item.slotDate)} || {item.slotTime}</p>
            </div>
            <div className=""></div>
            <div className="flex flex-col gap-2 justify-end items-end">
              {!item.cancelled && !item.isCompleted && !item.payment ?  <button onClick={() => stripePayment(item.docData.name,item.docData.fees, item._id)} className='cursor-pointer rounded-full border border-gray-400 hover:bg-blue-400 px-5 py-3 w-50  text-gray-400 font-bold text-sm transition-all duration-500 hover:text-white'>Pay Online</button> : <></>}
              { !item.cancelled && !item.isCompleted && !item.payment ?  <button onClick={() => cancelAppointment(item._id)} className='cursor-pointer rounded-full border border-gray-400 hover:bg-red-500 px-5 py-3 w-50 text-gray-400 font-bold text-sm transition-all duration-500 hover:text-white'>Cancel Appointment</button> : <></>}
              {item.cancelled && <button className='rounded-full border border-gray-400  px-5 py-3 w-50 text-red-500 font-bold text-sm '>Appointment cancelled</button>}
              {item.payment && <button className='rounded-full border border-gray-400 px-5 py-3 w-50 text-gray-400 font-bold text-sm '>Paid</button>}
              {item.isCompleted && <button className='rounded-full border border-gray-400 px-5 py-3 w-50 text-green-400 font-bold text-sm '>Completed</button>}
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default MyAppointments