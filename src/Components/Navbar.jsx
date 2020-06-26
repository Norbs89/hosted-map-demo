import React from "react";
import "../Styles/Navbar.css";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "@reach/router";
import { artistArray } from "../artistData.js";

class DisplayNavbar extends React.Component {
  state = {
    currentArtist: artistArray[1],
    previousArtist: "",
    counter: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.previousArtist === this.state.currentArtist) {
      this.updateArtist(this.state.counter);
    }
    if (prevState.counter === artistArray.length) {
      this.updateCounter();
    }
  }

  updateCounter = () => {
    this.setState((currentState) => {
      return { currentState, counter: 0 };
    });
  };

  updateArtist = (counter) => {
    this.setState((currentState) => {
      return {
        ...currentState,
        previousArtist: currentState.currentArtist,
        currentArtist: artistArray[counter],
        counter: currentState.counter + 1,
      };
    });
  };

  render() {
    return (
      <Navbar bg="custom" variant="dark" sticky="top" expand="md">
        <NavDropdown title="Change View" id="basic-nav-dropdown">
          <NavDropdown.Item href="/globalmap">Planetary View</NavDropdown.Item>
          <NavDropdown.Item href="/pickcity">Project View</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Your View</NavDropdown.Item>
        </NavDropdown>
        <Navbar.Text className="about-button">
          <Link to="/about" className="nav-text">
            About
          </Link>
        </Navbar.Text>
        <Navbar.Text
          className="next-button"
          onClick={(e) => {
            this.updateArtist(this.state.counter);
          }}
        >
          <Link to={`/${this.state.currentArtist}`} className="nav-text">
            Next
          </Link>
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default DisplayNavbar;
