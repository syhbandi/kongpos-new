import bulan from "./bulan";
import divisi from "./divisi";
import hari from "./hari";
import jenis from "./jenis";
import jenisBayar from "./jenisBayar";
import kas from "./kas";
import nota from "./nota";
import tahun from "./tahun";
import user from "./user";

type ColTypes = {
  jenis: string;
  nama: string;
  sumColumn?: string;
  column: any;
};

const pendapatanColumns: ColTypes[] = [
  { jenis: "1", nama: "Nota", column: nota },
  { jenis: "2", nama: "Divisi", column: divisi },
  { jenis: "3", nama: "Kas", column: kas },
  { jenis: "4", nama: "User", column: user },
  { jenis: "5", nama: "Jenis Pendapatan", column: jenis },
  { jenis: "6", nama: "Jenis Bayar", column: jenisBayar },
  { jenis: "7", nama: "Perhari", column: hari },
  { jenis: "8", nama: "Perbulan", column: bulan },
  { jenis: "9", nama: "PerTahun", column: tahun },
];

export default pendapatanColumns;
