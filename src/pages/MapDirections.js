import { useLocation } from "react-router-dom";
import { MapDetails } from "../components/MapDetails";
export const MapDirections = ({ stateProps }) => {
  const { state } = useLocation();
  const mystuff = state;
  console.log(mystuff);
  return (
    <div>
      <MapDetails stateProps={stateProps} />
    </div>
  );
};
