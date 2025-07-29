import React, { Suspense } from "react";
import NavbarOther from "../components/NavbarOther";
import AboutUsHero from "./AboutUsSections/AboutUsHero";
import AboutTellida from "./AboutUsSections/AboutTellida";
import VoicesOfTellida from "./AboutUsSections/VoicesOfTellida";
import GlobalAbout from "./AboutUsSections/GlobalAbout";
import FAQs from "./faqs";
import Certification from "./sections/Certification";
import Footer from "../components/Footer";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarOther />

      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <AboutUsHero />
          <AboutTellida />
          <VoicesOfTellida />
          <FAQs />
          <GlobalAbout />
          <Certification />
          

          {/* Removed SectionWrapper and missing components:
              - FAQs
              - Certification
          */}


        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
