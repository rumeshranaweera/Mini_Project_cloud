import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import DestinationsClient from "@/components/destinations/DestinationsClient";
import getCurrentUser from "../actions/getCurrentUser";
import getDestinations from "../actions/getDestinations";

type Props = {};

const TripsPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getDestinations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <DestinationsClient
        destinations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default TripsPage;
