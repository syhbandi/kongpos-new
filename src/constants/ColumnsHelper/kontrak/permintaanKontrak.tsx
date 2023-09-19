import { createColumnHelper } from "@tanstack/react-table";
import { PermintaanKontrakTypes } from "../../Types/kontrakTypes";

const helper = createColumnHelper<PermintaanKontrakTypes>();
const permintaanKontrakColumns = [
  helper.accessor("Nama Usaha", { cell: (data) => data.getValue() }),
  helper.accessor("No Telp", { cell: (data) => data.getValue() }),
  helper.accessor("email", { cell: (data) => data.getValue() }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => (
      <>
        <button className="py-2 px-5 rounded bg-black text-white text-sm font-medium hover:bg-gray-700">
          Detail
        </button>
      </>
    ),
  }),
];

export default permintaanKontrakColumns;
