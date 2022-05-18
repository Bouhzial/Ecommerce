import React from 'react'
import { Products } from '../typing'
import {urlFor} from '../lib/client'
interface Props {
  product:Products
}

export default function Card({product}:Props) { 
  return (
    
    <div className='flex m-6 flex-col items-center justify-center cursor-pointer scale-100 transition-all hover:scale-110 '>
        <div className='h-56 w-44 bg-gray-300 rounded-xl  '>
        <img src={urlFor( product.image[0])} alt={`${product.name} image`}/>
        </div>
         <h1>{product.name}</h1>
         <h2>{product.price} $</h2>
    </div>
  )
}
