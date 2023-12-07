import { createColumnHelper } from "@tanstack/react-table";
import { StokPerBarang } from "../../Types/inventoriTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<StokPerBarang>();
const barang = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("harga_jual", {
    cell: (data) => userFormatRupiah(data.getValue()),
    header: "harga",
  }),
  helper.accessor("Stok", {
    cell: (data) => data.getValue(),
  }),
];

export default barang;
