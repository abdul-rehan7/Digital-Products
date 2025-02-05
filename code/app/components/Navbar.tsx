"use client"; // Required for client-side interactivity

import Link from "next/link";
import React from "react";
import { IoIosCart } from "react-icons/io";
import { useCart } from "@/app/context/CartContext"; // Import the cart context
import { HiMiniHome } from "react-icons/hi2";
import { useSession } from "next-auth/react";
export default function Navbar() {
  const { cart } = useCart(); // Access the cart from context
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="fixed flex justify-between top-0 w-full text-black p-4 bg-[#ffffff]">
      <Link className="text-2xl" href={"/"}>
        <HiMiniHome />
      </Link>
      <span>
        <ul className="md:flex hidden text-black">
          <Link href={"/"} className="mx-2">
            Home
          </Link>
          <Link href={"/about"} className="mx-2">
            About
          </Link>
          <Link href={"/contact"} className="mx-2">
            Contact
          </Link>
        </ul>
      </span>
      <div className="relative flex  items-center space-x-3">

        <Link href={"/cart"}>
          <IoIosCart className="text-2xl mr-2" />
        </Link>
        {/* Display cart count if there are items */}
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-[0.5rem] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
}
