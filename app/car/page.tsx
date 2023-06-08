import ClientOnly from "@/components/ClientOnly";
import BestWay from "@/components/cars/BestWay";
import Brands from "@/components/cars/Brands";
import Deals from "@/components/cars/Deals";
import PopularDestinations from "@/components/cars/PopularDestinations";

type Props = {};

function CarsPage({}: Props) {
  return (
    <ClientOnly>
      <BestWay />
      <PopularDestinations />
      <Brands />
      <Deals />
    </ClientOnly>
  );
}

export default CarsPage;
