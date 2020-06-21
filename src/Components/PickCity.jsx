import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "@reach/router";
import DisplayNavbar from "./Navbar";
import "../Styles/PickCity.css";
import { cities } from "../artistData.js";

const PickCity = () => {
  return (
    <div className="city-page-div">
      <DisplayNavbar
        backPath={"/"}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <section className="city-page-content">
        <Container className="city-container">
          <Row>
            <Col>
              <h2>
                Pick a city to discover the works of our amazing local artists!
              </h2>
              <p> Or hit the 'random' button to check out a random artist!</p>
            </Col>
          </Row>
          <Row>
            <Col className="city-buttons">
              {cities.map((city) => {
                return (
                  <Link key={city} to={`/city/${city}`}>
                    <button className="button city-button">{city}</button>
                  </Link>
                );
              })}
              <Link to={`/`}>
                <button className="button city-button">random</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default PickCity;
