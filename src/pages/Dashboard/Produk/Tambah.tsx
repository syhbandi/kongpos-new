import { FormProvider, useForm } from "react-hook-form";
import { MdArrowBack } from "react-icons/md";
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

const schema = yup.object().shape({
  kd_barang: yup.string().required("harus diisi"),
  nama: yup.string().required("harus diisi"),
  keterangan: yup.string().required("harus diisi"),
  kd_merk: yup.string().required("harus diisi"),
  kd_kategori: yup.string().required("harus diisi"),
  kd_model: yup.string().required("harus diisi"),
  kd_jenis_bahan: yup.string().required("harus diisi"),
  kd_warna: yup.string().required("harus diisi"),
  ukuran: yup.string().required("harus diisi"),
  status_pinjam: yup.string().required("harus diisi"),
  pabrik: yup.string().required("harus diisi"),
});

const Tambah = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState<File>();
  const [tags, setTags] = useState<string[]>([]);
  return (
    <>
      <div className="flex items-center mb-5">
        <MdArrowBack
          onClick={() => history.back()}
          className="text-2xl mr-3 cursor-pointer"
        />
        <h1 className="text-2xl font-semibold font-poppins">Tambah Produk</h1>
      </div>

      <div className="bg-white p-5 rounded shadow w-full md:w-[75%]">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => console.log(data))}
            noValidate
          >
            <Input name="kd_barang" label="kode" autoFocus={true} />
            <Input name="nama" label="Nama" />
            <Input name="keterangan" label="Keterangan" multiline={true} />
            <Merk />
            <Kategori />
            <Model />
            <JenisBahan />
            <Warna />
            <Input name="ukuran" label="Ukuran" />
            <Input name="status_pinjam" label="Status Pinjam" />
            <Input name="pabrik" label="Pabrik" />
            <InputTag id="tag" label="Tag" tags={tags} setTags={setTags} />
            <InputGambar
              label="Gambar"
              name="gambar"
              state={gambar}
              setState={setGambar}
            />
            <Select
              name="status"
              label="Status"
              options={[
                { value: 0, label: "Nonaktif" },
                { value: 1, label: "Aktif" },
                { value: 2, label: "Aktif Non Display" },
              ]}
            />
            <button
              type="submit"
              className="bg-black text-white rounded font-medium py-2 px-3"
            >
              Simpan
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Tambah;
