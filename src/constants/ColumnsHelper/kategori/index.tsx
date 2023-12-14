import { createColumnHelper } from "@tanstack/react-table";
import { KategoriType } from "../../Types/kategoriTypes";
import Status from "./Status";

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
];

export default kategoriColumns;
