import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollToTop from './components/ScrollToTop';  // Import the ScrollToTop component
import FAQs from "./pages/faqs";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ISO from "./pages/iso";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import LegalProcessService from "./pages/services/legal-process/LegalProcessService";
import RemoteProcessService from "./pages/services/remote-section/RemoteProcessService";
import CallService from "./pages/services/call-section/CallSection";
import FinanceService from "./pages/services/finance-section/FinanceService";
import FinanceGeneral from "./pages/services/finance-section/sections/FinanceGeneral";
import Bookkeeping from "./pages/FaoTitle/bookkeeping";
import YEAP from "./pages/FaoTitle/YEAP";
import VR from "./pages/FaoTitle/VR";
import CTR from "./pages/FaoTitle/CTR";
import PT from "./pages/FaoTitle/PT";
import TI from "./pages/FaoTitle/TI";
import MA from "./pages/FaoTitle/MA";
import PR from "./pages/FaoTitle/PR";
import Loader from "./Loader"; 
import "./App.css";
// import ScrollToTop from "./ScrollToTop";
import Services from "./pages/Services";
import Privacy from "./pages/PrivacyPolicy";
import Cookies from "./pages/sections/Cookies";
import CookiesSettings from "./pages/CookiesSettings";
import TermsConditions from "./pages/TermsConditions";
import Blogs from "./pages/Blogs";
import BlogPostPage from "./pages/BlogPost";
import BlogPost from "./pages/BlogPost";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Handle the loading state when navigating between pages
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll to the contact section when location state has scrollToContact
  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        const contactSection = document.getElementById("global-contacts-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); 
    }
  }, [location]);

  // Scroll to case study section when location state has scrollToCaseStudy
  useEffect(() => {
    if (location.state?.scrollToCaseStudy) {
      const caseStudySection = document.getElementById("legal-case-studies-id");
      if (caseStudySection) {
        setTimeout(() => {
          caseStudySection.scrollIntoView({ behavior: "smooth" });
        }, 500); 
      }
    }
  }, [location]);

  return (
    <>
      <ScrollToTop />  {/* Ensure scroll resets to top on route change */}
      {/* {loading && <Loader />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/iso" element={<ISO />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services/legal-process" element={<LegalProcessService />} />
        <Route path="/services/tech-support" element={<RemoteProcessService />} />
        <Route path="/services/call-centre" element={<CallService />} />
        <Route path="/services/finance" element={<FinanceService />} /> 
        <Route path="/Bookkeeping" element={<Bookkeeping />} />
        <Route path="/YEAP" element={<YEAP />} />
        <Route path="/VR" element={<VR />} />
        <Route path="/CTR" element={<CTR />} />
        <Route path="/PT" element={<PT />} />
        <Route path="/TI" element={<TI />} />
        <Route path="/MA" element={<MA />} />
        <Route path="/PR" element={<PR />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/case-study-detail" element={<CaseStudyDetail />} />
        <Route path="/policy" element={<Privacy />} />
        <Route path="/cookies" element={<CookiesSettings />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </>
  );
}

export default App;
