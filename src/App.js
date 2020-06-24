import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import ArtistPage from "./Components/ArtistPage";
import PlanetaryView from "./Components/PlanetaryView";
import PickCity from "./Components/PickCity";
import CityMap from "./Components/CityMap";
import ArtistBio from "./Components/ArtistBio";
import PageAbout from "./Components/PageAbout";
import ProjectAbout from "./Components/ProjectAbout";
import Contact from "./Components/ContactForm";
import { Router } from "@reach/router";
import { Spring } from "react-spring/renderprops";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <HomePage path="/" />
        <ArtistPage path="/:artist" />
        <ArtistBio path="/:artist/bio" />
        <PlanetaryView path="/globalmap" />
        <PickCity path="/pickcity" />
        <CityMap path="/city/:city" />
        <PageAbout path="/about" />
        <ProjectAbout path="/:artist/:project" />
        <Contact path="/contact" />
      </Router>
    );
  }
}

export default App;
