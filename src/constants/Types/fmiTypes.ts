export type GetFmisType = {
  company_id: string;
  kd_customer: string;
  periode: string;
  awal: string;
  akhir: string;
  jenis: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
};

export type FmiType = {
  kd_barang: string;
  nama: string;
  awal: string;
  akhir: string;
  divisi: string;
  jumlah: string;
  total: string;
  nomor: string;
  saldo: string;
  jenis: string;
  sisa_stok: string;
};
