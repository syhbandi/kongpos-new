import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerKas } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerKas>();
const kas = [
  helper.accessor("Kode Kas", { cell: (data) => data.getValue() }),
  helper.accessor("No Rekening", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
  }),
];
export default kas;
