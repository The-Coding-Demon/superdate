import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer.js";
import { Background } from "./components/Background.js";
import { NavigationBar } from "./components/NavigationBar";
import { useState } from "react";

export const App = () => {
  const [data, setData] = useState("");
  const [activityList, setActivityList] = useState([]);
  const [currentActivity, setCurrentActivity] = useState("");
  const checkLast = JSON.parse(localStorage.getItem("currentUser")) || [];
  const [currentUser, changeCurrentUser] = useState("");
  if (checkLast.length > 0) {
    changeCurrentUser(checkLast);
  }
  const stateProps = {
    currentUser,
    changeCurrentUser,
    activityList,
    setActivityList,
    currentActivity,
    setCurrentActivity,
    data,
    setData,
  };
  return (
    <div>
      <BrowserRouter>
        <Background />
        <NavigationBar stateProps={stateProps} />
        <Footer stateProps={stateProps} />
        <AppRoutes stateProps={stateProps} />
      </BrowserRouter>
    </div>
  );
};

export default App;
