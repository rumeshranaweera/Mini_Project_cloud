import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import SearchingFilter from "@/components/SearchingFilter";
import Explore from "@/components/hotels/Explore";
import TrendingCities from "@/components/hotels/TrendingCities";
import getCurrentUser from "../actions/getCurrentUser";
import getListings, { IListingsParams } from "../actions/getListings";

type Props = {
  searchParams: IListingsParams;
};

async function HotelPage({ searchParams }: Props) {
  const listing = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <SearchingFilter category="hotel" />
      {!searchParams.guestCount && <TrendingCities />}
      <Explore currentUser={currentUser} listing={listing} />
    </ClientOnly>
  );
}

export default HotelPage;
