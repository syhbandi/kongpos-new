import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerNota } from "../../Types/penjualanTypes";
import { useFormatTanggal } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerNota>();
const notaColumns = [
  helper.accessor("No Transaksi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Customer", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Jumlah Item", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {new Intl.NumberFormat("ID", {
          style: "currency",
          currency: "IDR",
        }).format(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];

export default notaColumns;
