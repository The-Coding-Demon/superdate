import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import HeartLogo from "./assets/HeartLogo.png";
import { useNavigate } from "react-router-dom";

export const FullDescription = () => {
  const Navigate = useNavigate();
  const SelectedActivity = JSON.parse(localStorage.getItem("SelectedActivity"));
  const SelectedActivityItem = SelectedActivity[0];
  return (
    <div class="p-2 DetailedDesc">
      <img
        src={BackArrow}
        className="BackButton CursorChange"
        onClick={() => {
          Navigate("/results");
        }}
      ></img>
      <div class="p-3">
        <img src={SelectedActivityItem.image} className="MainIMGResult"></img>
      </div>
      <div class="p-3">
        <h2>{SelectedActivityItem.title}</h2>
        <p className="Detailedtext">{SelectedActivityItem.description}</p>
      </div>
      <img
        src={HeartLogo}
        className="HeartButton CursorChange"
        onClick={() => {
          Navigate("/MyFavourites");
        }}
      ></img>
      <img
        src={Location}
        className="LocationButton CursorChange"
        onClick={() => {
          Navigate("/MapDirections");
        }}
      ></img>
    </div>
  );
};
