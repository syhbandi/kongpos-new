import { createColumnHelper } from "@tanstack/react-table";
import { DaftarHargaType } from "../../Types/persediaanTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<DaftarHargaType>();
const daftarHargaColumns = [
  helper.accessor("kd_barang", {
    header: "kode",
    cell: (data) => data.getValue(),
  }),
  helper.accessor("nama_barang", {
    header: "nama",
    cell: (data) => data.getValue(),
  }),
  helper.accessor("harga", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
];
export default daftarHargaColumns;
