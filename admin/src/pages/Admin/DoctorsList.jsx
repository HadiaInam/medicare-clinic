import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext.jsx'
import { useEffect } from 'react'
import { PiArrowCircleUpRightThin } from 'react-icons/pi'

const DoctorsList = () => {
  const {doctors, aToken, getAllDoctors, changeAvailability} = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='p-10 max-h-screen overflow-y-scroll'>
      <div className="font-semibold text-lg mb-5">All Doctors</div>
       <div className="flex  flex-wrap lg:gap-4 gap-2 md:justify-start items-center justify-center">
          {
             doctors == '' 
             ? <div className="">No doctors available</div>
             : doctors.map( (item, index) => (
                 <div key={index} className="rounded-2xl flex flex-col overflow-hidden relative shadow-md cursor-pointer w-50 h-70 bg-white group">
                     <div className="bg-blue-400/20 group-hover:bg-blue-400 transition-all duration-500"><img src={item.image} className=' mx-auto pt-5 overflow-hidden h-40' alt="" /></div>
                     <div className={ item.topDoctor ? `bg-yellow-500 text-white rounded-sm text-center w-25 text-sm px-2 py-1 absolute top-2 right-2` : 'hidden'}>Top Doctor</div>
                     <div className=" p-5 flex flex-col items-start justify-center gap-2">
                         <div className="">
                             <div className="text-lg text-blue-400 ">{item.name}</div>
                             <div className="text-sm">{item.speciality}</div>
                         </div>
                         <div className="flex items-center gap-2 text-sm">
                          <input onChange={() => changeAvailability(item._id)} type='checkbox' checked={item.available}/>
                          <div className="">Available</div>
                         </div>
                     </div>    
                 </div>
             ))
          } 
        </div>
    </div>
  )
}

export default DoctorsList