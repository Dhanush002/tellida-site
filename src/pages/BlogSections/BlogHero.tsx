import React from "react";
import "./BlogHero.css";
import Exclude from "../../assets/bloghero.jpg";

const BlogHero: React.FC = () => {
  
  return (
    <section
      className="about-us-hero"
      style={{
        backgroundImage: `
      linear-gradient(180deg, rgba(23, 23, 23, 0) 41.33%, #171717 100%),
      url(${Exclude})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Content Section */}
      <div className="hero-content-aboutus">
        <h1>Welcome to Tellida's Blogs</h1>
      </div>

      {/* Tagline Section 
      <div className="hero-tagline">
        <p>
          Have questions or need assistance? Reach out to our team and we’ll get back to you as soon as possible.
        </p>
      </div>
      */}
      
    </section>
  );
};

export default BlogHero;
