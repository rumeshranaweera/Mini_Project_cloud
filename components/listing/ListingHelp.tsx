"use client";

import { BiPhoneCall } from "react-icons/bi";

type Props = {};

function ListingHelp({}: Props) {
  return (
    <div className="mt-10 first:mt-0 pb-10 border-b border-solid border-gray-200 last:border-0 last:p-0">
      <div className="bg-[url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Beautiful-Full-HD-Images.jpg')] bg-cover bg-center rounded-lg">
        <div className="py-12 px-10 flex flex-col justify-between items-start 2xl:flex-row 2xl:items-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:opacity-90 before:bg-gradient-to-r before:from-red-600 before:to-orange-400 before:rounded-lg before:w-full before:h-full">
          <div className="relative text-white w-full 2xl:w-[calc(100%-300px)]">
            <div className="text-xl lg:text-3xl font-semibold">
              Need Help Booking?
            </div>
            <div className="mt-5 opacity-95 text-sm lg:text-base">
              Call our customer services team on the number below to speak to
              one of our advisors who will help you with all of your holiday
              needs.
            </div>
          </div>
          <div className="relative mr-2 transition-all hover:text-orange-500 flex items-center bg-white rounded-md px-4 py-3 lg:px-5 lg:py-4 mt-10 text-slate-600 font-medium tracking-wide 2xl:mt-0 cursor-pointer text-sm lg:text-base">
            <BiPhoneCall className="mr-2 text-orange-300 transition-all" />
            <p>+90 362 555 1919</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingHelp;
