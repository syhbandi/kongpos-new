import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Home from "./pages/Dashboard/Home";
import Laporan from "./pages/Dashboard/Laporan";
import Penjualan from "./pages/Dashboard/Laporan/Penjualan";
import Summary from "./pages/Dashboard/Laporan/Summary";
import Nota from "./pages/Dashboard/Laporan/Penjualan/Nota";
import ErrorPage from "./pages/Dashboard/Error";

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
          {
            element: <Penjualan />,
            path: "penjualan",
            children: [{ path: "nota", element: <Nota /> }],
          },
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
