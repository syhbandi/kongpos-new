import { createColumnHelper } from "@tanstack/react-table";
import { useFormatTanggal, userFormatRupiah } from "../../../hooks/userFormat";
import { pendapatanPerHari } from "../../Types/pendapatanTypes";

const helper = createColumnHelper<pendapatanPerHari>();
const hari = [
  helper.accessor("Kode Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Tanggal", {
    cell: (data) => useFormatTanggal(data.getValue()),
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

export default hari;
