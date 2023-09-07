import { createColumnHelper } from "@tanstack/react-table";
import { StokPerBarang } from "../../Types/inventoriTypes";

const helper = createColumnHelper<StokPerBarang>();
const barang = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Stok", {
    cell: (data) => data.getValue(),
  }),
];

export default barang;
