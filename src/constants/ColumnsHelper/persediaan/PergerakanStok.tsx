import { createColumnHelper } from "@tanstack/react-table";
import { PergerakanStokType } from "../../Types/persediaanTypes";
import { useFormatNumber, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<PergerakanStokType>();
const pergerakanStokColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama_barang", {
    cell: (data) => data.getValue(),
    header: "Nama",
  }),
  helper.display({
    header: "Saldo Awal",
    cell: ({ row: { original } }) =>
      `${userFormatRupiah(
        parseFloat(original.saldo_awal_rp)
      )} (${useFormatNumber(parseFloat(original.saldo_awal_qty))})`,
  }),
  helper.display({
    header: "Saldo Akhir",
    cell: ({ row: { original } }) =>
      `${userFormatRupiah(
        parseFloat(original.saldo_akhir_rp)
      )} (${useFormatNumber(parseFloat(original.saldo_akhir_qty))})`,
  }),
  helper.display({
    header: "Debet",
    cell: ({ row: { original } }) =>
      `${userFormatRupiah(parseFloat(original.debet_rp))} (${useFormatNumber(
        parseFloat(original.debet_qty)
      )})`,
  }),
  helper.display({
    header: "Kredit",
    cell: ({ row: { original } }) =>
      `${userFormatRupiah(parseFloat(original.kredit_rp))} (${useFormatNumber(
        parseFloat(original.kredit_qty)
      )})`,
  }),
];
export default pergerakanStokColumns;
