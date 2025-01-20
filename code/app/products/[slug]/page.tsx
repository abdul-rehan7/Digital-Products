import React from "react";
import { client } from "@/sanity/lib/client";

interface ProductPageProps {
  params: {
    slug: string; // The dynamic slug value
  };
  searchParams?: Record<string, string>; // Optional search parameters
}
export default async function page(props: ProductPageProps) {
  const { slug } = props.params;
  console.log(slug);

  const data = await client.fetch(`*[_type == "product" && id == ${slug}]`);
  console.log("I AM THE DATA");
  console.log(data);

  if (!data || data.length === 0) {
    return <div>No product found</div>;  // Handle empty results
  }

  return (
    <div className="p-8 py-[6rem] bg-gray-300">
      <div className="flex">
        {/* Left Side */}
        <div className="bg-gray-100 h-[40vw] w-[40vw]"></div>
        {/* Right Side */}
        <div className="p-4 w-[50vw] flex flex-col space-y-4">
          <p className="text-4xl font-bold">{data[0].productName}</p>
          <p className="text-xl leading-relaxed">{data[0].description}</p>
          <p className="text-xl text-green-600 font-bold leading-relaxed">
            Rs. {data[0].price}
          </p>
        </div>
      </div>
    </div>
  );
}
