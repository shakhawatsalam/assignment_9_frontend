import NavBar from "@/components/view/NavBar";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/ui/navBar";
import Image from "next/image";
import HeroSection from "@/components/view/HeroSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection/>
    </div>
  );
}
