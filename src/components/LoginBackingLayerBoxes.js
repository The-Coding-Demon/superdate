import MainLogo from "./assets/MainLogo.png";
import { LoginBox } from "./LoginBox";

export const LoginBackingLayerBoxes = () => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
      <LoginBox />
    </div>
  );
};
