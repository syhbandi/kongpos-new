type Paket = {
  nama: string;
  hargaBulanan: number;
  hargaTahunan: number;
  fitur: {
    ada: boolean;
    nama: string;
    keterangan?: string;
  }[];
  rekomendasi?: boolean;
};

const paket: Paket[] = [
  {
    nama: "simple",
    hargaBulanan: 500000,
    hargaTahunan: 5500000,
    fitur: [
      {
        nama: "unlimited user",
        ada: true,
        keterangan: "Bisa digunakan oleh mutli user dalam 1 server",
      },
      {
        nama: "unlimited products",
        ada: true,
      },
      {
        nama: "fitur premium",
        ada: true,
      },
      {
        nama: "integrasi ekspor data produk",
        ada: true,
      },
      {
        nama: "integrasi impor data transaksi",
        ada: false,
      },
      {
        nama: "integrasi impor data produk",
        ada: false,
      },
      {
        nama: "integrasi ekspor data transaksi",
        ada: false,
      },
      {
        nama: "Backoffice access",
        ada: false,
      },
    ],
  },
  {
    nama: "light",
    hargaBulanan: 650000,
    hargaTahunan: 7150000,
    fitur: [
      {
        nama: "unlimited user",
        ada: true,
      },
      {
        nama: "unlimited products",
        ada: true,
      },
      {
        nama: "fitur premium",
        ada: true,
      },
      {
        nama: "integrasi ekspor data produk",
        ada: true,
      },
      {
        nama: "integrasi impor data transaksi",
        ada: true,
      },
      {
        nama: "integrasi impor data produk",
        ada: false,
      },
      {
        nama: "integrasi ekspor data transaksi",
        ada: false,
      },
      {
        nama: "Backoffice access",
        ada: false,
      },
    ],
  },
  {
    nama: "standar",
    hargaBulanan: 750000,
    hargaTahunan: 8250000,
    rekomendasi: true,
    fitur: [
      {
        nama: "unlimited user",
        ada: true,
      },
      {
        nama: "unlimited products",
        ada: true,
      },
      {
        nama: "fitur premium",
        ada: true,
      },
      {
        nama: "integrasi ekspor data produk",
        ada: true,
      },
      {
        nama: "integrasi impor data transaksi",
        ada: true,
      },
      {
        nama: "integrasi impor data produk",
        ada: true,
      },
      {
        nama: "integrasi ekspor data transaksi",
        ada: false,
      },
      {
        nama: "Backoffice access",
        ada: false,
      },
    ],
  },
  {
    nama: "pro",
    hargaBulanan: 950000,
    hargaTahunan: 10450000,
    fitur: [
      {
        nama: "unlimited user",
        ada: true,
      },
      {
        nama: "unlimited products",
        ada: true,
      },
      {
        nama: "fitur premium",
        ada: true,
      },
      {
        nama: "integrasi ekspor data produk",
        ada: true,
      },
      {
        nama: "integrasi impor data transaksi",
        ada: true,
      },
      {
        nama: "integrasi impor data produk",
        ada: true,
      },
      {
        nama: "integrasi ekspor data transaksi",
        ada: true,
      },
      {
        nama: "Backoffice access",
        ada: true,
      },
    ],
  },
];

export default paket;
