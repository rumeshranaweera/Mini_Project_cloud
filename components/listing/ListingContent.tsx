/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { randomXToY } from "@/hook/randomXToY";
import { safeDestinations, SafeUser } from "@/types";
import { month } from "@/utils/month";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import {
  BsCalendarCheck,
  BsCalendarWeek,
  BsFillPersonFill,
} from "react-icons/bs";
import { toast } from "react-toastify";

type Props = {
  destinations: safeDestinations & {
    user: SafeUser;
  };
  dummyData: number | null;
  currentUser?: SafeUser | null;
};

function ListingContent({ destinations, dummyData, currentUser }: Props) {
  const router = useRouter();
  const [dates, setDates] = useState({
    startDate: 1,
    endDate: 1,
    startMonth: "",
    endMonth: "",
    finalPrice: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      toast.error("You need To Login First");
    }

    setIsLoading(true);

    axios
      .post("/api/booking", {
        totalPrice: dates.finalPrice,
        destinationsId: destinations.id,
      })
      .then(() => {
        toast.success("Success!");
        router.push("/trips");
      })
      .catch(() => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [destinations.id, router, currentUser]);

  useEffect(() => {
    const startDate = randomXToY(1, 30);
    const endDate = randomXToY(1, 30);

    const totalPrice =
      (destinations.price + 10) * dummyData! -
      ((destinations.price + 10) * dummyData! * 10) / 100;

    const roundPrice = Math.round(totalPrice);

    const startMonth = month[Math.floor(Math.random() * month.length)];
    const endMonth = month[Math.floor(Math.random() * month.length)];

    setDates((prev) => ({
      ...prev,
      startDate: startDate,
      endDate: endDate,
      startMonth: startMonth,
      endMonth: endMonth,
      finalPrice: roundPrice,
    }));
  }, [destinations.id]);

  return (
    <div className="w-full lg:w-5/12 2xl:w-1/3 lg:ml-8 relative lg:sticky top-8 z-20">
      <div className="bg-white border border-solid border-gray-200 rounded-lg p-8 2xl:p-10 mt-0">
        <div className="flex justify-between items-center">
          <div className="text-2xl lg:text-3xl text-slate-600 font-bold">
            <span className="text-2xl lg:text-3xl text-slate-600 font-medium line-through opacity-30 mr-1">
              ${(destinations.price * 100) / 10}
            </span>{" "}
            ${destinations.price}
            <span>/night</span>
          </div>
          <div className="bg-red-100 text-red-500 font-bold text-xs lg:text-sm rounded-lg px-2 py-2">
            -10%
          </div>
        </div>
        <div className="bg-slate-50 rounded-lg border border-soli0d border-slate-200 p-4 mt-7 lg:mt-10">
          <div className="flex">
            <div className="w-1/2 flex items-center">
              <div className="mr-3 text-slate-300 relative top-1">
                <BsCalendarWeek size={20} />
              </div>
              <div>
                <div className="text-slate-600 font-semibold">
                  {dates.startDate} {dates.startMonth}
                </div>
                <div className="text-xs text-slate-400">Check in</div>
              </div>
            </div>
            <div className="w-1/2 flex items-center">
              <div className="mr-3 text-slate-300 relative top-1">
                <BsCalendarCheck size={20} />
              </div>
              <div>
                <div className="text-slate-600 font-semibold">
                  {dates.endDate} {dates.endMonth}
                </div>
                <div className="text-xs text-slate-400">Check out</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 relative before:content-[''] before:bg-slate-200 before:w-[calc(100%+2rem)] before:h-px before:absolute before:top-0 before:-left-4 text-sm lg:text-base">
            <div className="w-full flex items-center justify-center">
              <div className="mr-3 text-slate-300 relative top-1">
                <BsFillPersonFill size={20} />
              </div>
              <div>
                <div className="text-slate-600 font-semibold">
                  {destinations.guestCount} Guests
                </div>
                <div className="text-xs text-slate-400">Guests</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-10 text-sm lg:text-base">
          <div className="flex justify-between pb-3 last:pb-0 lg:last:pb-3">
            <div className="text-slate-600 font-semibold">
              ${destinations.price + 10} x {dummyData} nights
            </div>
            <div>${(destinations.price + 10) * dummyData!}</div>
          </div>
          <div className="flex justify-between pb-3 last:pb-0 lg:last:pb-3">
            <div className="text-slate-600 font-semibold">
              10% campaign discount
            </div>
            <div>-${((destinations.price + 10) * dummyData! * 10) / 100}</div>
          </div>
          <div className="flex justify-between pb-3 last:pb-0 lg:last:pb-3">
            <div className="text-slate-600 font-semibold">Service fee</div>
            <div>$0</div>
          </div>
          <div className="flex justify-between pb-3 last:pb-0 lg:last:pb-3 font-semibold pt-5 mt-2 border-t border-solid border-slate-200 text-slate-600">
            <div className="text-slate-600 font-semibold">Total</div>
            <div>
              $
              {(destinations.price + 10) * dummyData! -
                ((destinations.price + 10) * dummyData! * 10) / 100}
            </div>
          </div>
        </div>
        <div
          onClick={onCreateReservation}
          className="flex justify-center items-center fixed lg:relative bottom-0 left-0 p-5 py-3 lg:p-0 lg:py-0 w-full lg:w-auto mt-6 bg-white border-t border-solid border-slate-200 lg:border-none cursor-pointer"
        >
          <button
            disabled={isLoading}
            className="w-[calc(100%-56px)] cursor-pointer lg:w-[calc(100%-64px)] bg-sky-500 hover:bg-sky-600 px-5 h-10 lg:h-12 text-sm leading-5 rounded-full font-semibold text-white transition-all pointer-events-auto lg:pointer-events-none disabled:cursor-not-allowed"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingContent;
