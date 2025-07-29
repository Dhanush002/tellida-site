import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../../../components/NavbarOther";

const ISOServices = React.lazy(() => import("../isoservices"));
const Footer = React.lazy(() => import("../../../components/Footer"));
const CaseStudySection = React.lazy(() => import("../call-section/Sections/CallCase"));
const Certification = React.lazy(() => import("../../sections/Certification"));
const CallHero = React.lazy(() => import("./Sections/CallHero"));
const Callus = React.lazy(() => import("./Sections/Callus"));
const CallGeneral = React.lazy(() => import("./Sections/CallGeneral"));
const CallTeam = React.lazy(() => import("./Sections/CallTeam"));
const Contact = React.lazy(() => import("../legal-process/LegalSection/LegalContact"));

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

const CallService: React.FC = () => {
  return (
    <div>
      <NavbarOther />
      
      <SectionWrapper>
        <CallHero />
      </SectionWrapper>

      

      {/* ISOServices moved here
      <SectionWrapper>
        <Callus />
      </SectionWrapper>
       */}
      

      <SectionWrapper>
        <CallGeneral />
      </SectionWrapper>

      
{/* <SectionWrapper>
        <CaseStudySection />
      </SectionWrapper> 
      
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      
      <SectionWrapper>
        <Certification />
      </SectionWrapper>
      
      */}
      

      <SectionWrapper>
        <CallTeam />
      </SectionWrapper>

      <SectionWrapper>
        <ISOServices />
      </SectionWrapper>

      

      

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default CallService;
