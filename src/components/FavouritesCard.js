import DeleteTrash from "./assets/DeleteTrash.png";

export const FavouritesCard = (favourites) => {
  const favouritesFindings = favourites.favourites;
  const handleDelete = () => {
    const userFindings = JSON.parse(localStorage.getItem("userList"));
    const ItemValue = userFindings.userFavourites;
    ItemValue.filter();
    localStorage.setItem("userList", JSON.stringify(userFindings));
  };
  return (
    <div>
      <div className="text-white FavouritesBox">
        <div class="p-3">
          <img src={favouritesFindings.image} className="MainIMGResult"></img>
        </div>
        <div>
          <h2 className="Detailedtext">{favouritesFindings.title}</h2>
          <p>{favouritesFindings.description}</p>
        </div>
        <div>
          <img
            src={DeleteTrash}
            alt="deleteicon"
            className="DeleteTrashIcon CursorChange"
            onClick={handleDelete}
          ></img>
        </div>
      </div>
    </div>
  );
};
