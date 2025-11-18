import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext.jsx'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineCheckCircle } from "react-icons/md"

const DoctorAppointments = () => {

    const {dToken, appointments, getAppointments, cancelAppointment, completeAppointment} = useContext(DoctorContext)
    const {calculateAge} = useContext(AppContext)
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }
    useEffect(() => {
        if (dToken){
            getAppointments()
        }

    }, [dToken])

  return appointments && (
    <div className='w-full max-w-6xl m-5'>
      
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className="bg-white border border-gray-200 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">

        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_1fr_1fr_1fr] grid-flow-col gap-4 py-3 px-6 border-b border-gray-200">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Payment</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        <div className="">
          {appointments.map((item, index) => (
            <div className='sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_1fr_1fr_1fr] gap-4 grid-flow-col  text-gray-500 border-b border-gray-200 px-6 py-4 items-center'>
              <p>{index+1}</p>
              <p>{item.userData.name}</p>
              <p>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} || {item.slotTime}</p>
              <div className="px-2 py-1 text-xs text-gray-400 border rounded-full flex justify-center ">{item.payment ? 'PAID' : 'CASH'}</div>
              <p>CA${item.amount}</p>
              {
                !item.cancelled && !item.isCompleted
                ? <div className="flex items-center gap-2"><MdOutlineCancel onClick={() => cancelAppointment(item._id)} className='w-8 h-8 text-red-500 cursor-pointer'/><MdOutlineCheckCircle onClick={() => completeAppointment(item._id)} className='w-8 h-8 text-green-500 cursor-pointer' /></div>
                : item.cancelled ? <button className='text-red-500 cursor-pointer'>Cancelled</button> : <button className='text-green-500 cursor-pointer'>Complete</button>
              }

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default DoctorAppointments