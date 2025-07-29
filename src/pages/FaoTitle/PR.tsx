import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import NavbarOther from '../../components/NavbarOther';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 

import ServiceHero from '../SerivcesSections/ServiceHero';

const PR: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Payroll </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Effortless & Secure Payroll Management for CPAs & EAs – Powered by Tellida!</h3> 
        
        Are payroll complexities taking up too much of your time? At <b>Tellida,</b> we provide <b> reliable and hassle-free 
        payroll support</b> so you can focus on <b>advising your clients and growing your firm</b>—while we handle the heavy lifting.
        <br />
        <h3 className="page-title">Payroll Challenges Firms Face</h3> 
        <br />
        ✅ Ensuring <b>data security </b>and compliance<br />
        ✅ Accurate <b>payroll tax calculations</b><br />
        ✅ Avoiding costly <b>errors and delays</b><br />
        ✅ Managing <b>on-time payment distribution</b> <br /> <br />
        💡<b> If these challenges sound familiar, you’re in the right place! </b>
        Our payroll experts take care of everything— <b>seamlessly and securely.</b>
        <br />
        <h3 className="page-title">Why Choose Tellida for Payroll Services?</h3>
        <br />
        Payroll outsourcing is a<b> fast-growing industry,</b> expected to expand by 
        <b>$7 billion by 2027</b> with a CAGR of<b> 5.8%.</b> Firms are realizing the <b>cost-saving 
        and efficiency-boosting</b> benefits of outsourcing payroll, making it a <b> strategic move for long-term success. </b><br />
        <br />
        <b> Key Benefits of Tellida’s Payroll Services</b>
        <br /> <br />
        <b>✔ Saves Time & Money – </b>Reduce costs and free up internal resources <br />
        <b>✔ Boosts Efficiency – </b>Streamlined and automated payroll processes <br />
        <b>✔ Ensures Compliance – </b>Stay ahead of evolving tax laws and regulations<br />
        <b>✔ Minimizes Errors – </b>Precision-driven payroll management<br />
        <b>✔ Enhances Data Security –</b>Strict compliance and secure payroll handling


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

export default PR;