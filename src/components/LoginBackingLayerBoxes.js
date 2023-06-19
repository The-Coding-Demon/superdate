import MainLogo from "./assets/MainLogo.png";
import { LoginBox } from "./LoginBox";

export const LoginBackingLayerBoxes = () => {
  return (
    <div className="BackContainer">
      <img className="BackingLayer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
      <LoginBox />
    </div>
  );
};
