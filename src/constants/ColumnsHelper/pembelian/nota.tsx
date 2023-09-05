import { createColumnHelper } from "@tanstack/react-table";
import { useFormatTanggal } from "../../../hooks/userFormat";
import { PembelianPerNota } from "../../Types/pembelianTypes";

const helper = createColumnHelper<PembelianPerNota>();
const nota = [
  helper.accessor("No Transaksi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Supplier", {
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
  }),
];

export default nota;
