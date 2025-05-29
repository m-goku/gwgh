import Image from "next/image";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SocialProof from "./components/SocialProof";
import AboutUS from "./components/AboutUS";
import WhatWeDo from "./components/WhatWeDo";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="grid grid-rows-[20px_1fr_20px]  dark:bg-gray-900 justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className=" gap-[32px] justify-items-center row-start-2 min-h-screen sm:items-start">
          <HeroSection />
          <SocialProof />
          <AboutUS />
          <FeatureSection />
          <WhatWeDo />
          <Gallery />
        </main>
      </div>

      <Footer />
    </>
  );
}
