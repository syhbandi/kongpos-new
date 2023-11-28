import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerJenisBayar } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerJenisBayar>();
const jenisBayar = [
  helper.accessor("Kode Jenis", { cell: (data) => data.getValue() }),
  helper.accessor("Jenis Bayar", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];
export default jenisBayar;
