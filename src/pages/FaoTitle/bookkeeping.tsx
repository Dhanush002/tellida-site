import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';



const Bookkeeping: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
      <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Professional Bookkeeping</h1>
      <p className="page-content">
        <h3 className="page-titleh4">Reliable & Cost-Effective Financial Support for CPAs, EAs, and Accounting Firms – All in One Place!</h3> 
        
        Are you spending too much time and money on bookkeeping instead of focusing on growing your business? At <b> Tellida, </b>
        we provide <b> seamless and efficient financial support services </b> so you can <b>streamline operations and maximize profitability </b>—without the hassle.
        <br />
        <h3 className="page-title">Common Challenges Firms Face</h3> 
        <br />
        ✅ High costs just to maintain financial records <br />
        ✅ Inefficient use of in-house resources <br />
        ✅ Struggling to find a <b> trusted, experienced </b> partner <br /> <br />
        💡 If any of these sound familiar, you’re in the <b>right place!</b> Let <b>Tellida</b> take care of your client’s bookkeeping, 
        so you can <b>focus on what truly matters—business growth.</b>
        <br />
        <h3 className="page-title">Why Partner with Tellida?</h3>
        <br />
        Outsourcing financial processes is <b> rapidly transforming the industry,</b> helping firms <b>cut costs and increase efficiency. </b>
        By 2028, the outsourced bookkeeping industry is expected to <b> grow significantly,</b> proving its undeniable value. <br />
        <br />
        <b> Key Benefits of Tellida’s Bookkeeping Services</b>
        <br /> <br />
        <b>✔ Saves Time – </b>More time to focus on high-value tasks <br />
        <b>✔ Reduces Errors –</b> Accuracy-driven approach <br />
        <b>✔ Minimizes Paperwork – </b>Fully digital solutions <br />
        <b>✔ Lower Operational Costs – </b>Reduce overhead expenses

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

export default Bookkeeping;