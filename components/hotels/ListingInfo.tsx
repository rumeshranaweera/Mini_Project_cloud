"use client";

import useCountries from "@/hook/useCountries";
import { SafeUser } from "@/types";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";

import Avatar from "../Avatar";
import ListingCategory from "../listing/ListingCategory";
import Offers from "./Offers";
import Sleep from "./Sleep";
import { Suspense } from "react";
import Map from "../input/Map";

// const Map = dynamic(() => import("../input/Map"), {
//   ssr: false,
// });

type Props = {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
};

function ListingInfo({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}: Props) {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold ">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} userName={user?.name} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <p>{guestCount} guests</p>
          <p>{roomCount} rooms</p>
          <p>{bathroomCount} bathrooms</p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-[#FF5A5F]">
          air<span className="text-black">cover</span>
        </p>
        <p className="pt-3 text-neutral-500">
          Every booking includes free protection from Host cancellations,
          listing inaccuracies, and other issues like trouble checking in.
        </p>
        <p className="pt-3 font-bold text-black underline cursor-pointer">
          Learn more
        </p>
      </div>
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      <Sleep />
      <hr />
      <Offers />
      <hr />
      <p className="text-xl font-semibold">{`Where you’ll be`}</p>
      <Suspense fallback={<div>Loading...</div>}>
        <Map center={coordinates} locationValue={locationValue} />
      </Suspense>
    </div>
  );
}

export default ListingInfo;
