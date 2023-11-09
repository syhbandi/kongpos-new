export type pendapatanParams = {
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

export type pendapatanCount = {
  "Jumlah Record": string;
  "Grand Total": string;
};

export type pendapatanPerNota = {
  "No Transaksi": string;
  Divisi: string;
  Pendapatan: string;
  Kas: string;
  "Jenis Bayar": string;
  "No Bukti": string;
  Keterangan: string;
  "Tanggal Server": string;
  Total: string;
};

export type pendapatanPerDivisi = {
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  "Kepala Nota": string;
  Total: string;
};

export type pendapatanPerKas = {
  "Kode Kas": string;
  "No Rekening": string;
  Total: string;
};

export type pendapatanPerUser = {
  "Kode User": string;
  user: string;
  Total: string;
};

export type pendapatanPerJenis = {
  "Kode Pendapatan": string;
  "Jenis Pendapatan": string;
  Total: string;
};

export type pendapatanPerJenisBayar = {
  "Kode Jenis": string;
  "Jenis Bayar": string;
  Total: string;
};

export type pendapatanPerHari = {
  "Kode Divisi": string;
  Tanggal: string;
  Divisi: string;
  Total: string;
};

export type pendapatanPerBulan = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type pendapatanPerTahun = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};
