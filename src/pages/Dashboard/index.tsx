import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../../atom/sidebar";

const Dashboard = () => {
  const isAktif = useRecoilValue(sidebarState);
  return (
    <div
      className={`bg-gray-200 min-h-screen transition-all ease-in-out duration-300 ${
        isAktif ? "pl-64" : ""
      }`}
    >
      <Sidebar />
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
