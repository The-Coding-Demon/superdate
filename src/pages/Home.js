import { BackingLayerBoxes } from "../components/BackingLayerBoxes";
import { useNavigate } from "react-router-dom";

export const Home = ({ stateProps }) => {
  const navigate = useNavigate();
  const { currentUser } = stateProps;
  if (currentUser.length === 0) {
    navigate("./login");
  }
  return (
    <div>
      <BackingLayerBoxes stateProps={stateProps} />
    </div>
  );
};
