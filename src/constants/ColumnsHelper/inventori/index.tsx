import barang from "./Barang";
import periode from "./Periode";

type ColType = {
  jenis: string;
  column: any;
  nama: string;
};
const inventoriColumns: ColType[] = [
  {
    jenis: "1",
    column: periode,
    nama: "Stok Per Periode",
  },
  {
    jenis: "2",
    column: barang,
    nama: "Stok Per Barang",
  },
];

export default inventoriColumns;
