export const ResultCard = ({ activity }) => {
  return (
    <div
      class="card CursorChange"
      // onClick={() => {
      //   Navigate("/DetailedResults");
      // }}
    >
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
