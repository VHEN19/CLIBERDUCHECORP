import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">

        {/* Hero Text Box */}
        <div className="hero-box">
          <h1>Innovating the Blueprint of Tomorrow</h1>
          <p>
            Cliberduche Corporation delivers reliable construction and
            engineering solutions built for the future.
          </p>
        </div>

        {/* Feature Boxes */}
        <div className="feature-boxes">
          <div className="feature-card">
            <h3>Foundations</h3>
            <p>Strong and durable groundwork for every project.</p>
          </div>

          <div className="feature-card">
            <h3>Site Development</h3>
            <p>Efficient planning and professional execution.</p>
          </div>

          <div className="feature-card">
            <h3>Full-scale Construction</h3>
            <p>End-to-end construction services you can trust.</p>
          </div>

          <div className="feature-card">
            <h3>Trust & Reliability</h3>
            <p>Committed to safety, quality, and excellence.</p>
          </div>
        </div>

        {/* Project Highlight Section */}
        <div className="project-highlight">
          <div className="project-card">

            <img
              src="/images/land-development.jpg"
              alt="Land Development"
              className="project-image"
            />

            <h3>Land Development</h3>

            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <button className="project-btn">EXPLORE PROJECTS</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
