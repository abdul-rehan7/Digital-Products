import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function ItemSection() {

  const data = await client.fetch('*[_type == "product"]');
  // Log item.image to check its structure
  console.log(data.image)
  return (
    <div className="py-[4rem]">
      <div className="text-xl text-center p-6 flex justify-between">
        <p>See What&apos;s New</p>
        <p className="underline">Shop Now</p>
      </div>
      <div className="grid grid-cols-4 p-4 gap-4">
        {data.map((item: any) => (
         
          <div key={item._id} className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg">
            <img src={`${item.image}`} alt="Error Loading Image" />
            <p className="font-semibold text-lg">{item.productName}</p>
            <p>{item.description}</p>
            
            
            <p className="text-green-500">{item.price}</p>
            <div className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all active:bg-blue-500">
              Order Now
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
