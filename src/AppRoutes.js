import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { DetailedResults } from "./pages/DetailedResults";
import { MyFavourites } from "./pages/MyFavourites";
import { MapDirections } from "./pages/MapDirections";
import { Contact } from "./pages/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Results" element={<Results />} />
      <Route path="/DetailedResults" element={<DetailedResults />} />
      <Route path="/MyFavourites" element={<MyFavourites />} />
      <Route path="/MapDirections" element={<MapDirections />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};
