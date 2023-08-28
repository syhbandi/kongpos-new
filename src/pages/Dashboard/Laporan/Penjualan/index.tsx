import { Outlet } from "react-router-dom";
import NavSideMenu from "../../../../components/Dashboard/NavSideMenu";
import { penjualanSubs } from "../../../../constants/LaporanMenus";

const Penjualan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mt-5">
      <NavSideMenu menus={penjualanSubs} />
      <div className="col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Penjualan;
