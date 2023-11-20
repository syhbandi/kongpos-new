import { createColumnHelper } from "@tanstack/react-table";
import { UsiaStokType } from "../../Types/persediaanTypes";
import { useFormatNumber, useFormatTanggal } from "../../../hooks/userFormat";

const helper = createColumnHelper<UsiaStokType>();
const usiaStokColumns = [
  helper.accessor("kd_barang", {
    header: "kode",
    cell: (data) => data.getValue,
  }),
  helper.accessor("nama_barang", {
    header: "nama",
    cell: (data) => data.getValue(),
  }),
  helper.accessor("sisa_stok", {
    header: "sisa stok",
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
  helper.accessor("tgl_terakhir_beli", {
    header: "tgl beli terakhir",
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("tgl_jual_terakhir", {
    header: "tgl jual terakhir",
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
];

export default usiaStokColumns;
