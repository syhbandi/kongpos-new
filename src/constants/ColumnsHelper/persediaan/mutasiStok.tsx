import { createColumnHelper } from "@tanstack/table-core";
import { MutasiStokType } from "../../Types/persediaanTypes";

const helper = createColumnHelper<MutasiStokType>();
const mutasiStokColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
  }),
];

export default mutasiStokColumns;
