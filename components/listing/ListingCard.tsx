"use client";

import useCountries from "@/hook/useCountries";
import { safeListing, SafeReservation, SafeUser } from "@/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";

import Button from "../Button";
import HeartButton from "../HeartButton";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

type Props = {
  data: safeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();
  const [isLoadingPay, setIsLoadingPay] = useState(false);

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
  );
  const createCheckoutSession = async () => {
    setIsLoadingPay(true);
    const stripe = await stripePromise;

    const checkoutSession = await axios
      .post("api/stripe-checkout-session", {
        data,
      })
      .then((res) => {
        console.log("data", res.data);
        router.push(res.data);
      })
      .catch((e) => alert(e))
      .finally(() => setIsLoadingPay(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      // onClick={() => router.push(`/listings/${data.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col w-full gap-2">
        <div className="relative w-full overflow-hidden aspect-square rounded-xl">
          <Image
            fill
            className="object-cover w-full h-full transition group-hover:scale-110"
            src={data.imageSrc}
            alt="listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="text-lg font-semibold">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-">
          <div className="flex gap-1 font-semibold">
            <p>
              ${price}{" "}
              {!reservation && <span className="font-light"> Night</span>}
            </p>
          </div>
        </div>
        {onAction && actionLabel && (
          <div className="flex justify-between gap-4">
            <Button
              disabled={disabled}
              small
              label={actionLabel}
              onClick={handleCancel}
              className="px-2 py-2 font-bold text-red-600 border-none outline-none bg-red-400/10 hover:bg-red-400/20 hover:text-opacity-100 w-fit"
            />

            <button
              className={cn(
                "bg-[#0000FF] py-2 px-4 rounded-lg text-white hover:bg-opacity-80 aria-disabled:cursor-not-allowed",
                isLoadingPay && "bg-opacity-50 hover:bg-opacity-50"
              )}
              onClick={createCheckoutSession}
              aria-disabled={isLoadingPay}
            >
              {isLoadingPay && (
                <AiOutlineLoading3Quarters className="inline-block mr-0.5 animate-spin" />
              )}
              pay now
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ListingCard;
