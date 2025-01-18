import React from "react";

export default function ItemSection() {
  return (
    <div>
      <div className="text-xl  text-center p-6 flex justify-between">
        <p>See What&apos;s New</p>
        <p className="underline">Shop Now</p>
      </div>
      <div className="grid grid-cols-4 p-4 gap-4">
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
          <div className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400  hover:text-white transition-all active:bg-blue-500">Order Now</div>
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
           <div className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400  hover:text-white transition-all active:bg-blue-500">Order Now</div>
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
           <div className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400  hover:text-white transition-all active:bg-blue-500">Order Now</div>
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
           <div className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400  hover:text-white transition-all active:bg-blue-500">Order Now</div>
        </div>
      </div>
    </div>
  );
}
