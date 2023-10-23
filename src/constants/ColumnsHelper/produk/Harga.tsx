import { userFormatRupiah } from "../../../hooks/userFormat";
import { ProdukType } from "../../Types/produkTypes";

type Props = {
  produk: ProdukType;
};

const Harga = ({ produk }: Props) => {
  const satuan = produk.satuan.split(",");
  const harga = produk.harga.split(",");
  return (
    <div className="flex flex-col items-start gap-1">
      {satuan.map((s, index) => (
        <div key={s}>
          {userFormatRupiah(parseFloat(harga[index]))}/<strong>{s}</strong>
        </div>
      ))}
    </div>
  );
};

export default Harga;
