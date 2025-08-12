import React, { useRef } from "react";
import "./CallTeam.css";

// Leadership images

import member4 from "../../../../assets/Mohomad.jpg";

// Operational team images
import amir from "../../../../assets/operational/Amir Khan - Call Centre.jpg";
import fazmeer from "../../../../assets/operational/Fazmeer Uvais - Call Centre.jpg";
import krashika from "../../../../assets/operational/Krashika Surendran - Call Centre.jpg";
import mishayel from "../../../../assets/operational/Mishayel Viranjith - Call Centre.jpg";
import razwin from "../../../../assets/operational/Razwin Rizwan - Call Centre.jpg";
import salma from "../../../../assets/operational/Salma Jamzi - Call Centre.jpg";

const OurTeam = () => {
  const operationsRef = useRef<HTMLDivElement>(null);

  const operationsMembers = [
    {
      name: "Mohomad Imran",
      position: "Manager - Contact Centre Operations",
      image: member4,
    },

    {
      name: "Amir Khan",
      position: "Team Leader - Contact Centre Outsourcing",
      image: amir,
      linkedin: "",
    },

    {
      name: "Fazmeer Uvais",
      position: "Team Leader - Contact Centre Outsourcing ",
      image: fazmeer,
    },

    {
      name: "Salma Jamzi",
      position: "Team Leader - Contact Centre Outsourcing",
      image: salma,
    },

    // {
    //   name: "Mishayel Viranjith",
    //   position: "Team Leader - Contact Centre Outsourcing",
    //   image: mishayel,
    // },

    {
      name: "Krashika Surendran",
      position: "Team Leader - Contact Centre Outsourcing",
      image: krashika,
    },

    {
      name: "Razwin Rizwan",
      position: "Team Leader - Contact Centre Outsourcing",
      image: razwin,
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
          <h4 className="sub-title">OUR STAFF</h4>
          <h2 className="section-title-team">Meet Our Professional Staff</h2>
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
              name="Mohomad Imran"
              position="Manager - Contact Centre Operations"
              image={member4}
            />

            <TeamCard
              name="Amir Khan"
              position="Team Leader - Contact Centre Outsourcing"
              image={amir}
            />
            <TeamCard
              name="Fazmeer Uvais"
              position="Team Leader - Contact Centre Outsourcing"
              image={fazmeer}
            />
          </div>
          {/* Row 5 */}
          <div className="team-row">
            <TeamCard
              name="Salma Jamzi"
              position="Team Leader - Contact Centre Outsourcing"
              image={salma}
            />
            <TeamCard
              name="Razwin Rizwan"
              position="Team Leader - Contact Centre Outsourcing"
              image={razwin}
            />
            <TeamCard
              name="Krashika Surendran"
              position="Team Leader - Contact Centre Outsourcing"
              image={krashika}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
