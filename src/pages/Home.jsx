import React from 'react'
import Header from '../components/Header.jsx'
import Speciality from '../components/Speciality.jsx'
import Team from '../components/Team.jsx'
import Locations from '../components/Locations.jsx'



const Home = () => {
  return (
    <div className=''>
      <Header/>
      <Speciality />
      <Team />
      <Locations/>
    </div>
  )
}

export default Home