import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerUser } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerUser>();
const user = [
  helper.accessor("Kode User", { cell: (data) => data.getValue() }),
  helper.accessor("user", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
];
export default user;
