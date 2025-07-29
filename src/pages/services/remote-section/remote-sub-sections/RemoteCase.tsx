import React, { useRef, useState } from "react";
import "./RemoteCase.css";
import case3 from "../../../../assets/success3.jpg";


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
      title: "Remote Tech Support - Success Story",
      modelTitle : "Remote Tech Support - Success Story",
      readTime: "2mins Read",
      image: case3,
      description: (
        <>
          <p>
            <strong>Challenge:</strong>
          </p>
          <p>
            <strong>Solution :</strong>
          </p>
          <p>
          The remote tech support team provided troubleshooting and maintenance for computer software, internet, email, and printer/scanner-related issues. Additionally, security, file, and application servers, routers, and VPN services were monitored and managed to ensure seamless operations. The team also configured and maintained the Leap Case Management System and provided advisory services on IT security enhancements.
          </p>
          <p>
            <strong>Results:</strong>
          </p>
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

          <p>
          With these strategic improvements, the legal firm optimized its IT operations, ensuring seamless connectivity and efficient system performance across all branches.
          </p>
        </>
      ),
    },
    {
      title: "Remote Tech Support - Success Story",
      modelTitle : "Remote Tech Support - Success Story",
      readTime: "2mins Read",
      image: case3,
      description: (
        <>
          <p>
            <strong>Challenge:</strong>
          </p>
          <p>
            <strong>Solution :</strong>
          </p>
          <p>
          The remote tech support team provided troubleshooting and maintenance for computer software, internet, email, and printer/scanner-related issues. Additionally, security, file, and application servers, routers, and VPN services were monitored and managed to ensure seamless operations. The team also configured and maintained the Leap Case Management System and provided advisory services on IT security enhancements.
          </p>
          <p>
            <strong>Results:</strong>
          </p>
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

          <p>
          With these strategic improvements, the legal firm optimized its IT operations, ensuring seamless connectivity and efficient system performance across all branches.
          </p>
        </>
      ),
    },
    {
      title: "Remote Tech Support - Success Story",
      modelTitle : "Remote Tech Support - Success Story",
      readTime: "2mins Read",
      image: case3,
      description: (
        <>
          <p>
            <strong>Challenge:</strong>
          </p>
          <p>
            <strong>Solution :</strong>
          </p>
          <p>
          The remote tech support team provided troubleshooting and maintenance for computer software, internet, email, and printer/scanner-related issues. Additionally, security, file, and application servers, routers, and VPN services were monitored and managed to ensure seamless operations. The team also configured and maintained the Leap Case Management System and provided advisory services on IT security enhancements.
          </p>
          <p>
            <strong>Results:</strong>
          </p>
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
    <section className="remote-case-studies" id="remote-case-studies-id">
      {/* Top Section */}
      <div className="remote-top">
        <div className="remote-frame-16">
        <h3 className="remote-title">Success Stories </h3>
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
