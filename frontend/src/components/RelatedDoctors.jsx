import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import { PiArrowCircleUpRightThin } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ speciality, docId }) => {

    const { doctors } = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }


    }, [doctors, speciality, docId])

    if (relDoc.length == 0) {
        return ''
    }

    return (

        <div>
            <div className="text-3xl text-center text-blue-400">Related Doctors</div>
            <div className="flex flex-row justify-center flex-wrap items-center gap-4 overflow-x-scroll   w-full py-8 ">
                {
                    relDoc.slice(0, 6).map((item, index) => (
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
    )


}

export default RelatedDoctors