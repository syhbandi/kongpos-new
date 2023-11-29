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
    header: () => <div className="ml-auto">jumlah</div>,
    cell: (data) => (
      <div className="text-right">
        {useFormatNumber(parseFloat(data.getValue()))}
      </div>
    ),
  }),
  helper.accessor("saldo", {
    header: () => <div className="ml-auto">saldo</div>,
    cell: (data) => (
      <div className="text-right">
        {useFormatNumber(parseFloat(data.getValue()))}
      </div>
    ),
  }),
  helper.accessor("sisa_stok", {
    header: () => <div className="ml-auto">sisa stok</div>,
    cell: (data) => (
      <div className="text-right">
        {useFormatNumber(parseFloat(data.getValue()))}
      </div>
    ),
  }),
  helper.accessor("total", {
    header: () => <div className="ml-auto">total</div>,
    cell: (data) => (
      <div className="text-right">
        {useFormatNumber(parseFloat(data.getValue()))}
      </div>
    ),
  }),
];

export default fmiColumns;
