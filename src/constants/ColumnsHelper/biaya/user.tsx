import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerUser } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerUser>();
const user = [
  helper.accessor("Kode User", { cell: (data) => data.getValue() }),
  helper.accessor("user", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];
export default user;
