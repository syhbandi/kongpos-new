import { createColumnHelper } from "@tanstack/react-table";
import { piutangType } from "../../Types/piutangTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<piutangType>();
const piutangColumns = [
  helper.accessor("No Transaksi", { cell: (data) => data.getValue() }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Kode Customer", { cell: (data) => data.getValue() }),
  helper.accessor("Customer", { cell: (data) => data.getValue() }),
  helper.accessor("Total Penjualan", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total penjualan</div>,
  }),
  helper.accessor("Total Cicilan", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total cicilan</div>,
  }),
  helper.accessor("Sisa Piutang", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">sisa piutang</div>,
  }),
];

export default piutangColumns;
