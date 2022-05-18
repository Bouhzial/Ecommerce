import React from 'react'
import Image from 'next/image'

export default function Baner() {
  return (
    <div className='mb-6 relative  bg-gray-300 h-[500px] rounded-xl  w-[90%] md:w-4/5 '>
        <p className='m-3 text-xl'>Beats Solo Air</p>
        <h3 className=' m-3 font-bold text-7xl'>Summer Sale</h3>
        <h1 className='m-3 font-extrabold text-9xl text-white'>FINE</h1>
        <button className='px-[16px] py-[10px] bg-red-700 transition-colors hover:bg-red-800 text-white font-bold m-3 rounded-lg hover:cursor-pointer'>
            Shop Now
        </button>
        <div className='absolute right-20 bottom-2 w-40 flex flex-col text-cyan-800 '>
          <h3 className='font-bold text-xl'>Description</h3>
          <p className='text-base text-black'>this is the description</p>
        </div>
    </div>
  )
}
