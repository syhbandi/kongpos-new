export type piutangParams = {
  company_id: string;
  kd_customer: string;
  periode: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
};

export type piutangType = {
  "No Transaksi": string;
  "Kode Customer": string;
  Tanggal: string;
  Customer: string;
  "Total Penjualan": string;
  "Total Cicilan": string;
  "Sisa Piutang": string;
};

export type piutangCountType = {
  "Jumlah Record": string;
  "Total Penjualan": string;
  "Total Cicilan": string;
  "Sisa Hutang": string;
};
