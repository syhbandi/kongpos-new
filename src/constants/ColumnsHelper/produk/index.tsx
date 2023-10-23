import { createColumnHelper } from "@tanstack/react-table";
import { ProdukType } from "../../Types/produkTypes";
import Status from "./Status";
import Harga from "./Harga";
import Gambar from "./Gambar";
import Aksi from "./Aksi";

const helper = createColumnHelper<ProdukType>();
const produkColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama", {
    cell: (data) => <div className="text-left">{data.getValue()}</div>,
  }),
  helper.accessor("kategori", {
    cell: (data) => data.getValue(),
  }),
  helper.display({
    header: "status",
    cell: ({ row: { original } }) => <Status produk={original} />,
  }),
  helper.display({
    header: "harga",
    cell: ({ row: { original } }) => <Harga produk={original} />,
  }),
  helper.display({
    header: "gambar",
    cell: ({ row: { original } }) => <Gambar produk={original} />,
  }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => <Aksi produk={original} />,
  }),
];

export default produkColumns;
