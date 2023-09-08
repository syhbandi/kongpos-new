import { ReactElement } from "react";

type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: ReactElement;
};

export const laporanMenus: Menus[] = [
  {
    title: "ringkasan",
    link: "",
    isEnd: true,
  },
  {
    title: "penjualan",
    link: "penjualan",
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
];

export const penjualanSubs: Menus[] = [
  {
    title: "per nota",
    link: "nota",
  },
  {
    title: "per customer",
    link: "customer",
  },
  {
    title: "per divisi",
    link: "divisi",
  },
  {
    title: "per kas",
    link: "kas",
  },
  {
    title: "per user",
    link: "user",
  },
  {
    title: "per jenis bayar",
    link: "jenis-bayar",
  },
  {
    title: "per voucher",
    link: "voucher",
  },
  {
    title: "per hari",
    link: "hari",
  },
  {
    title: "per bulan",
    link: "bulan",
  },
  {
    title: "per tahun",
    link: "tahun",
  },
  {
    title: "per barang",
    link: "barang",
  },
  {
    title: "per pegawai",
    link: "pegawai",
  },
];
