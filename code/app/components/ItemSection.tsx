import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface productItem {
  id: number;
  _id: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default async function ItemSection() {
  // Fetch both products and images in one query
  const data = await client.fetch('*[_type == "product"]{id,_id, productName, description, price, imageUrl}');

  console.log(data); // Log to check the structure of the fetched data

  return (
    <div className="md:py-[4rem] py-[1rem]">
      <div className="md:text-xl text-xs text-center p-6 flex justify-between">
        <p>See What&apos;s New</p>
        <p className="underline">Shop Now</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 p-4 gap-4">
        {data.map((item: productItem) => (
          <div
            key={item._id}
            className="flex flex-col space-y-2 card bg-gray-200 p-4 rounded-lg"
          >
            {/* Use the imageUrl directly from fetched data */}
            <img src={item.imageUrl} alt="Error Loading Image" />
            <p className="font-semibold text-lg">{item.productName}</p>
            <p className="text-sm">{item.description}</p>
            <p className="text-green-500">Rs.&nbsp;{item.price}</p>
            <Link
              href={`/products/${item.id}`}
              className="border-[2px] text-blue-400 border-blue-400 p-2 w-[6.5rem] rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all active:bg-blue-500"
            >
              Order Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
