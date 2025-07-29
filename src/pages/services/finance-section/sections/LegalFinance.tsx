import React, { useRef, useState } from "react";
import "./LegalFinance.css";
import case4 from "../../../../assets/success4.jpg";
import case5 from "../../../../assets/remote.png";

interface CaseStudy {
  title: string;
  readTime: string;
  image: string;
  description: JSX.Element;
}

const LegalFinance: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const caseStudies: CaseStudy[] = [
    {
      title: "Account Services",
      readTime: "2mins Read",
      image: case4,
      description: (
        <>
          <p>
            <strong>Overview:</strong> One of the largest accounting practices
            in London, with multiple branches, outsourced work related to their
            clients to Tellida. This case study focuses on the migration of
            accounts that we performed for the client.
          </p>
          <p>
            <strong>Client Requirements:</strong> The company required the
            migration of accounts for three clients spanning three financial
            years (from Excel to Xero). This process included:
          </p>
          <ul>
            <li>Setting up the chart of accounts in Xero from scratch</li>
            <li>Configuring bank accounts</li>
            <li>Converting opening balances from Excel to Xero</li>
            <li>Entering approximately 2,000 transactions per year</li>
            <li>
              Converting foreign currency bank transactions to match GBP amounts
              in Excel by manually adjusting each transaction to the exchange
              rate provided in Excel. (Xero's default exchange rates from XE.com
              did not align with the Excel-provided rates.)
            </li>
          </ul>
          <p>
            <strong>Our Solution:</strong> To meet the client's requirements,
            we:
          </p>
          <ul>
            <li>
              Worked around the clock, dedicating extra hours, including
              weekends, to meet the deadline
            </li>
            <li>Successfully completed the migration within 180 hours</li>
            
              <p>
                <b>
              Delivered all routine monthly processes for Quartz and Mel
              Science, including: 
              </b>
              </p>
              <ul>
                <li>Bookkeeping</li>
                <li>Preparing VAT returns</li>
                <li>Producing management accounts</li>
              </ul> 
            
            <li>
              Ensured adherence to the client’s strict reporting deadlines,
              particularly delivering Mel Science management accounts on WD1
              (Working Day 1), despite the initial agreement being within two
              working days.
            </li>
          </ul>
          <p>
            <strong>Key Achievements:</strong> By ensuring timely delivery of
            all processes, we have significantly supported the client in
            adhering to their reporting deadlines. Despite receiving input only
            by midday SL time on WD1, we consistently meet the client’s
            expectations.
          </p>
        </>
      ),
    },
    {
      title: "Account Services",
      readTime: "2mins Read",
      image: case5,
      description: (
        <>
          <p>
            <strong>Overview:</strong> A major London-based accounting firm, 
            with several branches, entrusted Tellida to migrate client accounts 
            across three financial years from Excel to Xero. This case study 
            showcases how we handled this complex transition efficiently.
          </p>
          <p>
            <strong>Client Requirements:</strong> The firm needed the migration 
            of accounts from Excel to Xero for three clients, covering three years. 
            The requirements included:
          </p>
          <ul>
            <li>Setting up a new chart of accounts in Xero.</li>
            <li>Configuring bank accounts in Xero.</li>
            <li>Converting opening balances from Excel.</li>
            <li>Entering 2,000 transactions per year into Xero.</li>
            <li>
            Adjusting foreign currency transactions to match GBP amounts 
            in Excel, as Xero’s exchange rates didn’t match the provided rates.
            </li>
          </ul>
          <p>
            <strong>Our Solution:</strong> We met the client’s requirements by:
          </p>
          <ul>
            <li>
            Committing extra hours, including weekends, to ensure timely delivery.
            </li>
            <li>Completing the migration within 180 hours.</li>
            
              <p>
                <b>
                Managing routine monthly processes, such as:  
              </b>
              </p>
              <ul>
                <li>Bookkeeping</li>
                <li>VAT returns</li>
                <li>Management accounts preparation</li>
              </ul> 
            
            <li>
            Meeting strict deadlines, delivering management accounts on Working Day 1 
            (WD1) despite receiving input by midday SL time.
            </li>
          </ul>
          <p>
            <strong>Key Achievements:</strong> Our dedication to accuracy and timeliness 
            allowed the firm to meet all reporting deadlines. The successful migration 
            and completion of all tasks within the specified timeframe ensured the client 
            received reliable financial data for their operations.
          </p>
        </>
      ),
    },
    {
      title: "Account Services",
      readTime: "2mins Read",
      image: case4,
      description: (
        <>
          <p>
            <strong>Overview:</strong> One of the largest accounting practices
            in London, with multiple branches, outsourced work related to their
            clients to Tellida. This case study focuses on the migration of
            accounts that we performed for the client.
          </p>
          <p>
            <strong>Client Requirements:</strong> The company required the
            migration of accounts for three clients spanning three financial
            years (from Excel to Xero). This process included:
          </p>
          <ul>
            <li>Setting up the chart of accounts in Xero from scratch</li>
            <li>Configuring bank accounts</li>
            <li>Converting opening balances from Excel to Xero</li>
            <li>Entering approximately 2,000 transactions per year</li>
            <li>
              Converting foreign currency bank transactions to match GBP amounts
              in Excel by manually adjusting each transaction to the exchange
              rate provided in Excel. (Xero's default exchange rates from XE.com
              did not align with the Excel-provided rates.)
            </li>
          </ul>
          <p>
            <strong>Our Solution:</strong> To meet the client's requirements,
            we:
          </p>
          <ul>
            <li>
              Worked around the clock, dedicating extra hours, including
              weekends, to meet the deadline
            </li>
            <li>Successfully completed the migration within 180 hours</li>
            
              <p>
                <b>
              Delivered all routine monthly processes for Quartz and Mel
              Science, including: 
              </b>
              </p>
              <ul>
                <li>Bookkeeping</li>
                <li>Preparing VAT returns</li>
                <li>Producing management accounts</li>
              </ul> 
            
            <li>
              Ensured adherence to the client’s strict reporting deadlines,
              particularly delivering Mel Science management accounts on WD1
              (Working Day 1), despite the initial agreement being within two
              working days.
            </li>
          </ul>
          <p>
            <strong>Key Achievements:</strong> By ensuring timely delivery of
            all processes, we have significantly supported the client in
            adhering to their reporting deadlines. Despite receiving input only
            by midday SL time on WD1, we consistently meet the client’s
            expectations.
          </p>
        </>
      ),
    },
  ];

  const openModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedStudy(null);
  };

  return (
    <section className="legal-case-studies-finance">
      {/* Top Section */}
      <div className="legal-top-finance">
        <div className="legal-frame-16-finance">
          <h3 className="legal-title-finance">
            Success Stories
          </h3>
          {/* <p className="legal-subtitle-finance">
            Tellida's outsourcing solutions boost efficiency and streamline
            operations.
          </p> */}
        </div>
        {/* <div className="legal-frame-31-finance">
          <button
            className="legal-nav-button-finance"
            onClick={scrollLeft}
            aria-label="legal-Scroll Left-finance"
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            className="legal-nav-button-finance"
            onClick={scrollRight}
            aria-label="legal-Scroll Right-finance"
            disabled={currentIndex === totalPages - 1}
          >
            <ArrowRight size={24} />
          </button>
        </div> */}
      </div>

      {/* Scroll Frame */}

      <div className="legal-cards-finance">
        {caseStudies.map((study, index) => (
          <div
            className="legal-case-study-card-finance"
            key={index}
            onClick={() => openModal(study)}
          >
            <div
              className="legal-image-finance"
              style={{ backgroundImage: `url(${study.image})` }}
            ></div>
            <div className="legal-content-study-finance">
              <h4 className="legal-card-title-finance">{study.title}</h4>
              <p className="legal-read-time-finance">{study.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      {/* <div className="legal-learn-more-finance">
        <button className="legal-learn-more-button-finance">Learn More &rarr;</button>
      </div> */}

      {modalOpen && selectedStudy && (
        <div className="modal-overlay-finance" onClick={closeModal}>
          <div
            className="modal-content-finance"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-finance" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title-finance">{selectedStudy.title}</h3>
            <p className="modal-description-finance">
              {selectedStudy.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LegalFinance;
