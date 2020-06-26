import React from "react";
import "../Styles/ArtistPage.css";
import DisplayNavbar from "./Navbar";
import { artists } from "../artistData.js";
import ArtistCard from "./ArtistCard";

const ArtistPage = ({ artist }) => {
  return (
    <div className="artist-page">
      <DisplayNavbar />
      <div className="artist-main-div">
        <iframe
          title="planet-map"
          className="background-map"
          width="100%"
          height="100%"
          src={artists[artist].map}
        ></iframe>
        <ArtistCard artist={artist} />
      </div>
    </div>
  );
};

export default ArtistPage;
