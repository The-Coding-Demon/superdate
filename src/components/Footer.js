import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const Navigate = useNavigate();
  const handleOnClick = () => {
    let userFindings = JSON.parse(localStorage.getItem("userList"));
    userFindings = [];
    localStorage.setItem("userList", JSON.stringify(userFindings));
    Navigate("./Login");
  };
  return (
    <nav class="navbar fixed-bottom text-center footer">
      <p className="footerText">©SuperDate</p>
      <div className="container-fluid">
        <button
          className="btn btn-info text-white button-nav logOutButton CursorChange"
          type="submit"
          onClick={handleOnClick}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};
