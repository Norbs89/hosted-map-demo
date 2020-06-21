import React from "react";
import "../Styles/CityMap.css";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { maps } from "../artistData.js";

const CityMap = ({ city }) => {
  return (
    <>
      <DisplayNavbar
        backPath={"/pickcity"}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <div className="city-main-div">
        <iframe
          title="planet-map"
          className="background-map"
          width="100%"
          height="100%"
          src={maps[city].map}
        ></iframe>
        <section className="city-info">
          <Container className="city-info-container">
            <Row>
              <Col>
                Click on the marker to discover a local artist and their work!
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default CityMap;
