import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { CreateMerkType, MerkType } from "../../../constants/Types/merkTypes";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createMerk, getMerks } from "../../../api/merk";
import Select from "../../../components/Form/Select";
import Modal from "../../../components/Dashboard/Modal";
import { MdInfo } from "react-icons/md";
import { toast } from "react-toastify";
import Spinner from "../../../components/Dashboard/Spinner";

const Merk = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [merks, setMerks] = useState<MerkType[]>([]);
  const [modal, setModal] = useState(false);

  const query = useQuery({
    queryKey: ["merk"],
    queryFn: () =>
      getMerks(
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
      setMerks(query.data.data);
    }
  }, [query.data]);

  return (
    <div className="flex items-end gap-2 mb-5">
      <Select
        label="Merk"
        name="kd_merk"
        options={
          merks
            ? merks
                .filter((merk) => merk.status !== "0")
                .map((merk) => ({
                  value: merk.kd_merk,
                  label: merk.nama,
                }))
            : []
        }
        noMargin={true}
        isLoading={query.isLoading}
      />
      <button
        className="py-2 px-3 rounded text-white bg-blue-600 font-medium"
        type="button"
        onClick={() => setModal(true)}
      >
        Tambah
      </button>

      <Modal open={modal} setOpen={setModal} title="Tambah Merk">
        <TambahMerk setModalOpen={setModal} />
      </Modal>
    </div>
  );
};

type TambahProps = {
  setModalOpen: (open: boolean) => void;
};
const TambahMerk = ({ setModalOpen }: TambahProps) => {
  const [merkData, setMerkData] = useState<CreateMerkType>({
    company_id: useRecoilValue(companyIdState),
    kd_merk: "",
    keterangan: "-",
    nama: "",
    status: "1",
  });
  const [isError, setIsError] = useState(false);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createMerk,
    onSuccess: () => {
      toast.success("Berhasil menambah Merk!");
      queryClient.invalidateQueries({ queryKey: ["merk"] });
      setModalOpen(false);
    },
    onError: () => {
      toast.error("Gagal menambah Merk!");
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMerkData((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!merkData.nama) return setIsError(true);
    mutation.mutate({
      body: merkData,
      access_token,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Merk
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={merkData?.nama}
            onChange={onChange}
            placeholder="Masukkan nama merk"
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

export default Merk;
