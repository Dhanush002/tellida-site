import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Careers.css";
import Certification from "./sections/Certification";
import NavbarOther from "../components/NavbarOther";
import Gallery from "./AboutUsSections/Gallery";
import Jobs from "./CareersSections/jobs"; // ✅ Import the new Jobs component

const HeroSection = React.lazy(() => import("./CareersSections/HeroSection"));
const LifeAtTellida = React.lazy(() => import("./CareersSections/LifeAtTellida"));
const CompanyCultureVideo = React.lazy(() => import("./CareersSections/CompanyCultureVideo"));
const GrowWithUs = React.lazy(() => import("./CareersSections/GrowWithUs"));
const JobOpenings = React.lazy(() => import("./CareersSections/JobOpenings"));
const Footer = React.lazy(() => import("../components/Footer"));
const GrowTest = React.lazy(() => import("./CareersSections/GrowTest"));

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

const Careers: React.FC = () => {
  return (
    <div className="careers-container">
      <NavbarOther />

      {/* Hero Section
      <SectionWrapper>
        <Suspense fallback={<div>Loading Hero...</div>}>
          <HeroSection />
        </Suspense>
      </SectionWrapper>
       */}
      

      {/* Job Openings Section */}
      <SectionWrapper>
        <Suspense fallback={<div>Loading Job Openings...</div>}>
          <JobOpenings />
        </Suspense>
      </SectionWrapper>

      {/* ✅ Insert Jobs.tsx Section here */}
      <SectionWrapper>
        <Jobs />
      </SectionWrapper>

      {/* Life at Tellida */}
      <SectionWrapper>
        <Suspense fallback={<div>Loading Life At Tellida...</div>}>
          <LifeAtTellida />
        </Suspense>
      </SectionWrapper>

      

      {/* Company Culture Video */}
      <SectionWrapper>
        <Suspense fallback={<div>Loading Culture Video...</div>}>
          <CompanyCultureVideo />
        </Suspense>
      </SectionWrapper>

      {/* Grow with Us Section */}
      <SectionWrapper>
        <Suspense fallback={<div>Loading Growth Info...</div>}>
          <GrowWithUs />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Suspense fallback={<div>Loading Grow Test...</div>}>
          <GrowTest />
        </Suspense>
      </SectionWrapper>

      <SectionWrapper>
        <Gallery />
      </SectionWrapper>

      

      

      

      {/* Certifications and Industry Recognition 
      
      <SectionWrapper>
        <Certification />
      </SectionWrapper>
      */}
      

      {/* Footer */}
      <SectionWrapper>
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </SectionWrapper>
    </div>
  );
};

export default Careers;
