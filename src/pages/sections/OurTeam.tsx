import React, { useRef, useState } from "react";
import "./OurTeam.css";

// Leadership images
import member1 from "../../assets/CEO.jpg";
import member2 from "../../assets/Anas.jpg";
import member3 from "../../assets/Amal.jpg";
import member4 from "../../assets/Mohomad.jpg";
import member5 from "../../assets/Pulini.jpg";
import member6 from "../../assets/Suren.jpg";
import member7 from "../../assets/Ifaza.jpg";
import member8 from "../../assets/Sulaiman.jpg";
import member9 from "../../assets/Rishana.jpg";

// Operational team images
import alisha from "../../assets/operational/Alisha Keerthisinghe - Legal Processing Outsourcing.jpg";
import amir from "../../assets/operational/Amir Khan - Call Centre.jpg";
import chamara from "../../assets/operational/Chamara Jayasanka - Finance and Accounts Outsourcing.jpg";
import chethana from "../../assets/operational/Chethana Hettige Leagal Processing Outsourcing.jpg";
import dayathrie from "../../assets/operational/Dayathrie Ratnavibhushana - Legal Processing Outsourcing.jpg";
import trishan from "../../assets/Trishan.jpg"
import dulaj from "../../assets/Dulaj2.jpg";
import fazmeer from "../../assets/operational/Fazmeer Uvais - Call Centre.jpg";
import kershal from "../../assets/operational/Kershal Fernando - Legal Processing Outsourcing .jpg";
import krashika from "../../assets/operational/Krashika Surendran - Call Centre.jpg";
import mishayel from "../../assets/operational/Mishayel Viranjith - Call Centre.jpg";
import razwin from "../../assets/operational/Razwin Rizwan - Call Centre.jpg";
import ruqayya from "../../assets/operational/Ruqayya Ifham - Legal Processing Outsourcing.jpg";
import salma from "../../assets/operational/Salma Jamzi - Call Centre.jpg";

