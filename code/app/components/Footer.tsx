import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="pb-[6rem]">
        <div className=" h-[40vh] flex items-center justify-end px-12 ">
          <p className=" flex md:text-7xl text-xl border-b-2 items-center border-black p-4">
            Subscribe Us&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <MdArrowOutward className="text-white bg-black md:p-3 p-1 rounded-full" />
          </p>
        </div>
        <div className="flex justify-around p-2">
          <div className="flex flex-col">
            <h4 className="font-semibold py-2">Company</h4>
            <a href="">About</a>
            <a href="">FAQ</a>
            <a href="">Collection</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col">
            <h4 className="font-semibold py-2">Legal</h4>
            <a href="">Shipping policy</a>
            <a href="">Returns & Exchange</a>
            <a href="">Terms of Use</a>
            <a href="">Support</a>
          </div>
        </div>
      </div>
      <div className="bg-[url('/last-img.jpg')] bg-cover bg-center h-[30vh] flex items-center justify-center">
        
      </div>
    </>
  );
}
