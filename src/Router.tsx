import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Auth/Login";

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
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
