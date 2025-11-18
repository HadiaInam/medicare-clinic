import React from 'react'
import doc from '../assets/teamDoc.jpeg'
import Team from '../components/Team'
import profile from '../assets/profile.jpeg'
import { IoStar } from "react-icons/io5";

const About = () => {
  return (
    <div>
      {/* ----------- Header --------- */}
      <div className="mt-20 md:flex md:flex-row flex-col md:text-left text-center items-center justify-center lg:gap-20 gap-5">

        <img src={doc} className='rounded-2xl md:w-[40vw] w-[60vw] flex-shrink-0 place-self-center my-5' alt="" />

        <div className=" ">
          <div className="text-xs">ABOUT US</div>
          <div className="lg:text-2xl text-blue-400 md:text-xl">Learn More About Us</div>
          <div className="mt-5 sm:mx-auto mx-10 lg:text-sm md:text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
          <button className="md::mt-10 mt-5 hover:scale-108 transition-all duration-500 bg-blue-400 text-sm text-white rounded-full py-4 px-6 cursor-pointer ">Book An Appointment</button>
        </div>

      </div>

      {/* Our services */}

      <div className="flex md:flex-row flex-col items-center justify-center gap-5 my-20 ">
        <div className="hover:bg-blue-400 flex-shrink-0 md:w-[30vw] w-[80vw] rounded-2xl p-10 flex flex-col gap-5 hover:text-white border border-gray-500 hover:border-none transition-all duration-500">
          <div className="text-2xl">Experienced Doctors</div>
          <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        <div className="hover:bg-blue-400 flex-shrink-0 md:w-[30vw] w-[80vw] rounded-2xl p-10 flex flex-col gap-5 hover:text-white border border-gray-500 hover:border-none transition-all duration-500">
          <div className="text-2xl">Quick Appointments</div>
          <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        <div className="hover:bg-blue-400 flex-shrink-0 md:w-[30vw] w-[80vw] rounded-2xl p-10 flex flex-col gap-5 hover:text-white border border-gray-500 hover:border-none transition-all duration-500">
          <div className='text-2xl'>Developed Machinery</div>
          <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
      </div>

      {/* Our team */}

      <Team/>

      {/* Customer Reviews */}
      <div className="flex flex-col items-center justify-center md:m-20 m-10  overflow-x-scroll">
        <div className="text-xs">HEAR WHAT OUR PATIENTS SAY</div>
        <div className="text-2xl text-blue-400">Patient Reviews</div>

        {/* Reviews */}
        <div className="flex w-full justify-start gap-5 overflow-x-scroll mt-10">
          <div className="md:w-75 w-60 bg-gray-100 rounded-2xl flex-shrink-0 p-10 ">
            <div className="flex text-sm items-center gap-2"> 
            <img src={profile} className='rounded-full h-10 w-10'/> 
            <div className="flex flex-col">
                Michael Smith 
                <div className="text-xs flex flex-row items-center gap-1"><IoStar className='text-yellow-500 text-sm '/>5 stars</div>
            </div>
            
          </div>
          <div className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>

        <div className="w-75 bg-gray-100 rounded-2xl flex-shrink-0 p-10">
          <div className="flex text-sm items-center gap-2"> 
              <img src={profile} className='rounded-full h-10 w-10'/> 
              <div className="flex flex-col">
                Michael Smith 
                <div className="text-xs flex flex-row items-center gap-1"><IoStar className='text-yellow-500 text-sm '/>5 stars</div>
            </div>
            
          </div>
          <div className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>

        <div className="w-75 bg-gray-100 rounded-2xl flex-shrink-0 p-10">
          <div className="flex text-sm items-center gap-2"> 
              <img src={profile} className='rounded-full h-10 w-10'/> 
              <div className="flex flex-col">
                Michael Smith 
                <div className="text-xs flex flex-row items-center gap-1"><IoStar className='text-yellow-500 text-sm '/>5 stars</div>
            </div>
            
          </div>
          <div className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        <div className="w-75 bg-gray-100 rounded-2xl flex-shrink-0 p-10">
          <div className="flex text-sm items-center gap-2"> 
              <img src={profile} className='rounded-full h-10 w-10'/> 
              <div className="flex flex-col">
                Michael Smith 
                <div className="text-xs flex flex-row items-center gap-1"><IoStar className='text-yellow-500 text-sm '/>5 stars</div>
            </div>
            
          </div>
          <div className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>
        <div className="w-75 bg-gray-100 rounded-2xl flex-shrink-0 p-10">
          <div className="flex text-sm items-center gap-2"> 
              <img src={profile} className='rounded-full h-10 w-10'/> 
              <div className="flex flex-col">
                Michael Smith 
                <div className="text-xs flex flex-row items-center gap-1"><IoStar className='text-yellow-500 text-sm '/>5 stars</div>
            </div>
            
          </div>
          <div className="mt-5 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
        </div>

        
        
       </div>

      </div>
    </div>
  )
}

export default About