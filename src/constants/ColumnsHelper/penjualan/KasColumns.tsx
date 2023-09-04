import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerKas } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerKas>();
const penjualanPerKasColumns = [
  helper.accessor("Kode Kas", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("No Rekening", {
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

export default penjualanPerKasColumns;
