import DeleteTrash from "./assets/DeleteTrash.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FavouritesCard = ({ stateProps, favourites }) => {
  const { currentUser, changeCurrentUser } = stateProps;
  let favList = currentUser.userFavourites;
  const [rating, setRating] = useState(favourites.starRating);
  const [hover, setHover] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const myLength = [1, 2, 3, 4, 5];

  const handleRating = (e) => {
    setRating(Number(e.target.value));
    const result = favList.filter((listItem) =>
      [favourites].some((favItem) => listItem.title === favItem.title)
    );
    result[0].starRating = Number(e.target.value);

    const everyBut = favList.filter((listItem) =>
      [favourites].some((favItem) => listItem.title !== favItem.title)
    );

    everyBut.push(result[0]);
    favList = everyBut;

    const theCurrentUsers =
      JSON.parse(localStorage.getItem("userCollection")) || [];
    const checkLogin = [currentUser];
    const filterAccounts = theCurrentUsers.filter((bigList) =>
      checkLogin.some((singleUser) => bigList.email !== singleUser.email)
    );

    filterAccounts.push(currentUser);
    localStorage.setItem("userCollection", JSON.stringify(filterAccounts));
  };

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
        <div className="ratings">
          {myLength.map((star, index) => {
            const currentRating = index + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={handleRating}
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
              </label>
            );
          })}

          <p className="rating-tag">Rating Score {rating}</p>
        </div>
        <div className="extras-container">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="extras-container">
          <input className="date-guest" placeholder="DateGuest"></input>
        </div>
        <div className="extras-container">
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
