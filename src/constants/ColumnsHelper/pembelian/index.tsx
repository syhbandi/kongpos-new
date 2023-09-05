import kas from "./Kas";
import user from "./User";
import barang from "./barang";
import bulan from "./bulan";
import divisi from "./divisi";
import hari from "./hari";
import jenisBayar from "./jenisBayar";
import nota from "./nota";
import supplier from "./supplier";
import tahun from "./tahun";

type ColType = {
  jenis: string | number;
  columns: any;
  sumColumn?: string;
  nama: string;
};
const pembelianColumns: ColType[] = [
  {
    jenis: "1",
    nama: "Nota",
    columns: nota,
    sumColumn: "Jumlah Item",
  },
  {
    jenis: "2",
    nama: "Supplier",
    columns: supplier,
    sumColumn: "Jumlah Nota",
  },
  {
    jenis: "3",
    nama: "Divisi",
    columns: divisi,
    sumColumn: "Jumlah Nota",
  },
  {
    jenis: "4",
    nama: "Kas",
    columns: kas,
  },
  {
    jenis: "5",
    nama: "User",
    columns: user,
  },
  {
    jenis: "6",
    nama: "Jenis Bayar",
    columns: jenisBayar,
  },
  {
    jenis: "7",
    nama: "Hari",
    columns: hari,
  },
  {
    jenis: "8",
    nama: "Bulan",
    columns: bulan,
  },
  {
    jenis: "9",
    nama: "Tahun",
    columns: tahun,
  },
  { jenis: "10", nama: "Barang", columns: barang },
];

export default pembelianColumns;
