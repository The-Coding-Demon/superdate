import { useNavigate } from "react-router-dom";
import MainLogo from "./assets/MainLogo.png";
export const HomeButton = () => {
  const Navigate = useNavigate();
  return (
    <div className="container-fluid home-button">
      <img
        onClick={() => {
          Navigate("/");
        }}
        src={MainLogo}
        alt="Logo"
        width="250"
        height="40"
        className="d-inline-block align-text-top"
      />
    </div>
  );
};
