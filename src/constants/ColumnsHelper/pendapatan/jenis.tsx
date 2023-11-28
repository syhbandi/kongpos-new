import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerJenis } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerJenis>();
const jenis = [
  helper.accessor("Kode Pendapatan", { cell: (data) => data.getValue() }),
  helper.accessor("Jenis Pendapatan", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];
export default jenis;
