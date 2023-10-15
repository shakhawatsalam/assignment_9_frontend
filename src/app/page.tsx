import NavBar from "@/components/view/NavBar";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/ui/navBar";
import Image from "next/image";
import HeroSection from "@/components/view/HeroSection";
import SectionHeading from "@/components/view/SectionHeading";
import ServiceSection from "@/components/view/ServiceSection";
import UpcomingService from "@/components/view/UpcomingService";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ServiceSection />
      <UpcomingService />
    </div>
  );
}
