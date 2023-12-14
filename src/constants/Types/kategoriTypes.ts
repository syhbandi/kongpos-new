export type GetKategorisType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: number | any;
  length: number | any;
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

export type CreateKategoriType = {
  kd_kategori: string;
  nama: string;
  keterangan: string;
  status: string;
  company_id: string;
};
