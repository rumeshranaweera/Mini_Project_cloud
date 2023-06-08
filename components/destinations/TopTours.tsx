"use client";

import { SafeUser, safeDestinations } from "@/types";
import TopToursCard from "./TopToursCard";

type Props = {
  currentUser?: SafeUser | null;
  destinations: safeDestinations[];
};

function TopTours({ destinations, currentUser }: Props) {
  return (
    <div className="pt-10 pb-16 px-12">
      <h1 className="font-bold text-2xl capitalize mb-3">top tours</h1>
      <p>Keep calm & travek on</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
        {destinations.map((tour) => (
          <TopToursCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export default TopTours;
