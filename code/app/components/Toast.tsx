import React from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Toast() {
  const notify = () =>
    toast.success("Item Added to Cart", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div>
      <button
        className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600"
        onClick={notify}
      >
        Add to Cart
      </button>
      <ToastContainer
        position="top-left"
        autoClose={0}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
