import React from 'react'
import { useContext } from 'react'
import {AdminContext} from '../context/AdminContext.jsx'
import {NavLink } from 'react-router-dom'
import { MdOutlineSpaceDashboard, MdCalendarMonth } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { DoctorContext } from '../context/DoctorContext.jsx';

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)

  return (
    <div>
        {
            aToken && <ul className='pt-5 h-screen bg-white border-r  border-gray-200'>

                <NavLink to='/admin-dashboard' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <MdOutlineSpaceDashboard/>
                    <p>Dashboard</p>
                </NavLink>

                 <NavLink to='/add-doctor' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <AiOutlineUserAdd/>
                    <p>Add Doctor</p>
                </NavLink>

                 <NavLink to='/all-appointments' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <MdCalendarMonth/>
                    <p>Appointments</p>
                </NavLink>

                 <NavLink to='/doctor-list' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <FaUserDoctor/>
                    <p>Doctors</p>
                </NavLink>
            </ul>
        }
                {
            dToken && <ul className='pt-5 h-screen bg-white border-r  border-gray-200'>

                <NavLink to='/doctor-dashboard' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <MdOutlineSpaceDashboard/>
                    <p>Dashboard</p>
                </NavLink>

                 <NavLink to='/doctor-appointments' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <MdCalendarMonth/>
                    <p>Appointments</p>
                </NavLink>

                 <NavLink to='/doctor-profile' className={({isActive}) => `flex items-center gap-3 px-9 py-3 w-70 ${isActive ? 'bg-blue-400/10 border-r-4 border-blue-400 text-black' : ''}`}>
                    <AiOutlineUserAdd/>
                    <p>Profile</p>
                </NavLink>

            </ul>
        }
    </div>
  )
}

export default Sidebar