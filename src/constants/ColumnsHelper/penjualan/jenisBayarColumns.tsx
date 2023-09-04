import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerJenisBayar } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerJenisBayar>();
const penjualanPerJenisBayarColumns = [
  helper.accessor("Kode Jenis", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Jenis Bayar", {
    cell: (data) => data.getValue(),
  }),

  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];

export default penjualanPerJenisBayarColumns;
