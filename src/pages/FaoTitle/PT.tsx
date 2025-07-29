import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';

const PT: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Personal Tax  </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Simplified & Accurate Personal Tax Returns – Handled by Tellida!</h3> 
        
        <b>Struggling with personal tax returns? Whether you're an individual, business owner, or high-net-worth professional, 
        Tellida ensures your taxes are filed accurately, on time, and with maximum savings—without the stress.
        <br />
        <h3 className="page-title">Common Challenges Individuals Face</h3> 
        <br />
        ✅ Understanding complex tax laws and deductions<br />
        ✅ Avoiding costly mistakes that could trigger penalties <br />
        ✅ Maximizing tax savings while staying compliant <br />
        ✅ Meeting tight filing deadlines without last-minute panic <br /> <br />
        💡 If any of these resonate with you, Tellida is here to help! Our tax experts
         handle everything, so you can focus on what matters most.
        <br />
        <h3 className="page-title">Why Outsource Personal Tax Returns?</h3>
        <br />
        With tax regulations becoming increasingly complex, individuals are choosing 
        professional tax services to ensure accuracy, compliance, and tax efficiency. 
        The demand for expert tax assistance is expected to grow significantly as more 
        people seek to optimize their tax filings. <br />
        <br />
        <b> Key Benefits of Tellida’s Personal Tax Services</b>
        <br /> <br />
        ✔ Ensures 100% Compliance – Stay ahead of tax law changes <br />
        ✔ Reduces Errors & Audit Risk – Accurate, hassle-free filings <br />
        ✔ Maximizes Tax Savings – Identify deductions and credits effectively <br />
        ✔ Saves Time & Effort – Let us handle the paperwork while you focus on life<br />
        ✔ Meets Filing Deadlines – No more last-minute rush or penalties</b>


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

export default PT;