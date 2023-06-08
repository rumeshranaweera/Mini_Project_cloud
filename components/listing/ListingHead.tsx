"use client";

import { randomXToY } from "@/hook/randomXToY";
import useCountries from "@/hook/useCountries";
import { safeDestinations, SafeUser } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  destinations: safeDestinations & {
    user: SafeUser;
  };
  dummyData: number | null;
};

function ListingHead({ destinations, dummyData: dayCount }: Props) {
  const { getByValue } = useCountries();
  const location = getByValue(destinations.locationValue);
  const [dummyData, setDummyData] = useState({
    rating: "",
    review: "",
  });

  useEffect(() => {
    const rating = randomXToY(1, 5);
    const reviews = randomXToY(10, 50);

    setDummyData((prev) => ({
      ...prev,
      rating: rating.toString(),
      review: reviews.toString(),
    }));
  }, [destinations.id]);

  return (
    <div className="my-6 lg:my-12 lg:flex lg:justify-between lg:items-center">
      <div className="tour-head-left">
        <div className="text-xl lg:text-3xl text-slate-600 font-semibold">
          {destinations.title}
        </div>
        <div className="text-sm mt-4 flex text-slate-400">
          <div className="pr-6 relative first:before:hidden before:content-['•'] before:absolute before:text-slate-400 before:-top-[1px] before:-left-3.5 last:hidden lg:last:block text-xs lg:text-base">
            Start and end in{" "}
            <span>
              {location?.region}, {location?.label}
            </span>
          </div>
          <div className="pr-6 relative first:before:hidden before:content-['•'] before:absolute before:text-slate-400 before:-top-[1px] before:-left-3.5 last:hidden lg:last:block text-xs lg:text-base">
            <span>{dayCount}</span> days
          </div>
          <div className="pr-6 relative first:before:hidden before:content-['•'] before:absolute before:text-slate-400 before:-top-[1px] before:-left-3.5 last:hidden lg:last:block text-xs lg:text-base">
            <span className="text-yellow-400 text-sm h-[17px] leading-[17px] relative top-[1px]">
              {" "}
              STAR{" "}
            </span>
            <span>{dummyData.rating}</span> ({dummyData.review} reviews)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingHead;
