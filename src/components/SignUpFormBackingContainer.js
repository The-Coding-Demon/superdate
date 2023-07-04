import MainLogo from "./assets/MainLogo.png";
import { SignUpForm } from "./SignUpForm";

export const SignUpFormBackingContainer = ({ stateProps }) => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo}></img>
      <p id="slogan">Your next date is a touch away</p>
      <SignUpForm stateProps={stateProps} />
    </div>
  );
};
