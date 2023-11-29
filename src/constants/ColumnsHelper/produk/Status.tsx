import { ProdukType } from "../../Types/produkTypes";

type Props = {
  produk: ProdukType;
};

type styleType = {
  status: string;
  title: string;
  className: string;
};

const style: styleType[] = [
  { status: "0", title: "Nonaktif", className: "bg-red-100 text-red-700" },
  {
    status: "1",
    title: "Aktif",
    className: "bg-green-100 text-green-700",
  },
  {
    status: "2",
    title: "Aktif Non Display",
    className: "bg-yellow-100 text-yellow-700",
  },
];

const Status = ({ produk }: Props) => {
  return (
    <div className="flex items-center">
      <span
        className={`text-sm rounded py-2 px-3 font-medium ${
          style.find((s) => produk.status === s.status)?.className
        }`}
      >
        {style.find((s) => s.status === produk.status)?.title}
      </span>
    </div>
  );
};

export default Status;
