import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const Navigate = useNavigate();
  return (
    <nav class="navbar fixed-bottom text-center footer">
      <p className="footerText">©SuperDate</p>
      <div className="container-fluid">
        <button
          className="btn btn-info text-white button-nav logOutButton CursorChange"
          type="submit"
          onClick={() => {
            Navigate("./Login");
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};
