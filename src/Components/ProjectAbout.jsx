import React from "react";
import { artists } from "../artistData.js";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../Styles/ProjectAbout.css";

const ProjectAbout = ({ artist, project }) => {
  let currentProject = artists[artist].projects[project];
  return (
    <div className="project-main-div">
      <DisplayNavbar
        backPath={`/${artist}`}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <Container className="project-container">
        <Row className="project-header">
          <h2>{currentProject.projectName}</h2>
        </Row>
        <Row className="img-row">
          <Image
            className="project-pic"
            src={currentProject.pic1}
            thumbnail
            fluid
          />
          <Image
            className="project-pic"
            src={currentProject.pic2}
            thumbnail
            fluid
          />
          <Image
            className="project-pic"
            src={currentProject.pic3}
            thumbnail
            fluid
          />
        </Row>
        <Row className="project-desc">
          <article>{currentProject.desc}</article>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectAbout;
