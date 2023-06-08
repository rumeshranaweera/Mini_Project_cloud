/* eslint-disable @next/next/no-img-element */
"use client";

import { trendingCities } from "@/utils/dummyData";
import { FaStar } from "react-icons/fa";

type Props = {};

function TrendingCities({}: Props) {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="font-bold text-2xl capitalize">trending cities</h1>
        <p className="mt-2">The most searched for cities on TipGuide</p>
      </div>
      <div className="px-14 items-center">
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {trendingCities.map(
            ({ id, name, rating, image, number_of_reviews, price }) => (
              <div
                key={id}
                className="p-3 hover:bg-gray-50 !opacity-100 rounded-lg flex-1 basis-[20rem]"
              >
                <div className="flex justify-start items-center gap-x-6">
                  <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <div className="flex justify-start items-center gap-x-2">
                      <FaStar className="text-secondaryYellow" />
                      <p>
                        {rating}
                        <span className="opacity-70">
                          ({number_of_reviews})
                        </span>
                      </p>
                    </div>
                    <h1>
                      <span className="text-xl font-bold">${price}</span>
                      <span className="text-sm opacity-80">/night</span>
                    </h1>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default TrendingCities;
