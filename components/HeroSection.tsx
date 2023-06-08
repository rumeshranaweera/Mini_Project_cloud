"use client";

import { SafeUser } from "@/types";
import Navbar from "./Navbar";

type Props = {
  currentUser?: SafeUser | null;
};

function HeroSection({ currentUser }: Props) {
  return (
    <div className="px-60 py-6">
      <div>
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
                <span className="text-redText font-bold text-2xl">
                  Best Destinations around the world
                </span>
                <span className="font-bold text-6xl text-purpleText z-50">
                  Travel, enjoy and live a new and full life
                </span>
                <img
                  src="/images/Decore_line.png"
                  className="absolute top-[400px] left-[430px] h-[12px] w-[300px]"
                  alt=""
                />
              </div>
              <div>
                <span className="text-lightPurpleText">
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="px-4 py-2.5 rounded-md bg-yellowColor text-textWhite"
                >
                  Find out more
                </a>
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
          <div className="absolute top-20 right-40">
            <img src="/images/Traveller.png" className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
