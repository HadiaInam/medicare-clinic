import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import { MdOutlineCancel } from "react-icons/md";

const AllAppointments = () => {

  const {aToken, getAllAppointments, appointments, cancelAppointment} = useContext(AdminContext)
  const {calculateAge} = useContext(AppContext)
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  useEffect(() => {
    if (aToken){
      getAllAppointments()
      
    }
  }, [aToken])


  return appointments && (
    <div className='w-full max-w-6xl m-5'>
      
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className="bg-white border border-gray-200 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">

        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-200">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        <div className="">
          {appointments.map((item, index) => (
            <div className='sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-2 grid-flow-col text-gray-500 border-b border-gray-200 px-6 py-4 items-center'>
              <p>{index+1}</p>
              <p>{item.userData.name}</p>
              <p>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} || {item.slotTime}</p>
              <div className="flex gap-2 items-center">
                <img src={item.docData.image} className='w-8 h-8 rounded-full bg-blue-400' alt="" />
                 <p>{item.docData.name}</p>
              </div>
              <p>CA${item.amount}</p>
              {
                !item.cancelled && !item.isCompleted
                ? <div className="flex items-center gap-2"><MdOutlineCancel onClick={() => cancelAppointment(item._id)} className='w-8 h-8 text-red-500 cursor-pointer'/></div>
                : item.cancelled ? <button className='text-red-500 cursor-pointer'>Cancelled</button> : <button className='text-green-500 cursor-pointer'>Complete</button>
              }

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AllAppointments