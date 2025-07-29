import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../../../components/NavbarOther";


// Lazy loaded components
const Footer = React.lazy(() => import("../../../components/Footer"));
const RemoteCase = React.lazy(() => import("../remote-section/remote-sub-sections/RemoteCase"));
const Certification = React.lazy(() => import("../../sections/Certification"));
const ContactHome = React.lazy(() => import("../../sections/ContactHome"));
const ISOServices = React.lazy(() => import("../isoservices"));
const RemoteGeneral = React.lazy(() => import("./remote-sub-sections/RemoteGeneral"));
const RemoteHero = React.lazy(() => import("./remote-sub-sections/RemoteHero"));
const WhoWe = React.lazy(() => import("./remote-sub-sections/WhoSection"));

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

const RemoteProcessService: React.FC = () => {
  return (
    <div>

      <NavbarOther />
      
        <SectionWrapper>
          <RemoteHero />
        </SectionWrapper>

         <SectionWrapper>
          <RemoteGeneral />
        </SectionWrapper>
{/* <SectionWrapper>
          <WhoWe />
        </SectionWrapper>
        
        <SectionWrapper>
          <RemoteCase />
        </SectionWrapper> */}
        

        <SectionWrapper>
          <ISOServices />
        </SectionWrapper>

        

       {/*<SectionWrapper>
          <ContactHome />
        </SectionWrapper>
        
        <SectionWrapper>
          <TestimonialSection />
        </SectionWrapper> 
        
        <SectionWrapper>
          <Certification />
        </SectionWrapper>
         */}

        

        <SectionWrapper>
          <Footer />
        </SectionWrapper>
    </div>
  );
};

export default RemoteProcessService;
