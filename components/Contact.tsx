import Image from "next/image";
import React from "react";
import { FaStarHalf } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Contact() {
  return (
    <div className="px-2 py-2 mx-auto my-10 max-w-7xl lg:px-0">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
        <div className="w-full md:w-2/3 lg:w-1/2 lg:ml-20">
          <h2 className="text-3xl font-bold text-black">
            Sign up for our weekly newsletter
          </h2>
          <p className="mt-4 text-gray-600">
            Embark on a journey of discovery and delight! Join our newsletter to
            stay updated on exciting travel experiences, exclusive offers, and
            insider tips.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Trusted by Thousands of People
            </p>
            <div className="flex items-center mt-2">
              <div className="flex space-x-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
                <FaStarHalf className="w-5 h-5 text-yellow-400" />
              </div>
              <span className="inline-block ml-2">
                <span className="text-sm font-semibold text-gray-800">
                  4.8/5 . 3420 Reviews
                </span>
              </span>
            </div>
          </div>
          <form className="mt-6">
            <div className="flex flex-col w-full max-w-md space-y-4">
              <input
                className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-black/30 placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
              ></input>
              <button
                type="button"
                className="w-full px-3 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-2">
            <span className="text-sm text-gray-600">
              By signing up, you agree to our terms of service and privacy
              policy.
            </span>
          </p>
        </div>
        <div className="w-full mt-10 overflow-hidden md:w-2/3 lg:mt-0 lg:w-1/2">
          <Image
            width={640}
            height={658}
            className="object-cover w-full h-full duration-500 ease-in-out rounded-md hover:scale-105"
            src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=1464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Newsletter"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
