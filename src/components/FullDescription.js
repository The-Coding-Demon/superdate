import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import HeartLogo from "./assets/HeartLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Axios } from "axios";

export const FullDescription = ({ stateProps }) => {
  const navigate = useNavigate();
  const { currentActivity, currentUser, changeCurrentUser } = stateProps;
  const userFav = currentUser.userFavourites;
  console.log(userFav);

  const handleOnClick = () => {
    userFav.push(currentActivity);
    const theCurrentUsers =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    const makeArray = [currentUser];
    const result = theCurrentUsers.filter((bigList) =>
      makeArray.some((currentUser) => bigList.email !== currentUser.email)
    );
    result.push(currentUser);
    localStorage.setItem("userCollection", JSON.stringify(result));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  };

  const handleSubmit = () => {
    // altermap(selectedActivityItem.title);
  };

  // useEffect(() => {
  //   if (viewmap) {
  //     const fetchData = async () => {
  //       console.log("???");
  //       try {
  //         const data = "im some data";
  //         if (!data) {
  //           throw new Error();
  //         } else {
  //           mapchange(data);
  //           navigate("/map-directions", { state: { mystuff: data } });
  //         }
  //       } catch {
  //         console.log();
  //       }
  //     };

  //     fetchData();
  //   }
  // }, [viewmap, mapresponse]);
  return (
    <div className="p-2 detailed-desc">
      <img
        src={BackArrow}
        className="back-button cursor-change"
        onClick={() => {
          navigate("/results");
        }}
      ></img>
      <div className="p-3">
        <img src={currentActivity.image} className="main-img-result"></img>
      </div>
      <div className="p-3">
        <h2>{currentActivity.title}</h2>
        <p className="detailed-text">{currentActivity.description}</p>
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
