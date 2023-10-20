import { createColumnHelper } from "@tanstack/react-table";
import { ProdukType } from "../../Types/produkTypes";

const helper = createColumnHelper<ProdukType>();
const produkColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama", { cell: (data) => data.getValue() }),
  helper.accessor("satuan", { cell: (data) => data.getValue() }),
  helper.accessor("harga", { cell: (data) => data.getValue() }),
  helper.accessor("status", { cell: (data) => data.getValue() }),
  helper.accessor("gambar", { cell: (data) => data.getValue() }),
];

export default produkColumns;
