import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../components/NavbarOther";
import Certification from "./sections/Certification";
const HeroSection = React.lazy(() => import("./CareersSections/isoHero"));

// Lazy load the CertifiedDataSecurity and Footer components
const CertifiedDataSecurity = React.lazy(() => import("./sections/CertifiedDataSecurity"));
const Footer = React.lazy(() => import("../components/Footer"));

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const ISO: React.FC = () => {
  return (
    <div className="iso-page-container">
      <NavbarOther />
      

      <Suspense fallback={<div>Loading Certified Data Security...</div>}>
        {/* Hero Section */}
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper>
          <CertifiedDataSecurity />
        </SectionWrapper>

        {/* Certifications and Industry Recognition */}
        <SectionWrapper>
          <Certification />
        </SectionWrapper>
      </Suspense>

      <Suspense fallback={<div>Loading footer...</div>}>
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
      </Suspense>
    </div>
  );
};

export default ISO;
