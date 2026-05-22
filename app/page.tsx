import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Whatsapp from "@/components/Whatsapp";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalSection from "@/components/FinalSection";
import Growth from "@/components/Growth";

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      <Hero />
      <Projects />
      <Growth />
      <Pricing />
    
    
      <FAQ />
      <FinalSection />

      <Whatsapp />

    </div>
  );
}