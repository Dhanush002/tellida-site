import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../components/NavbarOther";


const HeroSection = React.lazy(() => import("./ContactSections/HeroSection"));
const ContactPoints = React.lazy(
  () => import("./ContactSections/ContactPoints")
);
const GlobalContacts = React.lazy(
  () => import("./ContactSections/GlobalContacts")
);
const AddressSection = React.lazy(() => import("./ContactSections/Address"));
const Footer = React.lazy(() => import("../components/Footer"));
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

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
        <NavbarOther />

        {/* Hero Section */}
        <SectionWrapper>
          <HeroSection />
        </SectionWrapper>

        {/* Contact Points */}
        <SectionWrapper>
          <ContactPoints />
        </SectionWrapper>

        <SectionWrapper>
          <GlobalContacts />
        </SectionWrapper>


        {/* Address Section */}
        <SectionWrapper>
          <AddressSection />
        </SectionWrapper>

        {/* Global Contacts */}
     
        {/* Certification 
        
        <SectionWrapper>
          <Certification />
        </SectionWrapper>
        
        */}
        

        {/* Footer */}
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
    </div>
  );
};

export default ContactUs;
