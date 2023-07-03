import Map from "./assets/MapImage.png";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const MapDetails = ({ stateProps }) => {
  console.log("Check 2");
  const navigate = useNavigate();
  return (
    <div class="p-2 map-details">
      <img
        src={BackArrow}
        className="back-button cursor-change"
        onClick={() => {
          navigate("/detailed-results");
        }}
      ></img>
      <div className="p-3">
        <img src={Map} className="main-img-map"></img>
      </div>
      <div className="p-3">
        <h2>Map Directions</h2>
        <p className="map-text">
          1. Start by heading southeast on the A52 road from Nottingham city
          center. 2. Continue on the A52 for about 9 miles (14.5 kilometers)
          until you reach the junction with the M1 motorway. 3. Join the M1
          motorway southbound (signposted Birmingham) and continue for
          approximately 4.5 miles (7 kilometers). 4. Take exit 23A to merge onto
          the A42 towards Tamworth/Birmingham. 5. Stay on the A42 for around 14
          miles (22.5kilometers) until you reach the junction with the M42
          motorway. 6. Merge onto the M42 motorway northbound (signposted
          Nottingham/Leicester). 7. Continue on the M42 for about 9 miles (14.5
          kilometers) until you reach junction 9. 8. At junction 9, take the
          A446 exit to Coleshill/Birmingham (North & East). 9. Follow the A446
          for approximately 2.5 miles (4 kilometers) until you see signs for the
          National Exhibition Centre (NEC) and Resorts World Birmingham. 10.
          Take the exit towards Resorts World Birmingham and follow the signs to
          Bear Grylls Adventure, which is located within Resorts World.
        </p>
      </div>
    </div>
  );
};
