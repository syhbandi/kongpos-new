import notaColumns from "./notaColumns";
import penjualanCustomerColumns from "./customerColumns";
import penjualanDivisiColumns from "./divisiColumns";
import penjualanPerKasColumns from "./KasColumns";
import penjualanPerUserColumns from "./UserColumns";
import penjualanPerJenisBayarColumns from "./jenisBayarColumns";
import penjualanPerVoucherColumns from "./voucherColumns";
import penjualanPerHariColumns from "./hariColumns";
import penjualanPerBulanColumns from "./bulanColumns";
import penjualanPerTahunColumns from "./tahunColumns";
import penjualanPerBarangColumns from "./barangColumns";
import PenjualanPerPegawaiColumns from "./pegawaiColumns";

type ColType = {
  jenis: string | number;
  columns: any;
  sumColumn?: string;
  nama: string;
};
const penjualanColumns: ColType[] = [
  {
    jenis: "1",
    nama: "Nota",
    columns: notaColumns,
    sumColumn: "Jumlah Item",
  },
  {
    jenis: "2",
    nama: "Customer",
    columns: penjualanCustomerColumns,
    sumColumn: "Jumlah Nota",
  },
  {
    jenis: "3",
    nama: "Divisi",
    columns: penjualanDivisiColumns,
    sumColumn: "Jumlah Nota",
  },
  {
    jenis: "4",
    nama: "Kas",
    columns: penjualanPerKasColumns,
  },
  {
    jenis: "5",
    nama: "User",
    columns: penjualanPerUserColumns,
  },
  {
    jenis: "6",
    nama: "Jenis Bayar",
    columns: penjualanPerJenisBayarColumns,
  },
  {
    jenis: "7",
    nama: "Voucher",
    columns: penjualanPerVoucherColumns,
  },
  {
    jenis: "8",
    nama: "Hari",
    columns: penjualanPerHariColumns,
  },
  {
    jenis: "9",
    nama: "Bulan",
    columns: penjualanPerBulanColumns,
  },
  {
    jenis: "10",
    nama: "Tahun",
    columns: penjualanPerTahunColumns,
  },
  { jenis: "11", nama: "Barang", columns: penjualanPerBarangColumns },
  { jenis: "12", nama: "Pegawai", columns: PenjualanPerPegawaiColumns },
];

export default penjualanColumns;
