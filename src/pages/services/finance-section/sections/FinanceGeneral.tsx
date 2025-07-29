import React from "react";
import { Link } from "react-router-dom";
import "./FinanceGeneral.css";
import icon1 from "../../../../assets/Featured icon (5).svg";
import icon2 from "../../../../assets/Featured icon (7).svg";
import icon3 from "../../../../assets/Featured icon (8).svg";
import icon4 from "../../../../assets/Featured icon (9).svg";
import icon5 from "../../../../assets/Featured icon (10).svg";
import icon6 from "../../../../assets/Featured icon (11).svg";
import icon7 from "../../../../assets/Featured icon (12).svg";
import icon9 from "../../../../assets/Featured icon (14).svg";
const FinanceGeneral: React.FC = () => {
  return (
    <section className="finance-general-section">
      <div className="finance-general-container">
        <div className="finance-general-services">
          {/* Row 1 */}
          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#FFEDED" }}
            >
              <img src={icon1} alt="Professional Bookkeeping Services" />
            </div>
            <div className="finance-service-text">
              <h4>Bookkeeping Services</h4>
              <p>
                We handle your financial records and ensure accuracy, so you can
                focus on growing your business. <br /> 
              </p>
              <Link to="/bookkeeping" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>


          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#E8F8EC" }}
            >
              <img src={icon2} alt="Year-End Accounts Preparation" />
            </div>
            <div className="finance-service-text">
              <h4>Year-End Accounts Preparation</h4>
              <p>
                We provide comprehensive year-end accounts preparation to ensure
                your financials are accurate and compliant.
              </p>
              <Link to="/YEAP" className="read-more-btn"><button className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>
          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#FFF8E5" }}
            >
              <img src={icon3} alt="VAT Returns" />
            </div>
            <div className="finance-service-text">
              <h4>VAT Returns</h4>
              <p>
                We manage your VAT returns, ensuring timely and accurate
                submissions to stay compliant with regulations.
              </p>
              <Link to="/VR" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#FFEDED" }}
            >
              <img src={icon4} alt="Corporation Tax" />
            </div>
            <div className="finance-service-text">
              <h4>Corporate Tax Returns</h4>
              <p>
                We handle your corporate tax returns, ensuring accuracy and compliance with all tax regulations.
              </p>
              <Link to="/CTR" className="read-more-btn"><button className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>
          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#E8F8EC" }}
            >
              <img src={icon5} alt="Personal Tax" />
            </div>
            <div className="finance-service-text">
              <h4>Personal Tax Returns</h4>
              <p>
              We manage your personal tax returns, ensuring accuracy and compliance with all tax requirements.
              </p>
              <Link to="/PT" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>
          <div className="finance-service">
            <div
              className="finance-service-icon"
              style={{ backgroundColor: "#FFF8E5" }}
            >
              <img src={icon6} alt="Tax Investigations" />
            </div>
            <div className="finance-service-text">
              <h4>Tax Investigations</h4>
              <p>
                We assist with tax investigations, providing expert guidance to
                ensure compliance and protect your interests.
              </p>
              <Link to="/TI" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
            </div>
          </div>

          {/* Row 3 */}
        {/* <div className="finance-centered-row">*/}
            <div className="finance-service">
              <div
                className="finance-service-icon"
                style={{ backgroundColor: "#FFEDED" }}
              >
                <img src={icon7} alt="Management Accounts" />
              </div>
              <div className="finance-service-text">
                <h4>Management Accounts</h4>
                <p>
                  We prepare detailed management accounts to help you make
                  informed financial decisions and track business performance.
                </p>
                <Link to="/MA" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
              </div>
            </div>
            <div className="finance-service">
              <div
                className="finance-service-icon"
                style={{ backgroundColor: "#E8F8EC" }}
              >
                <img src={icon9} alt="Payroll (PAYE)" />
              </div>
              <div className="finance-service-text">
                <h4>Payroll (PAYE)</h4>
                <p>
                  We handle your payroll (PAYE) services, ensuring timely and
                  accurate employee payments and compliance with regulations.
                </p>
                <Link to="/PR" className="read-more-btn"><button  className="read-more-button"><p>Read More...</p></button></Link>
              </div>
            </div>
          </div>
        </div>
      {/*</div> */}
    </section>
  );
};

export default FinanceGeneral;
