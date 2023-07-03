import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Results } from "./pages/Results";
import { DetailedResults } from "./pages/DetailedResults";
import { MyFavourites } from "./pages/MyFavourites";
import { MapDirections } from "./pages/MapDirections";
import { Contact } from "./pages/Contact";
import { SignUp } from "./pages/SignUp";

export const AppRoutes = ({ stateProps }) => {
  return (
    <Routes>
      <Route path="/" element={<Home stateProps={stateProps} />} />
      <Route path="/login" element={<Login stateProps={stateProps} />} />
      <Route path="/sign-up" element={<SignUp stateProps={stateProps} />} />
      <Route path="/results" element={<Results stateProps={stateProps} />} />
      <Route
        path="/detailed-results"
        element={<DetailedResults stateProps={stateProps} />}
      />
      <Route
        path="/my-favourites"
        element={<MyFavourites stateProps={stateProps} />}
      />
      <Route
        path="/map-directions"
        element={<MapDirections stateProps={stateProps} />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
