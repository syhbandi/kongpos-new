import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerJenisBayar } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerJenisBayar>();
const jenisBayar = [
  helper.accessor("Kode Jenis", { cell: (data) => data.getValue() }),
  helper.accessor("Jenis Bayar", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
  }),
];
export default jenisBayar;
