import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerNota } from "../../Types/penjualanTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

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
  helper.accessor("total_kotor", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">total kotor</div>,
  }),
  helper.display({
    id: "diskon",
    header: () => <div className="ml-auto">diskon</div>,
    cell: ({ row: { original } }) => (
      <div className="text-right">
        {userFormatRupiah(
          parseFloat(original.diskon_uang) + parseFloat(original.potongan)
        )}
      </div>
    ),
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

export default notaColumns;
