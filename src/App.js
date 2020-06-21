import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import ArtistPage from "./Components/ArtistPage";
import PlanetaryView from "./Components/PlanetaryView";
import PickCity from "./Components/PickCity";
import CityMap from "./Components/CityMap";

import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <ArtistPage path="/:artist" />
        <PlanetaryView path="/globalmap" />
        <PickCity path="/pickcity" />
        <CityMap path="/city/:city" />
      </Router>
    </div>
  );
}

export default App;
