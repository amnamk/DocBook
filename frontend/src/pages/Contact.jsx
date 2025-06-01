import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[400px] "
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">OUR OFFICE</p>
          <p className=" text-gray-500">
            Ilidža <br /> Sarajevo, BiH
          </p>
          <p className=" text-gray-500">
            Tel: +387 33 123 456 <br /> Email: info@docbook.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
