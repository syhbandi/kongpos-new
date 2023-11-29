import { MdEdit } from "react-icons/md";
import { ProdukType } from "../../Types/produkTypes";
import { Link } from "react-router-dom";

type Props = {
  produk: ProdukType;
};
const Aksi = ({ produk }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"edit/" + produk.kd_barang}>
        <button className="rounded p-2 bg-black text-white text-sm font-medium hover:bg-gray-800">
          <MdEdit />
        </button>
      </Link>
    </div>
  );
};

export default Aksi;
