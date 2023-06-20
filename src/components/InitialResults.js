import ScubaDiving from "./assets/ScubaDiving.jpg";
import MiniGolf from "./assets/Mini-Golf.jpg";
import BoatTrip from "./assets/Boat-Trip.jpg";
import Cinema from "./assets/Cinema.jpg";
import { useNavigate } from "react-router-dom";

export const InitialResults = () => {
  const Navigate = useNavigate();
  return (
    <div
      class="d-flex justify-content-evenly flex-wrap gap-5
     InitialResultsCards"
    >
      <div
        class="card"
        onClick={() => {
          Navigate("/DetailedResults");
        }}
      >
        <img src={Cinema} class="card-img-top IMGResults" alt="Cinema" />
        <div class="card-body">
          <h5 class="card-title text-center">Cinema</h5>
        </div>
      </div>
      <div
        class="card"
        onClick={() => {
          Navigate("/DetailedResults");
        }}
      >
        <img src={MiniGolf} class="card-img-top IMGResults" alt="Mini Golf" />
        <div class="card-body">
          <h5 class="card-title text-center">Mini Golf</h5>
        </div>
      </div>
      <div
        class="card"
        onClick={() => {
          Navigate("/DetailedResults");
        }}
      >
        <img
          src={ScubaDiving}
          class="card-img-top IMGResults"
          alt="Scuba Diving"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Scuba Diving</h5>
        </div>
      </div>
      <div
        class="card"
        onClick={() => {
          Navigate("/DetailedResults");
        }}
      >
        <img src={BoatTrip} class="card-img-top IMGResults" alt="Boat Trip" />
        <div class="card-body">
          <h5 class="card-title text-center">Boat Trip</h5>
        </div>
      </div>
    </div>
  );
};
