import { createColumnHelper } from "@tanstack/react-table";
import { BuatKontrakTypes } from "../../Types/kontrakTypes";
import { Link } from "react-router-dom";
import { MdPayment, MdSend } from "react-icons/md";

const status = [
  {
    status: "0",
    msg: "Belum diajukan",
    className: "bg-red-600 text-white",
  },
  {
    status: "-2",
    msg: "Menunggu approval Customer",
    className: "bg-orange-400 text-white",
  },
  {
    status: "-1",
    msg: "sudah diapprove customer",
    className: "bg-sky-600 text-white",
  },
  {
    status: "1",
    msg: "terkontrak",
    className: "bg-green-600 text-white",
  },
];

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
  helper.display({
    cell: ({ row: { original } }) => {
      const selectedStatus = status.find(
        (status) => status.status === original.status
      );
      return (
        <span
          className={`p-2 text-sm font-medium rounded capitalize ${selectedStatus?.className}`}
        >
          {original.kontrak_id && original.status === "-2"
            ? "Proses validasi admin"
            : selectedStatus?.msg}
        </span>
      );
    },
    header: "Status",
  }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => {
      if (original.status === "-1" && original.kontrak_id)
        return (
          <Link
            to={"bayar"}
            state={{
              id_kontrak: original.kontrak_id,
              cid_sumber: original.cid_sumber,
              cid_tujuan: original.cid_tujuan,
              nama: original.nama,
              id_customer_config: original.id_customer_config,
            }}
          >
            <button className="text-sm font-medium rounded bg-black text-white py-2 px-5 hover:bg-gray-700 inline-flex items-center gap-2">
              <MdPayment />
              Bayar
            </button>
          </Link>
        );
      if (original.status === "0")
        return (
          <Link
            to={"pengajuan"}
            state={{
              cid_sumber: original.cid_sumber,
              cid_tujuan: original.cid_tujuan,
              kd_customer: original.kd_customer,
              id_cid_tujuan: original.id_cid_tujuan,
              nama: original.nama,
              kontrak_id: original.kontrak_id,
            }}
          >
            <button className="text-sm font-medium rounded bg-black text-white py-2 px-5 hover:bg-gray-700 inline-flex items-center gap-2">
              <MdSend />
              Ajukan
            </button>
          </Link>
        );
      return null;
    },
  }),
];

export default buatKontrakCoumns;
