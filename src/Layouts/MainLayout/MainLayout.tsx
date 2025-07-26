import TopBar from "../../Components/TopBar/TopBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
