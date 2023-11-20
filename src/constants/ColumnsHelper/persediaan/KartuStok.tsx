import { createColumnHelper } from "@tanstack/react-table";
import { KartuStokType } from "../../Types/persediaanTypes";
import { useFormatNumber } from "../../../hooks/userFormat";

const helper = createColumnHelper<KartuStokType>();
const kartuStokColumns = [
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
    header: "Sisa stok",
  }),
];
export default kartuStokColumns;
