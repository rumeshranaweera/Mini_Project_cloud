/* eslint-disable @next/next/no-img-element */
"use client";

import { randomBoolean, randomXToY } from "@/hook/randomXToY";
import useCountries from "@/hook/useCountries";
import { SafeUser, safeListing } from "@/types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiGlobe, BiPhone } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

type Props = {
  data: safeListing;
  currentUser?: SafeUser | null;
};

function ExploreCard({ data, currentUser }: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();
  const [number, setNumber] = useState("");

  const location = getByValue(data.locationValue);
  const website = `http://localhost:3000/listings/${data.id}`;

  useEffect(() => {
    const first = randomXToY(10, 99);
    const second = randomXToY(10001, 99999);
    setNumber(` +${first} ${second * second}`);
  }, [data.id]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="hover:shadow-light-2 rounded-lg p-3 bg-gray-50 border sm:cursor-pointer group flex-shrink-0 w-full transition-shadow"
      onClick={() => router.push(`/listings/${data.id}`)}
    >
      <div className="overflow-hidden rounded-lg ">
        <img
          src={data.imageSrc}
          alt="img"
          className="object-cover h-full w-full group-hover:scale-110 transition"
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <p className="group-hover:text-primary transition-colors">
            <h1 className="font-bold text-xl">
              {location?.region}, {location?.label}
            </h1>
          </p>
          <div className="flex justify-start items-center gap-x-2">
            <FaStar className="text-secondaryYellow" />
            <p>
              0.4
              <span className="opacity-70">(05)</span>
            </p>
          </div>
        </div>
        <p className="text-sm">{data.category}</p>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <BiPhone />
            <p>{number}</p>
          </div>
          <span
            className={`px-2 py-[2px] text-sm ${
              randomBoolean
                ? "text-green-500 bg-green-500/20"
                : "text-secondaryRed bg-secondaryRed/20"
            }`}
          >
            {randomBoolean ? "Open Now" : "Close Now"}
          </span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="mt-3 flex items-center gap-x-2">
            <BiGlobe />
            <p className="text-secondaryBlue !opacity-100 hover:underline">
              {website?.length > 20 ? `${website?.slice(0, 20)}...` : website}
            </p>
          </div>
          <button className="px-4 rounded-lg transition-a sm:cursor-pointer capitalize flex-shrink-0 !py-1 border border-primary text-primary hover:bg-primary hover:text-white">
            Book
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ExploreCard;
