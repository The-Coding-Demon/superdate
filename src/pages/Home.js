import { BackingLayerBoxes } from "../components/BackingLayerBoxes";

const CheckLogin = () => {
  const GetLogin = JSON.parse(localStorage.getItem("userList")) || [];
  if (GetLogin.length == 0) {
    window.location.href = "/Login";
  }
};
export const Home = () => {
  CheckLogin();
  return (
    <div>
      <BackingLayerBoxes />
    </div>
  );
};
