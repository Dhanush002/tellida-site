import React from 'react';
import { useNavigate } from 'react-router-dom';
import './pageStyle.css';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection'; 
import MobileNavbar from '../../components/MobileNavbar';
import Navbar from '../../components/Navbar'; 
import NavbarOther from '../../components/NavbarOther';
import ServiceHero from '../SerivcesSections/ServiceHero';

const YEAP: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="page-wrapper">
    <NavbarOther />
    
    <div className='title-container'>
    <div className="page-container">
      <h1 className="page-title">Year-End Accounts Preparation</h1>
      <p className="page-content">
        <h3 className="page-titleh4">Stress-Free Year-End Accounts Preparation – Powered by Tellida!</h3> 
        
        Is your firm struggling with the complexities of year-end accounts preparation? 
        At <b>Tellida,</b> we provide <b>accurate, timely, and hassle-free financial reporting</b>—so 
        you can <b>focus on strategic growth</b> while we take care of the numbers.
        <br />
        <h3 className="page-title">Common Challenges Firms Face</h3> 
        <br />
        <b>✅ Meeting strict deadlines</b> without errors <br />
        <b>✅ Ensuring compliance</b> with tax and accounting regulations <br />
        <b>✅ Reconciling financial data</b> and closing books accurately<br />
        <b>✅ Managing workload spikes </b>during the year-end rush <br /> <br />
        <b>💡 If any of these sound familiar, Tellida is here to help!</b> Our expert team ensures your 
        financial statements are prepared <b>on time, error-free, and fully compliant.</b>
        <br />
        <h3 className="page-title">Why Outsource Year-End Accounts Preparation?</h3>
        <br />
        The demand for <b>outsourced accounting services</b> is rising as firms look to improve efficiency and <b>reduce costs.</b> 
        By 2028, businesses relying on outsourcing for financial processes are expected to <b>grow significantly,</b> proving its long-term value. <br />
        <br />
        <b> Key Benefits of Tellida’s Year-End Accounts Services</b>
        <br /> <br />
        <b>✔ Saves Time & Reduces Workload –</b> Focus on your clients, not number-crunching <br />
        <b>✔ Guarantees Accuracy – </b>Error-free financial statements and reconciliations<br />
        <b>✔ Ensures Compliance – </b>Stay aligned with tax laws and regulations <br />
        <b>✔ Cost-Effective Solution – </b>Reduce overhead costs while maintaining quality <br />
        <b>✔ Scalable Support – </b>Handle peak workloads with ease



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

export default YEAP;