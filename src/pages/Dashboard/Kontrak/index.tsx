import { Outlet } from "react-router-dom";
import NavMenu from "../../../components/Dashboard/NavMenu";
import kontrakMenus from "../../../constants/KontrakMenus";

const index = () => {
  return (
    <>
      <h1 className="text-2xl font-poppins font-semibold mb-5">Kontrak</h1>
      <NavMenu menus={kontrakMenus} />
      <Outlet />
    </>
  );
};

export default index;
