import { ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sidebarState } from "../../atom/sidebar";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

type menuType = {
  title: string;
  link: string;
  icon: ReactElement;
  isEnd?: boolean;
  subMenu?: menuType[];
};

type Props = {
  menu: menuType;
};

const SidebarMenuDetail = ({ menu }: Props) => {
  const setAktif = useSetRecoilState(sidebarState);
  const [subAktif, setSubAktif] = useState(false);

  // kalo screen kecil sidebar auto false
  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setAktif(false);
      return;
    }

    return null;
  };

  if (menu.subMenu?.length)
    return (
      <li>
        <div
          className={`flex items-center gap-3 font-roboto rounded text-gray-300 hover:text-white cursor-pointer p-3`}
          onClick={() => setSubAktif(!subAktif)}
        >
          <span>{menu.icon}</span>
          <span className="capitalize">{menu.title}</span>
          <span className="ml-auto">
            {subAktif ? <MdExpandLess /> : <MdExpandMore />}
          </span>
        </div>

        <div className="px-3">
          {subAktif &&
            menu.subMenu?.map((menu) => (
              <SidebarMenuDetail menu={menu} key={menu.title} />
            ))}
        </div>
      </li>
    );

  return (
    <NavLink
      to={menu.link}
      className={({ isActive }) =>
        `flex items-center gap-3  font-roboto p-3 rounded hover:text-white ${
          isActive ? "bg-gray-50 bg-opacity-5 text-white" : "text-gray-300"
        }`
      }
      end={menu.isEnd}
      onClick={toggleSidebar}
    >
      {menu.icon}
      <span className="capitalize">{menu.title}</span>
    </NavLink>
  );
};

export default SidebarMenuDetail;
