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
        <span className="p-2 rounded bg-green-100 text-green-700 text-sm font-medium ">
          Terkontrak
        </span>
      ) : (
        <span className="p-2 rounded bg-red-100 text-red-600 text-sm font-medium">
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
            <Link
              to={"mapping"}
              state={{
                id_cid_supplier: original.id_cid_sumber,
                company_id: original.cid_tujuan,
                kd_supplier: original.kd_supplier,
                supplier: original.nama,
              }}
            >
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
