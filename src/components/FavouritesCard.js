import DeleteTrash from "./assets/DeleteTrash.png";
import { useNavigate } from "react-router-dom";

export const FavouritesCard = ({ stateProps, favourites }) => {
  const navigate = useNavigate();
  const { currentUser, changeCurrentUser } = stateProps;
  let favList = currentUser.userFavourites;

  const handleDelete = () => {
    const result = favList.filter((listItem) =>
      [favourites].some((favItem) => listItem.title !== favItem.title)
    );
    currentUser.userFavourites = result;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    navigate("/my-favourites");
  };
  return (
    <div>
      <div className="text-white favourites-box">
        <div className="p-3">
          <img
            src={favourites.image}
            className="main-img-result favourites-img-result"
          ></img>
        </div>
        <div>
          <h2 className="detailed-text">{favourites.title}</h2>
          <p>{favourites.description}</p>
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
