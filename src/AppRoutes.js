import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Home";
import { Results } from "./pages/Home";
import { DetailedResults } from "./pages/Home";
import { MyFavourites } from "./pages/Home";
import { MapDirections } from "./pages/Home";
import { Contact } from "./pages/Home";

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
