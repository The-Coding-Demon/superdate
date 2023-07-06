import { FavouritesCard } from "./FavouritesCard";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const FavouritesContainer = ({ stateProps }) => {
  const navigate = useNavigate();
  const { currentUser } = stateProps;
  const favouritesItem = currentUser.userFavourites;

  const goBackAPage = () => {
    navigate("/results");
  };

  return (
    <div>
      <h1 className="favourites-title text-white text-center pt-4">
        My Favourites
      </h1>
      <img
        alt="back arrow"
        src={BackArrow}
        className="back-button-favourites-page cursor-change"
        onClick={goBackAPage}
      ></img>
      {favouritesItem.length === 0 && (
        <h1 className="empty-favourites">no favourites yet</h1>
      )}

      {favouritesItem.map((activityitem) => (
        <FavouritesCard favourites={activityitem} stateProps={stateProps} />
      ))}
    </div>
  );
};
