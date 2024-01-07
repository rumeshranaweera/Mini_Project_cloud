/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { exploreCountries } from "@/utils/exploreCountries";
// import { fadeIn } from "@/utils/motion";
// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "react-bootstrap";
import { buttonVariants } from "./ui/button";

type Props = {};

interface CountriesType {
  country: string;
  image: string;
  index: number;
}

function Countries({}: Props) {
  //   const ExploreCountry = ({ country, image, index }: CountriesType) => {
  //     return (
  //       <motion.div
  //         variants={fadeIn("right", "spring", index * 0.5, 0.75)}
  //         className="flex flex-col items-center justify-center"
  //       >
  //         <Link href={"/destinations"}>
  //           <img
  //             src={image}
  //             alt={country}
  //             className="mt-10 hover:cursor-pointer sm:mt-0"
  //           />
  //         </Link>
  //
  //         <p className="mt-5 font-semibold text-center">{country}</p>
  //       </motion.div>
  //     );
  //   };

  return (
    <section className="pt-12">
      <div className="w-5/6 mx-auto mt-6">
        <div
        // variants={{
        //   hidden: {},
        //   show: {
        //     transition: {
        //       staggerChildren: 0.5,
        //       delayChildren: 0.5,
        //     },
        //   },
        // }}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        >
          <h1 className="text-4xl font-semibold text-secondary-100">
            Countries
          </h1>
          <p className="mt-2">
            Best Travel offers great deals for you. You can easily travel and{" "}
            <br />
            explore over 10+ European countries with one simple touch.
          </p>
          <div className="grid grid-cols-1 gap-4 py-10 place-items-center gird md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:flex-row place-content-center">
            {exploreCountries.map((country, index) => {
              return (
                // <ExploreCountry
                //   key={country.title}
                //   country={country.title}
                //   image={country.imgUrl}
                //   index={index}
                // />
                <CardOne
                  key={country.title}
                  country={country.title}
                  image={country.imgUrl}
                  description={country.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countries;

export function CardOne({
  country,
  image,
  description,
}: {
  country: string;
  image: string;
  description: string;
}) {
  return (
    <div className="relative h-[400px] w-[300px] shadow-lg shadow-black rounded-3xl overflow-auto">
      <Image
        fill
        src={image}
        alt={country}
        className="z-0 object-cover w-full h-full rounded-md brightness-150"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute text-left bottom-4 left-4">
        <h1 className="text-lg font-semibold text-white">{country}</h1>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
        <Link
          href={"/destinations"}
          className={cn(
            buttonVariants({ variant: "link" }),
            "inline-flex items-center mt-2 text-sm font-semibold text-white cursor-pointer px-0"
          )}
        >
          Explore &rarr;
        </Link>
      </div>
    </div>
  );
}
