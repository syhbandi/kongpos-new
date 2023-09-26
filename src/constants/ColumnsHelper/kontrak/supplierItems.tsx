import { createColumnHelper } from "@tanstack/react-table";
import { SupplierItemType } from "../../Types/kontrakTypes";
import { userFormatRupiah } from "../../../hooks/userFormat";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../components/Dashboard/Modal";
import CariBarang from "../../../components/MappingProduk/CariBarang";
import BarangDetail from "../../../components/MappingProduk/BarangDetail";

const helper = createColumnHelper<SupplierItemType>();
const supplierItemsColumns = [
  helper.accessor("nama", { cell: (data) => data.getValue() }),
  helper.accessor("merk", { cell: (data) => data.getValue() }),
  helper.accessor("kategori", { cell: (data) => data.getValue() }),
  helper.display({
    header: "harga/satuan",
    cell: ({ row: { original } }) => {
      const satuan = original.satuan.split(",");
      const harga = original.harga_jual.split(",");
      const jumlah = original.jumlah.split(",");
      return (
        <div className="text-left">
          {satuan.map((s, index) => (
            <div key={"harga" + original.kd_barang + s + index}>
              {userFormatRupiah(parseFloat(harga[index]))}/{s}[{jumlah[index]}]
            </div>
          ))}
        </div>
      );
    },
  }),
  helper.display({
    header: "status",
    cell: ({ row: { original } }) => {
      const status = original.stats.split(",");
      return (
        <div className="flex flex-col items-center justify-center gap-2">
          {status.map((s, index) => (
            <span
              key={"status" + original.kd_barang + s + index}
              className="flex items-center gap-2 justify-center"
            >
              <div
                className={`p-2 text-sm font-medium text-white rounded capitalize ${
                  s === "1" ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {s === "1" ? "sudah disesuaikan" : "belum disesuaikan"}
              </div>
            </span>
          ))}
        </div>
      );
    },
  }),
  helper.display({
    header: "aksi",
    cell: ({ row: { original } }) => {
      const satuan = original.satuan.split(",");
      const [open, setOpen] = useState(false);
      const [isSesuaikan, setIsSesuaikan] = useState(false);

      const onOpen = (sesuaikan: boolean) => {
        setOpen(true);
        setIsSesuaikan(sesuaikan);
      };

      return (
        <div className="flex flex-col gap-2">
          {satuan.map((s, index) => (
            <div
              key={"aksi" + original.kd_barang + s + index}
              className="flex items-center gap-2 justify-center"
            >
              <button
                className="bg-black rounded py-2 px-3 text-white text-sm font-medium hover:bg-gray-800 flex items-center gap-2"
                onClick={() => onOpen(true)}
              >
                Sesuaikan
              </button>
              <button
                className="bg-sky-600 rounded py-2 px-3 text-white text-sm font-medium hover:bg-sky-700 flex items-center gap-2"
                onClick={() => onOpen(false)}
              >
                <MdRemoveRedEye />
                Detail
              </button>
              <Modal
                open={open}
                setOpen={setOpen}
                title={isSesuaikan ? "Mapping" : "Detail"}
                key={"modal" + original.kd_barang + s + index}
              >
                {isSesuaikan ? (
                  <CariBarang barang={original} />
                ) : (
                  <BarangDetail />
                )}
              </Modal>
            </div>
          ))}
        </div>
      );
    },
  }),
];

export default supplierItemsColumns;
