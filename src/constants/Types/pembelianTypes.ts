export type PembelianParams = {
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
  export: number;
};

export type PembelianDataCount = {
  "Jumlah Record": string;
  "Grand Total": string;
};

export type PembelianPerNota = {
  "No. Transaksi": string;
  "No Transaksi"?: string;
  Tanggal: string;
  Divisi: string;
  Supplier: string;
  "Jumlah Item": string;
  Total: string;
};

export type PembelianPerSupplier = {
  "Kode Supplier": string;
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  Supplier: string;
  Total: string;
};

export type PembelianPerDivisi = {
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  "Kepala Nota": string;
  Total: string;
};

export type PembelianPerKas = {
  "Kode Kas": string;
  "No Rekening": string;
  Total: string;
};

export type PembelianPerUser = {
  "Kode User": string;
  User: string;
  Total: string;
};

export type PembelianPerJenisBayar = {
  "Kode Jenis": string;
  "Jenis Bayar": string;
  Total: string;
};

export type PembelianPerHari = {
  "Kode Divisi": string;
  Tanggal: string;
  Divisi: string;
  Total: string;
};

export type PembelianPerBulan = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type PembelianPerTahun = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type PembelianPerBarang = {
  "Kode Barang": string;
  "Kode Divisi": string;
  Produk: string;
  Divisi: string;
  Total: string;
  satuan: string;
  jumlah: number;
};
