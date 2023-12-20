import { createColumnHelper } from "@tanstack/react-table";
import { ModelType } from "../../Types/modelTypes";
import Status from "./Status";
import Aksi from "./Aksi";

const helper = createColumnHelper<ModelType>();
const modelColumns = [
  helper.accessor("kd_model", {
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
    cell: ({ row: { original } }) => <Aksi kode={original.kd_model} />,
  }),
];

export default modelColumns;
