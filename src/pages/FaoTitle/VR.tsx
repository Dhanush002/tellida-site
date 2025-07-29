import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';

const VR: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Vat Returns </h1>
      <p className="page-content">
        <h3 className="page-titleh4">Accurate & Timely VAT Returns – Stay Compliant with Tellida!</h3> 
        
        <b>Navigating the complexities of VAT returns can be time-consuming and overwhelming. At Tellida, 
        we ensure your VAT returns are filed accurately, 
        on time, and fully compliant—so you can avoid penalties and focus on running your business.
        <br />
        <h3 className="page-title">Common VAT Challenges Businesses Face</h3> 
        <br />
        ✅ Complex VAT calculations for different products and services<br />
        ✅ Keeping up with changing VAT regulations <br />
        ✅ Avoiding penalties and interest due to late or incorrect filings <br />
        ✅ Reconciling input and output VAT to ensure accurate claims <br /> <br />
        💡 If any of these sound familiar, Tellida is your solution! Our VAT experts 
        handle everything—from calculating VAT liabilities to submitting accurate returns—so you stay compliant and stress-free.
        <br />
        <h3 className="page-title">Why Outsource VAT Return Filing?</h3>
        <br />
        With VAT regulations evolving, businesses are turning to specialized VAT service providers to avoid costly errors and maintain compliance. 
        The VAT compliance market is expected to grow significantly, as businesses recognize the benefits of expert handling. <br />
        <br />
        <b> Key Benefits of Tellida’s Bookkeeping Services</b>
        <br /> <br />
        ✔ Ensures 100% Compliance – Stay up to date with VAT laws and avoid fines <br />
        ✔ Accurate Calculations – No more errors in input and output VAT reporting <br />
        ✔ Saves Time & Resources – Focus on business growth, not tax filings <br />
        ✔ Improves Cash Flow – Optimize VAT claims and payments <br />
        ✔ Timely Submissions – Avoid penalties with on-time, hassle-free filing</b>


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

export default VR;