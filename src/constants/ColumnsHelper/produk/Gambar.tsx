import { useState } from "react";
import ImageViewer from "../../../components/ImageViewer";
import { ProdukType } from "../../Types/produkTypes";
import { useRecoilValue } from "recoil";
import { companyIdState } from "../../../atom/User";

type Props = {
  produk: ProdukType;
};

const Gambar = ({ produk }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const [open, setOpen] = useState(false);
  const images = produk.gambar
    ? produk.gambar
        .split(",")
        .map(
          (img) =>
            `https://misterkong.com/back_end_mp/${companyId}_config/images/${img}`
        )
    : [];

  if (!images.length) return null;

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          className="py-2 px-3 rounded bg-sky-100 text-sky-700 text-sm font-medium hover:bg-sky-200"
          onClick={() => setOpen(true)}
        >
          Lihat
        </button>
      </div>
      <ImageViewer open={open} setOpen={setOpen} images={images} />
    </>
  );
};

export default Gambar;
