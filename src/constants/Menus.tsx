import { ReactElement } from "react";
import {
  MdDashboard,
  MdFileOpen,
  MdOutlineHandshake,
  MdOutlineLogout,
  MdQrCode,
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
    title: "Produk",
    link: "produk",
    icon: <MdQrCode />,
  },
  {
    title: "Laporan",
    link: "laporan",
    icon: <MdFileOpen />,
  },
  {
    title: "Kontrak",
    link: "kontrak",
    icon: <MdOutlineHandshake />,
  },
  {
    title: "Logout",
    link: "/logout",
    icon: <MdOutlineLogout />,
  },
];

export default menus;
