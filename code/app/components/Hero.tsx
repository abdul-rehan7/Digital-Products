import React from 'react'
import { MdArrowForward } from "react-icons/md";


export default function Hero() {
  return (
    <div className=' bg-[url(/hero.jpg)] overflow-hidden   bg-cover bg-center w-full h-[110vh] bg-black  flex items-center justify-start'>
       <div className="flex md:w-[60vw] flex-col md:m-12 m-4">
       <p className='md:text-[3rem] text-[5rem] md:m-0 mt-[3rem] text-white '>Transform Your Digital Presence with Stunning Designs</p>
       <p className=' md:w-[40vw] w-[85vw] md:text-base text-sm bottom-20 text-white'>Discover high-quality website templates, UI/UX kits, and design assets tailored for creators, businesses, and developers. From sleek website templates to versatile UI/UX kits, find everything you need to elevate your digital projects. Instant downloads. Effortless customization.</p>
       <div className="pl-4 flex items-center justify-between btn border-[1px] cursor-pointer hover:bg-white transition-colors hover:text-black border-white w-[10rem] rounded-full text-white  text-center my-4 p-2">Shop Now <MdArrowForward className='bg-white text-black text-3xl p-1   rounded-full' /></div>
       </div>

    </div>
  )
}
