export const ResultCard = () => {
  return (
    <div
      class="card CursorChange"
      onClick={() => {
        Navigate("/DetailedResults");
      }}
    >
      <img src={Cinema} class="card-img-top IMGResults" alt="Cinema" />
      <div class="card-body">
        <h5 class="card-title text-center">Cinema</h5>
      </div>
    </div>
  );
};
