import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  kode: string;
};
const Aksi = ({ kode }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Link to={"edit/" + kode}>
        <button className="rounded p-2 bg-black text-white text-sm font-medium hover:bg-gray-800">
          <MdEdit />
        </button>
      </Link>
    </div>
  );
};

export default Aksi;
