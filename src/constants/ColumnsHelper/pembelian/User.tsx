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
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="text-right">Total</div>,
  }),
];

export default user;