import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { Footer } from "./components/Footer.js";
import { Background } from "./components/Background.js";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Background />
        <NavigationBar />
        <Footer />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
