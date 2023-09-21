import { createColumnHelper } from "@tanstack/react-table";
import { PermintaanKontrakTypes } from "../../Types/kontrakTypes";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import { useFormatNumber } from "../../../hooks/userFormat";

const helper = createColumnHelper<PermintaanKontrakTypes>();
const permintaanKontrakColumns = [
  helper.accessor("Nama Usaha", { cell: (data) => data.getValue() }),
  helper.accessor("No Telp", { cell: (data) => data.getValue() }),
  helper.accessor("email", { cell: (data) => data.getValue() }),
  helper.accessor("periode_bulan", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())) + " bulan",
    header: "Periode",
  }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => (
      <div className="flex items-center justify-center">
        <Link
          to={`/dashboard/kontrak/permintaan/${original.cid_sumber}`}
          state={original}
        >
          <button className="py-2 px-5 rounded bg-black text-white text-sm font-medium hover:bg-gray-700 flex items-center justify-center gap-2">
            <MdPreview className="text-base" />
            Tinjau
          </button>
        </Link>
      </div>
    ),
  }),
];

export default permintaanKontrakColumns;
