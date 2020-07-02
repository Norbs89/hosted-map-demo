import React from "react";
import { artists } from "../artistData.js";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import "../Styles/ArtistBio.css";
import { Spring } from "react-spring/renderprops";

const ArtistBio = ({ artist }) => {
  return (
    <div className="bio-main-div">
      <DisplayNavbar />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100 }}>
        {(props) => (
          <div style={props}>
            <Container className="bio-container">
              <Row className="artist-header-row">
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
        )}
      </Spring>
    </div>
  );
};

export default ArtistBio;
