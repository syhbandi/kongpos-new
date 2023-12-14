import { ReactElement } from "react";
import {
  MdCategory,
  MdDashboard,
  MdDns,
  MdFileOpen,
  MdLabel,
  MdOutlineHandshake,
  MdOutlineLogout,
  MdQrCode,
} from "react-icons/md";

type Menus = {
  title: string;
  link: string;
  icon: ReactElement;
  isEnd?: boolean;
  subMenu?: Menus[];
};
const menus: Menus[] = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard />,
    isEnd: true,
  },
  {
    title: "Data Master",
    icon: <MdDns />,
    link: "",
    subMenu: [
      { title: "produk", icon: <MdQrCode />, link: "produk" },
      { title: "kategori", icon: <MdCategory />, link: "kategori" },
      { title: "satuan", icon: <MdLabel />, link: "satuan" },
      { title: "merk", icon: <MdLabel />, link: "merk" },
    ],
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
