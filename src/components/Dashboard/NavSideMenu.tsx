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
    <div className="rounded bg-white shadow flex flex-col p-1">
      {menus.map((menu) => (
        <NavLink
          to={menu.link}
          className={({ isActive }) =>
            `px-3 py-2 rounded flex items-center gap-3 capitalize border-2  ${
              isActive ? "font-semibold border-black" : "border-transparent"
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
