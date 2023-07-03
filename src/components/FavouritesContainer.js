import { FavouritesCard } from "./FavouritesCard";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const FavouritesContainer = () => {
  const Navigate = useNavigate();
  const userFindings = JSON.parse(localStorage.getItem("userList"));
  const FavouritesItem = userFindings.userFavourites;
  return (
    <div>
      <h1 className="favourites-title text-white text-center pt-4">
        My Favourites
      </h1>
      <img
        src={BackArrow}
        className="back-button-favourites-page cursor-change"
        onClick={() => {
          Navigate("/results");
        }}
      ></img>
      {FavouritesItem.map((activityitem) => (
        <FavouritesCard favourites={activityitem} />
      ))}
    </div>
  );
};
