import React from 'react'
import { SlLocationPin } from "react-icons/sl";

const Locations = () => {
  return (
    <div className='bg-blue-400/30 w-full  justify-center p-8 rounded-2xl my-10 mt-20'>
      <div className="text-2xl font-bold text-blue-400  mt-5 text-center ">Our Branches</div>
      <div className="text-sm mt-2 text-center">View our closest branch and book your appointment today!</div>

      <div className="flex flex-wrap text-sm mt-10 gap-4 justify-center">
        <div className="flex flex-col bg-white rounded-2xl w-80 px-8 py-10 ">
            <div className="flex text-xl gap-4 items-center"><SlLocationPin/> <span className='text-blue-400'>Winnipeg</span></div>
            <div className="mt-3">505, A.B.C Street, Winnipeg, Manitoba, Canada</div>
            <div className="mt-5"><b>Phone: </b> +00000000000</div>
            <div className="mt-1"><b>Email: </b> info@algorithmz.co</div>
        </div>
        <div className="flex flex-col bg-white rounded-2xl w-80 px-8 py-10 ">
            <div className="flex text-xl gap-4 items-center"><SlLocationPin/> <span className='text-blue-400'>Calgary</span></div>
            <div className="mt-3">505, A.B.C Street, Calgary, Manitoba, Canada</div>
            <div className="mt-5"><b>Phone: </b> +00000000000</div>
            <div className="mt-1"><b>Email: </b> info@algorithmz.co</div>
        </div>
        <div className="flex flex-col bg-white rounded-2xl w-80 px-8 py-10 ">
            <div className="flex text-xl gap-4 items-center"><SlLocationPin/> <span className='text-blue-400'>Toronto</span></div>
            <div className="mt-3">505, A.B.C Street, Toronto, Ontario, Canada</div>
            <div className="mt-5"><b>Phone: </b> +00000000000</div>
            <div className="mt-1"><b>Email: </b> info@algorithmz.co</div>
        </div>
      </div>

    </div>
  )
}

export default Locations