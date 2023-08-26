import { ReactElement } from "react";
import {
  MdDashboard,
  MdFileOpen,
  MdOutlineHandshake,
  MdOutlineLogout,
} from "react-icons/md";

type Menus = {
  title: string;
  link: string;
  icon: ReactElement;
  isEnd?: boolean;
};
const menus: Menus[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard />,
    isEnd: true,
  },
  {
    title: "Laporan",
    link: "/dashboard/laporan",
    icon: <MdFileOpen />,
  },
  {
    title: "Kontrak",
    link: "/dashboard/kontrak",
    icon: <MdOutlineHandshake />,
  },
  {
    title: "Logout",
    link: "/logout",
    icon: <MdOutlineLogout />,
  },
];

export default menus;
