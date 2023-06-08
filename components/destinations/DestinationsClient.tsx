"use client";

import { SafeUser, safeDestinations } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import Container from "../Container";
import Heading from "../Heading";
import DestinationsCard from "./DestinationsCard";

type Props = {
  currentUser?: SafeUser | null;
  destinations: safeDestinations[];
};

function DestinationsClient({ currentUser, destinations }: Props) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/destinations/${id}`)
        .then(() => {
          toast.info("Trip cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subtitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {destinations.map((trip) => (
          <DestinationsCard
            key={trip.id}
            destinations={trip}
            disabled={deletingId === trip.id}
            actionLabel="Cancel Trip"
            currentUser={currentUser}
            actionId={trip.id}
            onAction={onCancel}
          />
        ))}
      </div>
    </Container>
  );
}

export default DestinationsClient;
