// src/app/page.tsx
'use client'

import BrandsAndStats from "./components/section/BrandAndStat";
import HeroSection from "./components/section/HeroSection";
import SoftwareSection from "./components/section/SoftwareSection";
import WhyChooseUs from "./components/section/WhyChooseUs";
import CallToAction from "./components/section/CallToAction";
import ServicesSection from "./components/section/ServicesSection";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Suspense } from "react";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="flex flex-col">
        {/* Wrapping the main content in Suspense triggers the loading.tsx/SkeletonLoader */}
        {/* <Suspense fallback={<SkeletonLoader />}> */}
          {/* <HeroSection />
          <BrandsAndStats/>
          <ServicesSection/>
          <SoftwareSection/>
          <WhyChooseUs/>
          <CallToAction/> */}
          
          <HeroSection/>
          <BrandsAndStats/>
          <ServicesSection/>
          <SoftwareSection/>
          <WhyChooseUs/>
          <CallToAction/>
        {/* </Suspense> */}

        <Footer />
      </main>
    </div>
  );
}