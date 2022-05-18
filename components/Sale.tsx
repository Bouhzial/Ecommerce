import React from 'react'

export default function Sale() {
  return (
    <div className='flex bg-red-700 h-[500px] rounded-xl  w-[90%] md:w-4/5 justify-between '>
      <div className='m-2'>
        <h2>30% OFF</h2>
          <h1 className='font-bold text-white text-7xl'>SALE</h1>
          <h3>17 May to 01 June</h3>
      </div>
      <div className='m-2'>
        <h2>Name</h2>
        <h1 className='mx-7 font-bold text-white text-7xl'>99.99$</h1>
        <button className='px-[16px] py-[10px] bg-white transition-colors hover:bg-gray-200 text-red-700 font-bold m-3 rounded-lg hover:cursor-pointer'>
            Shop Now
        </button>
      </div>
    </div>
)
}
