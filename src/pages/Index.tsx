
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutAuthor from "../components/AboutAuthor";
import AboutGuide from "../components/AboutGuide";
import ForWhom from "../components/ForWhom";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Pricing from "../components/Pricing";
import Contacts from "../components/Contacts";
import PlanetModal from "../components/PlanetModal";
import { useState } from "react";

const Index = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <AboutAuthor />
        <AboutGuide onPlanetClick={setSelectedPlanet} />
        <ForWhom />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Contacts />
      </main>
      <PlanetModal 
        planet={selectedPlanet} 
        onClose={() => setSelectedPlanet(null)} 
      />
    </div>
  );
};

export default Index;
