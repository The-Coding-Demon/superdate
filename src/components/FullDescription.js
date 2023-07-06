import BackArrow from "./assets/circle-arrow-left-solid.png";
import Location from "./assets/location-dot-solid.png";
import HeartLogo from "./assets/HeartLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import useGeoLocation from "../hooks/useGeoLocation";
import { useFetchGetFn } from "../hooks/useFetch";

export const FullDescription = ({ stateProps }) => {
  const navigate = useNavigate();
  const { currentActivity, currentUser } = stateProps;
  const userFav = currentUser.userFavourites || [];
  const { loading: geoLocationLoading, latitude, longitude } = useGeoLocation();
  const { loading: apiCallLoading, data, error, sendRequest } = useFetchGetFn();

  const goBackAPage = () => {
    navigate("/results");
  };

  const handleOnClick = () => {
    currentActivity.starRating = null;
    currentActivity.dateTime = new Date();
    currentActivity.dateFriend = null;
    currentActivity.dateDone = false;

    const checkFav = userFav.filter((bigList) =>
      [currentActivity].some(
        (currentItem) => bigList.title === currentItem.title
      )
    );

    if (checkFav.length === 0) {
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
    } else {
      alert("Fav already exists");
    }
  };

  const handleGetDirections = useCallback(() => {
    if (geoLocationLoading) {
      alert("Please allow location access");
      return;
    }
    const url = `https://gmaps-places-api-corsproxy.thomace44.workers.dev/corsproxy/textsearch?key=AIzaSyD0KNQdQHzS3ZGi2L2TV6mW2cs8PGs7L3s&query=${encodeURIComponent(
      currentActivity.title
    )}%20near%20me&location=${latitude},${longitude}`;
    sendRequest(url, { mode: "cors" });
  }, [
    geoLocationLoading,
    latitude,
    longitude,
    currentActivity.title,
    sendRequest,
  ]);

  useEffect(() => {
    if (!apiCallLoading && !error && data && data.results.length > 0) {
      const firstHit = data.results[0];
      const placeId = firstHit.place_id;
      const destinationLat = firstHit.geometry.location.lat;
      const destinationLng = firstHit.geometry.location.lng;
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&destination_place_id=${placeId}&origin=${latitude},${longitude}`;
      localStorage.setItem("directionURL", JSON.stringify(url));
    }
  }, [apiCallLoading, error, data, longitude, latitude]);

  return (
    <div className="p-2 detailed-desc">
      <img
        src={BackArrow}
        className="back-button cursor-change"
        onClick={goBackAPage}
        alt="back arrow"
      ></img>
      <div className="p-3">
        <img
          src={currentActivity.image}
          className="main-img-result"
          alt="currentactivity"
        ></img>
      </div>
      <div className="p-3">
        <h2>{currentActivity.title}</h2>
        <p className="detailed-text">{currentActivity.description}</p>
      </div>
      <img
        src={HeartLogo}
        className="heart-button cursor-change"
        onClick={handleOnClick}
        alt="heart icon"
      ></img>
      <img
        src={Location}
        className="location-button cursor-change"
        onClick={handleGetDirections}
        alt="location icon"
      ></img>
    </div>
  );
};
