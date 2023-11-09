export type HutangParams = {
  company_id: string;
  kd_supplier: string;
  periode: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
  export: number;
};

export type HutangType = {
  "No Transaksi": string;
  "Kode Supplier": string;
  Tanggal: string;
  Supplier: string;
  "Total Pembelian": string;
  "Total Cicilan": string;
  "Sisa Hutang": string;
};

export type HutangCountType = {
  "Jumlah Record": string;
  "Total Pembelian": string;
  "Total Cicilan": string;
  "Sisa Hutang": string;
};
