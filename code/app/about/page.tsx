import React from "react";

export default function page() {
  return (
    <div className="">
      <div className="">
        <img className="lg:h-[70vh] h-[50vh] w-full" src="/hero.jpg" alt="" />
      </div>
      <div className="flex lg:flex-row flex-col ">
        <div className=" bg-gray-100 p-8 text-justify lg  lg:p-6 space-y-6 text-lg lg:text-xl flex flex-col items-center lg:text-left justify-center">
          <h2 className="text-4xl font-bold">Who We Are?</h2>
          <p>
            At Simplify, we are passionate about providing high-quality digital
            products designed to help you excel. From software tools to creative
            assets, our curated selection empowers creators, professionals, and
            businesses to reach new heights. We are dedicated to delivering
            innovative and reliable digital products that enhance productivity
            and creativity
          </p>
        </div>
        <div className=" bg-gray-100 p-8 text-justify lg  lg:p-6 space-y-6 text-lg lg:text-xl flex flex-col items-center lg:text-left justify-center">
          <h2 className="text-4xl font-bold">Our Mission </h2>
          <p>
            Our mission is simple: to offer a platform where you can find
            top-notch digital products that meet your needs and boost your
            success. We believe in making digital content easy to access,
            affordable, and, most importantly, valuable
          </p>
        </div>
      </div>
    </div>
  );
}
