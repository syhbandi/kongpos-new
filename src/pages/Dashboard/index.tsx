import { Outlet } from "react-router-dom";
import Navbar from "../../components/Dashboard/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useRecoilValue } from "recoil";
import { sidebarState } from "../../atom/sidebar";
import Footer from "../../components/Dashboard/Footer";
import { companyIdState } from "../../atom/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

const Dashboard = () => {
  const isAktif = useRecoilValue(sidebarState);
  const companyId = useRecoilValue(companyIdState);
  return (
    <div
      className={`bg-gray-200 min-h-screen flex flex-col transition-all ease-in-out duration-300 font-roboto select-none ${
        isAktif ? "pl-64" : ""
      }`}
    >
      <Sidebar />
      <Navbar />
      <Suspense fallback={<TopBarProgress />}>
        <div className="p-5">
          {!companyId ? <>Pilih usaha dulu</> : <Outlet />}
        </div>
      </Suspense>
      <Footer />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default Dashboard;
