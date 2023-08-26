import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../../atom/sidebar";

type menuType = {
  title: string;
  link: string;
  icon: ReactElement;
  isEnd?: boolean;
};

type Props = {
  menu: menuType;
};

const SidebarMenuDetail = ({ menu }: Props) => {
  const setAktif = useSetRecoilState(sidebarState);

  // kalo screen kecil sidebar auto false
  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setAktif(false);
      return;
    }

    return null;
  };

  return (
    <NavLink
      to={menu.link}
      className={({ isActive }) =>
        `flex items-center gap-3  font-roboto p-3 rounded hover:text-white ${
          isActive ? "bg-gray-50 bg-opacity-10 text-white" : "text-gray-300"
        }`
      }
      end={menu.isEnd}
      onClick={toggleSidebar}
    >
      {menu.icon}
      <span>{menu.title}</span>
    </NavLink>
  );
};

export default SidebarMenuDetail;
