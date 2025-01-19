import React from 'react'
import { MdArrowForward } from "react-icons/md";


export default function Hero() {
  return (
    <div className=' bg-[url(/hero.jpg)] overflow-hidden  bg-cover bg-center w-[100vw] h-[110vh] bg-black  flex items-center justify-center'>
       <div className="flex flex-col">
       <p className='md:text-[20rem] text-[5rem] md:m-0 mt-[3rem] text-white playwrite-in-font'>Simplify.</p>
       <p className=' md:w-[40vw] w-[85vw] md:text-base text-sm bottom-20 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi voluptatum maxime porro consequuntur itaque molestias reprehenderit! At nulla architecto praesentium incidunt deserunt reiciendis sit unde possimus commodi? Tenetur, cum.</p>
       <div className="pl-4 flex items-center justify-between btn border-[1px] cursor-pointer hover:bg-white transition-colors hover:text-black border-white w-[10rem] rounded-full text-white  text-center my-4 p-2">Shop Now <MdArrowForward className='bg-white text-black text-3xl p-1   rounded-full' /></div>
       </div>

    </div>
  )
}
