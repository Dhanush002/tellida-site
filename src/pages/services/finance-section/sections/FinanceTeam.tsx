import React, { useRef } from "react";
import "./FinanceTeam.css";

// Leadership images

import member4 from "../../../../assets/Anas.jpg";

// Operational team images
import member2 from "../../../../assets/operational/Chamara Jayasanka - Finance and Accounts Outsourcing.jpg";


const OurTeam = () => {
  const operationsRef = useRef<HTMLDivElement>(null);

  const operationsMembers = [
    {
      name: "Anas Yoosuff",
      position: "Manager - Finance and Accounts Outsourcing",
      image: member4,
    },

    {
      name: "Chamara Jayasanka",
      position: "Lead Accountant - Finance and Accounts Outsourcing ",
      image: member2,
      linkedin: "",
    },
  ];

  const scroll = (
    direction: "left" | "right",
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollTo({
        left:
          direction === "left"
            ? ref.current.scrollLeft - scrollAmount
            : ref.current.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  interface TeamCardProps {
    name: string;
    position: string;
    image: string;
  }

  const TeamCard: React.FC<TeamCardProps> = ({ name, position, image }) => {
    return (
      <div className="team-card">
        <img src={image} alt={name} className="team-image" />
        <div className="team-content">
          <h3 className="team-name">{name}</h3>
          <p className="team-position">{position}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="our-team">
      <div className="content">
        <div className="head">
          <h4 className="sub-title">Our Staff</h4>
          <h2 className="section-title-team">Meet Our Professional Staff <br /></h2>
        </div>

        <div className="mobile-team">
          {/* Leadership Cards */}

          <div className="scroll-container">
            <button
              className="scroll-button left"
              onClick={() => scroll("left", operationsRef)}
            >
              ←
            </button>
            <div className="cards-container" ref={operationsRef}>
              {operationsMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="team-image"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="linkedin-icon">
                      <img
                        src={require("../../../../assets/Group.png")}
                        alt="LinkedIn"
                      />
                    </div>
                  </a>

                  <div className="team-content">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={() => scroll("right", operationsRef)}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="desktop-team">
        <div className="team-rows">
          {/* Row 4 */}
          <div className="team-row">
            <TeamCard
              name="Anas Yoosuff"
              position="Manager - Finance and Accounts Outsourcing "
              image={member4}
            />

            <TeamCard
              name="Chamara Jayasanka"
              position="Lead Accountant - Finance and Accounts Outsourcing "
              image={member2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
