import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    const navigate = useNavigate()

  return (
    <div className='justify-between flex items-center p-3 border-b border-gray-400'>
        <div className="text-2xl">Medi<span className='text-blue-400'>Care</span> <span className='text-base'>Clinic</span></div>
        
        <div className="md:flex hidden lg:gap-5 gap-3 text-sm">
            
            <NavLink end className={({ isActive }) => 
                        isActive && "text-blue-400"
                    } to='/' >HOME</NavLink>
            <NavLink className={({ isActive }) => 
                        isActive && "text-blue-400"
                    } to='/doctors' >ALL DOCTORS</NavLink>
            <NavLink className={({ isActive }) => 
                        isActive && "text-blue-400 "
                    } to='/about' >ABOUT</NavLink>
            <NavLink className={({ isActive }) => 
                        isActive && "text-blue-400 "
                    } to='/contact' >CONTACT</NavLink>
            
        </div>

        <div className="">
            {
                token
                ? 
                    <div className='flex items-center gap-1 cursor-pointer group relative'>
                        <FaCircleUser className='text-2xl text-blue-400'/>
                        <IoIosArrowDown />

                        <div className="absolute top-0 right-0 pt-12 text-base hidden group-hover:block">
                        <div className="w-40 rounded-lg p-4 flex flex-col gap-2 text-gray-500 z-20 bg-neutral-200">
                            <div className="hover:text-black" onClick={() => navigate('/profile')}>My Profile</div>
                            <div className="hover:text-black" onClick={() => navigate('/my-appointments')}>My Appointments</div>
                            <div className="hover:text-black" onClick={() => setToken(false)}>Logout</div>
                        </div>
                    </div>
                    
                </div>
                : <NavLink to={'/login'}><button className='text-sm bg-blue-400 text-white rounded-full py-3 px-4'>Create Account</button></NavLink>
            }
        </div>
    </div>
  )
}

export default Navbar