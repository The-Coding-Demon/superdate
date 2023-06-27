import ScubaDiving from "./assets/ScubaDiving.jpg";
import MiniGolf from "./assets/Mini-Golf.jpg";
import BoatTrip from "./assets/Boat-Trip.jpg";
import Cinema from "./assets/Cinema.jpg";
import { useNavigate } from "react-router-dom";
import JsonData from "./Dates.json";

export const InitialResults = () => {
  console.log(JsonData);
  const Navigate = useNavigate();
  const userDatePreferences = JSON.parse(
    localStorage.getItem("userDatePreferences")
  );

  const JsonPicker = () => {
    const newArray = [];
    const Jsoncards = JsonData.data;

    if (userDatePreferences.venueCategoryChoice == "Indoor") {
      for (let i = 0; i < Jsoncards.length; i++) {
        let currentItem = Jsoncards[i];
        let checkindoor = currentItem.indoor;
        if (checkindoor == true) {
          newArray.push(currentItem);
        }
      }
      console.log(newArray);
    } else {
      for (let i = 0; i < Jsoncards.length; i++) {
        let currentItem = Jsoncards[i];
        let checkindoor = currentItem.indoor;
        if (checkindoor == false) {
          newArray.push(currentItem);
        }
      }
    }
    secondFilter(newArray);
  };
  const secondFilter = (arr) => {
    const newArray = [];
    if (userDatePreferences.timeCategoryChoice == "Day") {
      for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let checkday = currentItem.day;
        if (checkday == true) {
          newArray.push(currentItem);
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let checkday = currentItem.day;
        if (checkday == false) {
          newArray.push(currentItem);
        }
      }
    }
    thirdFilter(newArray);
  };
  const thirdFilter = (arr) => {
    const newArray = [];
    if (userDatePreferences.lengthCategoryChoice == "Long") {
      for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let checklong = currentItem.long;
        if (checklong == true) {
          newArray.push(currentItem);
        }
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let checklong = currentItem.long;
        if (checklong == false) {
          newArray.push(currentItem);
        }
      }
    }
    console.log(newArray);
  };
  JsonPicker();
  return (
    <div
      class="d-flex justify-content-evenly flex-wrap gap-5
     InitialResultsCards"
    ></div>
  );
};
