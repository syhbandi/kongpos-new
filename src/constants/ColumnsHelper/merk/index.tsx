import { createColumnHelper } from "@tanstack/react-table";
import { MerkType } from "../../Types/merkTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<MerkType>();
const merkColumns = [
  helper.accessor("kd_merk", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("keterangan", { cell: (data) => data.getValue() }),
  helper.accessor("status", {
    cell: (data) => <Status status={data.getValue()} />,
  }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => <Aksi kode={original.kd_merk} />,
  }),
];

export default merkColumns;
