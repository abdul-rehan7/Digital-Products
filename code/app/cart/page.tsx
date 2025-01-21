"use client";

import React from "react";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4 py-[5rem]">
      <h1 className="md:text-xl text-base font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex md:text-lg text-[0.5rem] justify-between items-center border p-2 rounded mb-2"
            >
              <img src={item.imageUrl} alt={item.productName} className="w-10 md:w-16" />
              <p className="font-semibold">{item.productName}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 active:bg-blue-800 md:text-lg md:px-4 text-[.7rem] my-4 text-white p-2 rounded hover:bg-blue-600"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
