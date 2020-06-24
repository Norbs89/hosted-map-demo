import React from "react";
import { artists } from "../artistData.js";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../Styles/ArtistBio.css";
import { Spring } from "react-spring/renderprops";

const ArtistBio = ({ artist }) => {
  return (
    <div className="bio-main-div">
      <DisplayNavbar
        backPath={`/${artist}`}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ delay: 200 }}
      >
        {(props) => (
          <div style={props}>
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
        )}
      </Spring>
    </div>
  );
};

export default ArtistBio;
