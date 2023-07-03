import MainLogo from "./assets/MainLogo.png";
import { SignUpForm } from "./SignUpForm";

export const SignUpFormBackingContainer = () => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
      <SignUpForm />
    </div>
  );
};
