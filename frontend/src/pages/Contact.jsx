import React from 'react'

const Contact = () => {
  return (
    <div className='md:grid md:grid-cols-2 flex flex-col gap-5 mt-20'>

      <div className="flex flex-col justify-center mb-10 ">
        <p className='font-bold text-3xl mb-2 text-blue-400'>Have any questions?</p>
        <p>Fill in the form and we will reach out to you in 1-2 business days</p>
      </div>

      <div className="">

        <div className="border bg-white rounded-2xl flex p-[2vw]  items-center flex-col gap-1">
          <div className="text-center font-bold text-xl mb-5">Get In Touch</div>

          <div className="flex justify-center items-center mb-3 gap-[5vw]">
            <div className="flex flex-col gap-1">
              <label className='text-sm text-gray-500'>First Name</label>
              <input className='border px-4 rounded-xl py-3 md:w-[15vw] w-[35vw]'  type="text" />
            </div>
            <div className="flex flex-col gap-1">
              <label className='text-sm text-gray-500'>Last Name</label>
              <input className='border px-4 rounded-xl py-3 md:w-[15vw] w-[35vw]' type="text" />
            </div>
          </div>

          <div className="flex flex-col">
            <label className='place-self-start text-sm text-gray-500'>Phone</label>
            <input className='border px-4 rounded-xl py-3 mb-3 md:w-[35vw] w-[75vw]' type='number' />
          </div>
          <div className="flex flex-col">
            <label className='place-self-start text-sm text-gray-500'>Email</label>
            <input className='border px-4 rounded-xl py-3 mb-3  md:w-[35vw] w-[75vw]' type="email" />
          </div>
          <div className="flex flex-col">
            <label className='place-self-start text-sm text-gray-500'>Message</label>
            <textarea className='border px-4 rounded-xl py-3 mb-3  md:w-[35vw] w-[75vw] h-50' ></textarea>
          </div>

          <button className="mt-5 text-center hover:scale-108 transition-all duration-500 bg-blue-400 text-sm text-white rounded-full py-4 px-6 sm:w-full lg:w-55 cursor-pointer ">Send Message</button>
        
        </div>
        

      </div>

    </div>
  )
}

export default Contact