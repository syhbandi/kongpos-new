import { MdMenu, MdPerson } from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { sidebarState } from "../../atom/sidebar";
import { userState } from "../../atom/User";
import SelectUsaha from "./SelectUsaha";

const Navbar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);
  const user = useRecoilValue(userState);

  return (
    <div className="h-16 bg-white flex items-center px-5 font-roboto">
      <button
        className="outline-none mr-5"
        onClick={() => setSidebar(!sidebar)}
      >
        <MdMenu className="text-xl" />
      </button>

      <SelectUsaha />

      <div className="ml-auto flex items-center gap-3">
        <h5>{user?.nama_user}</h5>
        <div className="w-8 h-8 rounded-full bg-gray-800 p-2 text-white">
          <MdPerson />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
