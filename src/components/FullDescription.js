import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import HeartLogo from "./assets/HeartLogo.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const FullDescription = () => {
  const [viewmap, altermap] = useState("");
  const [mapresponse, mapchange] = useState("");
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
        try {
          // const { data } = await axios.get(
          //   "https://amazon-price1.p.rapidapi.com/search",
          //   {
          //     params: {
          //       keywords,
          //       marketplace: "GB",
          //     },
          //     headers: {
          //       "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
          //       "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST,
          //     },
          //   }
          // );
          if (data.length === undefined) {
            throw new Error();
          } else {
            mapchange(data);
            Navigate(mapresponse("/MapDetails"));
          }
        } catch {
          console.log();
        }
      };

      fetchData();
    }
  }, [keywords]);
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
