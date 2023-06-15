import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer.js";
import { Background } from "./components/Background.js";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Background />
        <Footer props="©Superdate" />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
