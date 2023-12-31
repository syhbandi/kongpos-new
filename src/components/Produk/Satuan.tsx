import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createSatuan, getSatuans } from "../../api/satuan";
import Spinner from "../Dashboard/Spinner";
import { useEffect, useState } from "react";
import {
  CreateSatuanType,
  SatuanType,
} from "../../constants/Types/satuanTypes";
import Modal from "../Dashboard/Modal";
import { userFormatRupiah } from "../../hooks/userFormat";
import { toast } from "react-toastify";
import { MdInfo } from "react-icons/md";

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
  const [modal, setModal] = useState(false);
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

  useEffect(() => {
    if (satuans.length && !MBS.length) {
      setMBS([
        {
          kd_satuan: satuans[0].kd_satuan,
          harga: "0",
          jumlah: "1",
          margin: "0",
          status: "1",
        },
      ]);
    }
  }, [satuans, MBS]);

  return (
    <div className="bg-white rounded shadow p-5 w-full">
      <div className="font-medium mb-2">Satuan</div>
      {isLoading && <Spinner />}
      <div className="h-64 overflow-y-auto scrollbar-custom">
        {satuans
          ?.filter((satuan) =>
            MBS.map((mbs) => mbs.kd_satuan).includes(satuan.kd_satuan)
          )
          .map((satuan) => (
            <Detail
              satuan={satuan}
              key={satuan.kd_satuan}
              setMBS={setMBS}
              MBS={MBS}
            />
          ))}
        {satuans
          ?.filter(
            (satuan) =>
              !MBS.map((mbs) => mbs.kd_satuan).includes(satuan.kd_satuan)
          )
          .map((satuan) => (
            <Detail
              satuan={satuan}
              key={satuan.kd_satuan}
              setMBS={setMBS}
              MBS={MBS}
            />
          ))}
      </div>
      <button
        className="outline-none font-medium mt-5 text-blue-600"
        onClick={() => setModal(true)}
      >
        Tambah Satuan
      </button>
      <Modal open={modal} setOpen={setModal} title="Tambah Satuan">
        <Tambah setModal={setModal} />
      </Modal>
    </div>
  );
};

type DetailProps = {
  satuan: SatuanType;
  setMBS: React.Dispatch<React.SetStateAction<MBS[]>>;
  MBS: MBS[];
};
const Detail = ({ satuan, setMBS, MBS }: DetailProps) => {
  const [selected, setSelected] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({
    kd_satuan: satuan.kd_satuan,
    jumlah: "1",
    harga: "0",
    status: "1",
    margin: "0",
  });

  useEffect(() => {
    const selectedSatuan = MBS.find(
      (mbs) => mbs.kd_satuan === satuan.kd_satuan
    );
    if (selectedSatuan) {
      setSelected(true);
      setData(selectedSatuan);
    }
  }, [MBS]);

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
          <span className={`${selected ? "font-medium" : null}`}>
            {satuan.nama}
          </span>
          {selected && (
            <span className="text-sm font-medium">
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

type TambahProps = {
  setModal: (open: boolean) => void;
};

const Tambah = ({ setModal }: TambahProps) => {
  const [satuan, setSatuan] = useState<CreateSatuanType>({
    company_id: useRecoilValue(companyIdState),
    kd_satuan: "",
    keterangan: "-",
    nama: "",
    status: "1",
  });
  const [isError, setIsError] = useState(false);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createSatuan,
    onSuccess: () => {
      toast.success("Berhasil menambah satuan!");
      queryClient.invalidateQueries({ queryKey: ["satuan"] });
      setModal(false);
    },
    onError: () => {
      toast.error("Gagal menambah satuan!");
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSatuan((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!satuan.nama) return setIsError(true);
    mutation.mutate({
      data: satuan,
      access_token,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Satuan
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={satuan?.nama}
            onChange={onChange}
            placeholder="Masukkan nama satuan"
          />
          {isError && (
            <span className="px-2 py-1 bg-red-100 text-xs font-medium text-red-600 absolute right-0 -top-7 rounded flex items-center gap-1">
              <MdInfo />
              harus diisi
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-end">
        <button
          className="py-2 px-3 rounded bg-black text-white font-medium font-roboto disabled:bg-opacity-50"
          type="button"
          onClick={onSubmit}
          disabled={mutation.isLoading}
        >
          {mutation.isLoading ? <Spinner color="text-white" /> : "Simpan"}
        </button>
      </div>
    </>
  );
};

export default Satuan;
