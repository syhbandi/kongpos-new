import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerUser } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerUser>();
const penjualanPerUserColumns = [
  helper.accessor("Kode User", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("User", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total</div>,
  }),
];

export default penjualanPerUserColumns;
