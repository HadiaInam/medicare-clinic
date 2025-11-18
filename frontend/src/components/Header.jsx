import React from 'react'
import home from '../assets/home.jpeg'
import bg from '../assets/bg.jpg'
import profile from '../assets/profile.jpeg'

const Header = () => {
  return (
    <div className='relative my-20'>
        <img src={bg} alt="" className='sm:w-screen sm:h-auto h-[80vw] absolute -z-10' />

        <div className="sm:grid sm:grid-cols-2 flex flex-col">

            {/* ------------ Left Side ------------ */}

            <div className="sm:pt-25 pt-5 sm:text-left text-center flex flex-col justify-center sm:items-start items-center">
                <div className="text-gray-500 text-lg mb-2">GET HIGH QUALITY</div>
                <div className="text-5xl text-blue-400 mb-4">Medical Services</div>
                <div className="text-sm sm:w-[40vw] w-[80vw]">Access top-tier medical care from licensed professionals with hassle-free appointment booking. Browse our experienced doctors and book you apppointment today!</div>
                <a href="#speciality" className="" >
                    <button className="sm:mt-10 mt-8 hover:scale-108 transition-all duration-500 bg-blue-400 text-sm text-white rounded-full py-4 px-6 cursor-pointer ">Book An Appointment</button>
                </a>
            </div>

            {/* ------------ Right Side ------------ */}

            <div className="flex justify-center relative">
                <img src={home} alt="" className='rounded-t-full border-15 border-white lg:w-75 md:w-60 mx-5 sm:my-5 my-20 shadow-[0px_0px_40px_#00000040] ' />

                
                <div className="absolute flex flex-row gap-2 bg-white shadow-[0px_0px_40px_#00000040] rounded-2xl sm:left-5 left-[10vw] sm:top-0 top-12 p-5">
                    <div className="flex flex-row">
                        <img className="rounded-full w-10 h-10 border border-white " src={profile} alt="" />
                        <img className="rounded-full w-10 h-10 -ml-5 border border-white" src={profile} alt="" />
                        <img className="rounded-full w-10 h-10 -ml-5 border border-white" src={profile} alt="" />
                    </div>
                    <div className="">
                        <div className="text-sm text-gray-500">Reviews</div>
                        <div className="font-bold">4.5</div>
                    </div>
                </div>

                <div className="absolute w-40 bg-white p-5 rounded-2xl sm:bottom-0 bottom-5 sm:left-0 left-[6vw] shadow-[0px_0px_40px_#00000040] ">
                    <div className="md:text-xl text-lg text-blue-400 font-bold">10k</div>
                    <div className="md:text-sm text-xs mt-2">Satisfied Patients</div>
                </div>

                <div className="absolute lg:w-80 md:w-40 sm:w-[28vw] w-[35vw] bg-white shadow-[0px_0px_40px_#00000040] rounded-2xl p-5 lg:top-50 top-35 lg:-right-15 sm:-right-10 right-0">
                    <div className="font-bold text-blue-400 md:text-xl text-lg">Our Vision</div>
                    <div className="md:text-sm text-xs mt-2">We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need.</div>
                </div>
            </div>


        </div>


    </div>
  )
}

export default Header