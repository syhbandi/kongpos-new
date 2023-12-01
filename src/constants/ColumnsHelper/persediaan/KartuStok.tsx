import { createColumnHelper } from "@tanstack/react-table";
import { KartuStokType } from "../../Types/persediaanTypes";
import {
  useFormatNumber,
  useFormatTanggal,
  userFormatRupiah,
} from "../../../hooks/userFormat";

const helper = createColumnHelper<KartuStokType>();
const kartuStokColumns = [
  helper.accessor("no_transaksi", {
    cell: (data) => data.getValue(),
    header: "no. transaksi",
  }),
  helper.accessor("jenis_transaksi", {
    cell: (data) => data.getValue(),
    header: "jenis transaksi",
  }),
  helper.accessor("tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.display({
    header: "masuk",
    cell: ({ row: { original } }) => (
      <div className="font-medium">
        <span className="text-green-600">
          {userFormatRupiah(original.rupiah_masuk)}
        </span>
        <span>/</span>
        <span className="text-green-600">
          {useFormatNumber(original.qty_masuk)}
        </span>
      </div>
    ),
  }),
  helper.display({
    header: "keluar",
    cell: ({ row: { original } }) => (
      <div className="font-medium">
        <span className="text-red-600">
          {userFormatRupiah(original.rupiah_keluar)}
        </span>
        <span>/</span>
        <span className="text-red-600">
          {useFormatNumber(original.qty_keluar)}
        </span>
      </div>
    ),
  }),
  helper.display({
    header: "saldo",
    cell: ({ row: { original } }) => (
      <div className="font-medium">
        <span
          className={original.saldo_rp < 0 ? "text-red-600" : "text-green-600"}
        >
          {userFormatRupiah(original.saldo_rp)}
        </span>
        <span>/</span>
        <span
          className={original.saldo_qty < 0 ? "text-red-600" : "text-green-600"}
        >
          {useFormatNumber(original.saldo_qty)}
        </span>
      </div>
    ),
  }),
  helper.accessor("average", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
];
export default kartuStokColumns;
