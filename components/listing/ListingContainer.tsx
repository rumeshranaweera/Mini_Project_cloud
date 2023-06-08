"use client";

import { randomXToY } from "@/hook/randomXToY";
import { SafeUser, safeDestinations } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

import ListingContent from "./ListingContent";
import ListingHead from "./ListingHead";
import ListingHelp from "./ListingHelp";
import ListingItinerary from "./ListingItinerary";
import ListingReviews from "./ListingReviews";

type Props = {
  currentUser?: SafeUser | null;
  destinations: safeDestinations & {
    user: SafeUser;
  };
};

function ListingContainer({ currentUser, destinations }: Props) {
  const [dummyData, setDummyData] = useState<number | null>(null);

  useEffect(() => {
    const day = randomXToY(6, 30);

    setDummyData(day);
  }, [destinations.id]);

  return (
    <div className="px-5">
      <ListingHead destinations={destinations} dummyData={dummyData} />
      <div className="flex flex-wrap lg:flex-nowrap items-start tour-wrapper">
        <div className="w-full lg:w-7/12 2xl:w-2/3">
          <div className="-mb-4 lg:mb-12 overflow-hidden rounded-lg">
            <div className="aspect-square md:aspect-video relative before:content-[''] before:absolute before:top-0 before:left-0 before:opacity-50 before:bg-gradient-to-r before:from-red-600 before:to-orange-400 before:rounded-lg before:w-full before:h-full">
              <Image
                src={destinations.imageSrc}
                alt="image"
                fill
                className="object-cover bg-cover bg-center"
              />
            </div>
          </div>
          <div className="tour-content-block">
            <div className="tour-description">{destinations.description}</div>
          </div>
          <ListingItinerary destinations={destinations} />
          <hr />
          <ListingReviews />
          <hr />
          <ListingHelp />
        </div>
        <ListingContent
          destinations={destinations}
          dummyData={dummyData}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}

export default ListingContainer;
