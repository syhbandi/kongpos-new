export type GetSatuansType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: any;
  length: any;
};

export type GetSatuanType = {
  company_id: string;
  kd_satuan: string;
};

export type SatuanType = {
  kd_satuan: string;
  nama: string;
  status: string;
  keterangan: string;
};

export type CreateSatuanType = {
  company_id: string;
  kd_satuan: string;
  nama: string;
  keterangan: string;
  status: string;
};
