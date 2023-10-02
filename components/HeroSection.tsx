"use client";

import { SafeUser } from "@/types";
import Navbar from "./Navbar";
import Image from "next/image";

type Props = {
  currentUser?: SafeUser | null;
};

function HeroSection({ currentUser }: Props) {
  return (
    <div className="py-6 px-60">
      <div>
        <img
          src="/blob-haikei.svg"
          className="absolute top-0 right-0 -z-50"
          alt=""
        />
      </div>
      <div className="flex items-center pt-48">
        <div className="w-[450px]">
          <div>
            <div className="grid gap-4">
              <div className="grid gap-4">
                <span className="text-2xl font-bold text-blue-800">
                  Best Destinations around the world
                </span>
                <span className="font-bold text-6xl text-purpleText z-50  [text-wrap:balance]">
                  Explore, Savor, and Embrace a Fresh and Vibrant Journey
                </span>
              </div>
              <div>
                <span className="text-lightPurpleText  [text-wrap:balance]">
                  The admiration for Barton's vanity in itself no longer exists
                  in the built wicket. It was more engrossed in preferred
                  sportsmen. They found it challenging to sell the park gate in
                  the western area.
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="/hotel"
                  className="px-4 py-2.5 rounded-md bg-[#0000FF] font-bold text-textWhite"
                >
                  Find out more
                </a>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-buttonColor text-textWhite">
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
            <Image
              width={765}
              height={764}
              src="/images/clipart302257.png"
              className="object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
