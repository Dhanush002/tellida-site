import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImage from "../assets/Hero.jpg";
import "../pages/sections/WhoAreWe.css";
import Navbar from "../components/Navbar";
import TestimonialSection from "./sections/Testimonial";
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const WhoWeAre = React.lazy(() => import("./sections/WhoAreWe"));
const BrandsSection = React.lazy(() => import("./sections/Brands"));
const OurServices = React.lazy(() => import("./sections/OurServices"));
const WhyTellida = React.lazy(() => import("./sections/WhyTellida"));
const OurTeam = React.lazy(() => import("./sections/OurTeam"));
const LegalCaseHome = React.lazy(() => import("../pages/sections/CaseStudySection"));
const UspSection = React.lazy(() => import("./sections/Usp"));
const Footer = React.lazy(() => import("../components/Footer"));
const Global = React.lazy(() => import("./sections/Global"));
const ContactHome = React.lazy(() => import("./sections/ContactHome")); 
const Certification = React.lazy(() => import("./sections/Certification"));
const CeoVideo = React.lazy(() => import("./sections/CeoVideo"));
interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <SectionWrapper>
      <Navbar />
      </SectionWrapper>
     
        <SectionWrapper>
          <HeroSection
            title="Empowering Growth Through Smart Outsourcing Solutions"
            description="Unlock Efficiency, Scale Faster and Achieve Global Success."
            imageUrl={HeroImage}
          />
        </SectionWrapper>

        <SectionWrapper>
          <WhoWeAre />
        </SectionWrapper>

        <SectionWrapper>
          <BrandsSection />
        </SectionWrapper>

        <SectionWrapper>
          <OurServices />
        </SectionWrapper>

        <SectionWrapper>
          <UspSection />
        </SectionWrapper>

        <SectionWrapper>
          <WhyTellida />
        </SectionWrapper>

        <SectionWrapper>
          <OurTeam />
        </SectionWrapper>

        <SectionWrapper>
          <LegalCaseHome />
        </SectionWrapper>

        <SectionWrapper>
          <Global />
        </SectionWrapper>

        <SectionWrapper>
          <TestimonialSection />
        </SectionWrapper>

        {/*<SectionWrapper>
          <ContactHome />
        </SectionWrapper> */}

        <SectionWrapper>
          <CeoVideo />
        </SectionWrapper>

        <SectionWrapper>
          <Certification />
        </SectionWrapper>

        <SectionWrapper>
          <Footer />
        </SectionWrapper>
    </div>
  );
};

export default Home;
