import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";
import Directions from "./assets/Directions.jpg";

export const MapDetails = ({ firstItem }) => {
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
        <img src={Directions} className="main-img-map" alt="directions" />
      </div>
      <div className="p-3">
        <div className="map-text">
          <img src={firstItem.icon} alt="icon" />
          <h2 className="map-venue">{firstItem.name}</h2>
          <p>Address: {firstItem.formatted_address}</p>
          <p>Rating: {firstItem.rating}</p>
          <a href={directionsURL} target="_blank" rel="noreferrer">
            <button
              type="submit"
              className="btn text-white direction-button cursor-change"
            >
              Get the directions on map
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