const OurTeam = () => {
  const leadershipRef = useRef<HTMLDivElement>(null);
  const operationsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Leadership");

  const leadershipMembers = [
    {
      name: "Omar Fatha Rally",
      position: "Director & CEO",
      image: member1,
      linkedin:
        "https://www.linkedin.com/in/omar-fatharally-59477b6?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAEueIABrxfT6W7J8jjGU-4K2vMlEqQoeyE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BSE62JMLtRjOTcA6XZGVW8A%3D%3D",
    },
    {
      name: "Rishana Farook",
      position: "CISO & Head of Finance",
      image: member9,
      linkedin:
        "https://www.linkedin.com/in/rishana-farook-429205107?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABrnrCEBJzvwU9VjKt2beQOs3xxTWpFGbDc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BCYJ0f9C0SKeYwXZwyDOYKg%3D%3D",
    },
    {
      name: "Sulaiman Barrie",
      position: "Chief Operating Officer",
      image: member8,
      linkedin:
        "https://www.linkedin.com/in/sulaiman-barrie-0784325/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BainLnhbSRyGA8n3NkU7zFw%3D%3D",
    },
    {
      name: "Ifaza Iftikar",
      position: "Manager - Legal Process Outsourcing",
      image: member7,
      linkedin:
        "https://www.linkedin.com/in/ifaza-iftikar?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACLfZwUBrwI_pGZTgorNvbkufba1HKSitOw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BLj5BqRWiRzy8e%2F6k0ajFHw%3D%3D",
    },
    {
      name: "Amal Hansachandra",
      position: "Manager - Information Technology",
      image: member3,
      linkedin:
        "https://www.linkedin.com/in/amalhansachandra?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABbPCWEBo_EJlN2gLqstu_blLBCdqYvLeSo&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B5uhZ9hDKRh6zGha%2Bl7ph4Q%3D%3D",
    },
    {
      name: "Anas Yoosuff",
      position: "Manager - Finance and Accounts Outsourcing",
      image: member2,
      linkedin:
        "https://www.linkedin.com/in/anas-yoosuff-lebbe-95038a53?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAtEpMwBpn75UDFfpL76HtIfNzHYnhQN_Hw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BUVMCC6pSRIWKfYBUZa%2FuVA%3D%3D",
    },
    {
      name: "Mohomad Imran",
      position: "Manager - Contact Centre Operations",
      image: member4,
      linkedin:
        "https://www.linkedin.com/in/imran-m-b2204817a?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACpdYEoBJkAZpmhrRyddmcPQUylreKUEN44&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnmE09y9hTXaYwrgkQVcyOQ%3D%3D",
    },
    {
      name: "Pulini Aravinthan",
      position: "Head of Human Resources",
      image: member5,
      linkedin:
        "https://www.linkedin.com/in/pulini-aravinthan-b52a7a49?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAApNiO4BxfevLV1aTX9U7r2ix20e8luvr3I&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BgdwcaMq0SIu6Gu9%2FvJsT6w%3D%3D",
    },
    {
      name: "Dulaj Dilshan",
      position: "Manager - Business Development",
      image: dulaj,
    },
  ];

  const operationsMembers = [

    {
      name: "Kershal Fernando",
      position: "Lead Supervisor - Legal Process Outsourcing",
      image: kershal,
      linkedin: "",
    },
    {
      name: "Ruqayya Ifham",
      position: "Lead Supervisor - Legal Process Outsourcing",
      image: ruqayya,
      linkedin: "",
    },
    {
      name: "Alisha Keerthisinghe",
      position: "Team Leader - Legal Process Outsourcing",
      image: alisha,
    },
    {
      name: "Chethana Hettige",
      position: "Team Leader - Legal Process Outsourcing",
      image: chethana,
    },
    {
      name: "Dayathrie Ratnavibhushana",
      position: "Team Leader - Legal Process Outsourcing",
      image: dayathrie,
    },
    {
      name: "Trishan Raux",
      position: "Team Leader - Post Completions",
      image: trishan,
    },
    {
      name: "Amir Khan",
      position: "Team Leader - Contact Centre Outsourcing",
      image: amir,
      linkedin: "",
    },
    {
      name: "Fazmeer Uvais",
      position: "Team Leader - Contact Centre Outsourcing",
      image: fazmeer,
    },
    {
      name: "Salma Jamzi",
      position: "Team Leader - Contact Centre Outsourcing",
      image: salma,
    },
    
    {
      name: "Krashika Surendran",
      position: "Team Leader - Contact Centre Outsourcing",
      image: krashika,
      linkedin: "",
    },
    {
      name: "Razwin Rizwan",
      position: "Team Leader - Contact Centre Outsourcing",
      image: razwin,
    },
    {
      name: "Chamara Jayasanka",
      position: "Lead Accountant - Finance and Accounts Outsourcing",
      image: chamara,
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
  }

  return (
    <section className="our-team">
      <div className="content">
        <div className="head">
          <h4 className="sub-title">Our Staff</h4>
          <h2 className="section-title-team">Meet Our Professional Staff</h2>
          
        </div>
        <div className="tab-navigation">
  <div
    className={`tab-item ${activeTab === "Leadership" ? "active" : ""}`}
    onClick={() => setActiveTab("Leadership")}
  >
    Leadership
  </div>
  <div
    className={`tab-item ${activeTab === "Operations" ? "active" : ""}`}
    onClick={() => setActiveTab("Operations")}
  >
    Operations
  </div>
</div>



        

        <div className="mobile-team">
        {/* Leadership Cards */}
        {activeTab === "Leadership" && (
          <div className="scroll-container">
            <button
              className="scroll-button left"
              onClick={() => scroll("left", leadershipRef)}
            >
              ←
            </button>
            <div className="cards-container" ref={leadershipRef}>
              {leadershipMembers.map((member, index) => (
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
                        src={require("../../assets/Group.png")}
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
              onClick={() => scroll("right", leadershipRef)}
            >
              →
            </button>
          </div>
        )}

        {/* Operations Cards */}
        {activeTab === "Operations" && (
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
                        src={require("../../assets/Group.png")}
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
        )}
        </div>
      </div>

      <div className="desktop-team">
      {activeTab === "Leadership" && (
          <div className="team-rows">
            {/* Row 1 */}
            <div className="team-row">
              <TeamCard name="Omar Fatha Rally" position="Director & CEO" image={member1} />
              <TeamCard name="Sulaiman Barrie" position="Chief Operating Officer" image={member8} />
              <TeamCard name="Rishana Farook" position="CISO & Head of Finance" image={member9} />
            </div>
            {/* Row 2 */}
            <div className="team-row">
              <TeamCard name="Mohomad Imran" position="Manager - Contact Centre Operations" image={member4} />
              <TeamCard name="Ifaza Iftikar" position="Manager - Legal Process Outsourcing" image={member7} />
              <TeamCard name="Anas Yoosuff" position="Manager - Finance and Accounts Outsourcing" image={member2} />
            </div>
            {/* Row 3 */}
            <div className="team-row">
              <TeamCard name="Pulini Senadheera" position="Head of Human Resources" image={member5} />
              <TeamCard name="Amal Hansachandra" position="Manager - Information Technology" image={member3} />
              <TeamCard name="Dulaj Dilshan" position="Manager - Business Development" image={dulaj} />
            </div>
            <div className="team-row single-member">
            
         </div>
         </div>
        )}

        {/* Operations Section */}
        {activeTab === "Operations" && (
          <div className="team-rows">
            {/* Row 1 */}
            <div className="team-row">
            
              <TeamCard name="Kershal Fernando" position="Lead Supervisor - Legal Process Outsourcing" image={kershal} />
              <TeamCard name="Ruqayya Ifham" position="Lead Supervisor - Legal Process Outsourcing" image={ruqayya} />
              <TeamCard name="Alisha Keerthisinghe" position="Team Leader - Legal Process Outsourcing" image={alisha} />
            </div>
            {/* Row 2 */}
            <div className="team-row">
             
              <TeamCard name="Chethana Hettige" position="Team Leader - Legal Process Outsourcing" image={chethana} />
              <TeamCard name="Dayathrie Ratnavibhushana" position="Team Leader - Legal Process Outsourcing" image={dayathrie} />
              <TeamCard name="Trishan Raux" position="Team Leader - Post Completions" image={trishan} />
            </div>
             {/* Row 3 */}
             <div className="team-row">
              <TeamCard name="Amir Khan" position="Team Leader - Contact Centre Outsourcing" image={amir} />
              <TeamCard name="Fazmeer Uvais" position="Team Leader - Contact Centre Outsourcing" image={fazmeer} />
              <TeamCard name="Salma Jamzi" position="Team Leader - Contact Centre Outsourcing" image={salma} />
            </div>

            {/* Row 4 */}
            <div className="team-row">
              <TeamCard name="Chamara Jayasanka" position="Lead Accountant - Finance and Accounts Outsourcing" image={chamara} />
              <TeamCard name="Krashika Surendran" position="Team Leader - Contact Centre Outsourcing" image={krashika} />
              <TeamCard name="Razwin Rizwan" position="Team Leader - Contact Centre Outsourcing" image={razwin} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;
