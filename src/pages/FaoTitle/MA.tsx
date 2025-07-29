import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import NavbarOther from '../../components/NavbarOther';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 

import ServiceHero from '../SerivcesSections/ServiceHero';


const MA: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Management Accounts </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Accurate & Insightful Management Accounts – Empower Your Business with Tellida!</h3> 
        
        <b>Do you have real-time financial insights to make informed business decisions? At Tellida, we provide detailed 
        and timely management accounts to help you track performance, manage cash flow, and drive profitability.
        <br />
        <h3 className="page-title">Common Challenges Firms Face Without Management Accounts</h3> 
        <br />
        ✅ Lack of financial visibility leading to poor decision-making<br />
        ✅ Cash flow mismanagement impacting business stability<br />
        ✅ Difficulty in tracking profitability and identifying growth opportunities <br />
        ✅ Inability to forecast and plan for future business needs <br /> <br />
        💡 If any of these challenges sound familiar, Tellida can help! Our expert team 
        provides customized financial reports tailored to your business needs, ensuring 
        you have a clear picture of your financial health at all times.
        <br />
        <h3 className="page-title">Why Are Management Accounts Essential?</h3>
        <br />
        Successful businesses rely on accurate financial data to make strategic 
        decisions. With evolving market conditions, having up-to-date management 
        accounts ensures you stay ahead of challenges and seize new opportunities. <br />
        <br />
        <b> Key Benefits of Tellida’s Management Accounts Services</b>
        <br /> <br />
        ✔ Real-Time Financial Insights – Make informed business decisions <br />
        ✔ Better Cash Flow Management – Stay in control of your finances <br />
        ✔ Improved Profitability Tracking – Identify strengths and weaknesses<br />
        ✔ Strategic Planning & Forecasting – Plan for growth with confidence<br />
        ✔ Custom Reports Tailored to Your Needs – Get insights that matter to you</b>


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

export default MA;