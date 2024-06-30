import ContactComponent from "@/components/ContactComponent";
import Hero from "@/components/Hero";
import News from "@/components/News";
import News2 from "@/components/News2";
import PricingTables from "@/components/PricingPlans";
import ServiceCards from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ServiceCards />
      {/* <News2 /> */}
      <PricingTables />
      <News />
      <ContactComponent />
    </main>
  );
}
