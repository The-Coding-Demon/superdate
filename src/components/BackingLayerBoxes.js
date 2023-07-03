import MainLogo from "./assets/MainLogo.png";
import { QuestionsBox } from "./QuestionsBox";

export const BackingLayerBoxes = () => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo}></img>
      <p>Your next date is a touch away</p>
      <QuestionsBox />
    </div>
  );
};
