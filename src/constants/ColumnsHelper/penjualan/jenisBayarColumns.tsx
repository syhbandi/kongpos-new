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
  helper.accessor("total_kotor", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">total kotor</div>,
  }),
  helper.display({
    id: "diskon",
    header: () => <div className="ml-auto">diskon</div>,
    cell: ({ row: { original } }) => (
      <div className="text-right">
        {userFormatRupiah(original.potongan + original.diskon_uang)}
      </div>
    ),
  }),
  helper.accessor("pajak", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">pajak</div>,
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

export default penjualanPerJenisBayarColumns;
