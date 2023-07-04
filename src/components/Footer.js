import { useNavigate } from "react-router-dom";

export const Footer = ({ stateProps }) => {
  const navigate = useNavigate();
  const { changeCurrentUser } = stateProps;

  const handleOnClick = () => {
    changeCurrentUser("");
    localStorage.removeItem("currentUser");
    navigate("./login");
  };

  return (
    <nav className="navbar fixed-bottom text-center footer">
      <p className="footer-text">©SuperDate</p>
      <div className="container-fluid">
        <button
          className="btn btn-info text-white button-nav log-out-button cursor-change"
          type="submit"
          onClick={handleOnClick}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};
