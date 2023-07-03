import { InitialResults } from "../components/InitialResults";

export const Results = ({ stateProps }) => {
  const { activityList } = stateProps;
  return (
    <div>
      {!!activityList && <InitialResults stateProps={stateProps} />}
      {activityList.length === 0 && <div>Please do a search</div>}
    </div>
  );
};
