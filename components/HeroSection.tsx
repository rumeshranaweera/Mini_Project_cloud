"use client";

import { SafeUser } from "@/types";
// import Navbar from "./Navbar";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Link from "next/link";

type Props = {
  currentUser?: SafeUser | null;
};

function HeroSection({ currentUser }: Props) {
  return <HeroOne />;
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
          <div className="absolute top-44 right-40 -z-50">
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

export function HeroOne() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="relative w-full ">
      <div className="w-5/6 mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="flex items-center p-1 mt-8 space-x-2 bg-gray-100 rounded-full max-w-max">
            <div className="p-1 px-2 bg-white rounded-full">
              <p className="text-sm font-medium">50% off</p>
            </div>
            <p className="text-sm font-medium capitalize">explore now &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Embark on a Vibrant Journey
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Discover new horizons and experience the extraordinary! Enjoy
            exclusive offers and insider tips on unforgettable travel
            experiences.
          </p>
          <div className="flex items-start mt-8 space-x-2">
            <div className="flex mt-6 space-x-4">
              <Link
                href={"/destinations"}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Destinations
              </Link>
              <Link
                href={"/hotels"}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
              >
                Hotels
              </Link>
            </div>
          </div>
        </div>
        <div className="relative rounded-lg lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full p-4 lg:aspect-video"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-5">
              {[
                "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ].map((src, index) => (
                <CarouselItem
                  key={index}
                  className="relative pl-5 cursor-grab basis-full"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 aspect-square">
                        <Image
                          className="object-cover"
                          src={src}
                          alt={"image " + String(index)}
                          fill
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
