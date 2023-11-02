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

export type CreateProdukType = {
  company_id: string;
  kd_barang: string;
  nama: string;
  keterangan: string;
  status: string;
  kd_merk: string;
  kd_kategori: string;
  kd_model: string;
  kd_jenis_bahan: string;
  kd_warna: string;
  ukuran: string;
  status_pinjam: string;
  pabrik: string;
  tag: string;
  tanggal_daftar: string;
  mbs: {
    kd_satuan: string;
    jumlah: string;
    harga: string;
    status: string;
    margin: string;
  }[];
  img?: { gambar: string; nomor: string }[];
};

export type UploadGambarType = {
  company_id: string;
  file: any;
};
