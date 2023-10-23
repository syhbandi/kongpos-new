export type GetProduksType = {
  company_id: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  search: string;
};

export type GetProdukType = {
  key: string;
  company_id: string;
};

export type ProdukType = {
  kd_barang: string;
  nama: string;
  status: string;
  kategori: string;
  kd_satuan: string;
  satuan: string;
  harga: string;
  gambar: string;
};
