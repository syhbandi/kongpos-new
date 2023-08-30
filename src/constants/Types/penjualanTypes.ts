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
