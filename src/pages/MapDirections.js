import Map, { Marker } from "react-map-gl";
import { MapDetails } from "../components/MapDetails";
import "mapbox-gl/dist/mapbox-gl.css";

export const MapDirections = ({ stateProps }) => {
  return (
    <div>
      {/* <MapDetails stateProps={stateProps} /> */}
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  );
};
