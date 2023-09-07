import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerDivisi } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerDivisi>();
const divisi = [
  helper.accessor("Kode Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Jumlah Nota", { cell: (data) => data.getValue() }),
  helper.accessor("Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Kepala Nota", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => userFormatRupiah(parseFloat(data.getValue())),
  }),
];

export default divisi;
