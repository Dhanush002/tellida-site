import React from "react";
import "./JourneyOfExcellence.css";
const JourneyOfExcellence: React.FC = () => {
  interface TimelineEvent {
    year: string;
    title: string;
    description: string | string[];
    image?: string;
  }

  const timelineEvents: TimelineEvent[] = [
    {
      year: "2011",
      title: "Tellida’s Journey Begins",
      description:
        "Incorporation of Tellida, marking the start of our journey as a trusted Business Process Outsourcing partner.",
      
    },
    {
      year: "2013",
      title: "Excellence Recognized",
      description: [
        "• Awarded the prestigious Services Sector Gold Award for Export Excellence (Small Companies Category) in Sri Lanka.",
        "• Honored with the ICT Entrepreneurship of the Year at the Sri Lankan NBQSA Annual IT Excellence Awards.",
        "• Achieved ISO 27001:2005 certification for Information Security, setting a high standard for data protection and security.",
      ],
      image: "../../assets/Rectangle 66.png",
    },
    {
      year: "2014",
      title: "Global Training Partnerships",
      description:
        "Recognized as an ACCA Approved Gold Status Employer and a CIMA-UK Training Partner, emphasizing our commitment to professional development.",
      image: "../../assets/Rectangle 66.png",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Launched our second delivery center to accommodate growing operations and client needs.",
      image: "../../assets/Rectangle 66.png",
    },
    {
      year: "2016",
      title: "Advancing Careers in Finance",
      description:
        "Became a CA Sri Lanka Training Partner, further enhancing opportunities for finance professionals.",
      image: "../../assets/Rectangle 66.png",
    },
    {
      year: "2017",
      title: "Enhanced Security Standards",
      description:
        "Upgraded to ISO 27001:2013 certification, reaffirming our dedication to robust information security practices.",
      image: "../../assets/Rectangle 66.png",
    },
    {
      year: "2022",
      title: "Going Global",
      description:
        "Initiated Tellida UK Operations, extending our presence and services to the UK market.",
      image: "../../assets/Rectangle 66.png",
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-header">
        <h2 className="journey-title">Our Milestones</h2>
        {/* <p className="journey-subtitle">
          Magna sodales et elementum consectetur sit accumsan sed ultrices.
        </p> */}
      </div>
      <div className="journey-timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">
              <div className="timeline-circle-line">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
              </div>
              <h3>{event.year}</h3>
            </div>
            <div className="timeline-details">
              <h4>{event.title}</h4>
              {Array.isArray(event.description) ? (
                <ul className={`timeline-description description-${index}`}>
                  {event.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className={`timeline-description description-${index}`}>
                  {event.description}
                </p>
              )}
              {event.image && (
                <div className="timeline-image-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="timeline-image"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyOfExcellence;
