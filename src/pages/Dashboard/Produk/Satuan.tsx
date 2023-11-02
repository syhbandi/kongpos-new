import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { useQuery } from "@tanstack/react-query";
import { getSatuans } from "../../../api/satuan";
import Spinner from "../../../components/Dashboard/Spinner";
import { useEffect, useState } from "react";
import { SatuanType } from "../../../constants/Types/satuanTypes";
import Modal from "../../../components/Dashboard/Modal";
import { userFormatRupiah } from "../../../hooks/userFormat";

type MBS = {
  kd_satuan: string;
  jumlah: string;
  harga: string;
  status: string;
  margin: string;
};

type Props = {
  MBS: MBS[];
  setMBS: React.Dispatch<React.SetStateAction<MBS[]>>;
};

const Satuan = ({ MBS, setMBS }: Props) => {
  const { access_token } = useRecoilValue(userState);
  const companyId = useRecoilValue(companyIdState);
  const [satuans, setSatuans] = useState<SatuanType[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ["satuan"],
    queryFn: () =>
      getSatuans(
        {
          company_id: companyId,
          length: "",
          limit: "",
          order_col: "",
          order_type: "",
          search: "",
        },
        access_token
      ),
  });

  useEffect(() => {
    if (data) setSatuans(data.data);
  }, [data]);

  return (
    <div className="bg-white rounded shadow p-5 w-full md:w-96">
      <div className="font-medium mb-2">Satuan</div>
      {isLoading && <Spinner />}
      <div className="h-80 overflow-y-auto scrollbar-custom">
        {satuans &&
          satuans.map((satuan, index) => (
            <Detail
              satuan={satuan}
              key={satuan.kd_satuan}
              setMBS={setMBS}
              defaultChecked={index === 0 ? true : false}
            />
          ))}
      </div>
    </div>
  );
};

type DetailProps = {
  satuan: SatuanType;
  setMBS: React.Dispatch<React.SetStateAction<MBS[]>>;
  defaultChecked?: boolean | false;
};
const Detail = ({ satuan, setMBS, defaultChecked }: DetailProps) => {
  const [selected, setSelected] = useState(defaultChecked);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    kd_satuan: satuan.kd_satuan,
    jumlah: "0",
    harga: "0",
    status: "1",
    margin: "0",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selected) return setModal(true);
    setSelected(e.target.checked);
    setMBS((prev) => prev.filter((s) => s.kd_satuan !== satuan.kd_satuan));
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const onSubmit = () => {
    setMBS((prev) => [...prev, data]);
    setSelected(true);
    setModal(false);
  };

  return (
    <>
      <div className="flex items-center">
        <label className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="checkbox"
            id={satuan.kd_satuan}
            className="w-5 h-5 cursor-pointer"
            checked={selected}
            onChange={onChange}
          />
          <span className="">{satuan.nama}</span>
          {selected && (
            <span>
              ({data.jumlah} - {userFormatRupiah(parseFloat(data.harga))} -{" "}
              {userFormatRupiah(parseFloat(data.margin))})
            </span>
          )}
        </label>
      </div>
      <Modal open={modal} setOpen={setModal} title={satuan.nama}>
        <div className="flex flex-col gap-2 font-roboto">
          <div className="flex flex-col gap-2">
            <label htmlFor="jumlah" className="font-medium">
              Jumlah
            </label>
            <input
              id="jumlah"
              type="number"
              className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
              value={data.jumlah}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="harga" className="font-medium">
              Harga
            </label>
            <input
              id="harga"
              type="number"
              className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
              value={data.harga}
              onChange={onInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="margin" className="font-medium">
              Margin
            </label>
            <input
              id="margin"
              type="number"
              className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
              value={data.margin}
              onChange={onInputChange}
            />
          </div>
          <button
            className="rounded bg-black text-white font-medium outline-none hover:bg-gray-800 ml-auto px-3 py-2 mt-3"
            onClick={onSubmit}
          >
            Simpan
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Satuan;
