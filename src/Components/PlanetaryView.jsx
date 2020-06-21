import React from "react";
import "../Styles/PlanetaryView.css";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

const PlanetaryView = () => {
  return (
    <>
      <DisplayNavbar
        backPath={"/"}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <div className="planet-main-div">
        <iframe
          title="planet-map"
          class="background-map planetary"
          width="100%"
          height="100%"
          src="https://maphub.net/embed/98967?button=0"
        ></iframe>
        <section className="planet-info">
          <Container className="planet-info-container">
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

export default PlanetaryView;
