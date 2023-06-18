import MainLogo from "./assets/MainLogo.png";

export const BackingLayerBoxes = () => {
  return (
    <div className="BackContainer">
      <img className="BackingLayer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
    </div>
  );
};
