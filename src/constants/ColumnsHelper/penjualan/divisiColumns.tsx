import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerDivisi } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerDivisi>();
const penjualanDivisiColumns = [
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Jumlah Nota", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kepala Nota", {
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

export default penjualanDivisiColumns;
