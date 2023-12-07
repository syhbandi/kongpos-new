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

export default barang;
