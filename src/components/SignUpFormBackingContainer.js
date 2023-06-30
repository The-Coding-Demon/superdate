import MainLogo from "./assets/MainLogo.png";
import { SignUpForm } from "./SignUpForm";

export const SignUpFormBackingContainer = () => {
  return (
    <div className="BackContainer">
      <img className="BackingLayer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
      <SignUpForm />
    </div>
  );
};
