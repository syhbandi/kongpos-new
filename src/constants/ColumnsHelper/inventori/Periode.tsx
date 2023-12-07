import { createColumnHelper } from "@tanstack/react-table";
import { StokPerPeriode } from "../../Types/inventoriTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

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
  helper.accessor("harga_jual", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">harga</div>,
  }),
];

export default periode;
