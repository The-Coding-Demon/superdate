import { InitialResults } from "../components/InitialResults";

export const Results = ({ stateProps }) => {
  const { activityList } = stateProps;
  return (
    <div>
      {!!activityList && <InitialResults stateProps={stateProps} />}
      {activityList.length === 0 && (
        <div className="empty-favourites">
          Please click on the home button and do another search
        </div>
      )}
    </div>
  );
};
