import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerNota } from "../Types/penjualanTypes";

const columnHelper = createColumnHelper<PenjualanPerNota>();
const penjualanColumns = [
  columnHelper.accessor("No Transaksi", {
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("Tanggal", {
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("Customer", {
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("Jumlah Item", {
    cell: (data) => data.getValue(),
  }),
  columnHelper.accessor("Total", {
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

export default penjualanColumns;
