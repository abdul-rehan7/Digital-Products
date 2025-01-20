import React from 'react'
import { IoIosCart } from "react-icons/io";

export default function Navbar() {
  return (
    <div className='fixed flex justify-between top-0 w-full text-white p-4'>
      <span>Web logo</span>
      <span>
        <ul className='md:flex hidden'>
          <li className='mx-2'>Home</li>
          <li className='mx-2'>About</li>
          <li className='mx-2'>Contact</li>
          <li className='mx-2'>Contact</li>
          <li className='mx-2'>Contact</li>
        </ul>
      </span>
      <span><IoIosCart className='text-xl'/></span>
    </div>
  )
}
