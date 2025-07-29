import React, { ReactNode, Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GlobalAbout from "./AboutUsSections/GlobalAbout";
import NavbarOther from "../components/NavbarOther";
import BlogHero from "./BlogSections/BlogHero";
import BlogCard from "./BlogSections/BlogCard";
import CategoryName from "./BlogSections/BlogCategoryName";
import BlogSection from "./BlogSections/BlogSection";
const AboutUsHero = React.lazy(() => import("./AboutUsSections/AboutUsHero"));
const AboutTellida = React.lazy(() => import("./AboutUsSections/AboutTellida"));
const VoicesOfTellida = React.lazy(() => import("./AboutUsSections/VoicesOfTellida"));
const Gallery = React.lazy(() => import("./AboutUsSections/Gallery"));
const AddressSection = React.lazy(() => import("./AboutUsSections/AboutAddress"));
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
      initial={{ y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

const Blogs: React.FC = () => {
  // @ts-ignore
  return (
    <div className="about-us-container">
        {/* About Us Hero */}
        <NavbarOther />
        
        <SectionWrapper>
          <BlogHero />
        </SectionWrapper>


        <SectionWrapper>
          <BlogSection />
        </SectionWrapper>

        {/* Footer */}
        <SectionWrapper>
          <Footer />
        </SectionWrapper>
    </div>
  );
};

export default Blogs;
