import { createColumnHelper } from "@tanstack/react-table";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerNota } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerNota>();
const nota = [
  helper.accessor("No Transaksi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Pendapatan", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kas", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Jenis Bayar", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("No Bukti", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Keterangan", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Tanggal Server", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];
export default nota;
