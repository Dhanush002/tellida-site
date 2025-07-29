import React from "react";
import "./General.css";
import icon1 from "../../../../assets/Featured icon.svg";
import icon2 from "../../../../assets/Featured icon (1).svg"
import icon3 from "../../../../assets/Featured icon (3).svg"
import icon4 from "../../../../assets/Featured icon (4).svg"
import icon5 from "../../../../assets/Featured icon (2).svg"
const General: React.FC = () => {
  return (
    <section className="general-section">
      <div className="general-container">
        {/* Title */}
        <div className="general-title">
          <h3>Benefits of Partnering with Us</h3>
        </div>

        {/* Benefits */}
        <div className="general-benefits">
          {/* Benefit 1 */}
          <div className="benefit">
            <div className="benefit-icon">
              <img src={icon1} alt="icon1" />
            </div>
            <div className="benefit-text">
              <h4>Cost Saving</h4>
              {/* <p>
                Clients can save up to 60% on payroll costs per head, along with
                additional savings on overheads, equipment, and office space.
              </p> */}
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="benefit">
            <div className="benefit-icon">
              <img src={icon2} alt="icon1" />
            </div>
            <div className="benefit-text">
              <h4>Increase Efficiency</h4>
              {/* <p>
                We provide a dedicated team trained in UK conveyancing, boosting
                your core team's efficiency.
              </p> */}
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="benefit">
            <div className="benefit-icon">
              <img src={icon5} alt="icon1" />
            </div>
            <div className="benefit-text">
              <h4>Time Difference</h4>
              {/* <p>
                We are five and a half hours ahead of the UK, allowing us to
                complete tasks and send them before UK business hours.
              </p> */}
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="benefit">
            <div className="benefit-icon">
              <img src={icon3} alt="icon1" />
            </div>
            <div className="benefit-text">
              <h4>Time Spent with Client</h4>
              {/* <p>
                Partnering with Tellida allows you to increase your
                client-facing time by offloading your workload to us.
              </p> */}
            </div>
          </div>

          {/* Benefit 5 */}
          <div className="benefit">
            <div className="benefit-icon">
              <img src={icon4} alt="icon1" />
            </div>
            <div className="benefit-text">
              <h4>Higher Revenue Generation</h4>
              {/* <p>
                Our cost-effective, efficient services enable you to offer
                competitive market rates without sacrificing quality, leading to
                significant growth in your clientele.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default General;
