import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'
import { PiArrowCircleUpRightThin } from 'react-icons/pi'

const Doctors = () => {

  const { speciality } = useParams()
  const { doctors } = useContext(AppContext)
  const [filterDoc, setFilterDoc] = useState([])
  const navigate = useNavigate()


  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality).sort((a, b) => {
        if (a.topDoctor) {
          return -1
        } else {
          return 1
        }
      }))

    } else {
      setFilterDoc(doctors.sort((a, b) => {
        if (a.topDoctor) {
          return -1
        } else {
          return 1
        }
      }))
    }
  }

  useEffect(() => {
    applyFilter()

  }, [doctors, speciality])


  return (
    <div>

      <div className="flex md:flex-row flex-col items-start lg:gap-8 gap-2 mt-10">
        {/* -------------- Navigation ----------- */}
        <div className="text-sm ">
          <div className="text-xs m-2 text-gray-500" >Select specialities</div>
          <div className="flex md:flex-col flex-row flex-wrap">
            <div onClick={() => speciality === 'Gastroenterology' ? navigate('/doctors') : navigate('/doctors/Gastroenterology')} className={` cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3  border border-gray-400 rounded-lg m-2 ${speciality === 'Gastroenterology' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Gastroenterology</div>
            <div onClick={() => speciality === 'Neurology' ? navigate('/doctors') : navigate('/doctors/Neurology')} className={` cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3  border border-gray-400 rounded-lg m-2 ${speciality === 'Neurology' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Neurology</div>
            <div onClick={() => speciality === 'Pulmonology' ? navigate('/doctors') : navigate('/doctors/Pulmonology')} className={`cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3 border border-gray-400 rounded-lg m-2 ${speciality === 'Pulmonology' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Pulmonology</div>
            <div onClick={() => speciality === 'Orthopedics' ? navigate('/doctors') : navigate('/doctors/Orthopedics')} className={`cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3 border border-gray-400 rounded-lg m-2 ${speciality === 'Orthopedics' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Orthopedics</div>
            <div onClick={() => speciality === 'Oral Health' ? navigate('/doctors') : navigate('/doctors/Oral Health')} className={`cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3 border border-gray-400 rounded-lg m-2 ${speciality === 'Oral Health' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Oral Health</div>
            <div onClick={() => speciality === 'Cardiology' ? navigate('/doctors') : navigate('/doctors/Cardiology')} className={`cursor-pointer md:w-auto md:px-6 lg:px-8 px-2 py-3 border border-gray-400 rounded-lg m-2 ${speciality === 'Cardiology' ? 'bg-blue-400 text-black' : 'bg-gray-200 text-gray-500'}`}>Cardiology</div>
          </div>
        </div>

        {/* -------------- Doctors -------------- */}
        <div className="flex mt-10 flex-wrap lg:gap-4 gap-2 md:justify-start items-center justify-center">
          {
            filterDoc == ''
              ? <div className="">No doctors available</div>
              : filterDoc.map((item, index) => (

                <div key={index} onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className="rounded-2xl flex flex-col overflow-hidden relative shadow-md hover:translate-y-[-10px] transition-all duration-500 cursor-pointer w-55 h-70 bg-white">
                  <div className="bg-blue-400/20"><img src={item.image} className=' mx-auto pt-5 overflow-hidden h-40' alt="" /></div>
                  <div className={item.topDoctor ? `bg-yellow-500 text-white rounded-sm text-center w-25 text-sm px-2 py-1 absolute top-2 right-2` : 'hidden'}>Top Doctor</div>
                  <div className=" p-5 flex items-center justify-between gap-2">

                    <div className="">
                      <div className="text-lg text-blue-400 ">{item.name}</div>
                      <div className="text-sm">{item.speciality}</div>
                      {item.available ? <div className=' text-green-400 text-xs'>Available</div> : <div className=' text-red-400 text-xs' >Not Available</div>}
                    </div>

                    <PiArrowCircleUpRightThin className='text-3xl' />
                  </div>
                </div>
              ))
          }
        </div>
      </div>

    </div>
  )
}

export default Doctors