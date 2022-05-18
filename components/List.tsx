import React from 'react'
import Card from './Card'
import { Products } from '../typing'
interface Props {
  Products:Products[]
}
export default function List({Products}:Props) {
  return (
    <div className={`grid grid-flow-row grid-cols-2  md:grid-cols-4`}>
        {Products.map((product)=>(
          <Card product={product}/>
        ))}
    </div>
  )
}
