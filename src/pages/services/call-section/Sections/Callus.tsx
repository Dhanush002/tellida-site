import React, { useEffect, useState } from "react";
import "./Callus.css";

const Callus: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // match your CSS breakpoint
    };

    checkMobile(); // initial check

    // Re-check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="who-we-are-section">
      {!isMobile && (
        <div className="remote-frame-10">
          <h3 className="remote-line-1">
            Transform your customer experience with our team
            expert contact centre outsourcing solutions,<br />
            designed to enhance support and streamline your operations.
          </h3>
        </div>
      )}

      {isMobile && (
        <div className="mobile-frame-10">
          <p className="mobile-line-1">
            Transform your customer experience with our
            expert contact center<br />
            designed to enhance support<br />
            and streamline your operations.
          </p>
        </div>
      )}
    </section>
  );
};

export default Callus;
