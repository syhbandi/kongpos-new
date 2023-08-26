import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../../atom/sidebar";
import Footer from "../../components/Dashboard/Footer";

const Dashboard = () => {
  const isAktif = useRecoilValue(sidebarState);
  return (
    <div
      className={`bg-gray-200 min-h-screen flex flex-col transition-all ease-in-out duration-300 ${
        isAktif ? "pl-64" : ""
      }`}
    >
      <Sidebar />
      <Navbar />
      <div className="p-5">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
