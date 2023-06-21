import ScubaDiving from "./assets/ScubaDiving.jpg";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import { useNavigate } from "react-router-dom";

export const FullDescription = () => {
  const Navigate = useNavigate();
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
        <img src={ScubaDiving} className="MainIMGResult"></img>
      </div>
      <div class="p-3">
        <h2>Scuba Diving</h2>
        <p className="Detailedtext">
          Scuba diving is an underwater activity that allows individuals to
          explore the beauty of the underwater world. The term "SCUBA" stands
          for Self-Contained Underwater Breathing Apparatus, which refers to the
          equipment divers use to breathe underwater. It's a popular
          recreational activity, as well as a profession for many who work in
          fields such as marine biology, underwater photography, and underwater
          archaeology.
        </p>
      </div>
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
