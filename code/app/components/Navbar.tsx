import React from 'react'

export default function Navbar() {
  return (
    <div className='fixed flex justify-between top-0 w-full text-white p-4'>
      <span>Web logo</span>
      <span>
        <ul className='flex'>
          <li className='mx-2'>Home</li>
          <li className='mx-2'>About</li>
          <li className='mx-2'>Contact</li>
          <li className='mx-2'>Contact</li>
          <li className='mx-2'>Contact</li>
        </ul>
      </span>
      <span>Cart Icon</span>
    </div>
  )
}
