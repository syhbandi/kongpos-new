import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { PembelianPerHari } from "../../Types/pembelianTypes";

const helper = createColumnHelper<PembelianPerHari>();
const hari = [
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Tanggal", {
    cell: (data) => data.getValue(),
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

export default hari;
