import React from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import {toast } from 'react-toastify'
import axios from 'axios'

const DoctorProfile = () => {
  const {profile, getProfileData, dToken, setProfile, backendUrl} = useContext(DoctorContext)

  const [edit, setEdit] = useState(false)

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profile.address,
        fees: profile.fees,
        languages: profile.langauges,
        available: profile.available,
        education: profile.education
      }

      const {data} = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, {headers: {dToken}})
      if (data.success){
        toast.success(data.message)
        setEdit(false)
        getProfileData()
      } else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (dToken){
      getProfileData()
    }
  }, [dToken])

  return (
    <div className='m-10 flex flex-col gap-4'>
      
      <div className="">
        <img src={profile.image} alt="" className='w-60 h-60 rounded-sm pt-5 px-5 bg-blue-400' />
      </div>

      <div className="bg-white p-8 rounded-lg text-sm text-gray-500">
        <div className="text-2xl font-semibold text-black">{profile.name}</div>
        <div className="flex gap-2 items-center">
          <div className="">{profile.speciality} - {profile.position}</div>
          <div className="border rounded-full px-2 py-1">{profile.experience} years</div>
        </div>
      
        <div className="">{ edit ? <input type='text' value={profile.education} onChange={(e) => setProfile(prev => ({...prev, education:e.target.value}))}/> : profile.education}</div>

        <div className="mt-4 text-black font-semibold">About:</div>
        <div className="">{profile.about}</div>

        <div className="mt-4 text-black font-semibold">Languages: <span className='text-gray-500 font-normal'>{ edit ? <input type='text' value={profile.languages} onChange={(e) => setProfile(prev => ({...prev, languages:e.target.value}))}/> : profile.languages}</span> </div>
        <div className="text-black font-semibold">Appointment fee: <span className='text-gray-500 font-normal'> CA${ edit ? <input type='number' value={profile.fees} onChange={(e) => setProfile(prev => ({...prev, fees:e.target.value}))}/> : profile.fees}</span></div>
      
        <div className="text-black font-semibold">Address: <span className='text-gray-500 font-normal'>{ edit ? <input type='text' value={profile.location} onChange={(e) => setProfile(prev => ({...prev, location:e.target.value}))}/> : profile.location}</span></div>

        <div className="flex gap-2 mt-4 items-center text-black font-semibold">
          <input checked={profile.available} onChange={() => edit && setProfile(prev => ({...prev, available: !prev.available}))} type="checkbox" name="" id="" className='cursor-pointer' />
          <div className="">Available</div>
        </div>
        {
          !edit
          ?  <button onClick={() => setEdit(true)} className='border px-5 py-1 rounded-full text-base mt-4 hover:text-white hover:bg-blue-400 transition-all duration-500 cursor-pointer'>Edit</button>
          : <button onClick={updateProfile} className='border px-5 py-1 rounded-full text-base mt-4 hover:text-white hover:bg-blue-400 transition-all duration-500 cursor-pointer'>Save</button>
        }
       
        
      </div>
    </div>
  )
}

export default DoctorProfile