import AboutUs from "@/components/AboutUs";
import ClientOnly from "@/components/ClientOnly";
import Contact from "@/components/Contact";
import Countries from "@/components/Countries";
import Destination from "@/components/Destination";
import HeroSection from "@/components/HeroSection";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    // <ClientOnly>
    <>
      <HeroSection currentUser={currentUser} />
      <Countries />
      <Destination />
      <AboutUs />
      <Contact />
    </>
    // </ClientOnly>
  );
}
