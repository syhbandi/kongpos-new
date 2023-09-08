import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerBulan } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerBulan>();
const bulan = [
  helper.accessor("Kode Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Periode", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
  }),
];
export default bulan;
