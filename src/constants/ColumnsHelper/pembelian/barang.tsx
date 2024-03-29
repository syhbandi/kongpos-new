import { createColumnHelper } from "@tanstack/react-table";
import { useFormatNumber, userFormatRupiah } from "../../../hooks/userFormat";
import { PembelianPerBarang } from "../../Types/pembelianTypes";

const helper = createColumnHelper<PembelianPerBarang>();
const barang = [
  helper.accessor("Kode Barang", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Produk", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("satuan", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Kode Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("Divisi", {
    cell: (data) => data.getValue(),
  }),
  helper.accessor("jumlah", {
    cell: (data) => useFormatNumber(parseFloat(data.getValue())),
  }),
  helper.accessor("total_kotor", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">total kotor</div>,
  }),
  helper.accessor("potongan", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">diskon</div>,
  }),
  helper.accessor("pajak", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">pajak</div>,
  }),
  helper.accessor("Total", {
    cell: (data) => (
      <div className="text-right">
        {userFormatRupiah(parseFloat(data.getValue()))}
      </div>
    ),
    header: () => <div className="ml-auto">Total</div>,
  }),
];

export default barang;
