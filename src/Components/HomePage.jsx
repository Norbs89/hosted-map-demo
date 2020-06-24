import React from "react";
import { Link } from "@reach/router";
import "../Styles/HomePage.css";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home-page-div">
      <Container className="all-content">
        <Row>
          <Col>
            {/* project name here */}
            <h1>Aesthetic chartreuse food truck</h1>
            {/* short project description here */}
            <p>
              {" "}
              Artisan crucifix raw denim, neutra normcore adaptogen small batch
              mlkshk. Paleo health goth vinyl retro tattooed salvia tumblr tofu
              prism YOLO tumeric.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="buttons-section">
            <Link to="/globalmap">
              <button className="button">Planetary View</button>
            </Link>
            <Link to="/pickcity">
              <button className="button">Pick A City</button>
            </Link>
            <Link to="/about">
              <button className="button">About The Project</button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
