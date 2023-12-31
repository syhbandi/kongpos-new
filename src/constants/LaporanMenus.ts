import { ReactElement } from "react";

type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: ReactElement;
};

export const laporanMenus: Menus[] = [
  {
    title: "penjualan",
    link: "",
    isEnd: true,
  },
  {
    title: "order penjualan",
    link: "order-penjualan",
  },
  {
    title: "retur penjualan",
    link: "retur-penjualan",
  },
  {
    title: "pembelian",
    link: "pembelian",
  },
  {
    title: "order pembelian",
    link: "order-pembelian",
  },
  {
    title: "retur pembelian",
    link: "retur-pembelian",
  },
  {
    title: "inventori",
    link: "inventori",
  },
  {
    title: "biaya",
    link: "biaya",
  },
  {
    title: "pendapatan",
    link: "pendapatan",
  },
  {
    title: "hutang",
    link: "hutang",
  },
  {
    title: "piutang",
    link: "piutang",
  },
  {
    title: "laba rugi",
    link: "laba-rugi",
  },
  {
    title: "FMI & SMI",
    link: "fmi-smi",
  },
  {
    title: "Persediaan",
    link: "persediaan",
  },
];
