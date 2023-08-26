import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Home from "./pages/Dashboard/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Oops halaman tidak ditemukan</>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <>Oops halaman tidak ditemukan</>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "laporan",
        element: <>Laporan</>,
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
