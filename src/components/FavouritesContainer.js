import { FavouritesCard } from "./FavouritesCard";

export const FavouritesContainer = () => {
  const userFindings = JSON.parse(localStorage.getItem("userList"));
  const FavouritesItem = userFindings.userFavourites;
  return (
    <div>
      <h1 className="FavouritesTitle text-white text-center pt-4">
        My Favourites
      </h1>
      {FavouritesItem.map((activityitem) => (
        <FavouritesCard favourites={activityitem} />
      ))}
    </div>
  );
};
