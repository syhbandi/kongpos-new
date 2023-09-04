import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerHari } from "../../Types/penjualanTypes";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerHari>();
const penjualanPerHariColumns = [
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
  }),
  helper.accessor("Divisi", {
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

export default penjualanPerHariColumns;
