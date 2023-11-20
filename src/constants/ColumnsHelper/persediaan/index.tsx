import daftarHargaColumns from "./DaftarHarga";
import pergerakanStokColumns from "./PergerakanStok";
import sisaStokColumns from "./SisaStok";
import tingkatLakuProdukColumns from "./TingkatLakuProduk";
import usiaStokColumns from "./UsiaStok";

type PersediaanColumnType = {
  jenis: string | number;
  columns: any;
  sumColumn?: string;
  nama: string;
};
const PersediaanColumn: PersediaanColumnType[] = [
  {
    jenis: 1,
    nama: "Sisa Stok",
    columns: sisaStokColumns,
  },
  {
    jenis: 3,
    nama: "Tingkat Laku Produk",
    columns: tingkatLakuProdukColumns,
  },
  {
    jenis: 4,
    nama: "Pergerakan Stok",
    columns: pergerakanStokColumns,
  },
  {
    jenis: 5,
    nama: "Usia Stok",
    columns: usiaStokColumns,
  },
  {
    jenis: 6,
    nama: "Daftar Harga",
    columns: daftarHargaColumns,
  },
];

export default PersediaanColumn;
