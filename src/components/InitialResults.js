import JsonData from "./Dates.json";
import { ResultCard } from "./ResultCard";
import useEffectOnce from "../hooks/useEffectOnce";

export const InitialResults = ({ stateProps }) => {
  const userDatePreferences = JSON.parse(
    localStorage.getItem("userDatePreferences")
  );

  const { activityList, setActivityList } = stateProps;
  useEffectOnce(() => {
    const JsonPicker = () => {
      const newArray = [];
      const jsonCards = JsonData.data;

      if (userDatePreferences.venueCategoryChoice === "Indoor") {
        for (let i = 0; i < jsonCards.length; i++) {
          let currentItem = jsonCards[i];
          let checkindoor = currentItem.indoor;
          if (checkindoor) {
            newArray.push(currentItem);
          }
        }
        console.log(newArray);
      } else {
        for (let i = 0; i < jsonCards.length; i++) {
          let currentItem = jsonCards[i];
          let checkIndoor = currentItem.indoor;
          if (!checkIndoor) {
            newArray.push(currentItem);
          }
        }
      }
      secondFilter(newArray);
    };

    const secondFilter = (arr) => {
      const newArray = [];
      if (userDatePreferences.timeCategoryChoice === "Day") {
        for (let i = 0; i < arr.length; i++) {
          let currentItem = arr[i];
          let checkDay = currentItem.day;
          if (checkDay) {
            newArray.push(currentItem);
          }
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          let currentItem = arr[i];
          let checkDay = currentItem.day;
          if (checkDay) {
            newArray.push(currentItem);
          }
        }
      }
      randomSelection(newArray);
    };

    const randomSelection = (arr) => {
      const newRandomList = createNewList(arr);
      setActivityList(newRandomList);
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
        return finalSelectionArray;
      }

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
    };
  });
  return (
    <div
      className="d-flex justify-content-evenly flex-wrap gap-5
     initial-results-cards"
    >
      {activityList.map((activitystuff, i) => (
        <ResultCard key={i} activity={activitystuff} stateProps={stateProps} />
      ))}
    </div>
  );
};
