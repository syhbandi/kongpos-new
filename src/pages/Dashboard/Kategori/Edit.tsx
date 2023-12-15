import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { object, string } from "yup";
import { companyIdState, userState } from "../../../atom/User";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { MdArrowBack, MdSave } from "react-icons/md";
import Input from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import Spinner from "../../../components/Dashboard/Spinner";
import { getKategori, updateKategori } from "../../../api/kategori";
import { useEffect } from "react";

const schema = object().shape({
  kd_kategori: string().required("Harus diisi"),
  nama: string().required("Harus diisi"),
  keterangan: string().required("Harus diisi"),
  status: string().required("Harus diisi"),
});
const Edit = () => {
  const { kd_kategori } = useParams();

  const methods = useForm({ resolver: yupResolver(schema) });
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["kategori", kd_kategori],
    queryFn: () =>
      getKategori({ company_id, kd_kategori: kd_kategori || "" }, access_token),
  });
  console.log(data);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: updateKategori,
    onSuccess: () => {
      toast.success("Berhasil memperbarui kategori");
      queryClient.invalidateQueries({ queryKey: ["kategori"] });
      navigate("/dashboard/kategori", { replace: true });
    },
    onError: () => {
      toast.error("Gagal memperbarui kategori");
      mutation.reset();
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate({
      body: { ...data, company_id },
      access_token,
    });
  };

  useEffect(() => {
    if (data) {
      methods.reset({
        kd_kategori: data?.data?.kd_kategori,
        nama: data?.data?.nama,
        keterangan: data?.data?.keterangan,
        status: data?.data?.status,
      });
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="flex items-center gap-2">
        <Spinner /> Memuat...
      </div>
    );

  if (isError)
    return (
      <div className="text-xl font-medium text-red-600">
        Terjadi kesalahan, coba beberapa saat lagi
      </div>
    );

  return (
    <>
      <div className="flex items-center mb-5">
        <MdArrowBack
          onClick={() => history.back()}
          className="text-2xl mr-3 cursor-pointer"
        />
        <h1 className="text-2xl font-semibold font-poppins">Edit Kategori</h1>
      </div>
      <div className="rounded shadow bg-white p-5 w-full md:w-1/2 lg:w-2/5">
        <FormProvider {...methods}>
          <form
            noValidate
            autoComplete="off"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <Input label="kode" name="kd_kategori" disabled={true} />
            <Input label="nama" name="nama" placeholder="Nama Kategori" />
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

export default Edit;
