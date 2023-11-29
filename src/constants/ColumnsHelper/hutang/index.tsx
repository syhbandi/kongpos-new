import { createColumnHelper } from "@tanstack/react-table";
import { HutangType } from "../../Types/hutangTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<HutangType>();
const hutangColumns = [
  helper.accessor("No Transaksi", { cell: (data) => data.getValue() }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Kode Supplier", { cell: (data) => data.getValue() }),
  helper.accessor("Supplier", { cell: (data) => data.getValue() }),
  helper.accessor("Total Pembelian", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total pembelian</div>,
  }),
  helper.accessor("Total Cicilan", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total cicilan</div>,
  }),
  helper.accessor("Sisa Hutang", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">sisa hutang</div>,
  }),
];

export default hutangColumns;
