import { BackingLayerBoxes } from "../components/BackingLayerBoxes";

const CheckLogin = () => {
  const GetLogin = localStorage.getItem(
    "userList",
    JSON.parse(localStorage.getItem("userList"))
  );
  if (!GetLogin) {
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
