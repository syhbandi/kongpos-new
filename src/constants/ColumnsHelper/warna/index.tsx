import { createColumnHelper } from "@tanstack/react-table";
import { WarnaType } from "../../Types/warnaTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<WarnaType>();
const warnaColumns = [
  helper.accessor("kd_warna", {
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
    cell: ({ row: { original } }) => <Aksi kode={original.kd_warna} />,
  }),
];

export default warnaColumns;
