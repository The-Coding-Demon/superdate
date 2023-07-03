import { useNavigate } from "react-router-dom";

export const ResultCard = ({ activity, stateProps }) => {
  const { setCurrentActivity } = stateProps;
  const navigate = useNavigate();
  const handleOnClick = () => {
    const itemID = [activity.id];
    const asArray = [activity];
    const result = asArray.filter((val) => itemID.includes(val.id));
    setCurrentActivity(result[0]);
    navigate("/detailed-results");
  };
  return (
    <div className="card cursor-change" onClick={handleOnClick}>
      <img
        src={activity.image}
        className="card-img-top img-results"
        alt={activity.title}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{activity.title}</h5>
      </div>
    </div>
  );
};
