import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Home from "./pages/Dashboard/Home";
import Laporan from "./pages/Dashboard/Laporan";
import Penjualan from "./pages/Dashboard/Laporan/Penjualan";
import OrderPenjualan from "./pages/Dashboard/Laporan/OrderPenjualan";
import ReturPenjualan from "./pages/Dashboard/Laporan/ReturPenjualan";
import ErrorPage from "./pages/Dashboard/Error";
import Pembelian from "./pages/Dashboard/Laporan/Pembelian";
import OrderPembelian from "./pages/Dashboard/Laporan/OrderPembelian";
import ReturPembelian from "./pages/Dashboard/Laporan/ReturPembelian";
import Inventori from "./pages/Dashboard/Laporan/Inventori";
import Biaya from "./pages/Dashboard/Laporan/Biaya";
import Pendapatan from "./pages/Dashboard/Laporan/Pendapatan";
import Hutang from "./pages/Dashboard/Laporan/Hutang";
import Piutang from "./pages/Dashboard/Laporan/Piutang";
import Kontrak from "./pages/Dashboard/Kontrak";
import BuatKontrak from "./pages/Dashboard/Kontrak/BuatKontrak";
import PengajuanKontrak from "./pages/Dashboard/Kontrak/BuatKontrak/PengajuanKontrak";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
        ],
      },
      {
        path: "kontrak",
        element: <Kontrak />,
        children: [
          {
            element: <BuatKontrak />,
            index: true,
          },
          {
            path: "pengajuan",
            element: <PengajuanKontrak />,
          },
        ],
      },
      {
        path: "Pengaturan",
        element: <>Pengaturan</>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);
