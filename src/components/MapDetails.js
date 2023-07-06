import Map from "./assets/MapImage.png";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const MapDetails = ({ stateProps }) => {
  const data = JSON.parse(localStorage.getItem("apiResult")) || [];
  const [getData, setData] = useState(data);
  const directionsURL = JSON.parse(localStorage.getItem("directionURL")) || [];
  localStorage.removeItem("apiResult");
  const firstItem = getData[0];
  const navigate = useNavigate();

  const goToDetailedResultsPage = () => {
    navigate("/detailed-results");
  };

  console.log(getData);
  console.log(directionsURL);

  return (
    <div class="p-2 map-details">
      <img
        alt="back arrow"
        src={BackArrow}
        className="back-button cursor-change"
        onClick={goToDetailedResultsPage}
      />
      <div className="p-3">
        {/* <img src={firstItem.photos} className="main-img-map" /> */}
      </div>
      <div className="p-3">
        <div className="map-text">
          <img src={firstItem.icon} />
          <h2>Venue: {firstItem.name}</h2>
          <p>Address: {firstItem.formatted_address}</p>
          <p>Opening Times: {firstItem.opening_hours[0].open_now}</p>
          <p>Rating: {firstItem.rating}</p>
        </div>
      </div>
    </div>
  );
};
