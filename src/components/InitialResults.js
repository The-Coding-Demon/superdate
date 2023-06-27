import { json, useNavigate } from "react-router-dom";
import JsonData from "./Dates.json";
import { ResultCard } from "./ResultCard";

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
    randomSelection(newArray);
  };
  const randomSelection = (arr) => {
    const newRandomList = createNewList(arr);
    localStorage.setItem("currentSelect", JSON.stringify(newRandomList));
  };
  const createNewList = (arr) => {
    const finalSelectionArray = [];
    const randomiser = Math.floor(Math.random() * arr.length);
    finalSelectionArray.push(arr[randomiser]);
    let randomiser2 = Math.floor(Math.random() * arr.length);
    if (randomiser == randomiser2) {
      randomiser2 = Math.floor(Math.random() * arr.length);
    }
    finalSelectionArray.push(arr[randomiser2]);
    let randomiser3 = Math.floor(Math.random() * arr.length);
    if (randomiser3 == randomiser || randomiser3 == randomiser2) {
      randomiser3 = Math.floor(Math.random() * arr.length);
    }
    finalSelectionArray.push(arr[randomiser3]);
    let randomiser4 = Math.floor(Math.random() * arr.length);
    if (
      randomiser4 == randomiser ||
      randomiser4 == randomiser2 ||
      randomiser4 == randomiser3
    ) {
      randomiser4 = Math.floor(Math.random() * arr.length);
    }
    finalSelectionArray.push(arr[randomiser4]);
    return finalSelectionArray;
  };
  JsonPicker();
  const getCurrentSelection = JSON.parse(localStorage.getItem("currentSelect"));
  return (
    <div
      class="d-flex justify-content-evenly flex-wrap gap-5
     InitialResultsCards"
    >
      {getCurrentSelection.map((activitystuff) => (
        <ResultCard activity={activitystuff} />
      ))}
    </div>
  );
};
