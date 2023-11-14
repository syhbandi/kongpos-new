import { FormProvider, useForm } from "react-hook-form";
import { MdArrowBack, MdSave } from "react-icons/md";
import Input from "../../../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "../../../components/Form/Select";
import Kategori from "../../../components/Produk/Kategori";
import Model from "../../../components/Produk/Model";
import JenisBahan from "../../../components/Produk/JenisBahan";
import { useState } from "react";
import Merk from "../../../components/Produk/Merk";
import Warna from "../../../components/Produk/Warna";
import InputTag from "../../../components/Form/InputTag";
import Satuan from "../../../components/Produk/Satuan";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduk } from "../../../api/produk";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Dashboard/Spinner";
import UploadGambar from "../../../components/Produk/UploadGambar";

const schema = yup.object().shape({
  kd_barang: yup.string().required("harus diisi"),
  nama: yup.string().required("harus diisi"),
  keterangan: yup.string().required("harus diisi"),
  ukuran: yup.string().required("harus diisi"),
  status_pinjam: yup.string().required("harus diisi"),
  pabrik: yup.string().required("harus diisi"),
});

type MBSType = {
  kd_satuan: string;
  jumlah: string;
  harga: string;
  status: string;
  margin: string;
};

type gambars = {
  gambar: string;
  nomor: number | string;
};

const Tambah = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const methods = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState<gambars[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [mbs, setMbs] = useState<MBSType[]>([]);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createProduk,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produk"] });
      toast.success("Berhasil menambah produk baru!");
      navigate("/dashboard/produk", { replace: true });
    },
  });

  const onSubmit = async (form: any) => {
    try {
      await mutation.mutateAsync({
        data: {
          company_id: companyId,
          img: gambar,
          ...form,
          mbs,
          tag: tags.join(","),
        },
        access_token,
      });
    } catch {
      toast.error("Gagal Menambah produk!");
      mutation.reset();
    }
  };

  return (
    <>
      <div className="flex items-center mb-5">
        <MdArrowBack
          onClick={() => history.back()}
          className="text-2xl mr-3 cursor-pointer"
        />
        <h1 className="text-2xl font-semibold font-poppins">Tambah Produk</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="bg-white p-5 rounded shadow w-full lg:flex-grow col-span-9">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Input
                name="kd_barang"
                label="kode"
                autoFocus={true}
                placeholder="Kode barang"
              />
              <Input name="nama" label="Nama" placeholder="Nama" />
              <Input
                name="keterangan"
                label="Keterangan"
                multiline={true}
                placeholder="Keterangan"
              />
              <Merk />
              <Kategori />
              <Model />
              <JenisBahan />
              <Warna />
              <Input name="ukuran" label="Ukuran" placeholder="Ukuran" />
              <Input
                name="status_pinjam"
                label="Status Pinjam"
                placeholder="Status pinjam"
              />
              <Input name="pabrik" label="Pajak" placeholder="Pajak" />
              <InputTag id="tag" label="Tag" tags={tags} setTags={setTags} />
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
                  className="bg-black text-white rounded font-medium flex items-center gap-1 py-2 px-3 ml-auto disabled:bg-opacity-70"
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
        <div className="flex flex-col gap-5 col-span-3">
          <Satuan MBS={mbs} setMBS={setMbs} />
          <UploadGambar setGambars={setGambar} />
        </div>
      </div>
    </>
  );
};

export default Tambah;
