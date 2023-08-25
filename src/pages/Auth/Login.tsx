import {
  MdArrowBackIosNew,
  MdEmail,
  MdErrorOutline,
  MdLock,
} from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { homeHero, logo } from "../../constants/Images";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/Login";
import { AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../atom/User";

type ErrorData = {
  message: string;
};

const Login = () => {
  const [lihat, setLihat] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useRecoilState(userState);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess(data) {
      localStorage.setItem("KONGPOS_AUTH", JSON.stringify(data));
      setUser(data);
    },
    onError(error: AxiosError<ErrorData>) {
      console.log(error);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutation.mutate({ no_hp: userName, passwd: password });
  };

  if (Object.keys(user).length) return <Navigate to={"/"} />;

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
                <div className="inline-flex items-center gap-1 font-poppins hover:text-blue-600">
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
            {mutation.isError && (
              <div className="p-3 bg-red-200 text-red-600 rounded mb-3 font-medium font-roboto flex items-center justify-center gap-2">
                <MdErrorOutline />
                {mutation.error?.response?.data.message}
              </div>
            )}
            <form onSubmit={onSubmit}>
              <div className="flex items-center gap-2 font-roboto border border-gray-400 focus-within:border-black focus-within:text-black rounded p-3 mb-5">
                <MdEmail className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Email atau No. Hp"
                  className="outline-none flex-grow"
                  autoComplete="email"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 font-roboto border border-gray-400 focus-within:border-black focus-within:text-black rounded p-3 mb-5">
                <MdLock className="text-gray-500" />
                <input
                  type={lihat ? "text" : "password"}
                  placeholder="Password"
                  className="outline-none flex-grow"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="cursor-pointer text-gray-500"
                  onClick={() => setLihat(!lihat)}
                >
                  {lihat ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <button
                className="outline-none rounded border-2 border-black bg-black text-white font-poppins text-lg font-semibold w-full py-3 hover:bg-gray-900 hover:border-gray-900 mb-5 disabled:opacity-50"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? "Proses..." : "Login"}
              </button>
            </form>

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
          <div className="bg-kong p-20 hidden md:flex items-center justify-center">
            <img src={homeHero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
