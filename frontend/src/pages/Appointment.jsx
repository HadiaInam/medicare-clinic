import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {AppContext} from '../context/AppContext.jsx'
import RelatedDoctors from '../components/RelatedDoctors.jsx'
import {toast} from 'react-toastify'
import axios from 'axios'

const Appointment = () => {
  const {docId} = useParams()
  const {doctors, backendUrl, token, getDoctorsData} = useContext(AppContext)

  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const [docInfo, setDocInfo] = useState(false)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate = useNavigate()

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)

  }

  const getAvailableSlots = async () => {
    setDocSlots([])

    // get current date
    let today = new Date()

    for(let i=0; i<15; i++){

      //getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+ i)

      // setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1: 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30: 0)

      } else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []
      while(currentDate < endTime){
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

        let day = currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()

        const slotDate = day + '_' + month + '_' + year
        const slotTime = formattedTime

        const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        
        if (isSlotAvailable) {
          timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime

        })
        }

        

        // incrememt time by 30 min

        currentDate.setMinutes(currentDate.getMinutes() +30)
      }

      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  const bookAppointment = async () => {
    if(!token) {
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    try {
      const date = docSlots[slotIndex][0].dateTime
      let day = date.getDate()
      let month = date.getMonth()+1
      let year = date.getFullYear()

      const slotDate = day + '_' + month + '_' + year

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment', {docId, slotDate, slotTime}, {headers: {token}})

      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(data.message)
    }
  }

  useEffect(() => {
 
    fetchDocInfo()
    
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])


  return docInfo && (
    <div>

      {/* ------- Doctor Details --------- */}

      <div className="bg-gray-100 lg:p-12 p-5 md:grid md:grid-cols-[1fr_2fr] md:text-left flex flex-col justify-center items-center text-center gap-10">

         {/* ---------- Left Side ------------- */}
         <div className="flex items-center">
          <img src={docInfo.image} className='bg-blue-400 rounded-2xl px-3 pt-5 w-60 flex flex-shrink-0 justify-center' alt="" />
         </div>

         {/* ----------- Right Side ------------ */}
         <div className="md:w-[40vw] w-[60vw] flex justify-start flex-col ">
          <div className="text-blue-400 text-3xl">{docInfo.name}</div>
          <div className="text-gray-500 text-xs">{docInfo.position} - {docInfo.experience} years</div>
          <div className="font-bold mt-5">About</div>
          <div className="text-sm">{docInfo.about}</div>
          <div className="mt-5 text-sm"><span className='font-bold'>Location:</span> {docInfo.location}</div>
          <div className="text-sm"><span className='font-bold'>Languages:</span> {docInfo.languages}</div>
          <div className="text-sm"><span className='font-bold'>Education:</span> {docInfo.education}</div>
          <div className="text-sm"><span className='font-bold'>Appointment Fee:</span> CA${docInfo.fees}</div>
        </div>
      </div>

      


      {/* ------------ Booking Slots ----------- */}

      <div className=" lg:p-12 p-5">
        <div className="m-2 mt-8 font-bold text-sm">Booking Slots</div>
        {/* ---------- Date slots -------- */}
        <div className="flex flex-row gap-2 overflow-x-scroll">
          {
            docSlots.length && docSlots.map((item, index) => (
              <div className={`w-15 flex-shrink-0 py-4 flex flex-col items-center rounded-full ${index == slotIndex ? 'bg-blue-400 text-white' : 'bg-gray-100 border border-gray-400'} `} onClick={() => setSlotIndex(index)}  key={index}>
                <p className='font-bold'>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>

              </div>
            ))
          }
        </div>

        {/* ---------- Time slots -------- */}

        <div className="flex flex-row gap-2 overflow-x-scroll mt-8">

          {
            docSlots.length && docSlots[slotIndex].map((item,index) => (
              <p onClick={() => setSlotTime(item.time)} className={`rounded-full flex-shrink-0 p-2 px-3 ${item.time == slotTime ? 'bg-blue-400 text-white ': 'bg-gray-100 border border-gray-400'} `} key={index}>
                {item.time.toLowerCase()}
              </p>
            ))
          }

        </div>

        <button onClick={bookAppointment} className="sm:mt-5 mt-8 mb-10 hover:scale-108 transition-all duration-500 bg-blue-400 text-sm text-white rounded-full py-4 px-6 cursor-pointer ">Book Appointment</button>
         

      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      
    </div>
  )
}

export default Appointment