import NavSideMenu from "../../../../components/Dashboard/NavSideMenu";
import { penjualanSubs } from "../../../../constants/LaporanMenus";

const Penjualan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-5">
      <NavSideMenu menus={penjualanSubs} />
      <div className="col-span-3">hai</div>
    </div>
  );
};

export default Penjualan;
