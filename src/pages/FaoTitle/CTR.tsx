import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';

const CTR: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Corporate Tax return </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Hassle-Free Corporate Tax Returns – Accuracy, Compliance & Efficiency with Tellida!</h3> 
        
        <b>Struggling with the complexities of corporate tax returns? At Tellida, we provide precise, compliant, and efficient 
        tax filing solutions—helping your firm meet deadlines, minimize liabilities, and stay stress-free.
        <br />
        <h3 className="page-title">Common Challenges Firms Face</h3> 
        <br />
        ✅ Keeping up with changing tax laws and regulations<br />
        ✅ Avoiding costly errors that could trigger audits <br />
        ✅ Maximizing tax savings while ensuring full compliance <br />
        ✅ Meeting tight filing deadlines without last-minute stress <br /> <br />
        💡 If any of these sound familiar, Tellida has you covered! Our experts 
        ensure your corporate tax returns are prepared accurately, on time, and in full compliance.
        <br />
        <h3 className="page-title">Why Outsource Corporate Tax Returns?</h3>
        <br />
        With tax regulations becoming more complex, firms are turning to outsourced tax solutions to 
        ensure accuracy, efficiency, and compliance. By 2028, businesses relying on tax outsourcing 
        are expected to grow significantly, benefiting from cost savings and expert guidance. <br />
        <br />
        <b> Key Benefits of Tellida’s Corporate Tax Return Services</b>
        <br /> <br />
        ✔ Ensures 100% Compliance – Stay ahead of tax law changes <br />
        ✔ Reduces Errors & Audit Risk – Precision-driven tax calculations <br />
        ✔ Saves Time & Resources – Focus on core business functions <br />
        ✔ Maximizes Tax Savings – Identify deductions and credits effectively<br />
        ✔ Meets Filing Deadlines – Avoid penalties with timely submissions</b>


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

export default CTR;