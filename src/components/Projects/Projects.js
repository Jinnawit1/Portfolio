import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://bizmatchingnews.com/wp-content/uploads/2024/01/HAKO%E0%B8%AD%E0%B8%AD%E0%B8%A1%E0%B8%AA%E0%B8%B4%E0%B8%992-600x600.jpg"
              isBlog={false}
              title="Bits-0f-C0de"
              description="I have done this work when I am Intern Developer. I used Vue.js to do Front-end and Node.js as a Back-end"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
