import Map from "./assets/MapImage.png";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MapDetails = ({ stateProps, firstItem }) => {
  const navigate = useNavigate();
  const directionsURL = JSON.parse(localStorage.getItem("directionURL")) || [];

  const goToDetailedResultsPage = () => {
    navigate("/detailed-results");
  };

  return (
    <div class="p-2 map-details">
      <img
        alt="back arrow"
        src={BackArrow}
        className="back-button cursor-change"
        onClick={goToDetailedResultsPage}
      />
      <div className="p-3">
        {/* <a href={directionsURL}>
          <img
            src={firstItem.photos}
            className="main-img-map"
            alt="photo of venue"
            target="_blank"
          />
        </a> */}
      </div>
      <div className="p-3">
        <div className="map-text">
          <a href={directionsURL} target="_blank">
            <img src={firstItem.icon} alt="icon" />
          </a>
          <h2>Venue: {firstItem.name}</h2>
          <p>Address: {firstItem.formatted_address}</p>
          <p>Opening Times: {firstItem.opening_hours.open_now}</p>
          <p>Rating: {firstItem.rating}</p>
        </div>
      </div>
    </div>
  );
};
