import MainLogo from "./MainLogo.png";
export const HomeButton = () => {
  return (
    <div className="container-fluid HomeButton">
      <img
        src={MainLogo}
        alt="Logo"
        width="250"
        height="40"
        class="d-inline-block align-text-top"
      />
    </div>
  );
};
