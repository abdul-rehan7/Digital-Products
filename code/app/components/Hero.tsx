import React from 'react'
import { MdArrowForward } from "react-icons/md";


export default function Hero() {
  return (
    <div className=' bg-[url(/hero.jpg)] bg-cover bg-center h-[110vh] bg-black  flex items-center justify-center'>
       <div className="flex flex-col">
       <p className='hero-text playwrite-in-font'>Simplify.</p>
       <p className=' w-[40vw] bottom-20 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum maxime porro consequuntur itaque molestias reprehenderit! At nulla architecto praesentium incidunt deserunt reiciendis sit unde possimus commodi? Tenetur, cum.</p>
       <div className="pl-4 flex items-center justify-between btn border-[1px] cursor-pointer hover:bg-white transition-colors hover:text-black border-white w-[10rem] rounded-full text-white  text-center my-4 p-2">Shop Now <MdArrowForward className='bg-white text-black text-3xl p-1   rounded-full' /></div>
       </div>

    </div>
  )
}
