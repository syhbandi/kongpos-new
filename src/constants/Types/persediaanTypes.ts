export type GetPersediaanType = {
  company_id: string;
  awal: string;
  akhir: string;
  jenis: string | number;
  search: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
  kd_barang?: string;
};

export type SisaStokType = {
  kd_barang: string;
  nama_barang: string;
  sisa_stok: string;
  stok_min: string;
};

export type KartuStokType = {
  kd_barang: string;
  nama_barang: string;
  tanggal: string;
  sisa_stok: string;
};

export type TingkatLakuStok = {
  kd_barang: string;
  nama_barang: string;
  sisa_stok: string;
  nominal_persediaan: string;
  total_sales: string;
  qty_sales: string;
};

export type PergerakanStokType = {
  kd_barang: string;
  nama_barang: string;
  sisa_stok: string;
  nominal_persediaan: string;
  saldo_awal_rp: string;
  saldo_awal_qty: string;
  saldo_akhir_rp: string;
  saldo_akhir_qty: string;
  debet_rp: string;
  debet_qty: string;
  kredit_rp: string;
  kredit_qty: string;
};

export type UsiaStokType = {
  kd_barang: string;
  nama_barang: string;
  sisa_stok: string;
  tgl_jual_terakhir: string;
  tgl_terakhir_beli: string;
};

export type DaftarHargaType = {
  kd_barang: string;
  nama_barang: string;
  harga: string;
};
