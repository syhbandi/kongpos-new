export type GetMerksType = {
  company_id: string;
  order_col: string;
  order_type: string;
  search: string;
  limit: number | any;
  length: number | any;
};

export type MerkType = {
  kd_merk: string;
  nama: string;
  status: string;
  keterangan: string;
};

export type getMerkType = {
  company_id: string;
  kd_merk: string;
};

export type CreateMerkType = {
  company_id: string;
  kd_merk: string;
  nama: string;
  keterangan: string;
  status: string;
};
