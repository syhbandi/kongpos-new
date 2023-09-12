type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: React.ReactElement;
};
const kontrakMenus: Menus[] = [
  {
    title: "Buat Kontrak",
    link: "",
    isEnd: true,
  },
  {
    title: "Data Supplier",
    link: "supplier",
  },
  {
    title: "Permintaan Kontrak",
    link: "permintaan",
  },
];

export default kontrakMenus;
