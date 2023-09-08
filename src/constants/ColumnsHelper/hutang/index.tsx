import { createColumnHelper } from "@tanstack/react-table";
import { HutangType } from "../../Types/hutangTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<HutangType>();
const hutangColumns = [
  helper.accessor("No Transaksi", { cell: (data) => data.getValue() }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Kode Supplier", { cell: (data) => data.getValue() }),
  helper.accessor("Supplier", { cell: (data) => data.getValue() }),
  helper.accessor("Total Pembelian", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
  helper.accessor("Total Cicilan", {
    cell: (data) => userFormatRupiah(parseInt(data.getValue())),
  }),
  helper.accessor("Sisa Hutang", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
];

export default hutangColumns;
