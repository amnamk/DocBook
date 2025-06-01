import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-md text-gray-600">
          <p>
            Welcome to DocBook, your trusted companion for seamless doctor
            appointment scheduling. At DocBook, we recognize the challenges of
            finding the right healthcare provider and booking appointments
            without hassle. That is why we have built a platform designed to
            simplify the process, giving you quick and easy access to top
            medical professionals at your convenience.
          </p>
          <p>
            We are dedicated to improving the healthcare experience through
            innovation. By integrating advanced technology, Doc Book ensures a
            smooth, user-friendly experience that puts your health first.
            Whether you're scheduling a routine check-up or managing ongoing
            care, we are here to support you every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at DocBook is to revolutionize healthcare accessibility
            by bridging the gap between patients and doctors. We strive to make
            healthcare more efficient, transparent, and patient-centered,
            ensuring that quality medical care is just a few clicks away.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 gap-2">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#336ecc] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>SEAMLESS BOOKING:</b>
          <p>
            Easily schedule and manage your appointments in just a few taps.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#336ecc] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>TOP DOCTORS: </b>
          <p>
            Connect with a trusted network of healthcare professionals near you.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#336ecc] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>RELIABLE & SECURE:</b>
          <p>
            Your medical information is handled with the highest security and
            privacy standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
