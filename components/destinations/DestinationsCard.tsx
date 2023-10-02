"use client";

import { SafeUser, safeDestinations } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

import HeartButton from "../HeartButton";

type Props = {
  currentUser?: SafeUser | null;
  destinations: safeDestinations;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
};

function DestinationsCard({
  currentUser,
  destinations,
  onAction,
  disabled,
  actionId,
  actionLabel,
}: Props) {
  const router = useRouter();

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId!);
    },
    [onAction, actionId, disabled]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => router.push(`/destinations/${destinations.id}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col w-full gap-2">
        <div className="relative w-full overflow-hidden aspect-square rounded-xl">
          <Image
            fill
            className="object-cover w-full h-full transition group-hover:scale-110"
            src={destinations.imageSrc}
            alt="listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton
              listingId={destinations.id}
              currentUser={currentUser}
            />
          </div>
        </div>
        {/*      {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )} */}
      </div>
    </motion.div>
  );
}

export default DestinationsCard;
