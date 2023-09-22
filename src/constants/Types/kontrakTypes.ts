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

export type GetKontrakTypes = {
  id_kontrak: string;
  cid_sumber: string;
  cid_tujuan: string;
};

export type KontrakTypes = {
  id_kontrak: string;
  tanggal_request: string;
  tanggal_response: string;
  tanggal_kontrak: string;
  periode_bulan: string;
  tanggal_jatuh_tempo: string;
};

export type bayarKontrakParamsTypes = {
  images: any;
  cid_sumber: string;
  cid_tujuan: string;
  id_kontrak: string;
  periode: string;
  nominal_bayar: string | number;
  id_customer_config: string;
};

export type PermintaanKontrakParams = {
  comp_id: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  search: string;
  count_stats: number;
};

export type PermintaanKontrakTypes = {
  this_company_id: string;
  cid_sumber: string;
  cid_tujuan: string;
  id_cid_sumber: string;
  company_id: string;
  "Nama Usaha": string;
  "Kategori Usaha": string;
  alamat: string;
  provinsi: string;
  "No Telp": string;
  email: string;
  periode_bulan: string;
};

export type PermintaanKontrakCount = {
  "jumlah record": string;
};

export type DaftarkanSupplierParamsType = {
  id_cid_sumber: string;
  cid_sumber: string;
  cid_tujuan: string;
  kd_supplier: string;
};

export type terimaKontrakParamsTYpe = {
  params: {
    kd_supplier: string;
    kd_customer: string;
    cid_sumber: string;
    cid_tujuan: string;
    periode: string;
    id_cid_sumber: string;
    id_cid_tujuan: string;
  };
  access_token: string;
};

export type ProdukKontrakParams = {
  comp_id: string;
  search: string;
  order_col: string;
  order_type: string;
  limit: number;
  length: number;
  count_stats: number;
};

export type ProdukKontrakType = {
  kd_barang: string;
  kd_merk: string;
  kd_kategori: string;
  status_barang: string;
  item: string;
  merk: string;
  kategori: string;
  satuan: string;
  kd_satuan: string;
  mbs_status: string;
};

export type ProdukKontrakCountType = {
  "Jumlah Record": string;
};
