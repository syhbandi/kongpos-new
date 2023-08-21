import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  cs,
  hardware,
  homeHero,
  laporan,
  manajemenInventori,
  manajemenPegawai,
  manajemenPelanggan,
  onlineOffline,
  outlet,
} from "./constants/Images";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const App = () => {
  return (
    <>
      <Navbar />

      {/* hero */}
      <header className="h-screen bg-kong flex items-center">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-5 text-center md:text-left">
                Kelola usaha dengan mudah
              </h1>
              <p className="text-xl leading-8 font-roboto mb-5 text-center md:text-left">
                Kongpos menyediakan berbagai fitur agar kamu bisa mengembangkan
                usaha dengan mudah dan cepat
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.kong.pos"
                target={"_blank"}
                rel="noreferrer"
                className="border-2 border-black hover:bg-black hover:text-white font-poppins px-7 py-3 text-lg font-semibold rounded"
              >
                Unduh Sekarang
              </a>
            </div>
            <img
              src={homeHero}
              alt="twin kongpos"
              width={500}
              className="hidden md:block"
            />
          </div>
        </div>
      </header>

      {/* why */}
      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <h1 className="text-center text-3xl md:text-4xl font-bold font-poppins mb-5">
            KONGPOS
          </h1>
          <p className="text-xl text-center leading-8 font-roboto">
            KONGPOS hadir untuk segala macam jenis usaha ritel, makanan dan
            minuman seperti Restoran/café, kedai kopi, minuman, makanan/minuman
            cepat saji, salon dan barbershop, Vape Store, Toko elektronik,
            selular, produk digital, toko olahraga, apotek, toko skincare, toko
            butik, toko sayuran dan jenis ritel lainnya.
          </p>
        </div>
      </section>

      <section className="py-10 bg-kong bg-opacity-10 ">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
      </section>

      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <li
                    key={index}
                    className="px-5 py-4 border-2 border-black rounded-lg relative"
                  >
                    <div className="absolute -top-5 -left-5 rounded-full bg-black  w-10 h-10 text-xs text-white font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-kong bg-opacity-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-3x; md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
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

      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <li
                    key={index}
                    className="px-5 py-4 border-2 border-black rounded-lg relative"
                  >
                    <div className="absolute -top-5 -left-5 rounded-full bg-black w-10 h-10 text-xs text-white font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-kong bg-opacity-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-3x; md:text-4xl font-poppins font-bold text-center md:text-left mb-5">
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

      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

      <section className="py-10 bg-kong bg-opacity-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

      <section className="py-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  href="https://api.WhatsApp.com/send?phone=6281339252501"
                  target={"_blank"}
                  role={"button"}
                  rel="noreferrer"
                  className="w-1/2"
                >
                  <span className=" py-3 border-2 border-green-700 bg-green-700 font-medium font-poppins text-white rounded flex items-center justify-center hover:border-green-800 hover:bg-green-800">
                    <FaWhatsapp className="mr-2" />
                    Chat dengan kami
                  </span>
                </a>
                <a
                  role={"button"}
                  className="w-1/2"
                  href="mailto:misterkongpos@gmail.com"
                >
                  <span className="border-2 border-black font-semibold font-poppins flex items-center justify-center py-3 rounded hover:bg-black hover:text-white">
                    <FaEnvelope className="mr-2" />
                    cs@misterkong.com
                  </span>
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
