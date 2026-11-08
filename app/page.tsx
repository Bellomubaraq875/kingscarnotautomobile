import DriveHero from "./components/motion/DriveHero";
import BrandsAndStats from "./components/section/BrandAndStat";
import ServicesSection from "./components/section/ServicesSection";
import SoftwareSection from "./components/section/SoftwareSection";
import WhyChooseUs from "./components/section/WhyChooseUs";
import CallToAction from "./components/section/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col">
      <DriveHero />
      <div id="after-drive" />
      <BrandsAndStats />
      <ServicesSection />
      <SoftwareSection />
      <WhyChooseUs />
      <CallToAction />
    </div>
  );
}
