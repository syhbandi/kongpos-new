import { createColumnHelper } from "@tanstack/react-table";
import { biayaPerTahun } from "../../Types/biayaTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";

const helper = createColumnHelper<biayaPerTahun>();
const tahun = [
  helper.accessor("Kode Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Divisi", { cell: (data) => data.getValue() }),
  helper.accessor("Periode", { cell: (data) => data.getValue() }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
  }),
];

export default tahun;
