import { createColumnHelper } from "@tanstack/react-table";
import { SupplierKontrakType } from "../../Types/kontrakTypes";
import { MdOutlineSync } from "react-icons/md";
import { Link } from "react-router-dom";

const helper = createColumnHelper<SupplierKontrakType>();
const supplierKontrakColumns = [
  helper.accessor("nama", {
    cell: (data) => data.getValue(),
    header: "Supplier",
  }),
  helper.accessor("hp", { cell: (data) => data.getValue() }),
  helper.accessor("email", { cell: (data) => data.getValue() }),
  helper.accessor("status_kontrak", {
    header: "status",
    cell: (data) =>
      data.getValue() === "1" ? (
        <span className="p-2 rounded bg-green-600 text-sm font-medium text-white">
          Terkontrak
        </span>
      ) : (
        <span className="p-2 rounded bg-red-600 text-sm font-medium text-white">
          Belum kontrak
        </span>
      ),
  }),
  helper.accessor("Periode (Bulan)", {
    cell: (data) => data.getValue(),
  }),
  helper.display({
    header: "aksi",
    cell: ({ row: { original } }) => {
      if (original.status_kontrak === "1")
        return (
          <div className="flex items-center justify-center">
            <Link to={"mapping"}>
              <button className="px-3 py-2 text-sm rounded outline-none bg-black hover:bg-gray-800 text-white font-medium flex items-center gap-2 justify-center">
                <MdOutlineSync className="text-lg" />
                Mapping Produk
              </button>
            </Link>
          </div>
        );
    },
  }),
];

export default supplierKontrakColumns;
