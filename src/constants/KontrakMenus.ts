type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: React.ReactElement;
};
const kontrakMenus: Menus[] = [
  {
    title: "Kontrak",
    link: "",
    isEnd: true,
  },
  {
    title: "Permintaan",
    link: "permintaan",
  },
  {
    title: "Produk",
    link: "produk",
  },
  { title: "Supplier", link: "supplier" },
];

export default kontrakMenus;
