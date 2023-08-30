export type PenjualanParams = {
  company_id: string;
  awal: string;
  akhir: string;
  jenis: string;
  search: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
};

export type PenjualanDataCount = {
  "Jumlah Record": string;
  "Grand Total": string;
};

export type PenjualanPerNota = {
  "No Transaksi": string;
  Tanggal: string;
  Divisi: string;
  Customer: string;
  "Jumlah Item": string;
  Total: string;
};

export type PenjualanPerCustomer = {
  "Kode Customer": string;
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  Customer: string;
  Total: string;
};

export type PenjualanPerDivisi = {
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  "Kepala Nota": string;
  Total: string;
};

export type PenjualanPerKas = {
  "Kode Kas": string;
  "No Rekening": string;
  Total: string;
};

export type PenjualanPerUser = {
  "Kode User": string;
  User: string;
  Total: string;
};

export type PenjualanPerJenisBayar = {
  "Kode Jenis": string;
  "Jenis Bayar": string;
  Total: string;
};

export type PenjualanPerVoucher = {
  "Kode Voucher": string;
  Voucher: string;
  Total: string;
};

export type PenjualanPerHari = {
  "Kode Divisi": string;
  Tanggal: string;
  Divisi: string;
  Total: string;
};

export type PenjualanPerBulan = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type PenjualanPerTahun = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type PenjualanPerBarang = {
  "Kode Barang": string;
  "Kode Divisi": string;
  Produk: string;
  Divisi: string;
  Total: string;
};

export type PenjualanPerPegawai = {
  "Kode Pegawai": string;
  "Kode Divisi": string;
  pegawai: string;
  Divisi: string;
  Total: string;
};
