import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { ModelType } from "../../../constants/Types/modelTypes";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createModel, getModels } from "../../../api/model";
import Select from "../../../components/Form/Select";
import Modal from "../../../components/Dashboard/Modal";
import { CreateModelType } from "../../../constants/Types/modelTypes";
import { toast } from "react-toastify";
import { MdInfo } from "react-icons/md";
import Spinner from "../../../components/Dashboard/Spinner";

const Model = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [models, setModels] = useState<ModelType[]>([]);
  const [modal, setModal] = useState(false);

  const query = useQuery({
    queryKey: ["model"],
    queryFn: () =>
      getModels(
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
      setModels(query.data?.data);
    }
  }, [query.data]);

  return (
    <div className="flex gap-2 items-end">
      <Select
        label="Model"
        name="kd_model"
        options={models
          .filter((model) => model.status !== "0")
          .map((model) => ({ value: model.kd_model, label: model.nama }))}
        noMargin={true}
      />
      <button
        type="button"
        className="rounded bg-blue-600 text-white font-medium py-2 px-3"
        onClick={() => setModal(true)}
      >
        Tambah Model
      </button>
      <Modal title="Tambah Model" open={modal} setOpen={setModal}>
        <Tambah setModal={setModal} />
      </Modal>
    </div>
  );
};

type TambahProps = {
  setModal: (open: boolean) => void;
};

const Tambah = ({ setModal }: TambahProps) => {
  const [model, setModel] = useState<CreateModelType>({
    company_id: useRecoilValue(companyIdState),
    kd_model: "",
    keterangan: "-",
    nama: "",
    status: "1",
  });
  const [isError, setIsError] = useState(false);
  const { access_token } = useRecoilValue(userState);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createModel,
    onSuccess: () => {
      toast.success("Berhasil menambah model!");
      queryClient.invalidateQueries({ queryKey: ["model"] });
      setModal(false);
    },
    onError: () => {
      toast.error("Gagal menambah model!");
      mutation.reset();
    },
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel((prev) => ({ ...prev, nama: e.target.value }));
    setIsError(false);
  };

  const onSubmit = () => {
    if (!model.nama) return setIsError(true);
    mutation.mutate({
      body: model,
      access_token,
    });
  };

  return (
    <>
      <div className="flex flex-col gap-2 mb-5 font-roboto">
        <label htmlFor="nama" className="font-medium capitalize">
          Model
        </label>
        <div className="relative">
          <input
            id="nama"
            className={`p-2 outline-none border border-gray-300 rounded-md focus:border-gray-500 w-full`}
            value={model?.nama}
            onChange={onChange}
            placeholder="Masukkan nama model"
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

export default Model;
