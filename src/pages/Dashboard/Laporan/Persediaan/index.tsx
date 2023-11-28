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
];

const index = () => {
  const [jenis, setJenis] = useState<string>("1");

  return (
    <div className="bg-white rounded shadow">
      <div className="border-b border-gray-100">
        {persediaanPages.map((page) => (
          <button
            className={`p-5  bg-white rounded-t ${
              jenis === page.jenis ? "border-b-2 border-kong" : ""
            }`}
            onClick={() => setJenis(page.jenis)}
            key={page.jenis}
          >
            <span className={jenis === page.jenis ? "font-semibold" : ""}>
              {page.nama}
            </span>
          </button>
        ))}
      </div>
      <div className="p-5">
        {persediaanPages.find((page) => page.jenis === jenis)?.halaman}
      </div>
    </div>
  );
};

export default index;
