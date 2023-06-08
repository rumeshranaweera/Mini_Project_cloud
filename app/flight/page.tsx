import ClientOnly from "@/components/ClientOnly";
import SearchingFilter from "@/components/SearchingFilter";
import BestWay from "@/components/flights/BestWay";
import Deals from "@/components/flights/Deals";

type Props = {};

function FlightPage({}: Props) {
  return (
    <ClientOnly>
      <BestWay />
      <Deals />
    </ClientOnly>
  );
}

export default FlightPage;
