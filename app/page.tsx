import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import AboutUS from "./components/AboutUS";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px]  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className=" gap-[32px] justify-items-center row-start-2 min-h-screen sm:items-start">
          <HeroSection />
          <SocialProof />
          <AboutUS />
        </main>
      </div>
    </>
  );
}
