import { useNavigate } from "react-router-dom";

export const ResultCard = ({ activity }) => {
  const Navigate = useNavigate();
  const handleOnClick = () => {
    const itemID = [activity.id];
    const asArray = [activity];
    const result = asArray.filter((val) => itemID.includes(val.id));
    localStorage.setItem("SelectedActivity", JSON.stringify(result));
    Navigate("/DetailedResults");
  };
  return (
    <div class="card CursorChange" onClick={handleOnClick}>
      <img
        src={activity.image}
        class="card-img-top IMGResults"
        alt={activity.title}
      />
      <div class="card-body">
        <h5 class="card-title text-center">{activity.title}</h5>
      </div>
    </div>
  );
};
