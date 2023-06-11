import ClientOnly from "@/components/ClientOnly";
import SearchingFilter from "@/components/SearchingFilter";
import BestPlaces from "@/components/destinations/BestPlaces";
import FeaturedDestinations from "@/components/destinations/FeaturedDestinations";
import TopTours from "@/components/destinations/TopTours";
import getDestinations, {
  IDestinationsParams,
} from "../actions/getDestinations";
import getCurrentUser from "../actions/getCurrentUser";

type Props = {
  searchParams: IDestinationsParams;
};

async function Destinations({ searchParams }: Props) {
  const destinations = await getDestinations(searchParams);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <SearchingFilter category="destinations" />
      {!searchParams.guestCount && (
        <>
          <BestPlaces />
          <FeaturedDestinations />
        </>
      )}
      <TopTours currentUser={currentUser} destinations={destinations} />
    </ClientOnly>
  );
}

export default Destinations;
