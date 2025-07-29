import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../components/NavbarOther";

const Cookies = React.lazy(() => import("./sections/Cookies"));

const Footer = React.lazy(() => import("../components/Footer"));

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

const CookiesSettings = () => {
  return (
    <div style={{ width: "100%" }}>
      <SectionWrapper>
        <NavbarOther />
      </SectionWrapper>

      <SectionWrapper>
        <Cookies />
      </SectionWrapper>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default CookiesSettings;
