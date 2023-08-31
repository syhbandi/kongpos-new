import { Link } from "react-router-dom";
import { NotFound } from "../../../constants/Images";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-5">
      <img src={NotFound} alt="page not found" className="w-full md:w-96" />
      <h1 className="text-2xl md:text-3xl font-semibold font-poppins  text-center mb-5">
        Halaman tidak ditemukan
      </h1>
      <Link to={"/"}>
        <span className="px-5  py-2 rounded bg-white border-2 border-black font-poppins font-medium hover:bg-black hover:text-white">
          Ke Beranda
        </span>
      </Link>
    </div>
  );
};

export default ErrorPage;
