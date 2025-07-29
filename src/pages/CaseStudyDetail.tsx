import HeroSection from "../components/HeroSection";

const CaseStudyDetail = () => {
  return (
    <div>
      <HeroSection
        title="Case Study: Project Name"
        description="Details about the specific project and how we achieved success."
        imageUrl="/path/to/case-study-detail-hero-image.jpg"
      />
      <section>
        <h2>Project Overview</h2>
        <p>
          This project focused on delivering X solutions for Y industry, achieving
          remarkable results.
        </p>
      </section>
      <section>
        <h2>Challenges</h2>
        <p>
          The client faced challenges in A, B, and C areas, which we resolved
          effectively.
        </p>
      </section>
      <section>
        <h2>Results</h2>
        <p>
          With our solutions, the client achieved a 50% improvement in efficiency
          and a 30% cost reduction.
        </p>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
