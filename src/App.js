// import { BrowserRouter } from "react-router-dom";
// import { AppRoutes } from "./AppRoutes";

import { NavigationBar } from "./components/NavigationBar";
import MainBG from "./assets/MainBG.mp4";

export const App = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={MainBG} type="video/mp4" />
      </video>
      <NavigationBar />
    </div>
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
  );
};

export default App;
