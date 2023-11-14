import { createColumnHelper } from "@tanstack/react-table";
import { FmiType } from "../../Types/fmiTypes";
import { useFormatNumber } from "../../../hooks/userFormat";

const helper = createColumnHelper<FmiType>();
const fmiColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "kode",
  }),
  helper.accessor("nama", { cell: (data) => data.getValue() }),
  helper.accessor("divisi", { cell: (data) => data.getValue() }),
  helper.accessor("jenis", { cell: (data) => data.getValue() }),
  helper.accessor("nomor", { cell: (data) => data.getValue() }),
  helper.accessor("jumlah", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
  helper.accessor("saldo", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
  helper.accessor("sisa_stok", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
    header: "sisa stok",
  }),
  helper.accessor("total", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
];

export default fmiColumns;
