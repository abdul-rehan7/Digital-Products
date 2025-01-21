"use client"; // Mark the component as a Client Component

import React, { useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

interface productItem {
  id: number;
  _id: string;
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ItemSection() {
  const [data, setData] = useState<productItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<productItem[]>([]);
  const { addToCart } = useCart();

  React.useEffect(() => {
    // Fetch products data on the client side
    const fetchData = async () => {
      try {
        const result: productItem[] = await client.fetch(
          '*[_type == "product"]'
        );
        console.log("Fetched Data:", result); // Log data for debugging
        setData(result);
        setFilteredProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error); // Log errors
      }
    };

    fetchData();
  }, []);
  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter products based on the query
    const filtered = data.filter((item) =>
      item.productName.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
 console.log(filteredProducts)
  return (
    <div className="md:py-[4rem] py-[1rem]">
      {/* Search Bar */}
      <div className="md:text-xl text-xs text-center p-2 md:p-6 flex justify-between">
        <p className="flex items-center">See What&apos;s New</p>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            className="md:w-[18rem] w-[45vw] p-2 border border-black rounded-sm text-xs md:text-sm"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 grid-cols-1 p-4 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item._id}
              className="flex flex-col space-y-2 card bg-gray-200 p-4 rounded-lg"
            >
              <img src={item.imageUrl} alt={item.productName} />
              <p className="font-semibold text-lg">{item.productName}</p>
              <p className="text-sm">{item.description}</p>
              <p className="text-green-500">Rs.&nbsp;{item.price}</p>
              <Link
                href={`/products/${item.id}`}
                className="border-[2px] text-blue-400 border-blue-400 p-2 w-full text-center rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white transition-all active:bg-blue-500"
              >
                View Product
              </Link>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() =>
                  addToCart({
                    id: item.id,
                    productName: item.productName,
                    price: item.price,
                    imageUrl: item.imageUrl,
                    quantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-red-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
