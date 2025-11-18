import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AdminContext } from '../context/AdminContext.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'
import { DoctorContext } from '../context/DoctorContext.jsx'

const Login = () => {

  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAToken, backendUrl } = useContext(AdminContext)
  const {setDToken} = useContext(DoctorContext)

  const onSubmitHandler = async (event) => {

    event.preventDefault()

    try {

      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })

        if (data.success) {
          localStorage.setItem('aToken', data.token)
          setAToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {
        const {data} = await axios.post(backendUrl + '/api/doctor/login', {email, password})
        if (data.success) {
          localStorage.setItem('dToken', data.token)
          setDToken(data.token)
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(data.message)
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className="flex  min-h-[50vh] items-center p-5 h-screen">
      <div className="flex flex-col mx-auto inset-shadow-sm shadow-lg p-10 rounded-lg gap-3 text-gray-400">
        <p className="font-semibold text-2xl mb-5 text-center text-black"><span className='text-blue-400'>{state}</span> Login</p>

        <div className="text-sm">
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} className='border w-60 border-gray-400 px-2 py-1 rounded-lg' value={email} type="email" />
        </div>

        <div className="text-sm">
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} className='border w-60 border-gray-400 px-2 py-1 rounded-lg' value={password} type="password" />
        </div>

        <input type="submit" className="bg-blue-400 text-white text-center w-full rounded-full px-3 py-2 cursor-pointer" value='Login'/>

        {
          state == 'Admin'
            ? <div className="text-sm" onClick={() => setState('Doctor')}>Doctor Login? <span className="cursor-pointer underline text-blue-400">Click Here</span></div>
            : <div className="text-sm" onClick={() => setState('Admin')}>Admin Login? <span className="cursor-pointer underline text-blue-400">Click Here</span></div>
        }



      </div>
    </form>

  )
}

export default Login