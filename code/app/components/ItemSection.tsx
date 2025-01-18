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
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
        </div>
        <div className="flex flex-col space-y-2 card bg-gray-200 p-2 rounded-lg ">
          <img src="/dummy.png" alt="" />
          <p className="font-semibold text-lg">Title</p>
          <p>description</p>
          <p className="text-green-500">$500</p>
        </div>
      </div>
    </div>
  );
}
