import { createColumnHelper } from "@tanstack/react-table";
import { KategoriType } from "../../Types/kategoriTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<KategoriType>();
const kategoriColumns = [
  helper.accessor("kd_kategori", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("keterangan", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("status", {
    cell: (data) => <Status status={data.getValue()} />,
  }),
  helper.display({
    header: "aksi",
    cell: ({ row: { original } }) => <Aksi kode={original.kd_kategori} />,
  }),
];

export default kategoriColumns;
