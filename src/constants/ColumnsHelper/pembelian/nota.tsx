import { createColumnHelper } from "@tanstack/react-table";
import { PembelianPerNota } from "../../Types/pembelianTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PembelianPerNota>();
const nota = [
  helper.display({
    header: "No. Transaksi",
    cell: ({ row: { original } }) => {
      return original["No. Transaksi"] || original["No Transaksi"];
    },
  }),
  helper.accessor("Tanggal", {
    cell: (data) => data.getValue(),
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
  helper.accessor("total_kotor", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">total kotor</div>,
  }),
  helper.accessor("potongan", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">diskon</div>,
  }),
  helper.accessor("pajak", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">pajak</div>,
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
    header: () => <div className="ml-auto">total</div>,
  }),
];

export default nota;
