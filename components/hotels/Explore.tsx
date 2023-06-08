"use client";

import { SafeUser, safeListing } from "@/types";
import ExploreCard from "./ExploreCard";

type Props = {
  listing: safeListing[];
  currentUser?: SafeUser | null;
};

function Explore({ listing, currentUser }: Props) {
  return (
    <div className="px-8">
      <div className="flex-center-between mb-4">
        <div>
          <h1 className="font-bold text-2xl capitalize">
            the best hotels around the world
          </h1>
          <p className="mt-2">
            exquiste and stunning hotels to spend your long night
          </p>
        </div>
      </div>
      <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
        {listing.map((list) => {
          return (
            <ExploreCard key={list.id} data={list} currentUser={currentUser} />
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
