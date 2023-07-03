import DeleteTrash from "./assets/DeleteTrash.png";

export const FavouritesCard = (favourites) => {
  const currentItemAsArray = [favourites.favourites];
  const favouritesFindings = favourites.favourites;
  const userFindings = JSON.parse(localStorage.getItem("userList"));
  let FavouritesItem = userFindings.userFavourites;
  const handleDelete = () => {
    const result = FavouritesItem.filter((listItem) =>
      currentItemAsArray.some((favItem) => listItem.title !== favItem.title)
    );
    userFindings.userFavourites = result;
    localStorage.setItem("userList", JSON.stringify(userFindings));
    window.location.reload();
  };
  return (
    <div>
      <div className="text-white favourites-box">
        <div className="p-3">
          <img
            src={favouritesFindings.image}
            className="main-img-result favourites-img-result"
          ></img>
        </div>
        <div>
          <h2 className="detailed-text">{favouritesFindings.title}</h2>
          <p>{favouritesFindings.description}</p>
        </div>
        <div>
          <img
            src={DeleteTrash}
            alt="deleteicon"
            className="delete-trash-icon cursor-change"
            onClick={handleDelete}
          ></img>
        </div>
      </div>
    </div>
  );
};
