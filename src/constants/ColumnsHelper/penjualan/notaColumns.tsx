import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerNota } from "../../Types/penjualanTypes";
import { useFormatTanggal } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerNota>();
const notaColumns = [
  helper.display({
    header: "no. transaksi",
    cell: ({ row: { original } }) => {
      return original["No. Transaksi"] || original["No Transaksi"];
    },
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
    header: () => <div className="text-right">total</div>,
  }),
];

export default notaColumns;
