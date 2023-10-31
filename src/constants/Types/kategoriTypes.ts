export type GetKategorisType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: string;
  length: string;
};

export type KategoriType = {
  kd_kategori: string;
  nama: string;
  status: string;
  keterangan: string;
};

export type getKategoriType = {
  company_id: string;
  kd_kategori: string;
};
