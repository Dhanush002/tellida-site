import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';

const TI: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Tax Investigations </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Expert Tax Investigation Support – Protect Your Business with Tellida!</h3> 
        
    <b> Facing a tax investigation can be stressful, time-consuming, and financially draining. Whether you’re 
        dealing with an HMRC inquiry, compliance check, or a full investigation, Tellida provides expert 
        guidance to navigate the process smoothly and ensure the best possible outcome.
        <br />
        <h3 className="page-title">Common Challenges During a Tax Investigation</h3> 
        <br />
        ✅ Understanding the scope and reasons behind HMRC’s inquiry<br />
        ✅ Gathering and presenting financial records accurately <br />
        ✅ Avoiding penalties and legal complications <br />
        ✅ Minimizing financial and reputational risks <br /> <br />
        💡 If you're under scrutiny, Tellida is here to support you! Our experienced tax professionals will handle 
        the complexities, communicate with HMRC on your behalf, and ensure you stay compliant while protecting your interests.
        <br />
        <h3 className="page-title">Why Work with Tax Investigation Experts?</h3>
        <br />
        HMRC investigations are becoming more frequent due to increased compliance 
        measures. Businesses and individuals are seeking specialized tax advisors 
        to handle inquiries efficiently, reduce risk, and prevent costly penalties. <br />
        <br />
        <b> Key Benefits of Tellida’s Tax Investigation Services</b>
        <br /> <br />
        ✔ Expert Representation – We liaise directly with HMRC to defend your case <br />
        ✔ Risk Mitigation – Reduce penalties and avoid unnecessary tax liabilities <br />
        ✔ Comprehensive Compliance Support – Ensure accurate reporting and documentation<br />
        ✔ Time & Stress Reduction – Let our professionals handle the complex process<br />
        ✔ Proactive Tax Planning – Prevent future investigations with strategic advice</b>


      </p>
    </div>
    </div>
    <button
      onClick={() => navigate(-1)}
      style={{
        textAlign: 'center',
  fontSize: '18px',
  fontWeight: '600',
  backgroundColor: '#b54038',
  color: '#ffffff',
  border: 'none',
  borderRadius: '30px',
  height: '50px',
  padding: '0 24px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  letterSpacing: '0.5px',
  }}
>
  ← Go Back
</button>

    
    </div>
    </>

  );
};

export default TI;