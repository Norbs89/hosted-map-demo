import React from "react";
import "../Styles/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "@reach/router";

const DisplayNavbar = ({ backPath, customPath, customPathName }) => {
  return (
    <Navbar
      className="justify-content-between"
      bg="custom"
      variant="dark"
      sticky="top"
      expand="md"
    >
      <Navbar.Text>
        <Link to={backPath} className="nav-text back-button">
          Back
        </Link>
      </Navbar.Text>
      <Navbar.Text className="d-none d-lg-inline d-md-inline">
        <Link to="/" className="nav-text brand">
          home
        </Link>
      </Navbar.Text>
      <Navbar.Text className="d-none d-lg-inline d-md-inline">
        <Link to="/about" className="nav-text">
          about
        </Link>
      </Navbar.Text>
      <Navbar.Text>
        <Link to={customPath} className="nav-text custom-button">
          {customPathName}
        </Link>
      </Navbar.Text>
    </Navbar>
  );
};

export default DisplayNavbar;
