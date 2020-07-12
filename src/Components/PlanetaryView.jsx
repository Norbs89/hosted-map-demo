import React from "react";
import "../Styles/PlanetaryView.css";
import DisplayNavbar from "./Navbar";

const PlanetaryView = () => {
  return (
    <div className="planet-main-div">
      <DisplayNavbar />

      <div>
        {/*only change out the link in src="" for your planetary map, if you swap out the whole iframe, all styling will disappear*/}
        <iframe
          title="planet-map"
          class="background-map planetary"
          width="100%"
          height="100%"
          src="https://maphub.net/embed/100758?button=0&tablinks=1"
        ></iframe>
      </div>
    </div>
  );
};

export default PlanetaryView;
