import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { DetailedResults } from "./pages/DetailedResults";
import { MyFavourites } from "./pages/MyFavourites";
import { MapDirections } from "./pages/MapDirections";
import { Contact } from "./pages/Contact";
import { SignUp } from "./pages/SignUp";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/results" element={<Results />} />
      <Route path="/detailed-results" element={<DetailedResults />} />
      <Route path="/my-favourites" element={<MyFavourites />} />
      <Route path="/map-directions" element={<MapDirections />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
