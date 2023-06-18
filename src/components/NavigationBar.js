import MainLogo from "./assets/MainLogo.png";

export const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <img
          src={MainLogo}
          alt="Logo"
          width="150"
          height="24"
          class="d-inline-block align-text-top"
        />
        <button className="btn btn-dark button-nav" type="submit">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
