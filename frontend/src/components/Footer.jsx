import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            At DocBook, we strive to make healthcare more accessible by
            providing a seamless platform for booking doctor appointments.
            Whether you're looking for a consultation with a general physician
            or a specialist, we connect you with trusted healthcare
            professionals in just a few clicks.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>info@docbook.com</li>
            <li>+387 33 123 456</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ DocBook- All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
