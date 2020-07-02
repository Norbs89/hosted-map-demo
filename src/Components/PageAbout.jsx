import React from "react";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../Styles/PageAbout.css";
import { Spring } from "react-spring/renderprops";

const PageAbout = () => {
  return (
    <div className="about-main-div">
      <DisplayNavbar />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 100 }}>
        {(props) => (
          <div style={props} className="about-outer-div">
            <Container className="about-container">
              <Row className="about-header-row">
                <h2>About The Project</h2>
              </Row>
              <Row className="about-row">
                <article>
                  <p>
                    I'm baby affogato helvetica beard distillery, pop-up
                    gluten-free godard lumbersexual blog plaid semiotics
                    kombucha retro mixtape. Echo park lyft hashtag salvia, migas
                    snackwave humblebrag truffaut squid vinyl meggings hexagon
                    forage next level. Four loko vexillologist lo-fi
                    asymmetrical, raw denim lumbersexual microdosing ramps irony
                    jean shorts. 90's shabby chic thundercats distillery forage,
                    selfies direct trade yr readymade. Locavore banjo tattooed
                    mumblecore lomo, tilde celiac waistcoat. Four loko gastropub
                    lo-fi, raclette vegan kombucha hella echo park unicorn
                    shaman live-edge bespoke pop-up. Banjo vice seitan kinfolk.
                    Waistcoat next level
                  </p>
                  <p>
                    selvage chicharrones succulents vexillologist authentic tofu
                    man bun. Celiac lyft raclette shaman typewriter
                    intelligentsia meh yr tote bag edison bulb fingerstache.
                    Shaman blog succulents pug gluten-free chia tilde ennui.
                    Twee tumeric lo-fi, affogato iPhone tote bag iceland cray.
                    La croix fingerstache mustache four loko church-key
                    farm-to-table meditation migas.
                  </p>
                </article>
              </Row>
              <Row className="about-pic-row">
                <Image
                  className="about-pic"
                  src="http://placeimg.com/500/500/any"
                  fluid
                />
              </Row>
              <Row className="icon-row">
                <a
                  href="https://instagram.com"
                  className="icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="mailto:YOUR EMAIL HERE" className="icon">
                  <i class="fas fa-at"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fas fa-desktop"></i>
                </a>
              </Row>
            </Container>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default PageAbout;
