import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

interface ProductPageProps {
  params: {
    slug: string; // The dynamic slug value
  };
  searchParams?: Record<string, string>; // Optional search parameters
}
export default async function page(props: ProductPageProps) {
  const { slug } = props.params;
  console.log(slug);

  const data = await client.fetch(
    `*[id == ${slug}]{id,_id, productName, description, price, imageUrl}`
  );
  console.log("I AM THE DATA");
  console.log(data);

  if (!data || data.length === 0) {
    return <div>No product found</div>; // Handle empty results
  }

  return (
    <div className="p-8 py-[6rem] bg-gray-300">
      <div className="link overflow-hidden py-7 lg:px-4">

      <Link className="flex items-center"  href={"/"}><IoChevronBack/>&nbsp;Back</Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="bg-gray-100 lg:p-4 p-2 rounded-lg">
          <img src={data[0].imageUrl} alt="Error Loading Image" />
        </div>
        {/* Right Side */}
        <div className="p-4 lg:w-[50vw] w-[90vw] flex flex-col space-y-4">
          <p className="lg:text-4xl text-lg font-bold">{data[0].productName}</p>
          <p className="lg:text-xl text-sm leading-relaxed">{data[0].description}</p>
          <p className="text-xl text-green-600 font-bold leading-relaxed">
            Rs. {data[0].price}
          </p>
        </div>
      </div>
    </div>
  );
}
