import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavbarOther from "../components/NavbarOther";

const Policy = React.lazy(() => import("./sections/Policy"));

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

const Privacy = () => {
  return (
    <div style={{ width: "100%" }}>
      <SectionWrapper>
        <NavbarOther />
      </SectionWrapper>

      <SectionWrapper>
        <Policy />
      </SectionWrapper>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

export default Privacy;
