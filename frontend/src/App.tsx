
import './App.css'
import profileImage from './assets/profile.jpg'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          SA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="intro">HELLO, I'M 👋</p>

          <h1>
            Shubham <span>Agarwal.</span>
          </h1>

          <h2>
            <span className="code-icon">&lt;/&gt;</span>
            Software Engineer
          </h2>

          <p className="description">
            I enjoy building software, solving problems,
            and turning ideas into practical applications.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              Explore My Work →
            </a>

            <a
              href="https://github.com/aashuair1"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>

          </div>

          {/* Social Links */}
          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/shubham-agarwal-805a54289/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.instagram.com/ig_shubham_agarwal/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <span>📍 Chandigarh, India</span>

          </div>

        </div>

        {/* Single Profile Photograph */}
        <div className="hero-portrait">
          <img
            src={profileImage}
            alt="Shubham Agarwal"
          />
        </div>

        {/* Decorative Code Symbol */}
        <div className="hero-decoration">
          &lt;/&gt;
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="section about-section">

        <div className="about-content">

          <p className="section-label">
            GET TO KNOW ME
          </p>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            I'm a Software Engineer interested in backend
            engineering, designing APIs, and building reliable
            applications. I enjoy solving problems and turning
            ideas into practical software solutions.
          </p>

          <a
            href="#contact"
            className="primary-btn about-btn"
          >
            Let's Connect →
          </a>

        </div>

        <div className="about-details">

          <div className="detail-card">
            <span>🎓</span>
            <div>
              <strong>B.E. Computer Science</strong>
              <p>Chandigarh University</p>
            </div>
          </div>

          <div className="detail-card">
            <span>💼</span>
            <div>
              <strong>Associate Software Developer Intern</strong>
              <p>Acies LLP</p>
            </div>
          </div>

          <div className="detail-card">
            <span>🚀</span>
            <div>
              <strong>Always Learning</strong>
              <p>Building and exploring new ideas</p>
            </div>
          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="section">

        <p className="section-label">
          WHAT I'VE BUILT
        </p>

        <h2>My Projects</h2>

        <p className="section-description">
          A collection of projects where I explore ideas,
          develop solutions and improve my engineering skills.
        </p>

        <div className="project-container">

          <div className="project-card">
            <span className="project-number">01</span>
            <h3>Projects Coming Soon</h3>
            <p>
              My work and development projects will be
              showcased here.
            </p>
            <a
              href="https://github.com/aashuair1"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub ↗
            </a>
          </div>

        </div>

      </section>

      {/* Experience Section */}
      <section id="experience" className="section">

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2>Experience</h2>

        <div className="experience-card">

          <div className="experience-header">
            <div>
              <h3>Associate Software Developer Intern</h3>
              <p>Acies LLP</p>
            </div>

            <span className="experience-status">
              Internship
            </span>
          </div>

          <p>
            Working on software development tasks,
            backend functionality, API development
            and improving practical engineering skills.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">

        <p className="section-label">
          LET'S CONNECT
        </p>

        <h2>Have a project in mind?</h2>

        <p>
          I'm always interested in connecting with people,
          discussing ideas and exploring opportunities.
        </p>

        <div className="contact-links">

          <a
            href="https://github.com/aashuair1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-agarwal-805a54289/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://www.instagram.com/ig_shubham_agarwal/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>

        </div>

      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2026 Shubham Agarwal. Built with care.
        </p>
      </footer>

    </div>
  )
}

export default App
