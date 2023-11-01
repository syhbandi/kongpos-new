export type GetWarnasType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: string;
  length: string;
};

export type WarnaType = {
  kd_warna: string;
  nama: string;
  status: string;
  keterangan: string;
};

export type getWarnaType = {
  company_id: string;
  kd_warna: string;
};

export type CreateWarnaType = {
  kd_warna: string;
  nama: string;
  keterangan: string;
  status: string;
  company_id: string;
};
