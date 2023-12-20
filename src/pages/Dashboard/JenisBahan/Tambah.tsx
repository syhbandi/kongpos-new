import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { object, string } from "yup";
import { companyIdState, userState } from "../../../atom/User";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import { MdArrowBack, MdSave } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJenisBahan } from "../../../api/jenisBahan";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../../components/Dashboard/Spinner";

const schema = object().shape({
  nama: string().required("Harus diisi"),
  keterangan: string().required("Harus diisi"),
  status: string().required("Harus diisi"),
});

const Tambah = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createJenisBahan,
    onSuccess: () => {
      toast.success("Berhasil menambah jenis bahan");
      queryClient.invalidateQueries({ queryKey: ["jenisBahan"] });
      navigate("/dashboard/jenis-bahan", { replace: true });
    },
    onError: () => {
      toast.error("Gagal menambah jenis bahan");
      mutation.reset();
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate({
      body: { ...data, company_id },
      access_token,
    });
  };

  return (
    <>
      <div className="flex items-center mb-5">
        <MdArrowBack
          onClick={() => history.back()}
          className="text-2xl mr-3 cursor-pointer"
        />
        <h1 className="text-2xl font-semibold font-poppins">
          Tambah Jenis Bahan
        </h1>
      </div>
      <div className="rounded shadow bg-white p-5 w-full md:w-1/2 lg:w-2/5">
        <FormProvider {...methods}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Input label="nama" name="nama" placeholder="Nama jenis bahan" />
            <Input
              label="keterangan"
              name="keterangan"
              placeholder="Keterangan"
              multiline
            />
            <Select
              name="status"
              label="Status"
              options={[
                { value: 1, label: "Aktif" },
                { value: 2, label: "Aktif Non Display" },
                { value: 0, label: "Nonaktif" },
              ]}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-2 px-3 bg-black font-semibold text-white rounded flex items-center justify-center gap-2 disabled:bg-opacity-50"
                disabled={mutation.isLoading}
              >
                {mutation.isLoading ? (
                  <Spinner color="text-white" />
                ) : (
                  <>
                    <MdSave />
                    Simpan
                  </>
                )}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Tambah;
