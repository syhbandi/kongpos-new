import { useState } from "react";
import { logo } from "../../constants/Images";
import SidebarMenu from "./SidebarMenu";
import { MdSearch } from "react-icons/md";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../atom/sidebar";

const Sidebar = () => {
  const [cari, setCari] = useState("");
  const [isAktif] = useRecoilState(sidebarState);

  return (
    <div
      className={`fixed  top-0 w-64 bg-gray-800 shadow-lg h-screen transition-all ease-in-out duration-300 overflow-auto scrollbar-custom ${
        isAktif ? "left-0 " : "-left-64"
      }`}
    >
      <div className="h-16 flex items-center justify-center">
        <img src={logo} alt="logo kongpos" width={30} height={30} />
        <span className="font-semibold text-xl font-poppins text-white ml-3">
          KONGPOS
        </span>
      </div>
      <div className="m-3 flex items-center bg-gray-50 rounded border border-gray-50 p-2 gap-3">
        <span className="text-xl">
          <MdSearch />
        </span>
        <input
          type="search"
          className=" w-full outline-none font-roboto"
          placeholder="Cari menu"
          value={cari}
          onChange={({ target }) => setCari(target.value)}
        />
      </div>
      <SidebarMenu cari={cari} />
    </div>
  );
};

export default Sidebar;
