import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerKas } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerKas>();
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
