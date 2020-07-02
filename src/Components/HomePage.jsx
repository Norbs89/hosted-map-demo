import React from "react";
import { Link } from "@reach/router";
import "../Styles/HomePage.css";
import { Container, Row } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";

const HomePage = () => {
  return (
    <div className="home-page-div">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100 }}>
        {(props) => (
          <div style={props}>
            <Container className="home-container">
              <Row className="home-header-row">
                {/*change project name here */}
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
                <Link to="/pickcity">
                  <button className="button">Project View</button>
                </Link>
                <Link to="/globalmap">
                  <button className="button">Planetary View</button>
                </Link>
                <Link to="/contact">
                  <button className="button">Your View</button>
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
