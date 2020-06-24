import React from "react";
import { Link } from "@reach/router";
import "../Styles/HomePage.css";
import { Container, Row, Col } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";
import DisplayNavbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-div">
      <DisplayNavbar
        backPath={`/`}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 200 }}
      >
        {(props) => (
          <div style={props}>
            <Container className="all-content">
              <Row className="home-header-row">
                {/* project name here */}
                <h1>Aesthetic chartreuse food truck</h1>
              </Row>
              <Row className="home-desc-row">
                {/* short project description here */}
                <p>
                  {" "}
                  Artisan crucifix raw denim, neutra normcore adaptogen small
                  batch mlkshk. Paleo health goth vinyl retro tattooed salvia
                  tumblr tofu prism YOLO tumeric.
                </p>
              </Row>
              <Row className="home-button-row">
                <Link to="/globalmap">
                  <button className="button">Planetary View</button>
                </Link>
                <Link to="/pickcity">
                  <button className="button">Pick A City</button>
                </Link>
                <Link to="/about">
                  <button className="button">About The Project</button>
                </Link>
              </Row>
            </Container>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default HomePage;
