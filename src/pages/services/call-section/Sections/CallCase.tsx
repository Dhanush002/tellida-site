import React, {useState } from "react";
import "./CallCase.css";
import case2 from "../../../../assets/success2.jpg";

interface CaseStudy {
  title: string;
  modelTitle : string;
  readTime: string;
  image: string;
  description: JSX.Element;
}

const RemoteCase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const caseStudies: CaseStudy[] = [
    {
        title: "Contact Centre Services - Success Story",
        modelTitle : "Contact Centre Services - Success Story",
        readTime: "2mins Read",
        image: case2,
        description: (
          <>
            <p>
              <strong>Challenge:</strong> 
            </p>
           
            <p>
            A leading patient entertainment provider in Australia, serving over 70 public hospitals, faced operational inefficiencies in handling high Contact volumes. They required a dedicated team to manage patient requests, including TV and phone activations, Wi-Fi connections, troubleshooting, and support during hospital transfers. The challenge was to ensure instant activations, robust reporting, and zero missed calls while maintaining 24/7 support.
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <p> 
            The Contact centre team implemented a structured approach by creating an easily accessible database for hospital procedures. Double monitor setups enabled agents to manage multiple systems simultaneously, improving response time. A team was trained to handle 2,000 calls per day (40,000 calls per month), reducing missed call rates. Additionally, monthly customized reports provided valuable insights to enhance customer satisfaction and operational efficiency. The team also took over customer email handling and expanded to manage back-office operations, including financial processing and patient billing.
  
            </p>
            <p>
              <strong>Results:</strong>
            </p>
  
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
  
            <p>
            With this approach, the client successfully improved service quality, optimized costs, and achieved operational scalability.
            </p>
          </>
        ),
      },
      {
        title: "Contact Centre Services - Success Story",
        modelTitle : "Contact Centre Services - Success Story",
        readTime: "2mins Read",
        image: case2,
        description: (
          <>
            <p>
              <strong>Challenge:</strong> 
            </p>
           
            <p>
            A leading patient entertainment provider in Australia, serving over 70 public hospitals, faced operational inefficiencies in handling high Contact volumes. They required a dedicated team to manage patient requests, including TV and phone activations, Wi-Fi connections, troubleshooting, and support during hospital transfers. The challenge was to ensure instant activations, robust reporting, and zero missed calls while maintaining 24/7 support.
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <p> 
            The Contact centre team implemented a structured approach by creating an easily accessible database for hospital procedures. Double monitor setups enabled agents to manage multiple systems simultaneously, improving response time. A team was trained to handle 2,000 calls per day (40,000 calls per month), reducing missed call rates. Additionally, monthly customized reports provided valuable insights to enhance customer satisfaction and operational efficiency. The team also took over customer email handling and expanded to manage back-office operations, including financial processing and patient billing.
  
            </p>
            <p>
              <strong>Results:</strong>
            </p>
  
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
  
            <p>
            With this approach, the client successfully improved service quality, optimized costs, and achieved operational scalability.
            </p>
          </>
        ),
      },
      {
        title: "Contact Centre Services - Success Story",
        modelTitle : "Contact Centre Services - Success Story",
        readTime: "2mins Read",
        image: case2,
        description: (
          <>
            <p>
              <strong>Challenge:</strong> 
            </p>
           
            <p>
            A leading patient entertainment provider in Australia, serving over 70 public hospitals, faced operational inefficiencies in handling high Contact volumes. They required a dedicated team to manage patient requests, including TV and phone activations, Wi-Fi connections, troubleshooting, and support during hospital transfers. The challenge was to ensure instant activations, robust reporting, and zero missed calls while maintaining 24/7 support.
            </p>
            <p>
              <strong>Solution:</strong>
            </p>
            <p> 
            The Contact centre team implemented a structured approach by creating an easily accessible database for hospital procedures. Double monitor setups enabled agents to manage multiple systems simultaneously, improving response time. A team was trained to handle 2,000 calls per day (40,000 calls per month), reducing missed call rates. Additionally, monthly customized reports provided valuable insights to enhance customer satisfaction and operational efficiency. The team also took over customer email handling and expanded to manage back-office operations, including financial processing and patient billing.
  
            </p>
            <p>
              <strong>Results:</strong>
            </p>
  
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
  
            <p>
            With this approach, the client successfully improved service quality, optimized costs, and achieved operational scalability.
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
    <section className="remote-case-studies" id="remote-case-studies-id">
      {/* Top Section */}
      <div className="remote-top">
        <div className="remote-frame-16">
          <h3 className="remote-title">Success Stories</h3>
          {/* <p className="legal-subtitle">
            Tellida's outsourcing solutions boost efficiency and streamline
            operations.
          </p> */}
        </div>
        {/* <div className="legal-frame-31">
          <button
            className="legal-nav-button"
            onClick={scrollLeft}
            aria-label="legal-Scroll Left"
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={24} />
          </button>
          <button
            className="legal-nav-button"
            onClick={scrollRight}
            aria-label="legal-Scroll Right"
            disabled={currentIndex === totalPages - 1}
          >
            <ArrowRight size={24} />
          </button>
        </div> */}
      </div>

      {/* Scroll Frame */}
    
       
          <div className="remote-cards">
            {caseStudies.map((study, index) => (
              <div
                className="remote-case-study-card"
                key={index}
                onClick={() => openModal(study)}
              >
                <div
                  className="remote-image"
                  style={{ backgroundImage: `url(${study.image})` }}
                ></div>
                <div className="remote-content-study">
                  <h4 className="remote-card-title">{study.title}</h4>
                  <p className="remote-read-time">{study.readTime}</p>
                </div>
              </div>
            ))}
          </div>
     

      {/* Learn More Button */}
      {/* <div className="legal-learn-more">
        <button className="legal-learn-more-button">Learn More &rarr;</button>
      </div> */}

      {modalOpen && selectedStudy && (
        <div className="modal-overlay-remote" onClick={closeModal}>
          <div
            className="modal-content-remote"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-remote" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title-remote">{selectedStudy.modelTitle}</h3>
            <p className="modal-description-remote">
              {selectedStudy.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default RemoteCase;
