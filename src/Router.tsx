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
import Summary from "./pages/Dashboard/Laporan/Summary";
import Pembelian from "./pages/Dashboard/Laporan/Pembelian";
import OrderPembelian from "./pages/Dashboard/Laporan/OrderPembelian";
import ReturPembelian from "./pages/Dashboard/Laporan/ReturPembelian";

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
          {
            index: true,
            element: <Summary />,
          },
          { path: "penjualan", element: <Penjualan /> },
          { path: "order-penjualan", element: <OrderPenjualan /> },
          { path: "retur-penjualan", element: <ReturPenjualan /> },
          { path: "pembelian", element: <Pembelian /> },
          { path: "order-pembelian", element: <OrderPembelian /> },
          { path: "retur-pembelian", element: <ReturPembelian /> },
          { path: "inventori", element: "" },
          { path: "biaya", element: "" },
          { path: "pendapatan", element: "" },
          { path: "hutang", element: "" },
          { path: "piutang", element: "" },
          { path: "laba-rugi", element: "" },
        ],
      },
      {
        path: "kontrak",
        element: <>Kontrak</>,
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
