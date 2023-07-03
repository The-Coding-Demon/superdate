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
    const theCurrentUsers =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    const makeArray = [userFindings];
    const result = theCurrentUsers.filter((bigList) =>
      makeArray.some((currentUser) => bigList.email !== currentUser.email)
    );
    console.log(result);
    result.push(userFindings);
    console.log(SelectedActivityItem);
    localStorage.setItem("userCollection", JSON.stringify(result));
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
            Navigate("/map-directions", { state: { mystuff: data } });
          }
        } catch {
          console.log();
        }
      };

      fetchData();
    }
  }, [viewmap, mapresponse]);
  return (
    <div className="p-2 detailed-desc">
      <img
        src={BackArrow}
        className="back-button cursor-change"
        onClick={() => {
          Navigate("/results");
        }}
      ></img>
      <div className="p-3">
        <img src={SelectedActivityItem.image} className="main-img-result"></img>
      </div>
      <div className="p-3">
        <h2>{SelectedActivityItem.title}</h2>
        <p className="detailed-text">{SelectedActivityItem.description}</p>
      </div>
      <img
        src={HeartLogo}
        className="heart-button cursor-change"
        onClick={handleOnClick}
      ></img>
      <img
        src={Location}
        className="location-button cursor-change"
        onClick={handleSubmit}
      ></img>
    </div>
  );
};
