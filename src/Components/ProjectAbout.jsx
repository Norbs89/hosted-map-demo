import React from "react";
import { artists } from "../artistData.js";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../Styles/ProjectAbout.css";
import { Spring } from "react-spring/renderprops";

const ProjectAbout = ({ artist, project }) => {
  let currentProject = artists[artist].projects[project];
  return (
    <div className="project-main-div">
      <DisplayNavbar />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100 }}>
        {(props) => (
          <div style={props} className="project-outer-div">
            <Container className="project-container">
              <Row className="project-header">
                <h2>{currentProject.projectName}</h2>
              </Row>
              <Col className="img-col">
                <Image
                  className="project-pic"
                  src={currentProject.pic1}
                  fluid
                  alt={currentProject.alt1}
                />
                <Image
                  className="project-pic"
                  src={currentProject.pic2}
                  fluid
                  alt={currentProject.alt2}
                />
                <Image
                  className="project-pic"
                  src={currentProject.pic3}
                  fluid
                  alt={currentProject.alt3}
                />
                {currentProject.video !== "" && (
                  <iframe
                    title="Project Video"
                    width="560"
                    height="315"
                    className="project-vid"
                    src={currentProject.video}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    frameborder="0"
                  ></iframe>
                )}
              </Col>
              <Row className="project-desc">
                <article>{currentProject.desc}</article>
              </Row>
            </Container>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default ProjectAbout;
