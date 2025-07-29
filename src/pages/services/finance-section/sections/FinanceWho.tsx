import "./FinanceWho.css";
import Image1 from "../../../../assets/R59.png";
import Image2 from "../../../../assets/R80.png";
import Image3 from "../../../../assets/R81.png";

const FinanceWho = () => {
  return (
    <section className="finance-section">
      <div className="finance-container">
        {/* Text Section */}
        <div className="finance-text">
          <p className="finance-highlight">We are team of experts</p>
          <h1 className="finance-title">
            Understanding your finances <br />
            should be three things:
            <br />
            simple, effortless, and affordable.
          </h1>
          <p className="finance-description">
            Tellida offers comprehensive finance services, including bookkeeping, cash
            flow forecasting, statutory reporting, and KPI dashboards. Their tailored
            solutions optimise processes, improve visibility, and drive growth while
            maintaining cost efficiency.
          </p>
        </div>

        {/* Images Section */}
        <div className="finance-images">
          <div className="finance-image" style={{ backgroundImage: `url(${Image1})` }} />
          <div className="finance-image" style={{ backgroundImage: `url(${Image2})` }} />
          <div className="finance-image" style={{ backgroundImage: `url(${Image3})` }} />
        </div>
      </div>
    </section>
  );
};

export default FinanceWho;
