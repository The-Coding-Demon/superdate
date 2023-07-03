import { FavouritesCard } from "./FavouritesCard";
import BackArrow from "./assets/circle-arrow-left-solid.png";
import { useNavigate } from "react-router-dom";

export const FavouritesContainer = () => {
  const navigate = useNavigate();
  const userFindings = JSON.parse(localStorage.getItem("userList"));
  const favouritesItem = userFindings.userFavourites;
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
      {favouritesItem.map((activityitem) => (
        <FavouritesCard favourites={activityitem} />
      ))}
    </div>
  );
};
