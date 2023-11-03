import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { JenisBahanType } from "../../../constants/Types/jenisBahanTypes";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createJenisBahan, getJenisBahans } from "../../../api/jenisBahan";
import Select from "../../../components/Form/Select";
import Modal from "../../../components/Dashboard/Modal";
import { CreateJenisBahanType } from "../../../constants/Types/jenisBahanTypes";
import { toast } from "react-toastify";
import { MdInfo } from "react-icons/md";
import Spinner from "../../../components/Dashboard/Spinner";

const JenisBahan = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [jenisBahans, setJenisBahans] = useState<JenisBahanType[]>([]);
  const [modal, setModal] = useState(false);

  const query = useQuery({
    queryKey: ["jenisBahan"],
    queryFn: () =>
      getJenisBahans(
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
      setJenisBahans(query.data?.data);
    }
  }, [query.data]);

  return (
    <div className="flex gap-2 items-end mb-5">
      <Select
        label="JenisBahan"
        name="kd_jenis_bahan"
        options={jenisBahans
          .filter((jenisBahan) => jenisBahan.status !== "0")
          .map((jenisBahan) => ({
            value: jenisBahan.kd_jenis_bahan,
            label: jenisBahan.nama,
          }))}
        noMargin={true}
        isLoading={query.isLoading}
      />
      <button
        type="button"
        className="rounded bg-blue-600 text-white font-medium py-2 px-3"
        onClick={() => setModal(true)}
      >
        Tambah
      </button>
      <Modal title="Tambah Jenis Bahan" open={modal} setOpen={setModal}>
        <Tambah setModal={setModal} />
      </Modal>
    </div>
  );
};

type TambahProps = {
  setModal: (open: boolean) => void;
};

const Tambah = ({ setModal }: TambahProps) => {
  const [jenisBahan, setJenisBahan] = useState<CreateJenisBahanType>({
    company_id: useRecoilValue(companyIdState),
    kd_jenis_bahan: "",
    keterangan: "-",
    nama: "",
    status: "1",
  });
  const [isError, setIsError] = useState(false);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createJenisBahan,
    onSuccess: () => {
      toast.success("Berhasil menambah jenis bahan!");
      queryClient.invalidateQueries({ queryKey: ["jenisBahan"] });
      setModal(false);
    },
    onError: () => {
      toast.error("Gagal menambah jenis bahan!");
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJenisBahan((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!jenisBahan.nama) return setIsError(true);
    mutation.mutate({
      body: jenisBahan,
      access_token,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Jenis Bahan
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={jenisBahan?.nama}
            onChange={onChange}
            placeholder="Masukkan nama jenisbahan"
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

export default JenisBahan;
