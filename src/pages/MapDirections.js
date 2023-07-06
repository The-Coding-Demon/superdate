import { MapDetails } from "../components/MapDetails";
import { useState } from "react";

export const MapDirections = ({ stateProps }) => {
  const data = JSON.parse(localStorage.getItem("apiResult")) || [];
  const [getData] = useState(data);
  localStorage.removeItem("apiResult");
  const firstItem = getData[0];
  return (
    <div>
      <MapDetails stateProps={stateProps} firstItem={firstItem} />
    </div>
  );
};
