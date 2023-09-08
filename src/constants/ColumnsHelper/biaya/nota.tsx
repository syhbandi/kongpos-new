import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerNota } from "../../Types/biayaTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerNota>();
const nota = [
  helper.accessor("No Transaksi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Biaya", {
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
  }),
];
export default nota;
