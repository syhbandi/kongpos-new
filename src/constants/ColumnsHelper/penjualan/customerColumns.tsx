import { createColumnHelper } from "@tanstack/react-table";
import { PenjualanPerCustomer } from "../../Types/penjualanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PenjualanPerCustomer>();
const penjualanCustomerColumns = [
  helper.accessor("Kode Customer", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Customer", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Jumlah Nota", {
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
  helper.accessor("diskon_uang", {
    cell: (data) => (
      <div className="text-right">{userFormatRupiah(data.getValue())}</div>
    ),
    header: () => <div className="ml-auto">diskon</div>,
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

export default penjualanCustomerColumns;
