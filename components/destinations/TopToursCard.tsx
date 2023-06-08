/* eslint-disable @next/next/no-img-element */
"use client";

import useCountries from "@/hook/useCountries";
import { safeDestinations } from "@/types";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  tour: safeDestinations;
};

function TopToursCard({ tour }: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();
  const location = getByValue(tour.locationValue);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="rounded-lg group overflow-hidden relative flex-1 basis-[18rem] sm:cursor-pointer"
      onClick={() => router.push(`/destinations/${tour.id}`)}
    >
      <img
        src={tour.imageSrc}
        alt={tour.title}
        className="w-full h-[300px] object-cover group-hover:scale-125 transition-transform duration-300"
      />
      <span className="absolute top-2 left-2 px-4 py-[1px] bg-black/50 text-slate-200 rounded-full">
        {location?.region}, {location?.label}
      </span>
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t text-slate-100 from-black/80 to-transparent text-alte-100">
        <h1 className="font-semibold text-xl">{tour.title}</h1>
        <p className="mt-2">{tour.price} Popular Places</p>
      </div>
    </motion.div>
  );
}

export default TopToursCard;
