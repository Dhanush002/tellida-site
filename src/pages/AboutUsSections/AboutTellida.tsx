import React from "react";
import "./AboutTellida.css";


const AboutTellida: React.FC = () => {
  return (
    <section className="about-tellida">
      <div className="about-content">
        <div className="about-header">
          <h1>
            Your trusted partner for cost-effective, flexible, and
            transformative Business Process Outsourcing
          </h1>
          <p>
            Sri Lanka-based outsourcing solutions provider specializing in
            Finance & Accounting, Legal,Contact Center, Remote Tech and Back-Office Support services. With over
            a decade of expertise, we deliver tailored solutions to clients in
            the UK, Singapore, and Australia, helping businesses streamline
            operations, reduce costs, and boost profitability.
            <br /> <br />
            In today’s fast-paced business environment, companies require more than just external support—they need 
            a strategic partner who can help them operate more efficiently, grow rapidly, and maintain a competitive edge. 
            That’s where Tellida comes in.
            <br /> <br />
            With years of industry experience, we specialize in providing high-impact, tailored business solutions across 
            a range of sectors, including conveyancing, call centers, finance, remote IT support, and business process management. 
            Our services are designed to streamline operations, reduce costs, and enhance efficiency—empowering businesses to focus 
            on innovation and growth.
            <br /> <br />
            Headquartered in Sri Lanka with a strong presence in the UK, we deliver world-class solutions with a personalized, local touch. 
            Our team of highly skilled professionals brings deep expertise, cutting-edge technology, and a customer-first mindset to every partnership.
            At Tellida, we prioritize building long-lasting relationships, not just contracts. Whether you're a fast-growing startup or an 
            established enterprise, we customize our solutions to meet your unique needs, ensuring scalability, quality, and measurable success.

          </p>
        </div>
        {/* <div className="about-images">
          <img src={Image1} alt="Office Team" className="about-image" />
          <img src={Image2} alt="Workplace" className="about-image" />
          <img src={Image3} alt="Team Collaboration" className="about-image" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutTellida;
