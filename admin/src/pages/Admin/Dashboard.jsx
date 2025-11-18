import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { useEffect } from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

const Dashboard = () => {

  const { dashData, getDashData, aToken, cancelAppointment } = useContext(AdminContext)
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  useEffect(() => {
    if (aToken) {
      getDashData()
    }

  }, [aToken])



  return dashData && (
    <div className='m-10 flex flex-col gap-4'>

      <div className="flex gap-4 text-gray-500">
        <div className="flex items-center bg-white rounded-lg p-5 w-60 gap-2">
          <FaUserDoctor className='text-4xl text-blue-400' />
          <div className="flex flex-col items-start">
            <div className="font-bold">{dashData.doctors}</div>
            <p className='text-sm'>Doctors</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded-lg p-5 w-60 gap-2">
          <FaBookMedical className='text-4xl text-blue-400' />
          <div className="flex flex-col items-start">
            <div className="font-bold">{dashData.appointments}</div>
            <p className='text-sm'>Appointments</p>
          </div>
        </div>
        <div className="flex items-center bg-white rounded-lg p-5 w-60 gap-2">
          <FaUserInjured className='text-4xl text-blue-400' />
          <div className="flex flex-col items-start">
            <div className="font-bold">{dashData.patients}</div>
            <p className='text-sm'>Patients</p>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-500">

        <div className="flex items-center gap-2 w-full border-b border-gray-200 px-5 py-3 "><MdMenu className='text-3xl text-blue-400' /> Latest Appointments</div>

        <div className="">
          {dashData.latestAppointments.map((item, index) => (
            <div className="flex justify-between px-5 border-b border-gray-200 py-5">
              <div className="flex gap-2 items-center">
                <img src={item.docData.image} className='w-10 h-10 rounded-full' alt="" />

                <div className="">
                  <p>{item.docData.name}</p>
                  <p>{slotDateFormat(item.slotDate)} || {item.slotTime} </p>
                </div>
              </div>

              {
                !item.cancelled && !item.isCompleted
                  ? <div className="flex items-center gap-2"><MdOutlineCancel onClick={() => cancelAppointment(item._id)} className='w-8 h-8 text-red-500 cursor-pointer' /></div>
                  : item.cancelled ? <button className='text-red-500 cursor-pointer'>Cancelled</button> : <button className='text-green-500 cursor-pointer'>Complete</button>
              }

            </div>
          ))}



        </div>
      </div>




    </div>
  )
}

export default Dashboard