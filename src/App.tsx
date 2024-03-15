import {
  MdOutlineCarRepair,
  MdOutlineContentCut,
  MdOutlineLocalGroceryStore,
  MdOutlineRestaurant,
  MdStore,
} from "react-icons/md";
import { FaBurger, FaTruckRampBox } from "react-icons/fa6";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  cs,
  hardware,
  homeHero,
  kofie,
  laporan,
  manajemenInventori,
  manajemenPegawai,
  manajemenPelanggan,
  onlineOffline,
  outlet,
} from "./constants/Images";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import MobileNav from "./components/Navbar/Mobile";
const usaha = [
  { icon: <MdStore />, nama: "retail", bg: "bg-red-100", text: "text-red-600" },
  {
    icon: <FaTruckRampBox />,
    nama: "distributor",
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  {
    icon: <MdOutlineLocalGroceryStore />,
    nama: "grosiran",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
  {
    icon: <MdOutlineRestaurant />,
    nama: "restoran",
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    icon: <FaBurger />,
    nama: "restoran cepat saji",
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    icon: <MdOutlineCarRepair />,
    nama: "bengkel",
    bg: "bg-indigo-100",
    text: "text-indigo-600",
  },
  {
    icon: <MdOutlineContentCut />,
    nama: "barbershop",
    bg: "bg-red-100",
    text: "text-red-600",
  },
  {
    icon: <MdOutlineContentCut />,
    nama: "salon",
    bg: "bg-pink-100",
    text: "text-pink-600",
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNav />
      {/* hero */}
      <header className="h-screen flex items-center">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-5 text-center md:text-left">
                Kelola usaha dengan mudah
              </h1>
              <p className="text-xl leading-8 font-roboto mb-5 text-center md:text-left">
                Kongpos menyediakan berbagai fitur agar kamu bisa mengembangkan
                usaha dengan mudah dan cepat
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-normal">
                <a
                  href="https://play.google.com/store/apps/details?id=com.kong.pos"
                  target={"_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-center h-16 text-lg border-2 border-kong bg-kong rounded-lg px-8 font-poppins font-semibold hover:brightness-90"
                >
                  Unduh Sekarang GRATIS
                </a>
                <a
                  href="https://wa.me/6281339252501"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center justify-center h-16 border-2 border-kong rounded-lg font-poppins font-semibold text-lg px-8 hover:bg-kong">
                    Konsultasi
                  </div>
                </a>
              </div>
            </div>
            <div className="relative hidden md:flex items-center justify-center">
              <img
                src={homeHero}
                alt="twin kongpos"
                width={400}
                className="hidden md:block"
              />
              <div className="absolute w-full h-full top-0 left-0 -z-10 flex items-center justify-center">
                <div className="w-40 h-40 bg-kong rounded-full blur-[150px]"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* why */}
      <section className="py-10" id="solusi-usaha">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-center text-3xl md:text-4xl font-bold font-poppins mb-10">
            Solusi Usaha Anda
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {usaha.map((usaha) => (
              <div
                className="rounded flex flex-col items-center gap-3 p-5 hover:scale-105 cursor-pointer transition-all ease-in-out duration-200"
                key={usaha.nama}
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl ${usaha.bg} ${usaha.text}`}
                >
                  {usaha.icon}
                </div>
                <div
                  className={`font-roboto font-medium capitalize ${usaha.text}`}
                >
                  {usaha.nama}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Jualan Offline dan Online
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Manfaatkan fitur integrasi antara KONGPOS dan marketplace
                Misterkong untuk meningkatkan omzet kamu.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <img src={onlineOffline} alt="kongpos" className="w-full" />
            </div>
          </div>
        </div>
        <div className="w-40 h-40 bg-kong rounded-full blur-[150px] absolute -right-40 bottom-0 -z-10"></div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[100px] absolute -left-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center order-last md:order-first">
              <img
                src={manajemenInventori}
                alt="kongpos"
                className="w-full mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Manajemen inventori lengkap
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Catat dan menghitung persediaan stok barang serta mengelola
                produk lebih mudah dengan rinci dan detail, yang meliputi:
              </p>
              <ul className="flex flex-col gap-5 mt-10 font-roboto">
                {[
                  "Menggabungkan stok dalam bentuk pcs, lusin, box dll.",
                  "Pengurangan stok bahan baku setiap penyajian makanan",
                  "Pengurangan stok bahan baku jadi, setengah jadi, dan belum jadi",
                  "Pengurangan stok bahan baku produksi",
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AiFillCheckCircle className={"text-xl text-green-700"} />
                    <span className="md:text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[150px] absolute -right-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Manajemen Pelanggan, Promosi & Reward Loyalty
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Simpan dan Kelola data pelanggan secara lengkap dan detail,
                memberikan penawaran berupa promosi kepada pelanggan. Terdapat
                poin untuk pelanggan dalam setiap pembelian sebagai Reward
                Loyalty kepada pelanggan dengan tujuan untuk meningkatkan
                kesetiaan pelanggan dan belanja kembali di Toko Anda.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <img src={manajemenPelanggan} alt="kongpos" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[100px] absolute -left-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center order-last md:order-first">
              <img src={manajemenPegawai} alt="kongpos" className="w-full" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Manajemen Pegawai
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Menata dan mengelola data karyawan secara akurat, lengkap dan
                detail, yang meliputi:
              </p>
              <ul className="flex flex-col gap-5 mt-10 font-roboto">
                {[
                  "Atur hak akses karyawan",
                  "Perhitungan poin untuk setiap karyawan",
                ].map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <AiFillCheckCircle className={"text-xl text-green-700"} />
                    <span className="md:text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[150px] absolute -right-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Fitur Outlet
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Cukup satu aplikasi untuk mengelola banyak usaha dan cabang
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <img src={outlet} alt="kongpos" className="w-full lg:w-3/4" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[100px] absolute -left-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center order-last md:order-first">
              <img src={laporan} alt="kongpos" className="w-full" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Laporan lengkap
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                Kelola laporan usaha dengan mudah. mulai dari laporan penjualan,
                laporan pembelian, Inventori, Laba Rugi, Hutang Piutang, Biaya
                dan Pendapatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[150px] absolute -right-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Dukungan Hardware luas
              </h1>
              <p className="text-xl leading-8 text-center md:text-left font-roboto">
                KONGPOS dapat terhubung dengan hardware printer POS yang beredar
                di pasaran. Anda dapat menggunakan perangkat yang sudah Anda
                miliki,
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <img src={hardware} alt="kongpos" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div
            style={{
              backgroundImage: `url(${kofie})`,
            }}
            className="overflow-hidden rounded-2xl bg-cover bg-fixed bg-left-bottom"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 py-32 bg-gradient-to-r from-gray-950   rounded-2xl">
              <div className="px-10 md:px-20 text-center md:text-left">
                <h1 className="text-5xl font-semibold font-poppins leading-normal text-white mb-10">
                  Apakah KONGPOS cocok dengan usahamu?
                </h1>
                <a
                  href="https://wa.me/6281339252501"
                  rel="noreferrer"
                  target="_blank"
                >
                  <button className="h-16 rounded-lg border-2 border-kong bg-kong px-8 flex items-center justify-center font-poppins font-semibold text-lg w-full md:w-auto hover:brightness-90">
                    Konsultasi
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-x-clip">
        <div className="w-40 h-40 bg-kong rounded-full blur-[100px] absolute -left-40 bottom-0 -z-10"></div>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center order-last md:order-first">
              <img
                src={cs}
                alt="kongpos"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-poppins font-bold text-center md:text-left mb-5">
                Ada Pertanyaan?
              </h1>
              <p className="text-lg leading-8 text-center md:text-left font-roboto">
                Kapanpun kamu butuh sesuatu yang ingin ditanyakan. segera
                hubungi kami
              </p>
              <div className="mt-10 flex flex-col justify-center md:items-start gap-3 font-roboto">
                <a
                  href="https://wa.me/6281339252501"
                  target={"_blank"}
                  role={"button"}
                  rel="noreferrer"
                  className="md:w-2/3"
                >
                  <div className="h-14 border-2 border-green-700 bg-green-700 font-semibold font-poppins text-white rounded-lg flex items-center justify-center hover:border-green-800 hover:bg-green-800 relative">
                    <div className="absolute top-0 left-0 h-full flex items-center px-5">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    Chat dengan kami
                  </div>
                </a>
                <a
                  role={"button"}
                  className="md:w-2/3"
                  href="mailto:cs@misterkong.com"
                >
                  <div className="h-14 border-2 border-kong font-semibold font-poppins rounded-lg flex items-center justify-center hover:bg-kong relative">
                    <div className="absolute top-0 left-0 h-full flex items-center px-5">
                      <FaEnvelope className="text-xl" />
                    </div>
                    cs@misterkong.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
