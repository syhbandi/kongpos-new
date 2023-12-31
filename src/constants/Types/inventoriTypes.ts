export type InventoriParams = {
  company_id: string;
  kd_barang: string;
  kd_divisi: string;
  periode: string;
  jenis: string;
  search: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
  export: number;
};

export type InventoriCount = { jumlah_record: string };

export type StokPerPeriode = {
  "Kode Barang": string;
  "Kode Divisi": string;
  Barang: string;
  Divisi: string;
  Stok: string;
  harga_jual: number;
};

export type StokPerBarang = {
  "Kode Barang": string;
  Barang: string;
  harga_jual: number;
  Stok: string;
};
