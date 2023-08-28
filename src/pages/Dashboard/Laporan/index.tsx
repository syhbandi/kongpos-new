import { Outlet } from "react-router-dom";
import NavMenu from "../../../components/Dashboard/NavMenu";
import { laporanMenus } from "../../../constants/LaporanMenus";

const Laporan = () => {
  return (
    <>
      <h1 className="text-2xl font-poppins font-semibold mb-5">Laporan</h1>
      <NavMenu menus={laporanMenus} />
      <Outlet />
    </>
  );
};

export default Laporan;
