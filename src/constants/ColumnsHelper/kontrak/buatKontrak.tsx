import { createColumnHelper } from "@tanstack/react-table";
import { BuatKontrakTypes } from "../../Types/kontrakTypes";

const helper = createColumnHelper<BuatKontrakTypes>();
const buatKontrakCoumns = [
  helper.accessor("kd_customer", {
    cell: (data) => data.getValue(),
    header: "Kode Customer",
  }),
  helper.accessor("nama", { cell: (data) => data.getValue(), header: "Nama" }),
  helper.accessor("email", {
    cell: (data) => data.getValue(),
    header: "Email",
  }),
  helper.accessor("hp", { cell: (data) => data.getValue(), header: "No. Hp" }),
  helper.accessor("status", {
    cell: (data) =>
      data.getValue() === "0" ? (
        <span className="p-2 text-sm font-medium bg-red-600 text-white rounded">
          Belum terkontrak
        </span>
      ) : (
        <span className="p-2 text-sm font-medium bg-green-600 text-white rounded">
          Terkontrak
        </span>
      ),
    header: "Status",
  }),
];

export default buatKontrakCoumns;
