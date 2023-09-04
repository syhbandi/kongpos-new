import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
type Menus = {
  title: string;
  link: string;
  icon?: ReactElement;
  isEnd?: boolean;
};

type Props = {
  menus: Menus[];
};

const NavMenu = ({ menus }: Props) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-track-rounded-full py-2 hover:scrollbar-thumb-slate-400 mb-5">
      {menus.map((menu) => (
        <NavLink
          to={menu.link}
          key={menu.title}
          className={({ isActive }) =>
            `rounded  min-w-fit py-2 px-5 text-center cursor-pointer bg-white capitalize border-2 ${
              isActive ? "border-black font-semibold" : "border-transparent"
            }`
          }
          end={menu.isEnd}
        >
          {menu.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavMenu;
