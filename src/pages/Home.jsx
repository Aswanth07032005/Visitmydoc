import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import HeroSecondary from "../components/HeroSecondary";
import ProviderGrid from "../components/ProviderGrid";
import ServiceGrid from "../components/ServiceGrid";
import ClinicFeatures from "../components/ClinicFeatures";
import PatientFeatures from "../components/PatientFeatures";
import PreFooter from "../components/PreFooter";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero/>
      <ProviderGrid/>
      <ServiceGrid/>
      <ClinicFeatures/>
      <HeroSecondary/>
      <PatientFeatures/>
      <PreFooter/>
    </>
  );
}

export default Home;
