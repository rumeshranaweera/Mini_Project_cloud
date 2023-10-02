/* eslint-disable @next/next/no-img-element */
"use client";

import { exploreCountries } from "@/utils/exploreCountries";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

interface CountriesType {
  country: string;
  image: string;
  index: number;
}

function Countries({}: Props) {
  const ExploreCountry = ({ country, image, index }: CountriesType) => {
    return (
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="flex flex-col items-center justify-center"
      >
        <Link href={"/destinations"}>
          <img
            src={image}
            alt={country}
            className="mt-10 hover:cursor-pointer sm:mt-0"
          />
        </Link>

        <p className="mt-5 font-semibold text-center">{country}</p>
      </motion.div>
    );
  };

  return (
    <section className="pt-12">
      <div className="w-5/6 mx-auto mt-6">
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
                delayChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h1 className="text-4xl font-semibold text-secondary-100">
            Countries
          </h1>
          <p className="mt-2">
            Best Travel offers great deals for you. You can easily travel and{" "}
            <br />
            explore over 10+ European countries with one simple touch.
          </p>
          <div className="flex flex-col items-center justify-between py-10 sm:flex-row">
            {exploreCountries.map((country, index) => {
              return (
                <ExploreCountry
                  key={country.title}
                  country={country.title}
                  image={country.imgUrl}
                  index={index}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Countries;
