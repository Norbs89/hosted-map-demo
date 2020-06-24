import React from "react";
import { artists } from "../artistData.js";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../Styles/ArtistBio.css";

const ArtistBio = ({ artist }) => {
  return (
    <div className="bio-main-div">
      <DisplayNavbar
        backPath={`/${artist}`}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <Container className="bio-container">
        <Row className="artist-header-row">
          <Image
            className="profile-pic"
            src={artists[artist].profilePic}
            fluid
            thumbnail
          />
          <h2>{artists[artist].name}'s Bio</h2>
        </Row>
        <Row className="artist-bio-row">
          <article>{artists[artist].bio}</article>
        </Row>
        <Row className="artist-bio-button-row">
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
    </div>
  );
};

export default ArtistBio;
