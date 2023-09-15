export type BuatKontrakParamsTypes = {
  comp_id: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  search: string;
  count_stats: number;
};

export type BuatKontrakTypes = {
  nama: string;
  alamat: string;
  telepon: string;
  fax: string;
  kontak: string;
  hp: string;
  email: string;
  id_cid_tujuan: string;
  cid_tujuan: string;
  id_customer_config: string;
  status: string;
  kontrak_id: string;
  c_config_id: string;
  id_cid_sumber: string;
  cid_sumber: string;
  kd_customer: string;
};

export type BuatKontrakCountTypes = {
  "jumlah record": string;
};

export type AjukanKontrakTypes = {
  cid_sumber: string;
  cid_tujuan: string;
  kd_customer: string;
  id_cid_tujuan: string;
  periode_bulan: string;
};
