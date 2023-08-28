import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: ReactElement;
};

type Props = {
  menus: Menus[];
};

const NavSideMenu = ({ menus }: Props) => {
  return (
    <div className="rounded bg-white shadow flex flex-col">
      {menus.map((menu) => (
        <NavLink
          to={menu.link}
          className={({ isActive }) =>
            `p-3 rounded flex items-center gap-3 ${
              isActive ? "font-semibold" : ""
            }`
          }
          key={menu.title}
        >
          {menu.icon && menu.icon}
          {menu.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavSideMenu;
