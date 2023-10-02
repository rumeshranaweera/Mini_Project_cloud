"use client";

import Navbar from "../Navbar";

type Props = {};

function HotelHeroSection({}: Props) {
  return (
    <div className="px-64 py-6">
      <div>
        <Navbar />
        <img
          src="/images/Decore.png"
          className="absolute right-0 top-0"
          alt=""
        />
      </div>
      <div className="pt-60 flex items-center">
        <div className="w-[450px]">
          <div>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <span className="text-redText font-bold text-2xl z-50">
                  Best Destinations around the world
                </span>
                <span className="font-bold text-6xl text-purpleText z-50">
                  Explore, Savor, and Embrace a Fresh and Vibrant Journey
                </span>
                <img
                  src="/images/Decore_line.png"
                  className="absolute top-[400px] left-[430px] h-[12px] w-[300px]"
                  alt=""
                />
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full  bg-buttonColor p-2  text-textWhite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="absolute top-44 right-40">
            <img
              src="https://dl.dropboxusercontent.com/s/u7h1xwdut6l5nil/5731040.png"
              className="w-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelHeroSection;
