"use client";

import { BiBus, BiHotel } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiWavyItinerary } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdOutlineTravelExplore } from "react-icons/md";

const customerReviews = [
  {
    label: "Itinerary",
    icon: GiWavyItinerary,
    rate: "4.8",
    description: "Excellent",
  },
  {
    label: "Guide",
    icon: BsFillPersonLinesFill,
    rate: "4.9",
    description: "Excellent",
  },
  {
    label: "Transport",
    icon: BiBus,
    rate: "4.9",
    description: "Excellent",
  },
  {
    label: "Accommodation",
    icon: BiHotel,
    rate: "4.5",
    description: "Excellent",
  },
  {
    label: "Food",
    icon: ImSpoonKnife,
    rate: "4.7",
    description: "Excellent",
  },
  {
    label: "Tour Operator",
    icon: MdOutlineTravelExplore,
    rate: "4.6",
    description: "Travel Walk",
  },
];

type Props = {};

function ListingReviews({}: Props) {
  return (
    <div className="mt-10 first:mt-0 pb-10 border-b border-solid border-gray-200 last:border-0 last:p-0">
      <div className="text-lg lg:text-2xl text-slate-600 font-semibold mb-6">
        Customer Reviews
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-3/5 xl:mr-8 bg-white border border-solid border-gray-200 rounded-t-lg xl:rounded-lg">
          {customerReviews.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-solid border-gray-200 last:border-0 py-4 px-6 text-slate-600"
            >
              <div className="flex items-center">
                <div className="mr-4 relative top-0.5 text-3xl text-sky-500">
                  <item.icon size={30} />
                </div>
                <div>
                  <div className="font-semibold text-sm lg:text-base">
                    {item.label}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-400">
                    {item.description}
                  </div>
                </div>
              </div>
              <div className="font-semibold w-10 h-10 lg:w-12 lg:h-12 leading-[2.5rem] lg:leading-[3rem] rounded-full bg-slate-200 text-gray-500 text-center text-sm lg:text-base">
                {item.rate}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full xl:w-2/5 relative flex justify-center items-center text-center p-10 text-slate-500 border border-t-0 border-solid border-slate-200 xl:border-t-[1px] before:content-['\e885'] before:font-material before:absolute before:bottom-0 before:right-0 before:text-[250px] before:opacity-[0.05] before:w-full before:h-full before:flex before:justify-center before:items-center before:text-center before:pointer-events-none after:content-['\e838'] after:font-material after:absolute after:bottom-0 after:right-0 after:text-[250px] after:opacity-[0.075] after:w-full after:h-full after:flex after:justify-center after:items-center after:text-center after:pointer-events-none after:animate-ping overflow-hidden rounded-b-lg xl:rounded-lg bg-white xl:bg-transparent">
          <div className="tour-reviews-content">
            <div className="text-xl lg:text-2xl font-semibold opacity-40">
              Overall Rating
            </div>
            <div className="text-2xl lg:text-4xl font-semibold mt-5">
              Excellent
            </div>
            <div className="text-4xl lg:text-6xl font-semibold mt-6">4.7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingReviews;
