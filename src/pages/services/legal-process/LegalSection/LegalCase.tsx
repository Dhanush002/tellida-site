import React, { useState } from "react";
import "./LegalCase.css";
import case1 from "../../../../assets/success1.jpg";


interface CaseStudy {
  title: string;
  modelTitle: string;
  readTime: string;
  image: string;
  description: JSX.Element;
}

const LegalCase: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const caseStudies: CaseStudy[] = [
    {
      title: "Legal Services - Success Story",
      modelTitle: "Legal Services - Success Story",
      readTime: "2mins Read",
      image: case1,
      description: (
        <>
          <p>
            <strong>Challenge : </strong>
            <br />A growing legal firm with 15 solicitors across five branches
            faced an increasing workload due to a rising number of clients. To
            keep up, they needed to recruit additional paralegals and legal
            assistants, which added to their human resources costs and
            management burden. Struggling to manage this expansion efficiently,
            they sought a partnership to streamline operations.
          </p>
          <p>
            <strong>Solution : </strong>
            <br />
            The legal services team built a dedicated team of professionals,
            providing extensive on-the-job training to integrate them
            seamlessly. Structured systems were developed to ensure timely case
            handling and work delivery. Additionally, recruitment and training
            responsibilities were managed, significantly reducing costs and
            improving efficiency.
          </p>
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
      title: "Legal Services - Success Story",
      modelTitle: "Legal Services - Success Story",
      readTime: "2mins Read",
      image: case1,
      description: (
        <>
          <p>
            <strong>Challenge : </strong>
            <br />A growing legal firm with 15 solicitors across five branches
            faced an increasing workload due to a rising number of clients. To
            keep up, they needed to recruit additional paralegals and legal
            assistants, which added to their human resources costs and
            management burden. Struggling to manage this expansion efficiently,
            they sought a partnership to streamline operations.
          </p>
          <p>
            <strong>Solution : </strong>
            <br />
            The legal services team built a dedicated team of professionals,
            providing extensive on-the-job training to integrate them
            seamlessly. Structured systems were developed to ensure timely case
            handling and work delivery. Additionally, recruitment and training
            responsibilities were managed, significantly reducing costs and
            improving efficiency.
          </p>
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
      title: "Legal Services - Success Story",
      modelTitle: "Legal Services - Success Story",
      readTime: "2mins Read",
      image: case1,
      description: (
        <>
          <p>
            <strong>Challenge : </strong>
            <br />A growing legal firm with 15 solicitors across five branches
            faced an increasing workload due to a rising number of clients. To
            keep up, they needed to recruit additional paralegals and legal
            assistants, which added to their human resources costs and
            management burden. Struggling to manage this expansion efficiently,
            they sought a partnership to streamline operations.
          </p>
          <p>
            <strong>Solution : </strong>
            <br />
            The legal services team built a dedicated team of professionals,
            providing extensive on-the-job training to integrate them
            seamlessly. Structured systems were developed to ensure timely case
            handling and work delivery. Additionally, recruitment and training
            responsibilities were managed, significantly reducing costs and
            improving efficiency.
          </p>
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
    <section className="legal-case-studies" id="legal-case-studies-id">
      {/* Top Section */}
      <div className="legal-top">
        <div className="legal-frame-16">
          <h3 className="legal-title">Success Stories</h3>
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

      <div className="legal-cards">
        {caseStudies.map((study, index) => (
          <div
            className="legal-case-study-card"
            key={index}
            onClick={() => openModal(study)}
          >
            <div
              className="legal-image"
              style={{ backgroundImage: `url(${study.image})` }}
            ></div>
            <div className="legal-content-study">
              <h4 className="legal-card-title">{study.title}</h4>
              <p className="legal-read-time">{study.readTime}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      {/* <div className="legal-learn-more">
        <button className="legal-learn-more-button">Learn More &rarr;</button>
      </div> */}

      {modalOpen && selectedStudy && (
        <div className="modal-overlay-legal" onClick={closeModal}>
          <div
            className="modal-content-legal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button-legal" onClick={closeModal}>
              &times;
            </button>
            <h3 className="modal-title-legal">{selectedStudy.modelTitle}</h3>
            <p className="modal-description-legal">
              {selectedStudy.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default LegalCase;
