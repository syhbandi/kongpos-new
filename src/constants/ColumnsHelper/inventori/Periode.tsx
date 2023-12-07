import { createColumnHelper } from "@tanstack/react-table";
import { StokPerPeriode } from "../../Types/inventoriTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<StokPerPeriode>();
const periode = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("harga_jual", {
    cell: (data) => userFormatRupiah(data.getValue()),
    header: "Harga",
  }),
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Stok", {
    cell: (data) => data.getValue(),
  }),
];

export default periode;
