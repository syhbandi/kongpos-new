import menus from "../../constants/Menus";
import SidebarMenuDetail from "./SidebarMenuDetail";

type Props = {
  cari: string;
};

const SidebarMenu = ({ cari }: Props) => {
  return (
    <ul className="m-3">
      {menus
        .filter((menu) => menu.title.toLowerCase().includes(cari.toLowerCase()))
        .map((menu) => (
          <SidebarMenuDetail menu={menu} key={menu.title} />
        ))}
    </ul>
  );
};

export default SidebarMenu;
