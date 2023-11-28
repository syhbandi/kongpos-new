import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerJenis } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerJenis>();
const jenis = [
  helper.accessor("Kode Biaya", { cell: (data) => data.getValue() }),
  helper.accessor("Jenis Biaya", { cell: (data) => data.getValue() }),
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
