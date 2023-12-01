import { createColumnHelper } from "@tanstack/table-core";
import { MutasiStokType } from "../../Types/persediaanTypes";
import { useFormatNumber, userFormatRupiah } from "../../../hooks/userFormat";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../components/Dashboard/Modal";
import KartuStok from "../../../pages/Dashboard/Laporan/Persediaan/KartuStok";

const helper = createColumnHelper<MutasiStokType>();
const mutasiStokColumns = [
  helper.accessor("kd_barang", {
    cell: (data) => data.getValue(),
    header: "kode",
  }),
  helper.accessor("barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("satuan_terkecil", {
    header: "satuan terkecil",
    cell: (data) => data.getValue(),
  }),
  helper.display({
    header: "saldo Awal",
    cell: ({ row: { original } }) => (
      <div className="font-medium">
        <span
          className={`${
            original.saldo_awal_rp < 0 ? "text-red-600" : "text-green-600"
          }`}
        >
          {userFormatRupiah(original.saldo_awal_rp)}
        </span>
        /
        <span
          className={
            original.saldo_awal_qty < 0 ? "text-red-600" : "text-green-600"
          }
        >
          {useFormatNumber(original.saldo_awal_qty)}
        </span>
      </div>
    ),
  }),
  helper.display({
    header: "opname Keluar",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.opname_keluar_rp)}/
        <strong>{useFormatNumber(original.opname_keluar_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "opname Masuk",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.opname_masuk_rp)}/
        <strong>{useFormatNumber(original.opname_masuk_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "pembelian",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.pembelian_rp)}/
        <strong> {useFormatNumber(original.pembelian_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "penjualan",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.penjualan_rp)}/
        <strong>{useFormatNumber(original.penjualan_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "retur Pembelian",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.retur_pembelian_rp)}/
        <strong>{useFormatNumber(original.retur_pembelian_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "retur Penjualan",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.retur_penjualan_rp)}/
        <strong>{useFormatNumber(original.retur_penjualan_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "saldo Akhir",
    cell: ({ row: { original } }) => (
      <>
        {userFormatRupiah(original.saldo_akhir_rp)}/
        <strong>{useFormatNumber(original.saldo_akhir_qty)}</strong>
      </>
    ),
  }),
  helper.display({
    header: "aksi",
    cell: ({ row: { original } }) => <Aksi data={original} />,
  }),
];

type Props = {
  data: MutasiStokType;
};
const Aksi = ({ data }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="text-sm font-semibold rounded bg-black text-white p-2 hover:bg-opacity-80"
        onClick={() => setModalOpen(true)}
      >
        <MdRemoveRedEye />
      </button>
      <Modal
        title={`Kartu Stok - ${data?.barang}`}
        open={modalOpen}
        setOpen={setModalOpen}
        variant="max-w-5xl"
      >
        <KartuStok kdBarang={data?.kd_barang} />
      </Modal>
    </>
  );
};

export default mutasiStokColumns;
