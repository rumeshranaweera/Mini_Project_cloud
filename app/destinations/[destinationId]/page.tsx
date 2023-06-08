import getCurrentUser from "@/actions/getCurrentUser";
import getDestinationsById from "@/actions/getDestinationsById";
import ClientOnly from "@/components/ClientOnly";
import ListingContainer from "@/components/listing/ListingContainer";

interface IParams {
  destinationId?: string;
}

const DestinationCard = async ({ params }: { params: IParams }) => {
  const destination = await getDestinationsById(params);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <ListingContainer destinations={destination!} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default DestinationCard;
