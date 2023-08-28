import { ReactElement } from "react";

type Menus = {
  title: string;
  link: string;
  isEnd?: boolean;
  icon?: ReactElement;
};

export const laporanMenus: Menus[] = [
  {
    title: "Ringkasan",
    link: "/dashboard/laporan",
    isEnd: true,
  },
  {
    title: "penjualan",
    link: "penjualan",
  },
  {
    title: "penjualan order",
    link: "penjualan-order",
  },
  {
    title: "penjualan retur",
    link: "penjualan-retur",
  },
  {
    title: "pembelian",
    link: "pembelian",
  },
  {
    title: "pembelian order",
    link: "pembelian-order",
  },
  {
    title: "pembelian-retur",
    link: "pembelian-retur",
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
    link: "piutrang",
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
