import { createColumnHelper } from "@tanstack/react-table";
import { StokPerPeriode } from "../../Types/inventoriTypes";

const helper = createColumnHelper<StokPerPeriode>();
const periode = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Stok", {
    cell: (data) => data.getValue(),
  }),
];

export default periode;
