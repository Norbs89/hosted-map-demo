import React from "react";
import { Container, Row } from "react-bootstrap";
import { artists } from "../artistData.js";
import { Link } from "@reach/router";

const ArtistCard = ({ artist }) => {
  return (
    <>
      <Container className="artist-container">
        <Row className="">
          <Link to={`/${artist}/bio`}>
            {artists[artist].name},{" "}
            <span className="from-city"> {artists[artist].city}</span>
          </Link>
        </Row>
      </Container>
      <section className="artist-info"></section>
    </>
  );
};

export default ArtistCard;
