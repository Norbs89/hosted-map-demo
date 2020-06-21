import React from "react";
import "../Styles/ArtistPage.css";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

const ArtistPage = ({ artist }) => {
  return (
    <>
      <DisplayNavbar
        backPath={"/pickcity"}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <div className="artist-main-div">
        <iframe
          title="planet-map"
          className="background-map"
          width="100%"
          height="100%"
          src="https://maphub.net/embed/99003?button=0"
        ></iframe>
        <section className="artist-info">
          <Container className="artist-info-container">
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

const print = (item) => {
  console.log(item);
};

export default ArtistPage;
