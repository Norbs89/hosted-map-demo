import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { artists } from "../artistData.js";
import { Link } from "@reach/router";

const ArtistCard = ({ artist }) => {
  return (
    <>
      <Container className="artist-extra-info">
        <Row className="justify-content-between">
          <Link to={`/${artist}/bio`}>
            <button className="button artist-button">{artist}'s Bio</button>
          </Link>
          <a
            href={artists[artist].link}
            className="button artist-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {artist}'s website
          </a>
        </Row>
      </Container>
      <section className="artist-info">
        <Container className="artist-info-container">
          <Row>
            <Col>{artists[artist].name}</Col>
          </Row>
          <Row>
            <Col className="from-city">{artists[artist].city}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ArtistCard;
