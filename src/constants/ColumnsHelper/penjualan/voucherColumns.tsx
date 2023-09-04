import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerVoucher } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerVoucher>();
const penjualanPerVoucherColumns = [
  helper.accessor("Kode Voucher", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Voucher", {
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

export default penjualanPerVoucherColumns;
