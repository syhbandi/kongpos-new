import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { CreateWarnaType, WarnaType } from "../../constants/Types/warnaTypes";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createWarna, getWarnas } from "../../api/warna";
import Select from "../Form/Select";
import Modal from "../Dashboard/Modal";
import { toast } from "react-toastify";
import { MdAddCircle, MdInfo } from "react-icons/md";
import Spinner from "../Dashboard/Spinner";

const Warna = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [warnas, setWarnas] = useState<WarnaType[]>([]);
  const [modal, setModal] = useState(false);

  const query = useQuery({
    queryKey: ["warna"],
    queryFn: () =>
      getWarnas(
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
    if (query.data) {
      setWarnas(query.data.data);
    }
  }, [query.data]);

  return (
    <div className="flex gap-2 items-end mb-5">
      <Select
        label="Warna"
        name="kd_warna"
        noMargin={true}
        options={
          warnas
            ? warnas.map((warna) => ({
                value: warna.kd_warna,
                label: warna.nama,
              }))
            : []
        }
        isLoading={query.isLoading}
      />
      <button
        type="button"
        className="rounded bg-blue-600 text-white font-medium py-2 px-3 flex items-center gap-1"
        onClick={() => setModal(true)}
      >
        <MdAddCircle />
        Tambah
      </button>
      <Modal title="Tambah Warna" open={modal} setOpen={setModal}>
        <Tambah setModal={setModal} />
      </Modal>
    </div>
  );
};

type TambahProps = {
  setModal: (open: boolean) => void;
};

const Tambah = ({ setModal }: TambahProps) => {
  const [warna, setWarna] = useState<CreateWarnaType>({
    company_id: useRecoilValue(companyIdState),
    kd_warna: "",
    keterangan: "-",
    nama: "",
    status: "1",
  });
  const [isError, setIsError] = useState(false);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createWarna,
    onSuccess: () => {
      toast.success("Berhasil menambah warna!");
      queryClient.invalidateQueries({ queryKey: ["warna"] });
      setModal(false);
    },
    onError: () => {
      toast.error("Gagal menambah warna!");
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWarna((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!warna.nama) return setIsError(true);
    mutation.mutate({
      body: warna,
      access_token,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Warna
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={warna?.nama}
            onChange={onChange}
            placeholder="Masukkan nama warna"
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

export default Warna;
