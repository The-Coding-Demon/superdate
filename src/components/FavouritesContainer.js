import { FavouritesCard } from "./FavouritesCard";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const FavouritesContainer = ({ stateProps }) => {
  const navigate = useNavigate();
  const { currentUser } = stateProps;
  const favouritesItem = currentUser.userFavourites;

  return (
    <div>
      <h1 className="favourites-title text-white text-center pt-4">
        My Favourites
      </h1>
      <img
        src={BackArrow}
        className="back-button-favourites-page cursor-change"
        onClick={() => {
          navigate("/results");
        }}
      ></img>
      {favouritesItem.length === 0 && <h1>no favourites</h1>}

      {favouritesItem.map((activityitem) => (
        <FavouritesCard favourites={activityitem} stateProps={stateProps} />
      ))}
    </div>
  );
};
