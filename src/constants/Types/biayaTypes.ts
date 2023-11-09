export type biayaParams = {
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

export type biayaCount = {
  "Jumlah Record": string;
  "Grand Total": string;
};

export type biayaPerNota = {
  "No Transaksi": string;
  Divisi: string;
  Biaya: string;
  Kas: string;
  "Jenis Bayar": string;
  "No Bukti": string;
  Keterangan: string;
  "Tanggal Server": string;
  Total: string;
};

export type biayaPerDivisi = {
  "Kode Divisi": string;
  "Jumlah Nota": string;
  Divisi: string;
  "Kepala Nota": string;
  Total: string;
};

export type biayaPerKas = {
  "Kode Kas": string;
  "No Rekening": string;
  Total: string;
};

export type biayaPerUser = {
  "Kode User": string;
  user: string;
  Total: string;
};

export type biayaPerJenis = {
  "Kode Biaya": string;
  "Jenis Biaya": string;
  Total: string;
};

export type biayaPerJenisBayar = {
  "Kode Jenis": string;
  "Jenis Bayar": string;
  Total: string;
};

export type biayaPerHari = {
  "Kode Divisi": string;
  Tanggal: string;
  Divisi: string;
  Total: string;
};

export type biayaPerBulan = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};

export type biayaPerTahun = {
  "Kode Divisi": string;
  Periode: string;
  Divisi: string;
  Total: string;
};
