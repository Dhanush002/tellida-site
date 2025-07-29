import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../../../components/NavbarOther";
// Import your LogoGrid component (update path accordingly)
import LogoGrid from "./sections/LogoGrid";

// Lazy loaded components
const Footer = React.lazy(() => import("../../../components/Footer"));
const LegalFinance = React.lazy(
  () => import("../finance-section/sections/LegalFinance")
);
const Certification = React.lazy(() => import("../../sections/Certification"));
const Contact = React.lazy(
  () => import("../../services/legal-process/LegalSection/LegalContact")
);
const ISOServices = React.lazy(() => import("../isoservices"));
const FinanceGeneral = React.lazy(() => import("./sections/FinanceGeneral"));
const FinanceHero = React.lazy(() => import("./sections/FinanceHero"));
const FinanceExpertise = React.lazy(() => import("./sections/FinanceExpertise"));
const FinanceWho = React.lazy(() => import("./sections/FinanceWho"));
const FinanceTeam = React.lazy(() => import("./sections/FinanceTeam"));
const TestimonialSection = React.lazy(
  () => import("../../sections/Testimonial")
);



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

const FinanceService: React.FC = () => {
  return (
    <div>
      <NavbarOther />

      <SectionWrapper>
        <FinanceHero />
      </SectionWrapper>

      <SectionWrapper>
        <FinanceWho />
      </SectionWrapper>

      <SectionWrapper>
        <FinanceGeneral />
      </SectionWrapper>

      {/* LogoGrid inserted here */}
      <SectionWrapper>
        <LogoGrid />
      </SectionWrapper>

      <SectionWrapper>
        <FinanceExpertise />
      </SectionWrapper>
{/* <SectionWrapper>
        <LegalFinance />
      </SectionWrapper>

      <SectionWrapper>
        <TestimonialSection />
      </SectionWrapper> 
      
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
      
      <SectionWrapper>
        <Certification />
      </SectionWrapper>
      
      */}
      

      <SectionWrapper>
        <FinanceTeam />
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

export default FinanceService;
