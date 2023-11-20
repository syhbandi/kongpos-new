import { createColumnHelper } from "@tanstack/react-table";
import { TingkatLakuStok } from "../../Types/persediaanTypes";
import { useFormatNumber, userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<TingkatLakuStok>();
const tingkatLakuProdukColumns = [
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
  helper.accessor("nominal_persediaan", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
    header: "nominal persediaan",
  }),
  helper.accessor("total_sales", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
    header: "total sales",
  }),
  helper.accessor("qty_sales", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
    header: "qty sales",
  }),
];
export default tingkatLakuProdukColumns;
