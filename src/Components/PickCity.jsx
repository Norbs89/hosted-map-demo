import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import DisplayNavbar from "./Navbar";
import "../Styles/PickCity.css";
import { cities, artistArray } from "../artistData.js";
import { findArtist } from "../utils";
import { Spring } from "react-spring/renderprops";

const PickCity = () => {
  return (
    <div className="city-page-div">
      <DisplayNavbar />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100 }}>
        {(props) => (
          <div style={props} className="city-page-content">
            <Container className="city-container">
              <Row>
                <Col>
                  <h2>
                    Pick a city to discover the works of our amazing local
                    artists!
                  </h2>
                  <p>
                    Start{" "}
                    <Link to={`/${artistArray[0]}`} className="start">
                      here
                    </Link>{" "}
                    or select a city below!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="city-buttons">
                  {cities.map((city) => {
                    return (
                      <Link key={city} to={`/${findArtist(city)}`}>
                        <button className="button city-button">{city}</button>
                      </Link>
                    );
                  })}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default PickCity;
