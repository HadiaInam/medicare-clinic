import React, { useEffect } from 'react'
import cardiology from '../assets/cardiology.png'
import oral from '../assets/oral.png'
import orthopedics from '../assets/orthopedics.png'
import pulmonology from '../assets/pulmonology.png'
import neurology from '../assets/neurology.png'
import gastroenterology from '../assets/gastroenterology.png'
import { Link } from 'react-router-dom'


const Speciality = () => {


    const speciality = [
        {
            image: gastroenterology,
            name: 'Gastroenterology',
        },
        {
            image: neurology,
            name: 'Neurology',
        },
        {
            image: pulmonology,
            name: 'Pulmonology',
        },
        {
            image: orthopedics,
            name: 'Orthopedics',
        },
        {
            image: oral,
            name: 'Oral Health'
        },
        {
            image: cardiology,
            name: 'Cardiology',
        },
    ]
  return (
    <div className='flex flex-col justify-center items-center py-6 mb-10 text-center' id='speciality'>
        <div className="text-3xl text-blue-400">Browse Our Specialities</div>
        <div className="text-sm mt-2">Select a speciality and browse experienced doctors to visit </div>

        <div className="flex flex-row x:justify-center justify-start items-center gap-4 overflow-x-scroll   w-full py-8 ">
            {
                speciality.map((item, index) => (
                    <Link onClick={() => scrollTo(0,0)} className='items-center justify-center flex flex-col flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.name}`}>
                        <img src={item.image} className='w-24 h-24 mb-2' alt="" />
                        <div className='text-sm'>{item.name}</div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Speciality