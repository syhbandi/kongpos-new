import KartuStokAll from "./KartuStokAll";
import MutasiStok from "./MutasiStok";
import { useState } from "react";

type PersediaanPages = {
  jenis: string;
  nama: string;
  halaman: any;
};

const persediaanPages: PersediaanPages[] = [
  {
    jenis: "1",
    nama: "Mutasi Stok",
    halaman: <MutasiStok />,
  },
  {
    jenis: "2",
    nama: "Kartu Stok",
    halaman: <KartuStokAll />,
  },
];

const index = () => {
  const [jenis, setJenis] = useState<string>("1");

  return (
    <>
      {persediaanPages.map((page) => (
        <button
          className={`px-8 py-3  rounded-t ${
            jenis === page.jenis ? "bg-white" : "bg-gray-300"
          }`}
          onClick={() => setJenis(page.jenis)}
          key={page.jenis}
        >
          <span className={jenis === page.jenis ? "font-semibold " : ""}>
            {page.nama}
          </span>
        </button>
      ))}
      <div className="bg-white rounded-b shadow p-5">
        {persediaanPages.find((page) => page.jenis === jenis)?.halaman}
      </div>
    </>
  );
};

export default index;
