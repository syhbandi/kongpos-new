import { createColumnHelper } from "@tanstack/react-table";
import { SisaStokType } from "../../Types/persediaanTypes";
import { useFormatNumber } from "../../../hooks/userFormat";

const helper = createColumnHelper<SisaStokType>();
const sisaStokColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "Kode",
  }),
  helper.accessor("nama_barang", {
    cell: (data) => data.getValue(),
    header: "Nama",
  }),
  helper.accessor("sisa_stok", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
    header: "Sisa Stok",
  }),
  helper.accessor("stok_min", {
    cell: (data) => data.getValue(),
    header: "Stok Minimum",
  }),
];
export default sisaStokColumns;
