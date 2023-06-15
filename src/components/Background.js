import MainBG from "./MainBG.mp4";

export const Background = () => {
  return (
    <div>
      <video autoPlay loop muted>
        <source src={MainBG} type="video/mp4" />
      </video>
    </div>
  );
};
