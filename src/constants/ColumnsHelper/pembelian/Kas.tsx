import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { PembelianPerKas } from "../../Types/pembelianTypes";

const helper = createColumnHelper<PembelianPerKas>();
const kas = [
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

export default kas;
