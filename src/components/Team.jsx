import React from 'react'
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { BsArrowRight } from "react-icons/bs";

const Team = () => {

    const navigate = useNavigate()
    const {doctors} = useContext(AppContext)

  return (
    <div className='justify-center items-center'>

        <div className="text-3xl text-center text-blue-400">Our Trusted Team</div>
        <div className="text-sm text-center mt-2">Our team is dedicated to provide you with special care </div>


        <div className="flex flex-wrap gap-4 justify-center items-center mt-10">
            {
                doctors.slice(0,10).map( (item, index) => (
                    <div key={index} onClick={() => {navigate(`/appointment/:${item._id}`); scrollTo(0,0)}} className="rounded-2xl overflow-hidden relative shadow-md bg-blue-400/20 hover:translate-y-[-10px] transition-all duration-500 cursor-pointer">
                        <img src={item.image} className=' pt-5 px-9 mx-auto' alt="" />
                        <div className="bg-yellow-500 text-white rounded-sm text-center w-25 text-sm px-2 py-1 absolute top-2 right-2">Top Doctor</div>
                        <div className="p-5 bg-white flex items-center justify-between">
                            <div className="">
                                <div className="text-lg text-blue-400 ">{item.name}</div>
                                <div className="text-sm">{item.speciality}</div>
                            </div>
                            <PiArrowCircleUpRightThin className='text-3xl'/>
                        </div>    
                    </div>
                ))
            }
        </div>
        <div className="flex justify-center">
            <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className=" rounded-full flex items-center gap-2 bg-blue-400 text-white py-3 text-sm px-4 mt-10 cursor-pointer hover:scale-108 transition-all duration-500">View more <BsArrowRight className='text-xl'/></button>
        </div>
        
    </div>
  )
}

export default Team