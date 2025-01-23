import React from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
interface ProductPageProps {
  params: {
    slug: string; // The dynamic slug value
  };
  searchParams?: Record<string, string>; // Optional search parameters
}
export default async function page(props: ProductPageProps) {
  const { slug } = props.params;
  console.log(slug);

  const data = await client.fetch(`*[id == ${slug}]`);
  console.log("I AM THE DATA");
  console.log(data);

  if (!data || data.length === 0) {
    return <div>No product found</div>; // Handle empty results
  }

  return (
    <div className="p-8 py-[6rem] bg-gray-300">
      <div className="link overflow-hidden py-7 lg:px-4">
        <Link className="flex items-center" href={"/"}>
          <IoChevronBack />
          &nbsp;Back
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="bg-gray-100 md:w-[55vw] md:h-auto lg:p-3 p-2 rounded-lg ">
          <img src={data[0].imageUrl} alt="Error Loading Image" />
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-evenly">
          <div className="p-4 lg:w-[50vw] w-[90vw] flex flex-col space-y-4">
            <p className="lg:text-4xl text-lg font-bold">
              {data[0].productName}
            </p>
            <p className="lg:text-xl text-sm leading-relaxed">
              {data[0].description}
            </p>
            <p className="text-xl text-green-600 font-bold leading-relaxed">
              Rs. {data[0].price}
            </p>
            <p className="text-xl text-yellow-500 font-bold leading-relaxed inline-flex">
              {Array(5)
                .fill(null)
                .map((_, index) =>
                  index < data[0].rating ? (
                    <FaStar key={index} />
                  ) : (
                    <FaRegStar className="font-bold text-xl" key={index} />
                  )
                )}
            </p>
          </div>
          <div className="p-4">
            <button className="p-2 bg-blue-400 w-[10rem] text-black rounded-sm active:bg-blue-500">
              {" "}
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
