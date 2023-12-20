import { createColumnHelper } from "@tanstack/react-table";
import { JenisBahanType } from "../../Types/jenisBahanTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<JenisBahanType>();
const jenisBahanColumns = [
  helper.accessor("kd_jenis_bahan", {
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
    cell: ({ row: { original } }) => <Aksi kode={original.kd_jenis_bahan} />,
  }),
];

export default jenisBahanColumns;
