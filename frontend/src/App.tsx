import { useEffect, useState } from "react";
import "./app.css";

const TRACEPULSE_URL = ""; // Add deployed project URL here
const TRACEPULSE_GITHUB_URL = ""; // Add GitHub repository URL here

const navigation = [
  { label: "Projects", number: "01", id: "projects" },
  { label: "Experience", number: "02", id: "experience" },
  { label: "Education", number: "03", id: "education" },
  { label: "Contact", number: "04", id: "contact" },
];

function App() {
  const [activeSection, setActiveSection] = useState("projects");
  const [projectOpen, setProjectOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!projectOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setProjectOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [projectOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* LEFT SIDEBAR */}
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          shubham<span>.</span>
        </a>

        <div className="sidebar-role">
          SOFTWARE ENGINEER
          <br />
          INDIA
        </div>

        <div className="sidebar-intro">
          BACKEND ENGINEER.
          <br />
          PYTHON · FASTAPI.
          <br />
          BUILDING RELIABLE SYSTEMS.
        </div>

        <nav className="side-navigation">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "nav-link active" : "nav-link"
              }
              onClick={closeMenu}
            >
              <span className="nav-number">{item.number}</span>
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="nav-arrow">↗</span>
              )}
            </a>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="availability">
            <span className="red-dot" />
            Open to opportunities.
          </div>
          <div className="sidebar-location">
            CHANDIGARH, INDIA.
            <br />
            SOFTWARE ENGINEER.
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <header className="mobile-header">
        <a href="#home" className="brand">
          shubham<span>.</span>
        </a>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-background">
            <div className="screen screen-one">
              <div className="screen-code">
                <span>01</span> import FastAPI
                <br />
                <span>02</span> app = FastAPI()
                <br />
                <span>03</span> @app.get("/health")
                <br />
                <span>04</span> def health_check():
                <br />
                <span>05</span> &nbsp;&nbsp;
                <code>{'return {"status": "ok"}'}</code>
              </div>
            </div>
            <div className="screen screen-two">
              <div className="screen-code">
                <span>01</span> class MonitoringService:
                <br />
                <span>02</span> &nbsp;&nbsp;def check_endpoint(self):
                <br />
                <span>03</span> &nbsp;&nbsp;&nbsp;&nbsp;response = request.get()
                <br />
                <span>04</span> &nbsp;&nbsp;&nbsp;&nbsp;return response.status
                <br />
                <span>05</span> # TracePulse
              </div>
            </div>
            <div className="hero-glow" />
          </div>

          <div className="hero-topline">
            <span>SOFTWARE ENGINEER · BACKEND DEVELOPMENT</span>
            <a href="#contact">HAVE A PROJECT? ↗</a>
          </div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="red-dot" />
              PYTHON · FASTAPI · DJANGO · SOFTWARE ENGINEERING
            </div>

            <h1>
              Clean code.
              <br />
              <em>Solid systems.</em>
            </h1>

            <p className="hero-description">
              I build backend systems and web applications with a focus on
              reliability, clean architecture, and thoughtful engineering.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                VIEW MY WORK <span>↗</span>
              </a>
              <a href="#contact" className="text-button">
                Get in touch <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-side-label">
            BACKEND ENGINEER & PROBLEM SOLVER
          </div>

          <a href="#about" className="scroll-indicator">
            ↓ &nbsp; SCROLL TO EXPLORE
          </a>
          <span className="hero-year">[ DEV : 2026 ]</span>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-label">
            <span className="red-dot" />
            THIS IS SHUBHAM
          </div>

          <div className="about-grid">
            <h2>
              Not just
              <br />
              written.
              <br />
              <em>Engineered.</em>
            </h2>

            <div className="about-copy">
              <p>
                I'm Shubham Agarwal, a Computer Science undergraduate at
                Chandigarh University, focused on backend development and
                building practical software solutions.
              </p>
              <p>
                I work with Python, FastAPI, Django, and databases. I enjoy
                understanding how systems work behind the scenes, from API
                design and database interactions to application architecture.
              </p>
              <p>
                I believe good engineering is not just about writing code.
                It's about understanding the problem, making thoughtful
                decisions, and building something reliable.
              </p>
              <a href="#experience" className="underlined-link">
                See where I've worked <span>↗</span>
              </a>
            </div>
          </div>

          <div className="about-rings" />
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-label">
            <span className="red-dot" />
            SELECTED WORK / PROJECT PORTFOLIO
          </div>

          <div className="section-heading">
            <h2>
              Building things
              <br />
              that <em>matter.</em>
            </h2>
            <p>
              One project. A lot of engineering.
              <br />
              More work coming soon.
            </p>
          </div>

          <button
            className="project-card"
            onClick={() => setProjectOpen(true)}
            aria-label="Open TracePulse project details"
          >
            <div className="project-visual">
              <div className="project-visual-top">
                <span>FEATURED PROJECT / 001</span>
                <span>PERSONAL PROJECT</span>
              </div>

              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-logo">
                    <span className="dashboard-dot" />
                    TRACEPULSE
                  </div>
                  <span className="dashboard-tag">OVERVIEW</span>
                </div>

                <div className="dashboard-body">
                  <div className="dashboard-stat">
                    <small>API STATUS</small>
                    <strong className="status-text">MONITORING</strong>
                  </div>
                  <div className="dashboard-stat">
                    <small>RESPONSE TIME</small>
                    <strong>124 <small>MS</small></strong>
                  </div>
                  <div className="dashboard-stat">
                    <small>UPTIME</small>
                    <strong>99.9%</strong>
                  </div>
                </div>

                <div className="dashboard-chart">
                  <div className="chart-label">RESPONSE TIME / TREND</div>
                  <div className="chart-bars">
                    {[34, 47, 39, 61, 48, 74, 56, 66, 43, 83, 60, 72, 51, 90, 68, 77, 55, 72].map(
                      (height, index) => (
                        <span
                          key={index}
                          style={{ height: `${height}%` }}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="project-hover-label">
                EXPLORE PROJECT <span>↗</span>
              </div>
            </div>

            <div className="project-info">
              <div>
                <span className="project-category">
                  API MONITORING · BACKEND · SAAS
                </span>
                <h3>TracePulse</h3>
                <p>
                  An API health monitoring platform designed to track
                  availability, response times, and failures.
                </p>
              </div>
              <span className="project-open-icon">↗</span>
            </div>
          </button>

          <div className="coming-soon">
            <span className="red-dot" />
            MORE PROJECTS IN DEVELOPMENT
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="experience section" id="experience">
          <div className="section-label">
            <span className="red-dot" />
            PROFESSIONAL JOURNEY
          </div>

          <div className="section-heading">
            <h2>
              Work in
              <br />
              <em>progress.</em>
            </h2>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">SEP 2026 — PRESENT</div>
            <div className="timeline-content">
              <span className="timeline-type">INTERNSHIP</span>
              <h3>Associate Software Developer Intern</h3>
              <h4>Acies LLP</h4>
              <p>
                Working on backend development and API management tasks,
                gaining practical experience with Python-based applications,
                APIs, testing, and software development workflows.
              </p>
              <div className="skill-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>API Development</span>
                <span>Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education section" id="education">
          <div className="section-label">
            <span className="red-dot" />
            EDUCATION & BACKGROUND
          </div>

          <div className="section-heading">
            <h2>
              Learning.
              <br />
              <em>Building.</em>
            </h2>
          </div>

          <div className="education-grid">
            <div className="education-card">
              <span className="education-date">2023 — 2027</span>
              <span className="education-type">UNDERGRADUATE</span>
              <h3>B.E. Computer Science & Engineering</h3>
              <p>Chandigarh University</p>
              <span className="education-location">Kharar, Punjab, India</span>
            </div>

            <div className="education-card">
              <span className="education-date">CLASS XII</span>
              <span className="education-type">SENIOR SECONDARY</span>
              <h3>Indian Convent School</h3>
              <p>CBSE · 75%</p>
              <span className="education-location">Kota, Rajasthan, India</span>
            </div>

            <div className="education-card">
              <span className="education-date">CLASS X</span>
              <span className="education-type">SECONDARY</span>
              <h3>Sacred Heart School</h3>
              <p>ICSE · 94%</p>
              <span className="education-location">Siliguri, West Bengal, India</span>
            </div>
          </div>

          <div className="skills-block">
            <span className="education-type">TOOLS & TECHNOLOGIES</span>
            <div className="skill-tags skill-tags-large">
              <span>Python</span>
              <span>C++</span>
              <span>Java (Basic)</span>
              <span>SQL</span>
              <span>FastAPI</span>
              <span>Django</span>
              <span>React</span>
              <span>Git</span>
              <span>PostgreSQL</span>
              <span>DSA</span>
              <span>DBMS</span>
              <span>Operating Systems</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div className="section-label">
            <span className="red-dot" />
            HAVE SOMETHING IN MIND?
          </div>

          <h2>
            Let's build
            <br />
            something <em>good.</em>
          </h2>

          <p>
            Interested in working together, discussing an idea, or just
            talking about technology? Feel free to reach out.
          </p>

          <a
            href="https://www.linkedin.com/in/shubham-agarwal-805a54289/"
            target="_blank"
            rel="noreferrer"
            className="primary-button contact-button"
          >
            CONNECT ON LINKEDIN <span>↗</span>
          </a>

          <div className="contact-footer">
            <span>SHUBHAM AGARWAL © 2026</span>
            <span>DESIGNED WITH INTENTION.</span>
            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>

      {/* TRACEPULSE POPUP */}
      {projectOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setProjectOpen(false);
            }
          }}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="modal-close"
              onClick={() => setProjectOpen(false)}
              aria-label="Close project details"
            >
              ×
            </button>

            <div className="modal-visual">
              <div className="modal-visual-label">
                FEATURED PROJECT / 001
              </div>
              <div className="modal-visual-title">TRACEPULSE<span>.</span></div>
              <div className="modal-visual-subtitle">
                API HEALTH MONITORING PLATFORM
              </div>
              <div className="modal-orbit orbit-one" />
              <div className="modal-orbit orbit-two" />
            </div>

            <div className="modal-content">
              <div className="modal-eyebrow">PERSONAL PROJECT · IN DEVELOPMENT</div>
              <h2 id="modal-title">TracePulse</h2>
              <p>
                TracePulse is a workspace-based API health monitoring
                platform. It is designed to help developers monitor API
                availability, track response times, identify failures, and
                recognize performance degradation.
              </p>

              <div className="modal-feature-grid">
                <div>
                  <span>01</span>
                  <h4>API Monitoring</h4>
                  <p>Periodically checks registered API endpoints.</p>
                </div>
                <div>
                  <span>02</span>
                  <h4>Performance Tracking</h4>
                  <p>Tracks response times and availability trends.</p>
                </div>
                <div>
                  <span>03</span>
                  <h4>Incident Detection</h4>
                  <p>Records failures and recovery events.</p>
                </div>
                <div>
                  <span>04</span>
                  <h4>Workspace Based</h4>
                  <p>Organizes monitored APIs by project or team.</p>
                </div>
              </div>

              <div className="modal-tech">
                <span>PYTHON</span>
                <span>FASTAPI</span>
                <span>POSTGRESQL</span>
                <span>REACT</span>
              </div>

              <div className="modal-actions">
                {TRACEPULSE_URL ? (
                  <a
                    href={TRACEPULSE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    VISIT PROJECT <span>↗</span>
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    LIVE WEBSITE COMING SOON
                  </span>
                )}

                {TRACEPULSE_GITHUB_URL ? (
                  <a
                    href={TRACEPULSE_GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-button"
                  >
                    GITHUB REPOSITORY ↗
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    GITHUB LINK COMING SOON
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;