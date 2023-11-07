import { FormProvider, useForm } from "react-hook-form";
import { MdArrowBack, MdSave } from "react-icons/md";
import Input from "../../../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "../../../components/Form/Select";
import Kategori from "./Kategori";
import Model from "./Model";
import JenisBahan from "./JenisBahan";
import InputGambar from "../../../components/Form/InputGambar";
import { useState } from "react";
import Merk from "./Merk";
import Warna from "./Warna";
import InputTag from "../../../components/Form/InputTag";
import Satuan from "./Satuan";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduk, uploadGambar } from "../../../api/produk";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Dashboard/Spinner";

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

const Tambah = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const methods = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState<File>();
  const [tags, setTags] = useState<string[]>([]);
  const [mbs, setMbs] = useState<MBSType[]>([]);
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const uploadGambarMutation = useMutation({
    mutationFn: uploadGambar,
  });

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
      if (gambar) {
        const gambarRes = await uploadGambarMutation.mutateAsync({
          data: { company_id: companyId, file: gambar },
          access_token,
        });
        await mutation.mutateAsync({
          data: {
            company_id: companyId,
            img: gambarRes?.data?.data?.path?.map(
              (res: any, index: number) => ({
                gambar: res,
                nomor: index + 1,
              })
            ),
            ...form,
            mbs,
            tag: tags.join(","),
          },
          access_token,
        });
      } else {
        await mutation.mutateAsync({
          data: {
            company_id: companyId,
            img: [],
            ...form,
            mbs,
            tag: tags.join(","),
          },
          access_token,
        });
      }
    } catch {
      toast.error("Gagal Menambah produk!");
      uploadGambarMutation.reset();
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

      <div className="flex flex-col lg:flex-row items-start gap-2">
        <div className="bg-white p-5 rounded shadow w-full lg:flex-grow">
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
              <InputGambar
                label="Gambar"
                name="gambar"
                state={gambar}
                setState={setGambar}
                multiple
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
                  className="bg-black text-white rounded font-medium flex items-center gap-1 py-2 px-3 ml-auto disabled:bg-opacity-70"
                  disabled={
                    uploadGambarMutation.isLoading || mutation.isLoading
                  }
                >
                  {uploadGambarMutation.isLoading || mutation.isLoading ? (
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
        <Satuan MBS={mbs} setMBS={setMbs} />
      </div>
    </>
  );
};

export default Tambah;
