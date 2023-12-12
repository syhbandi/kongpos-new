import { createColumnHelper } from "@tanstack/react-table";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { PembelianPerUser } from "../../Types/pembelianTypes";

const helper = createColumnHelper<PembelianPerUser>();
const user = [
  helper.accessor("Kode User", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("User", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("total_kotor", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">total kotor</div>,
  }),
  helper.accessor("potongan", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">potongan</div>,
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

export default user;
