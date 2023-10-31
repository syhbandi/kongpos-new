export type GetJenisBahansType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: string;
  length: string;
};

export type GetJenisBahanType = { company_id: string; kd_jenis_bahan: string };

export type JenisBahanType = {
  kd_jenis_bahan: string;
  nama: string;
  status: string;
  keterangan: string;
};
