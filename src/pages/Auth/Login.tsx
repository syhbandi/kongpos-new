import { MdArrowBackIosNew, MdEmail, MdLock } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { homeHero, logo } from "../../constants/Images";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [lihat, setLihat] = useState(false);

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center select-none">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center">
        <div className="rounded bg-white shadow w-full md:max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-clip">
          <div className="p-5 md:p-10 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <div className="inline-flex gap-2 items-center">
                <img src={logo} alt="logo" width={25} height={25} />
                <h1 className="text-xl font-semibold font-poppins uppercase">
                  kongpos
                </h1>
              </div>
              <Link to={"/"}>
                <div className="inline-flex items-center gap-1 font-poppins text-sm hover:text-blue-600">
                  <MdArrowBackIosNew />
                  <span>Kembali</span>
                </div>
              </Link>
            </div>
            <h1 className="font-semibold font-poppins text-3xl ">
              Selamat datang!
            </h1>
            <p className="font-roboto text-base mb-5">
              Silakan login untuk mengatur toko anda
            </p>
            <div className="flex items-center gap-2 font-roboto border border-gray-400 focus-within:border-black rounded p-3 mb-5">
              <span className="text-gray-400">
                <MdEmail />
              </span>
              <input
                type="text"
                placeholder="Email atau No. Hp"
                className="outline-none flex-grow"
              />
            </div>
            <div className="flex items-center gap-2 font-roboto border border-gray-400 focus-within:border-black rounded p-3 mb-5">
              <span className="text-gray-400">
                <MdLock />
              </span>
              <input
                type={lihat ? "text" : "password"}
                placeholder="Password"
                className="outline-none flex-grow"
              />
              <span
                className="cursor-pointer text-gray-400"
                onClick={() => setLihat(!lihat)}
              >
                {lihat ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
            <button className="outline-none rounded border-2 border-black bg-black text-white font-poppins text-lg font-semibold w-full py-3 hover:bg-gray-900 hover:border-gray-900 mb-5">
              Login
            </button>

            <div className="mt-auto font-poppins text-center">
              &copy;{new Date().getFullYear()} KONGPOS dari{" "}
              <a
                href="https://misterkong.com"
                rel="noreferrer"
                target="_blank"
                className="font-medium hover:font-semibold"
              >
                Misterkong
              </a>
            </div>
          </div>
          <div className="bg-kong p-20 hidden md:block">
            <img src={homeHero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
