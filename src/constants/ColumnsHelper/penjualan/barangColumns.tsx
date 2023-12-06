import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerBarang } from "../../Types/penjualanTypes";
import { useFormatNumber, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerBarang>();
const penjualanPerBarangColumns = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Produk", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("satuan", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("jumlah", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total</div>,
  }),
];

export default penjualanPerBarangColumns;
