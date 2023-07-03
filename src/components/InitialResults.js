import JsonData from "./Dates.json";
import { ResultCard } from "./ResultCard";

export const InitialResults = () => {
  console.log(JsonData);
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
    const numberHolder = [];
    while (finalSelectionArray.length < 4) {
      let mySelection = Math.floor(Math.random() * arr.length);
      let result = numberHolder.includes(mySelection);
      if (!result) {
        numberHolder.push(mySelection);
        finalSelectionArray.push(arr[mySelection]);
      }
    }
    return finalSelectionArray;
  };
  const refreshCheck = () => {
    if (userDatePreferences.cameFromForm == true) {
      JsonPicker();
      userDatePreferences.cameFromForm = false;
      localStorage.setItem(
        "userDatePreferences",
        JSON.stringify(userDatePreferences)
      );
    }
  };
  refreshCheck();
  const getCurrentSelection = JSON.parse(localStorage.getItem("currentSelect"));
  return (
    <div
      className="d-flex justify-content-evenly flex-wrap gap-5
     initial-results-cards"
    >
      {getCurrentSelection.map((activitystuff) => (
        <ResultCard activity={activitystuff} />
      ))}
    </div>
  );
};
