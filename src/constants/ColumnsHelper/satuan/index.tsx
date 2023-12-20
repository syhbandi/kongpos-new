import { createColumnHelper } from "@tanstack/react-table";
import { SatuanType } from "../../Types/satuanTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<SatuanType>();
const satuanColumns = [
  helper.accessor("kd_satuan", {
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
    cell: ({ row: { original } }) => <Aksi kode={original.kd_satuan} />,
  }),
];

export default satuanColumns;
