import { useNavigate } from "react-router-dom";
import MainLogo from "./assets/MainLogo.png";
import HeartLogo from "./assets/HeartLogo.png";

export const NavigationBar = ({ stateProps }) => {
  const { currentUser } = stateProps;
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <img
          src={MainLogo}
          alt="Logo"
          width="150"
          height="24"
          className="d-inline-block align-text-top cursor-change"
          onClick={() => {
            navigate("/");
          }}
        />

        {!!currentUser && (
          <button
            className="btn btn-info text-white button-nav-favourites cursor-change"
            type="submit"
            onClick={() => {
              navigate("/my-favourites");
            }}
          >
            <img
              src={HeartLogo}
              alt="HeartLogo"
              width="24"
              height="24"
              className="heart-logo cursor-change"
            />
            Favourites
          </button>
        )}

        <button
          className="btn btn-info text-white button-nav cursor-change"
          type="submit"
          onClick={() => {
            navigate("./contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};
