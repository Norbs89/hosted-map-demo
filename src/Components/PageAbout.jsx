import React from "react";
import DisplayNavbar from "./Navbar";
import { Container, Row } from "react-bootstrap";
import "../Styles/PageAbout.css";

const ProjectAbout = () => {
  return (
    <div className="about-main-div">
      <DisplayNavbar
        backPath={`/`}
        customPath={"/globalmap"}
        customPathName={"Planetary View"}
      />
      <Container className="about-container">
        <Row className="about-header-row">
          <h2>About The Project</h2>
        </Row>
        <Row className="about-row">
          <article>
            <p>
              I'm baby affogato helvetica beard distillery, pop-up gluten-free
              godard lumbersexual blog plaid semiotics kombucha retro mixtape.
              Echo park lyft hashtag salvia, migas snackwave humblebrag truffaut
              squid vinyl meggings hexagon forage next level. Four loko
              vexillologist lo-fi asymmetrical, raw denim lumbersexual
              microdosing ramps irony jean shorts. 90's shabby chic thundercats
              distillery forage, selfies direct trade yr readymade. Locavore
              banjo tattooed mumblecore lomo, tilde celiac waistcoat. Four loko
              gastropub lo-fi, raclette vegan kombucha hella echo park unicorn
              shaman live-edge bespoke pop-up. Banjo vice seitan kinfolk.
              Waistcoat next level
            </p>
            <p>
              selvage chicharrones succulents vexillologist authentic tofu man
              bun. Celiac lyft raclette shaman typewriter intelligentsia meh yr
              tote bag edison bulb fingerstache. Shaman blog succulents pug
              gluten-free chia tilde ennui. Twee tumeric lo-fi, affogato iPhone
              tote bag iceland cray. La croix fingerstache mustache four loko
              church-key farm-to-table meditation migas.
            </p>
          </article>
        </Row>
        <Row className="icon-row">
          <a
            href="https://facebook.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://instagram.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </Row>
      </Container>
    </div>
  );
};

export default ProjectAbout;
