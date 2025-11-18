import React from 'react'
import { useContext } from 'react'
import {AdminContext} from '../context/AdminContext.jsx'
import { useState } from 'react'
import { DoctorContext } from '../context/DoctorContext.jsx'

const Navbar = () => {

    const {aToken, setAToken} = useContext(AdminContext)
    const {dToken, setDToken} = useContext(DoctorContext)

    const logout = () => {
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between px-10 p-2 bg-white border-b border-gray-200'>
        <div className="flex items-center gap-5">
             <div className="text-2xl">Medi<span className='text-blue-400'>Care</span> <span className='text-base'>Clinic</span></div>
            <div className="text-xs border rounded-full border-gray-400 text-gray-400 p-1 px-2">{aToken ?'Admin': 'Doctor'}</div>
        </div>
        <button onClick={logout} className='rounded-full cursor-pointer bg-blue-400 p-3 w-30 text-white text-sm'>Logout</button>
    </div>
  )
}

export default Navbar