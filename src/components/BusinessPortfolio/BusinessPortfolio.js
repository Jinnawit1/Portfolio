import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BusinessPortfolio.css";

const buildItems = [
  {
    title: "Approval Workflow System",
    text: "Multi-step approval flow with pending, approved, rejected, email notification, and role-based actions."
  },
  {
    title: "KPI Dashboard",
    text: "Weekly and monthly dashboards for department, employee, process time, pending jobs, and completed work."
  },
  {
    title: "Document & File Control",
    text: "Upload files, manage attachments, check document status, and support internal request tracking."
  },
  {
    title: "Automation Tools",
    text: "Excel import, SQL update, Outlook/email automation, QR scanning, reporting, and data cleanup tools."
  }
];

const projects = [
  {
    name: "PCN Online System",
    role: "Full-stack Developer",
    tech: "ASP.NET MVC, C#, Entity Framework, SQL Server, jQuery, Bootstrap",
    desc: "A production request system for creating PCN jobs, attaching files, managing detail rows, and tracking approval status across departments.",
    features: ["Multi-step approval", "Dynamic detail table", "File attachment", "Email notification"]
  },
  {
    name: "Department KPI Dashboard",
    role: "Full-stack Developer",
    tech: "C#, SQL Server, JavaScript, Chart.js, Bootstrap",
    desc: "Dashboard for managers to monitor weekly jobs, average processing time, pending status, and employee-level performance.",
    features: ["Department summary", "Employee detail", "Average time", "Visual status cards"]
  },
  {
    name: "Excel & Database Automation",
    role: "Developer",
    tech: "C#, SQL Server, Excel Interop, LINQ",
    desc: "Automation tool for reading Excel files, comparing part numbers, updating database records, and reducing manual work.",
    features: ["Excel processing", "Data comparison", "Database update", "Error handling"]
  }
];

const skills = [
  { group: "Frontend", list: "HTML, CSS, Bootstrap, JavaScript, jQuery, Chart.js" },
  { group: "Backend", list: "C#, ASP.NET MVC, Entity Framework, Web API" },
  { group: "Database", list: "SQL Server, LINQ, Stored Procedure, Query Optimization" },
  { group: "Tools", list: "Excel Interop, FPDF, Outlook Rule, File Upload, QR Code, EmguCV" }
];

function BusinessPortfolio() {
  return (
    <section className="business-portfolio-page">
      <Container>
        <Row className="align-items-center hero-section">
          <Col lg={7}>
            <div className="eyebrow">Business System Developer Portfolio</div>
            <h1>
              I build internal systems that help teams work faster.
            </h1>
            <p className="hero-text">
              Full-stack developer focused on approval workflows, dashboards,
              reporting tools, file management systems, and automation for real production use.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-btn">View Projects</a>
              <a href="#skills" className="secondary-btn">View Skills</a>
            </div>
          </Col>
          <Col lg={5}>
            <div className="profile-card">
              <span className="status-dot"></span>
              <h3>Production-ready Developer</h3>
              <p>ASP.NET MVC / C# / SQL Server / JavaScript</p>
              <div className="stats-grid">
                <div><strong>Workflow</strong><span>Approval system</span></div>
                <div><strong>Dashboard</strong><span>KPI & reports</span></div>
                <div><strong>Automation</strong><span>Excel & email</span></div>
                <div><strong>Legacy</strong><span>VS 2013 support</span></div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="section-block">
          <Col lg={12}>
            <h2>What I Build</h2>
            <p className="section-subtitle">Practical systems for office, factory, and internal business operations.</p>
          </Col>
          {buildItems.map((item, index) => (
            <Col md={6} lg={3} key={index}>
              <div className="build-card">
                <div className="card-number">0{index + 1}</div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="section-block" id="projects">
          <Col lg={12}>
            <h2>Featured Projects</h2>
            <p className="section-subtitle">Each project focuses on solving real workflow problems, not just showing UI.</p>
          </Col>
          {projects.map((project, index) => (
            <Col lg={4} key={index}>
              <div className="project-card">
                <div className="project-tag">Case Study</div>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-meta"><strong>Role:</strong> {project.role}</div>
                <div className="project-meta"><strong>Tech:</strong> {project.tech}</div>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="section-block" id="skills">
          <Col lg={12}>
            <h2>Skill Stack</h2>
            <p className="section-subtitle">Technology used for building maintainable internal systems.</p>
          </Col>
          {skills.map((skill, index) => (
            <Col md={6} key={index}>
              <div className="skill-card">
                <h4>{skill.group}</h4>
                <p>{skill.list}</p>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="section-block process-section">
          <Col lg={12}>
            <h2>Development Style</h2>
            <div className="process-line">
              <span>Understand workflow</span>
              <span>Design simple UI</span>
              <span>Develop system</span>
              <span>Test with real cases</span>
              <span>Deploy & improve</span>
            </div>
          </Col>
        </Row>

        <Row className="contact-banner">
          <Col lg={8}>
            <h2>Need an internal system, dashboard, or automation tool?</h2>
            <p>Let's build something useful for real users and real work.</p>
          </Col>
          <Col lg={4} className="contact-action">
            <a href="mailto:your-email@example.com" className="primary-btn">Contact Me</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default BusinessPortfolio;
