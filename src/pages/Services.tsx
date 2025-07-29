
import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../components/NavbarOther";

const ServiceHero = React.lazy(() => import("./SerivcesSections/ServiceHero"));
const FinanceMain =React.lazy(() => import("./SerivcesSections/FinanceMain"))
const LegalMain = React.lazy(() => import("./SerivcesSections/LegalMain"));
const RemoteMain = React.lazy(() => import("./SerivcesSections/RemoteMain"));
const CallMain = React.lazy(() => import("./SerivcesSections/CallMain"));
const Footer = React.lazy(() => import("../components/Footer"))
const Certification = React.lazy(() => import("./sections/Certification"));


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


const Services = () => {
  return (
    <div style={{ width: "100%" }}>
      <SectionWrapper>
      <NavbarOther />
      </SectionWrapper>

      <SectionWrapper>
      <ServiceHero />
      </SectionWrapper>

      <SectionWrapper>
      <FinanceMain />
      </SectionWrapper>

      <SectionWrapper>
      <LegalMain />
      </SectionWrapper>

      <SectionWrapper>
      <RemoteMain />
      </SectionWrapper>

      <SectionWrapper>
      <CallMain />
      </SectionWrapper>

      {/** <SectionWrapper>
        <Certification />
      </SectionWrapper> */}
      
      <SectionWrapper>
        <Footer />
      </SectionWrapper>

      
      
    </div>
  );
};

export default Services;
