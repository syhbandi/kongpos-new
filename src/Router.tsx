import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import TopbarProgress from "react-topbar-progress-indicator";
import ErrorPage from "./pages/Dashboard/Error";
const App = lazy(() => import("./App"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Logout = lazy(() => import("./pages/Auth/Logout"));
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Laporan = lazy(() => import("./pages/Dashboard/Laporan"));
const Penjualan = lazy(() => import("./pages/Dashboard/Laporan/Penjualan"));
const OrderPenjualan = lazy(
  () => import("./pages/Dashboard/Laporan/OrderPenjualan")
);
const ReturPenjualan = lazy(
  () => import("./pages/Dashboard/Laporan/ReturPenjualan")
);
const Pembelian = lazy(() => import("./pages/Dashboard/Laporan/Pembelian"));
const OrderPembelian = lazy(
  () => import("./pages/Dashboard/Laporan/OrderPembelian")
);
const ReturPembelian = lazy(
  () => import("./pages/Dashboard/Laporan/ReturPembelian")
);
const Inventori = lazy(() => import("./pages/Dashboard/Laporan/Inventori"));
const Biaya = lazy(() => import("./pages/Dashboard/Laporan/Biaya"));
const Pendapatan = lazy(() => import("./pages/Dashboard/Laporan/Pendapatan"));
const Hutang = lazy(() => import("./pages/Dashboard/Laporan/Hutang"));
const Piutang = lazy(() => import("./pages/Dashboard/Laporan/Piutang"));
const Fmi = lazy(() => import("./pages/Dashboard/Laporan/Fmi"));
const Persediaan = lazy(() => import("./pages/Dashboard/Laporan/Persediaan"));
const Kontrak = lazy(() => import("./pages/Dashboard/Kontrak"));
const BuatKontrak = lazy(() => import("./pages/Dashboard/Kontrak/BuatKontrak"));
const PengajuanKontrak = lazy(
  () => import("./pages/Dashboard/Kontrak/BuatKontrak/PengajuanKontrak")
);
const BayarKontrak = lazy(
  () => import("./pages/Dashboard/Kontrak/BuatKontrak/BayarKontrak")
);
const PermintaanKontrak = lazy(
  () => import("./pages/Dashboard/Kontrak/PermintaanKontrak")
);
const PermintaanKontrakDetail = lazy(
  () =>
    import(
      "./pages/Dashboard/Kontrak/PermintaanKontrak/PermintaanKontrakDetail"
    )
);
const ProdukKontrak = lazy(() => import("./pages/Dashboard/Kontrak/Produk"));
const SupplierKontrak = lazy(
  () => import("./pages/Dashboard/Kontrak/Supplier")
);
const Mapping = lazy(
  () => import("./pages/Dashboard/Kontrak/Supplier/Mapping")
);
const Produk = lazy(() => import("./pages/Dashboard/Produk"));
const TambahProduk = lazy(() => import("./pages/Dashboard/Produk/Tambah"));
const EditProduk = lazy(() => import("./pages/Dashboard/Produk/Edit"));
const Mapper = lazy(() => import("./pages/mapper"));
const Kategori = lazy(() => import("./pages/Dashboard/Kategori"));
const TambahKategori = lazy(() => import("./pages/Dashboard/Kategori/Tambah"));
const EditKategori = lazy(() => import("./pages/Dashboard/Kategori/Edit"));
const Satuan = lazy(() => import("./pages/Dashboard/Satuan"));
const TambahSatuan = lazy(() => import("./pages/Dashboard/Satuan/Tambah"));
const EditSatuan = lazy(() => import("./pages/Dashboard/Satuan/Edit"));
const Merk = lazy(() => import("./pages/Dashboard/Merk"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<TopbarProgress />}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "laporan",
        element: <Laporan />,
        children: [
          { index: true, element: <Penjualan /> },
          { path: "order-penjualan", element: <OrderPenjualan /> },
          { path: "retur-penjualan", element: <ReturPenjualan /> },
          { path: "pembelian", element: <Pembelian /> },
          { path: "order-pembelian", element: <OrderPembelian /> },
          { path: "retur-pembelian", element: <ReturPembelian /> },
          { path: "inventori", element: <Inventori /> },
          { path: "biaya", element: <Biaya /> },
          { path: "pendapatan", element: <Pendapatan /> },
          { path: "hutang", element: <Hutang /> },
          { path: "piutang", element: <Piutang /> },
          { path: "laba-rugi", element: "" },
          { path: "fmi-smi", element: <Fmi /> },
          { path: "persediaan", element: <Persediaan /> },
        ],
      },
      {
        path: "kontrak",
        element: <Kontrak />,
        children: [
          { element: <BuatKontrak />, index: true },
          { path: "pengajuan", element: <PengajuanKontrak /> },
          { path: "bayar", element: <BayarKontrak /> },
          { path: "permintaan", element: <PermintaanKontrak /> },
          { path: "permintaan/:cid", element: <PermintaanKontrakDetail /> },
          { path: "produk", element: <ProdukKontrak /> },
          { path: "supplier", element: <SupplierKontrak /> },
          { path: "supplier/mapping", element: <Mapping /> },
        ],
      },
      { path: "pengaturan", element: <>Pengaturan</> },
      { path: "produk", element: <Produk /> },
      { path: "produk/tambah", element: <TambahProduk /> },
      { path: "produk/edit/:kd_barang", element: <EditProduk /> },
      { path: "kategori", element: <Kategori /> },
      { path: "kategori/tambah", element: <TambahKategori /> },
      { path: "kategori/edit/:kd_kategori", element: <EditKategori /> },
      { path: "satuan", element: <Satuan /> },
      { path: "satuan/tambah", element: <TambahSatuan /> },
      { path: "satuan/edit/:kd_satuan", element: <EditSatuan /> },
      { path: "merk", element: <Merk /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<TopbarProgress />}>
        <Login />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logout",
    element: (
      <Suspense fallback={<TopbarProgress />}>
        <Logout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "mapper",
    element: (
      <Suspense fallback={<TopbarProgress />}>
        <Mapper />
      </Suspense>
    ),
  },
]);
