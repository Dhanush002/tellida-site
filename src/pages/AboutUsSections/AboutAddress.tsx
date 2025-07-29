import React from "react";
import "./AboutAddressSection.css";
import SriLankaFlag from "../../assets/lk.png";
import UKFlag from "../../assets/Gb.png";

const AboutAddressSection: React.FC = () => {
  return (
    <section className="address-section-about">
      <div className="address-content-about">
        {/* Address Cards */}
        <div className="address-cards-about">
          
          {/* UK Office (Now First, with Corporate Styles) */}
          <div className="address-card corporate-about">
            <div className="card-header-about">
              <div className="card-location-about">
                <img src={UKFlag} alt="United Kingdom" className="flag-icon-about" />
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="card-details-about">
              <p>10 Sutton Plaza, Sutton, SM1 4FT</p>
              <span className="phone-address-about">(+44) 7404408795</span>
            </div>
          </div>

          {/* Corporate Office (Now Second, with UK Office Styles) */}
          <div className="address-card-about">
            <div className="card-header-about">
               
              <div className="card-location-about">
                <img src={SriLankaFlag} alt="Sri Lanka" className="flag-icon-about" />
                <span>Sri Lanka</span>
              </div>
              <h3 className="normal-corparate"> Corporate Office</h3>
            </div>
            <div className="card-details-about">
            <p>Tellida Pvt Ltd Level 5, <br /> No. 228 Galle Road, Colombo 4, Sri Lanka</p>
              <p className="small-phone-addres-about">(+94) 1177 43556</p>
            </div>
          </div>

          {/* Sri Lanka Office (Remains the Same) */}
          <div className="address-card-about">
            <div className="card-header-about">
              <div className="card-location-about">
                <img src={SriLankaFlag} alt="Sri Lanka" className="flag-icon-about" />
                <span>Sri Lanka</span>
              </div>
            </div>
            <div className="card-details-about">
            <p>No. 26, Vajira Road,
            Colombo 4, Sri Lanka</p>
              <p className="small-phone-addres-about">(+94) 1177 43556</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAddressSection;
