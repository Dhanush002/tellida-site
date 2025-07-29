import React from "react";
import "./AddressSection.css";
import SriLankaFlag from "../../assets/lk.png";
import UKFlag from "../../assets/Gb.png";

const AddressSection: React.FC = () => {
  return (
    <section className="address-section-contact">
      <div className="address-content-contact">
        {/* Address Cards */}
        <div className="address-cards-contact">
          {/* UK Office (Now First, with Corporate Styles) */}
          <div className="address-card corporate-contact">
            <div className="card-header-contact">
              <div className="card-location-contact">
                <img
                  src={UKFlag}
                  alt="United Kingdom"
                  className="flag-icon-contact"
                />
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="card-details-contact">
              <p>10 Sutton Plaza, Sutton, SM1 4FT</p>
              <span className="phone-address-contact">(+44) 7404408795</span>
            </div>
          </div>

          {/* Corporate Office (Now Second, with UK Office Styles) */}
          <div className="address-card-contact">
            <div className="card-header-contact">
              <div className="card-location-contact">
                <img
                  src={SriLankaFlag}
                  alt="Sri Lanka"
                  className="flag-icon-contact"
                />
                <span>Sri Lanka</span>
              </div>
              <h3 className="normal-corparate"> Corporate Office</h3>
            </div>
            <div className="card-details-contact">
              <p>Tellida Pvt Ltd Level 5, <br /> No.228  Galle road, Colombo 4</p>
              <p className="small-phone-addres-contact">(+94) 1177 43556</p>
            </div>
          </div>

          {/* Sri Lanka Office (Remains the Same) */}
          <div className="address-card-contact">
            <div className="card-header-contact">
              <div className="card-location-contact">
                <img
                  src={SriLankaFlag}
                  alt="Sri Lanka"
                  className="flag-icon-contact"
                />
                <span>Sri Lanka</span>
              </div>
            </div>
            <div className="card-details-contact">
              <p>No. 26, Vajira Road, Colombo 4, Sri Lanka</p>
              <p className="small-phone-addres-contact">(+94) 1177 43556</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
