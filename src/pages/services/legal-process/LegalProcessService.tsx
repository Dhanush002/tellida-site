import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../../../components/NavbarOther";
import FAQSection from "../../sections/FAQSection";


// Lazy loaded components
const Footer = React.lazy(() => import("../../../components/Footer"));
const CaseStudySection = React.lazy(() => import("../legal-process/LegalSection/LegalCase"));
const Certification = React.lazy(() => import("../../sections/Certification"));
const General = React.lazy(() => import("./LegalSection/General"));
const LegalHero = React.lazy(() => import("./LegalSection/LegalHero"));
const Management = React.lazy(() => import("./LegalSection/Management"));
const ISOServices = React.lazy(() => import("../isoservices"));
const Offer = React.lazy(() => import("./LegalSection/Offers"));
const SupportServices = React.lazy(() => import("./LegalSection/SupportServices"));
const BusinessServices = React.lazy(() => import("./LegalSection/BusinessServices"));
const LegalTeam = React.lazy(() => import("./LegalSection/LegalTeam"));
const Testimonials = React.lazy(() => import("./LegalSection/Testimonials"));
const LegalFAQ = React.lazy(() => import("./LegalSection/LegalFAQ"));
const GlobalContact = React.lazy(() => import("./LegalSection/LegalContact"))
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

const LegalProcessService: React.FC = () => {
  return (
    <div >

      <NavbarOther />
      
        <SectionWrapper>
          <LegalHero />
        </SectionWrapper>

        <SectionWrapper>
          <Offer />
        </SectionWrapper>

        

        <SectionWrapper>
          <General />
        </SectionWrapper>

        

        <SectionWrapper>
          <Management />  
        </SectionWrapper>

        <SectionWrapper>
          <SupportServices />
        </SectionWrapper>

        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>

        <SectionWrapper>
          <LegalTeam />
        </SectionWrapper>
{/* <SectionWrapper>
          <CaseStudySection />
        </SectionWrapper> 
        
        <SectionWrapper>
          <GlobalContact />
        </SectionWrapper> 

        <SectionWrapper>
          <Certification />
        </SectionWrapper>
        
        */}
        

       <SectionWrapper>
          <BusinessServices />
        </SectionWrapper> 

        <SectionWrapper>
          <LegalFAQ />
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

export default LegalProcessService;
