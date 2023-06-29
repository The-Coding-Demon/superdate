import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import HeartLogo from "./assets/HeartLogo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Axios } from "axios";

export const FullDescription = () => {
  const [viewmap, altermap] = useState("");
  const [mapresponse, mapchange] = useState("");
  const [data, setData] = useState(null);
  const Navigate = useNavigate();
  const SelectedActivity = JSON.parse(localStorage.getItem("SelectedActivity"));
  const SelectedActivityItem = SelectedActivity[0];
  const handleOnClick = () => {
    const userFindings = JSON.parse(localStorage.getItem("userList"));
    const ItemValue = userFindings.userFavourites;
    ItemValue.push(SelectedActivityItem);
    localStorage.setItem("userList", JSON.stringify(userFindings));
    console.log(SelectedActivityItem);
  };
  const handleSubmit = () => {
    altermap(SelectedActivityItem.title);
  };

  useEffect(() => {
    if (viewmap) {
      const fetchData = async () => {
        console.log("???");
        try {
          const data = "im some data";
          if (!data) {
            throw new Error();
          } else {
            mapchange(data);
            Navigate("/MapDirections", { state: { mystuff: data } });
          }
        } catch {
          console.log();
        }
      };

      fetchData();
    }
  }, [viewmap, mapresponse]);
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
        onClick={handleOnClick}
      ></img>
      <img
        src={Location}
        className="LocationButton CursorChange"
        onClick={handleSubmit}
      ></img>
    </div>
  );
};
