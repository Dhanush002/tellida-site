import React from "react";
import "./RemoteGeneral.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHeadset,
  faClipboardList,
  faUserShield,
  faTools,
  faBookOpen,
  faLaptopMedical,
  faServer,
  faEnvelope,
  faGlobe,
  faCloudArrowDown,
  faComputer,
  faShareSquare,
  faUserCog
} from "@fortawesome/free-solid-svg-icons";

const RemoteGeneral: React.FC = () => {
  return (
    <section className="remote-general-section">
      <div className="remote-general-container">
        
        {/* Title */}
        <div className="remote-general-title">
          <h2>
            Transform your IT with our expert remote tech support
            ensuring seamless functionality and proactive maintenance.
          </h2>
        </div>

        {/* Services grid */}
        <div className="remote-general-services">

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <FontAwesomeIcon icon={faHeadset} fontSize="24px" color="#F15A29" />
            </div>
            <div className="remote-service-text">
              <h4>Helpdesk Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <FontAwesomeIcon icon={faClipboardList} fontSize="24px" color="#007630" />
            </div>
            <div className="remote-service-text">
              <h4>Incident Management</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <FontAwesomeIcon icon={faUserShield} fontSize="24px" color="#f79009" />
            </div>
            <div className="remote-service-text">
              <h4>User Account Management</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <FontAwesomeIcon icon={faTools} fontSize="24px" color="#F15A29" />
            </div>
            <div className="remote-service-text">
              <h4>Software and Application Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <FontAwesomeIcon icon={faBookOpen} fontSize="24px" color="#007630" />
            </div>
            <div className="remote-service-text">
              <h4>Training and Documentation</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <FontAwesomeIcon icon={faLaptopMedical} fontSize="24px" color="#f79009" />
            </div>
            <div className="remote-service-text">
              <h4>Remote Support Services</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <FontAwesomeIcon icon={faServer} fontSize="24px" color="#F15A29" />
            </div>
            <div className="remote-service-text">
              <h4>Comprehensive IT Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <FontAwesomeIcon icon={faTools} fontSize="24px" color="#007630" />
            </div>
            <div className="remote-service-text">
              <h4>Proactive Monitoring and Maintenance</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <FontAwesomeIcon icon={faServer} fontSize="24px" color="#f79009" />
            </div>
            <div className="remote-service-text">
              <h4>IT Infrastructure Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <FontAwesomeIcon icon={faEnvelope} fontSize="24px" color="#F15A29" />
            </div>
            <div className="remote-service-text">
              <h4>Email Service Management</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <FontAwesomeIcon icon={faGlobe} fontSize="24px" color="#007630" />
            </div>
            <div className="remote-service-text">
              <h4>Domain Service Management</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <FontAwesomeIcon icon={faCloudArrowDown} fontSize="16px" color="#f79009" />
            </div>
            <div className="remote-service-text">
              <h4>Cloud-Based VOIP PABX <br />System Management</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFEDED" }}>
              <FontAwesomeIcon icon={faComputer} fontSize="24px" color="#F15A29" />
            </div>
            <div className="remote-service-text">
              <h4>Office 365 Administration <br /> and Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#E8F8EC" }}>
              <FontAwesomeIcon icon={faShareSquare} fontSize="24px" color="#007630" />
            </div>
            <div className="remote-service-text">
              <h4>SharePoint Implementation and <br /> Support</h4>
            </div>
          </div>

          <div className="remote-service">
            <div className="remote-service-icon" style={{ backgroundColor: "#FFF8E5" }}>
              <FontAwesomeIcon icon={faUserCog} fontSize="24px" color="#f79009" />
            </div>
            <div className="remote-service-text">
              <h4>Back Office Support Services</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RemoteGeneral;
