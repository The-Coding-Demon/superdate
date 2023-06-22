import { useNavigate } from "react-router-dom";
import MainLogo from "./assets/MainLogo.png";
import HeartLogo from "./assets/HeartLogo.png";

export const NavigationBar = () => {
  const Navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <img
          src={MainLogo}
          alt="Logo"
          width="180"
          height="30"
          class="d-inline-block align-text-top CursorChange"
          onClick={() => {
            Navigate("/");
          }}
        />
        <button
          className="btn button-nav-favourites CursorChange"
          type="submit"
          onClick={() => {
            Navigate("/MyFavourites");
          }}
        >
          <img
            src={HeartLogo}
            alt="HeartLogo"
            width="24"
            height="24"
            class="HeartLogo CursorChange"
          />
          Favourites
        </button>
        <button
          className="btn button-nav CursorChange"
          type="submit"
          onClick={() => {
            Navigate("./Contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};
