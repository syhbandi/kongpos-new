import { MdMenu } from "react-icons/md";
import { useRecoilState } from "recoil";
import { sidebarState } from "../../atom/sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  return (
    <div className="h-16 bg-white flex items-center px-5">
      <button className="outline-none" onClick={() => setSidebar(!sidebar)}>
        <MdMenu className="text-xl" />
      </button>
    </div>
  );
};

export default Navbar;
