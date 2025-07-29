import React, { useRef, useState } from "react";
import "./CaseStudies.css";
import case1 from "../../assets/success1.jpg";
import case2 from "../../assets/success2.jpg";
import case3 from "../../assets/success3.jpg";
import case4 from "../../assets/success4.jpg";

interface CaseStudy {
  title: string;
  modelTitle : string;
  readTime: string;
  image: string;
  description: JSX.Element;
}

const LegalCaseHome : React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const caseStudies: CaseStudy[] = [
    {
      title: "Finance and Accounting - Success Story",
      modelTitle : "Finance and Accounting - Success Story",
      readTime: "Read More",
      image: case4,
      description: (
        <>
          <p>
            <strong>Overview:</strong> A major London-based accounting firm, 
            with several branches, entrusted Tellida to migrate client accounts 
            across three financial years from Excel to Xero. This case study 
            showcases how we handled this complex transition efficiently.
          </p>
          <br />
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
          <br />
          <p>
            <strong>Our Solution:</strong> We met the client’s requirements by:
          </p>
          <ul>
            <li>
            Committing extra hours, including weekends, to ensure timely delivery.
            </li>
            <li>Completing the migration within 180 hours.</li>
            <br />
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
          <br />
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
      title: "Legal Services - Success Story",
      modelTitle : "Legal Services - Success Story",
      readTime: "Read More",
      image: case1,
      description: (
        <>
          <p>
            <strong>Challenge : </strong>
            <br />
            A growing legal firm with 15 solicitors across five branches faced an increasing workload due to a rising number of clients. To keep up, they needed to recruit additional paralegals and legal assistants, which added to their human resources costs and management burden. Struggling to manage this expansion efficiently, they sought a partnership to streamline operations.
          </p>
          <br />
          <p>
            <strong>Solution : </strong>
            <br />
            The legal services team built a dedicated team of professionals, providing extensive on-the-job training to integrate them seamlessly. Structured systems were developed to ensure timely case handling and work delivery. Additionally, recruitment and training responsibilities were managed, significantly reducing costs and improving efficiency.
          </p>
          <br />
          <ul>
            <li>Reduced backlog with an optimized workflow</li>
            <li>Quick turnaround time on legal processes</li>
            <li>Staff aligned with UK working hours for seamless operations</li>
            <li>Improved case settlement timelines</li>
            <li>Cost-effective recruitment and training support</li>
            <li>Enhanced capacity for business growth and expansion</li>
          </ul>
        </>
      ),
    },
    {
      title: "Contact Centre Services - Success Story",
      modelTitle : "Contact Centre Services - Success Story",
      readTime: "Read More",
      image: case2,
      description: (
        <>
          <p>
            <strong>Challenge:</strong> 
          </p>
         
          <p>
          A leading patient entertainment provider in Australia, serving over 70 public hospitals, faced operational inefficiencies in handling high call volumes. They required a dedicated team to manage patient requests, including TV and phone activations, Wi-Fi connections, troubleshooting, and support during hospital transfers. The challenge was to ensure instant activations, robust reporting, and zero missed calls while maintaining 24/7 support.
          </p>
          <br />
          <p>
            
            <strong>Solution:</strong>
          </p>
          <p> 
          The call centre team implemented a structured approach by creating an easily accessible database for hospital procedures. Double monitor setups enabled agents to manage multiple systems simultaneously, improving response time. A team was trained to handle 2,000 calls per day (40,000 calls per month), reducing missed call rates. Additionally, monthly customized reports provided valuable insights to enhance customer satisfaction and operational efficiency. The team also took over customer email handling and expanded to manage back-office operations, including financial processing and patient billing.

          </p>
          <p>
            <strong>Results:</strong>
          </p>
          <br />
          <ul>
            <li>24/7 support with zero missed calls</li>
            <li>
               High levels of customer satisfaction
            </li>
            <li>Scalable operations to meet increasing demand</li>
            <li>Data-driven reports for decision-making</li>
            <li>Online activations</li>
            <li>Streamlined call and email management</li>
            <li>Significant cost reduction and improved efficiency</li>
            <li>Reduction in HR overheads through outsourcing</li>
            <li>Enhanced adaptability to changing hospital needs</li>
          </ul>
          <br />
          <p>
          With this approach, the client successfully improved service quality, optimized costs, and achieved operational scalability.
          </p>
        </>
      ),
    },
    {
      title: "Remote Tech Support - Success Story",
      modelTitle : "Remote Tech Support - Success Story",
      readTime: "Read More",
      image: case3,
      description: (
        <>
          <p>
            <strong>Challenge:</strong>
          </p>
          <p>
            <strong>Solution :</strong>
          </p>
          <br />
          <p>
          The remote tech support team provided troubleshooting and maintenance for computer software, internet, email, and printer/scanner-related issues. Additionally, security, file, and application servers, routers, and VPN services were monitored and managed to ensure seamless operations. The team also configured and maintained the Leap Case Management System and provided advisory services on IT security enhancements.
          </p>
          <p>
            <strong>Results:</strong>
          </p>
          <br />
          <ul>
            <li>
            Improved inter-branch connectivity via secure VPN integration
            </li>
            <li>
            Enhanced IT security and proactive issue resolution
            </li>
            <li>
            Reliable troubleshooting for software, hardware, and network components
            </li>
            <li>
            24/7 support aligned with UK working hours
            </li>
            <li>
            Increased operational efficiency and staff productivity
            </li>
            <li>
            Cost-effective IT management and reduced overhead expenses
            </li>
          </ul>
          <br />
          <p>
          With these strategic improvements, the legal firm optimized its IT operations, ensuring seamless connectivity and efficient system performance across all branches.
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

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: -(cardWidth + 16) * cardsPerPage,
  //       behavior: "smooth",
  //     });
  //     setCurrentIndex(currentIndex - 1);
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({
  //       left: (cardWidth + 16) * cardsPerPage,
  //       behavior: "smooth",
  //     });
  //     setCurrentIndex(currentIndex + 1);
  //   }
  // };

  return (
    <section className="legal-case-studies-home" id="legal-case-studies-id">
      {/* Top Section */}
      <div className="legal-top-home">
        <div className="legal-frame-16-home">
          <h3 className="legal-title-section">
            Success Stories
          </h3>

          <h3 className="legal-title-homee">How Tellida Transformed Business Operations</h3>
          <p className="legal-subtitle-home">
            Tellida's outsourcing solutions boost efficiency and streamline
            operations.
          </p>
        </div>
        {/* <div className="legal-frame-31-home">
          <button
            className="legal-nav-button-home"
            onClick={scrollLeft}
            aria-label="legal-Scroll Left"
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            className="legal-nav-button-home"
            onClick={scrollRight}
            aria-label="legal-Scroll Right"
            disabled={currentIndex === totalPages - 1}
          >
            <ArrowRight size={24} />
          </button>
        </div> */}
      </div>

      {/* Scroll Frame */}
      <div className="legal-scroll-line-home">
        <div className="legal-scroll-frame-home" ref={scrollContainerRef}>
          <div className="legal-cards-home">
            {caseStudies.map((study, index) => (
              <div
                className="legal-case-study-card-home"
                key={index}
                onClick={() => openModal(study)}
              >
                <div
                  className="legal-image-home"
                  style={{ backgroundImage: `url(${study.image})` }}
                ></div>
                <div className="legal-content-study-home">
                  <h5 className="legal-card-title-home">{study.title}</h5>
                  <p className="legal-read-time-home">{study.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learn More Button
      <div className="legal-learn-more-home">
        <button className="legal-learn-more-button-home">Learn More &rarr;</button>
      </div> */}

      {modalOpen && selectedStudy && (
        <div className="modal-overlay-home" onClick={closeModal}>
          <div className="modal-content-home" onClick={(e) => e.stopPropagation()}>
            <button className="close-button-home" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title-home">{selectedStudy.modelTitle}</h3>
            <p className="modal-description-home">{selectedStudy.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LegalCaseHome;
