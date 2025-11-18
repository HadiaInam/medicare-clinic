import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { AdminContext } from '../../context/AdminContext.jsx';
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

  const [docImage, setDocImage] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [speciality, setSpeciality] = useState('Gastroenterology')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState(0)
  const [fees, setFees ] = useState(0) 
  const [languages, setLanguages] = useState('')
  const [location, setLocation] = useState('')
  const [education, setEducation] = useState('')
  const [about, setAbout] = useState('')

  const {backendUrl, aToken} = useContext(AdminContext)


  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      
      if (!docImage){
        return toast.error('Image not selected')
      }

      const formData = new FormData()

      formData.append('image', docImage)
      formData.append('name', name)
      formData.append('email', email )
      formData.append('password', password )
      formData.append('speciality', speciality)
      formData.append('position', position)
      formData.append('experience', Number(experience) )
      formData.append('fees', Number(fees) )
      formData.append('languages', languages )
      formData.append('location', location )
      formData.append('education', education )
      formData.append('about', about)

      formData.forEach((key, item) => {
        console.log(key, ' ', item)
      })

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers: { aToken }})

      
      if (data.success) {
        toast.success(data.message)
        setDocImage(false)
        setName('')
        setEmail('')
        setPassword('')
        setSpeciality('')
        setEducation('')
        setLocation('')
        setFees(0)
        setExperience(0)
        setAbout('')
        setLanguages('')
        setPosition('')

      } else {
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
        console.log(error);
        
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='m-10 text-sm w-full'>
      <div className="font-semibold text-lg mb-5">Add Doctor</div>

      <div className="bg-white p-10 max-w-4xl rounded-sm max-h-[80vh] overflow-y-scroll">

        <div className="flex gap-3 items-center mb-8">
          <label htmlFor="doc-img">
            {
              docImage ? <img src={URL.createObjectURL(docImage)} className='rounded-full h-15 w-15 cursor-pointer' alt="" /> : <FaCircleUser className='cursor-pointer w-15 h-15 text-gray-300' />
            }
          </label>
          <input onChange={(e) => setDocImage(e.target.files[0])} type="file" id='doc-img' hidden />
          <div className="">Upload Picture</div>
        </div>

        {/* Other input fields */}
        <div className="max-h-90 gap-5 flex items-start">


          <div className="flex flex-col gap-2">
            <div className="">
              <p className=''>Doctor name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' required className='px-3 py-2  border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Doctor email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Doctor Password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Experience</p>
              <input onChange={(e) => setExperience(e.target.value)} value={experience} type="number" placeholder='Experience' min={0} required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder='Fee' min={0} required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>
          </div>


          <div className="flex flex-col gap-2">
            <div className="">
              <div className="">Speciality</div>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='px-3  py-2 border border-gray-200 bg-white rounded-lg w-80 '>
                <option value="Gastroenterology">Gastroenterology</option>
                <option value="Neurology">Neurology</option>
                <option value="Pulmonology">Pulmonology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Oral Health">Oral Health</option>
                <option value="Cardiology">Cardiology</option>
              </select>
            </div>


            <div className="">
              <p>Education</p>
              <input onChange={(e) => setEducation(e.target.value)} value={education} type="text" placeholder='Education' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Address</p>
              <input onChange={(e) => setLocation(e.target.value)} value={location} type="text" placeholder='Address' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Position</p>
              <input onChange={(e) => setPosition(e.target.value)} value={position} type="text" placeholder='Position' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>

            <div className="">
              <p>Languages</p>
              <input onChange={(e) => setLanguages(e.target.value)} value={languages} type="text" placeholder='English, French, Arabic' required className='px-3 py-2 border border-gray-200 rounded-lg w-80' />
            </div>


          </div>
        </div>

        <div className="mt-2">
          <div className="">About me</div>
          <textarea onChange={(e) => setAbout(e.target.value)} value={about} name="" id="" rows={5} className='w-165 px-3 py-2 border border-gray-200 rounded-lg resize-none'></textarea>
        </div>

        <button type='submit' className='rounded-full mt-2 cursor-pointer bg-blue-400 p-3 w-30 text-white text-sm'>Add Doctor</button>
      </div>

    </form>
  )
}

export default AddDoctor