import Link from 'next/link'
import React from 'react'
import {AiOutlineInstagram,AiFillGithub} from 'react-icons/ai'

export default function Fotter() {
  return (
    <div className='mt-4 flex flex-col'>
        <div className='text-xl'>Bouhzila Ahmed </div>
        <div className='flex flex-row justify-center gap-3'>
          <Link href="https://github.com/Bouhzial/">
            <a><AiFillGithub className='h-8 w-8'/></a>
          </Link>
          <Link href="https://www.instagram.com/_ahmed_.bh/?hl=en">
            <a>
              <AiOutlineInstagram className='h-8 w-8'/>
            </a>
          </Link>
        </div>
    </div>
  )
}
