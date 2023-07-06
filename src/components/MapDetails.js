import Map from "./assets/MapImage.png";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const MapDetails = ({ stateProps }) => {
  console.log("Check 2");
  const navigate = useNavigate();

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
      ></img>
      <div className="p-3">
        <img src={Map} className="main-img-map"></img>
      </div>
      <div className="p-3">
        <div>
          <img>icon</img>
          <h2>Name Of Place</h2>
        </div>
        <p className="map-text">Formatted Address</p>
        <p className="map-text">Opening Times</p>
        <p className="map-text">Rating</p>
      </div>
    </div>
  );
};
