import { useNavigate } from "react-router-dom";
import MainLogo from "./assets/MainLogo.png";
export const HomeButton = () => {
  const Navigate = useNavigate();
  return (
    <div className="container-fluid HomeButton">
      <img
        onClick={() => {
          Navigate("/");
        }}
        src={MainLogo}
        alt="Logo"
        width="250"
        height="40"
        class="d-inline-block align-text-top"
      />
    </div>
  );
};
