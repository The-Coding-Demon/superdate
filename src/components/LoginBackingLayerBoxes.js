import MainLogo from "./assets/MainLogo.png";
import { LoginBox } from "./LoginBox";

export const LoginBackingLayerBoxes = ({ stateProps }) => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo} alt="main-logo"></img>
      <p>Your next date is a touch away</p>
      <LoginBox stateProps={stateProps} />
    </div>
  );
};
