/* eslint-disable @next/next/no-img-element */
"use client";

import { bestPlaces } from "@/utils/dummyData";
import { motion } from "framer-motion";

type Props = {};

function BestPlaces({}: Props) {
  return (
    <div className="py-16">
      <div className="text-center">
        <h1 className="font-bold text-2xl capitalize">
          search a best place in the world
        </h1>
        <p className="mt-4">
          {`Whether you're looking for places for a vacation. we are here to guide
          you about the details you need to check in and ease your trips in
          advance`}
        </p>
      </div>
      <div className="mt-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:flex 2xl:flex-wrap px-12">
        {bestPlaces.map(({ id, name, image, number_of_destinations }) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={id}
            className="rounded-lg group sm:cursor-pointer 2xl:flex-1 2xl:basis-[16rem] p-3 border dark:border-dark hover:bg-white hover:shadow-light transition-color transition-shadow dark:hover:bg-card-dark"
          >
            <img
              src={image}
              alt={name}
              className="rounded-lg w-14 h-14 object-cover"
            />
            <div className="mt-2">
              <div className="group-hover:text-primary transition-all">
                <h1 className="text-lg font-semibold capitalize">{name}</h1>
              </div>
              <p className="mt-2">{number_of_destinations} Destinations</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BestPlaces;
