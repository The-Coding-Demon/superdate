import DeleteTrash from "./assets/DeleteTrash.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FavouritesCard = ({ stateProps, favourites }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
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
        <div>
          {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
            <label>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <FaStar
                className="star"
                size={50}
                color={
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                }
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
              ;
            </label>;
          })}
          {/* <p>Your rating is {rating}</p> */}
        </div>
        <div className="date-picker">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="container">
          <h5>Done?</h5>
          <label class="switch">
            {" "}
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
