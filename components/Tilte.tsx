import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Tilte() {
  return (
    <div className='p-10 flex w-screen  md:w-4/5 relative justify-between h-20 items-center'>
        <h2 className='m-2 text-2xl opacity-80 '>
            My Shop
        </h2>
       <AiOutlineShoppingCart className='m-2 hover:cursor-pointer h-8 w-8 transition-all hover:h-10 hover:w-10 '/>
    </div>
  )
}

export default Tilte