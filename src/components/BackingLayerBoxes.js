import MainLogo from "./assets/MainLogo.png";
import { QuestionsBox } from "./QuestionsBox";

export const BackingLayerBoxes = ({ stateProps }) => {
  return (
    <div className="back-container">
      <img className="backing-layer" src={MainLogo} alt="main logo"></img>
      <p id="slogan">Your next date is a touch away</p>
      <QuestionsBox stateProps={stateProps} />
    </div>
  );
};
