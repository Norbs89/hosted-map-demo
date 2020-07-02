import React from "react";
import "../Styles/PlanetaryView.css";
import DisplayNavbar from "./Navbar";
import { Spring } from "react-spring/renderprops";

const PlanetaryView = () => {
  return (
    <div className="planet-main-div">
      <DisplayNavbar />
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 200 }}>
        {(props) => (
          <div style={props}>
            <div>
              <iframe
                title="planet-map"
                class="background-map planetary"
                width="100%"
                height="100%"
                src="https://maphub.net/embed/98251?button=0"
              ></iframe>
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default PlanetaryView;
