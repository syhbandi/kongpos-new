import {
  MdCheckCircleOutline,
  MdRemoveCircleOutline,
  MdHelpOutline,
  MdOutlineEmail,
  MdSend,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import paket from "../../constants/Paket";

function index() {
  const [periode, setPeriode] = useState<string>("bulanan");
  const [scrolled, setScrolled] = useState(false);
  const pricingRef = useRef<any>(null);
  const hubKamiRef = useRef<any>(null);

  const onGoTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const onScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else setScrolled(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="font-poppins bg-gray-200">
      <nav
        className={`fixed top-0 w-full z-10 ease-in-out duration-300 ${
          scrolled ? "bg-gray-800" : null
        }`}
      >
        <div className="lg:container px-5 mx-auto flex items-center py-6">
          <h1 className="text-3xl font-bold text-gray-300">Mapper</h1>
          <div className="ml-auto">
            <ul className="flex items-center gap-10">
              <li
                className="text-base font-medium text-gray-300 cursor-pointer"
                onClick={() => onGoTo(pricingRef)}
              >
                Pricing
              </li>
              <li
                className="text-base font-medium text-gray-300 cursor-pointer"
                onClick={() => onGoTo(hubKamiRef)}
              >
                Hubungi Kami
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        id="hero"
        className="bg-gradient-to-br from-gray-800 to-gray-900 h-screen"
      >
        <div className="lg:container lg:mx-auto px-5 h-full flex flex-col justify-center items-center">
          <div className="max-w-2xl">
            <h1 className="font-semibold leading-normal  text-3xl md:text-5xl md:leading-normal  text-gray-300 text-center">
              Integrasikan Data ke{" "}
              <span className="text-[#ffc90d] font-bold">KONGPOS</span> Dengan
              Mudah
            </h1>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                className="rounded-md bg-[#ffc90d] py-3 px-8 font-semibold text-base hover:bg-opacity-80 "
                onClick={() => onGoTo(pricingRef)}
              >
                Mulai
              </button>
              <button
                className="rounded-md bg-gray-300 py-3 px-8 font-semibold text-base hover:bg-opacity-80"
                onClick={() => onGoTo(hubKamiRef)}
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="pricing" ref={pricingRef}>
        <div className="lg:container mx-auto px-5 py-10 font-poppins">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl font-bold text-center">Pricing</h1>
            <div className="w-7 h-1 rounded-full bg-[#ffc90d]"></div>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex items-center border border-gray-800 rounded-md">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bulanan"
                  value={"bulanan"}
                  checked={periode === "bulanan"}
                  hidden
                  className="peer"
                  onChange={(e) => setPeriode(e.target.value)}
                />
                <label
                  htmlFor="bulanan"
                  className="py-3 px-8 rounded-l font-medium  peer-checked:bg-gray-800 peer-checked:text-gray-200 peer-checked:font-bold cursor-pointer"
                >
                  Bulanan
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tahunan"
                  value={"tahunan"}
                  checked={periode === "tahunan"}
                  hidden
                  className="peer"
                  onChange={(e) => setPeriode(e.target.value)}
                />
                <label
                  htmlFor="tahunan"
                  className="py-3 px-8 rounded-r font-medium  peer-checked:bg-gray-800 peer-checked:text-gray-200 peer-checked:font-bold cursor-pointer"
                >
                  Tahunan
                </label>
              </div>
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {paket.map((paket) => (
              <div
                className={` rounded-md px-6 py-10  hover:shadow-lg hover:scale-[1.02] ease-in-out duration-500 relative ${
                  paket.rekomendasi
                    ? "bg-gradient-to-br from-gray-700 to-gray-900 text-gray-300 shadow-lg scale-105"
                    : "bg-white text-gray-gray-800 shadow"
                }`}
                key={paket.nama}
              >
                {paket.rekomendasi && (
                  <div className="absolute top-0 left-0 w-full -mt-4 flex items-center justify-center">
                    <div className=" rounded-full px-8 py-2 font-semibold text-white bg-[#ffc90d]">
                      Rekomendasi
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-medium text-center mb-5 capitalize">
                  {paket.nama}
                </h3>
                {periode === "bulanan" ? (
                  <h1 className="font-semibold text-center mb-10 flex justify-center flex-wrap items-end">
                    <span className="text-3xl">
                      {new Intl.NumberFormat("id", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(paket.hargaBulanan)}
                    </span>
                    /bln
                  </h1>
                ) : (
                  <div className="mb-10">
                    <div className="font-semibold text-center mb-3 flex justify-center flex-wrap items-end">
                      <span className="text-3xl">
                        {new Intl.NumberFormat("id", {
                          style: "currency",
                          currency: "IDR",
                          maximumFractionDigits: 0,
                        }).format(paket.hargaTahunan)}
                      </span>
                      /thn
                    </div>
                    <p className="text-sm font-medium text-gray-500 text-center">
                      *Gratis 1 bulan
                    </p>
                  </div>
                )}
                <ul className="flex flex-col gap-5 font-medium">
                  {paket.fitur.map((fitur) => (
                    <li className="flex items-center gap-3" key={fitur.nama}>
                      <span
                        className={`text-2xl ${
                          fitur.ada ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {fitur.ada ? (
                          <MdCheckCircleOutline />
                        ) : (
                          <MdRemoveCircleOutline />
                        )}
                      </span>
                      <span
                        className={`capitalize ${
                          !fitur.ada
                            ? "text-gray-400"
                            : paket.rekomendasi
                            ? "text-gray-300"
                            : ""
                        }`}
                      >
                        {fitur.nama}
                      </span>
                      {fitur.keterangan && (
                        <span className="ml-auto">
                          <MdHelpOutline />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div
              className={` rounded-md px-6 py-10  hover:shadow-lg hover:scale-[1.02] ease-in-out duration-500 relative 
                  bg-white text-gray-gray-800 shadow`}
            >
              <h3 className="text-xl font-medium text-center mb-5 capitalize">
                Enterprise
              </h3>
              <h1 className="font-semibold text-3xl text-center mb-10 flex justify-center flex-wrap items-end">
                *Call for Price
              </h1>
              <p className="font-medium text-center">*Call for Feature</p>
            </div>
          </div>
          <p className="text-center text-gray-500 font-medium text-xl mt-10">
            *Untuk aplikator lain hubungi kami untuk open API
          </p>
        </div>
      </section>
      <section id="hubungi-kami" ref={hubKamiRef}>
        <div className="lg:container mx-auto px-5 py-10 font-poppins">
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-3xl font-bold text-center">Hubungi Kami</h1>
            <p className="text-base font-medium text-gray-800 text-center">
              Punya pertanyaan seputar mapper? hubungi kami segera
            </p>
            <div className="w-7 h-1 rounded-full bg-[#ffc90d]"></div>
          </div>

          <div className="w-full md:w-2/3 mt-5 flex flex-col mx-auto">
            <div className="shadow rounded-md bg-white px-6 pt-14 pb-10 flex flex-col md:flex-row items-center gap-5 relative">
              <div className="absolute top-0 left-0 p-2 bg-green-100 rounded-md text-4xl text-green-700 -mt-2 ml-5">
                <FaWhatsapp />
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800 mb-3">
                  Chat
                </div>
                <p className="font-medium text-gray-600">
                  Selama hari kerja pukul 08.00 - 17.00 WITA
                </p>
              </div>
              <a
                href="https://wa.me/6281339252501"
                className="rounded-md bg-[#25D366] py-3 px-5 font-semibold hover:bg-opacity-80 ml-auto text-white"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-3">
                  <FaWhatsapp />
                  Chat Dengan kami
                </div>
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 mt-5 flex flex-col mx-auto">
            <div className="shadow rounded-md bg-white px-6 pt-14 pb-10 flex flex-col md:flex-row items-center gap-5 relative">
              <div className="absolute top-0 left-0 p-2 bg-yellow-100 rounded-md text-4xl text-yellow-700 -mt-2 ml-5">
                <MdOutlineEmail />
              </div>
              <div>
                <div className="text-2xl font-semibold text-gray-800 mb-3">
                  Email
                </div>
                <p className="font-medium text-gray-600">
                  Selama hari kerja pukul 08.00 - 17.00 WITA
                </p>
              </div>
              <a
                href="mailto:cs@misterkong.com"
                className="rounded-md bg-[#ffc90d] py-3 px-5 font-semibold hover:bg-opacity-80 ml-auto"
                target="_blank"
              >
                <div className="flex items-center justify-center gap-3">
                  <MdSend />
                  Kirim Email
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="lg:container mx-auto px-5 py-10 text-center">
          <p className="text-base text-gray-200 font-medium">
            &copy;{new Date().getFullYear()} Mapper KONGPOS by{" "}
            <a
              href="https://misterkong.com"
              className="text-[#ffc90d] font-semibold hover:text-opacity-80"
            >
              Misterkong
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default index;
