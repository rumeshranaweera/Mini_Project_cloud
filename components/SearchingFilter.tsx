/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { formatISO } from "date-fns";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { BiBed, BiCar } from "react-icons/bi";
import { FaPlaneArrival } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

import Button from "./Button";
import Search from "./Search";
import Calendar from "./input/Calendar";
import Counter from "./input/Counter";
import CountrySelect, { CountrySelectValue } from "./input/CountrySelect";

type Props = {
  category: string;
};

function SearchingFilter({ category }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const [location, setLocation] = useState<CountrySelectValue>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("./input/Map"), {
        ssr: false,
      }),
    [location]
  );

  const onSubmit = useCallback(async () => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: `/${category.toLocaleLowerCase()}`,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [
    location,
    router,
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    params,
  ]);

  return (
    <div className="w-full p-4 bg-gray-50  max-w-[90%] mx-auto rounded-xl shadow-xl">
      <div className="flex-col py-3 border-0 gap-y-8 md:gap-y-0 flex justify-start items-center md:flex md:justify-between md:flex-row md:border-b dark:border-dark ">
        <div className="flex justify-start items-center gap-x-5">
          {category.toLocaleLowerCase() === "hotel" ? (
            <div className="flex items-center gap-x-2">
              <BiBed size={30} />
              <p className="text-2xl font-bold">Hotel</p>
            </div>
          ) : category.toLocaleLowerCase() === "flight" ? (
            <div className="flex items-center gap-x-2">
              <FaPlaneArrival />
              <p className="text-2xl font-bold">Flight</p>
            </div>
          ) : category.toLocaleLowerCase() === "car" ? (
            <div className="flex items-center gap-x-2">
              <BiCar />
              <p className="text-2xl font-bold">Car Rental</p>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <MdTravelExplore />
              <p className="text-2xl font-bold">Destinations</p>
            </div>
          )}
        </div>
        {/*  <Search /> */}
        <div className="flex items-center gap-x-2">
          <select className="bg-transparent border-0 outline-none text-slate-500">
            <option value="round-trip">Round Trip</option>
            <option value="round-trip">Holiday Trip</option>
            <option value="round-trip">Vacation</option>
            <option value="round-trip">Tour Trip</option>
          </select>
          <select className="bg-transparent border-0 outline-none text-slate-500">
            <option value="round-trip">1 Passenger</option>
            <option value="round-trip">2 Passengers</option>
            <option value="round-trip">3 Passengers</option>
            <option value="round-trip">4 Passengers</option>
            <option value="round-trip">5 Passengers</option>
            <option value="round-trip">Over 5 Passengers</option>
          </select>
        </div>
      </div>
      <div className="inline-block md:flex justify-between items-center gap-x-8">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-xl font-bold">Where do you wanna go?</p>
          <p className="font-light text-neutral-500 mt-2">
            Find the perfect location!
          </p>
          <div className="z-50">
            <CountrySelect
              value={location}
              onChange={(value) => setLocation(value as CountrySelectValue)}
            />
          </div>
          <div className="z-0 py-4">
            <Map center={location?.latlng} locationValue={location?.value} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xl font-bold">Where do you wanna go?</p>
            <p className="font-light text-neutral-500 mt-2">
              Find the perfect location!
            </p>
            <div>
              <Calendar
                value={dateRange}
                onChange={(value) => setDateRange(value.selection)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <p className="text-xl font-bold">Where do you wanna go?</p>
          <p className="font-light text-neutral-500 mt-2">
            Find the perfect location!
          </p>
          <Counter
            onChange={(value) => setGuestCount(value)}
            value={guestCount}
            title="Guests"
            subtitle="How many guests are coming?"
          />
          <hr />
          {category.toLocaleLowerCase() !== "destinations" && (
            <>
              <Counter
                onChange={(value) => setRoomCount(value)}
                value={roomCount}
                title="Rooms"
                subtitle="How many rooms do you need?"
              />
              <hr />
              <Counter
                onChange={(value) => {
                  setBathroomCount(value);
                }}
                value={bathroomCount}
                title="Bathrooms"
                subtitle="How many bahtrooms do you need?"
              />
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <Button disabled={false} label="Search" onClick={onSubmit} />
        <Button
          disabled={false}
          label="Clear"
          outline
          onClick={() => router.push(`/${category.toLocaleLowerCase()}`)}
        />
      </div>
    </div>
  );
}

export default SearchingFilter;
