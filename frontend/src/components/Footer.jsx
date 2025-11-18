import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col mt-25'>

      <div className="sm:grid sm:grid-cols-[3fr_2fr_2fr] sm:text-left sm:items-start flex flex-col items-center text-center gap-10 ">
        <div className="text-2xl">
          <div className="">Medi<span className='text-blue-400'>Care</span> <span className='text-base'>Clinic</span></div>
          <div className="sm:text-base text-xs mt-5 md:w-70 sm:w-[30vw] w-70">Access top-tier medical care from licensed professionals with hassle-free appointment booking. Browse our experienced doctors and book you apppointment today!</div>
        </div>
        <div className="sm:text-base text-xs">
          <div className="text-blue-400 text-lg mb-5">Useful Links</div>
          <div className="mb-2 ">Home</div>
          <div className="mb-2">All Doctors</div>
          <div className="mb-2">About</div>
          <div className="mb-2">Contact</div>
        </div>

        <div className="sm:text-base text-xs">
          <div className="text-blue-400 text-lg mb-5">Contact Us</div>
          <div className="mb-2">Phone: +00000000000</div>
          <div> Email: info@algorithmz.co</div>
           
          <button className="mt-5 text-center sm:text-left hover:scale-108 transition-all duration-500 bg-blue-400 text-sm text-white rounded-full py-4 px-6 sm:w-full lg:w-55 cursor-pointer ">Book An Appointment</button>
                
        </div>
        
      </div>

      <hr className='w-[80vw] text-gray-500  place-self-center mt-10 ' />
      <div className="flex justify-center m-3 text-sm text-gray-500">Copyright 2025@medicareclinic.com</div>

    </div>
  )
}

export default Footer