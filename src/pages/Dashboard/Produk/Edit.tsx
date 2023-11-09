import { useNavigate, useParams } from "react-router-dom";
import { SingleProdukType } from "../../../constants/Types/produkTypes";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduk, updateProduk, uploadGambar } from "../../../api/produk";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { object, string } from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { MdArrowBack } from "react-icons/md";
import Input from "../../../components/Form/Input";
import Merk from "../../../components/Produk/Merk";
import Kategori from "../../../components/Produk/Kategori";
import Model from "../../../components/Produk/Model";
import JenisBahan from "../../../components/Produk/JenisBahan";
import Warna from "../../../components/Produk/Warna";
import InputTag from "../../../components/Form/InputTag";
import InputGambar from "../../../components/Form/InputGambar";
import Select from "../../../components/Form/Select";
import Spinner from "../../../components/Dashboard/Spinner";
import Satuan from "../../../components/Produk/Satuan";

const schema = object().shape({
  kd_barang: string().required("harus diisi"),
  nama: string().required("harus diisi"),
  keterangan: string().required("harus diisi"),
  ukuran: string().required("harus diisi"),
  status_pinjam: string().required("harus diisi"),
  pabrik: string().required("harus diisi"),
  kd_kategori: string().notRequired(),
  kd_merk: string().notRequired(),
  kd_jenis_bahan: string().notRequired(),
  kd_warna: string().notRequired(),
  status: string().notRequired(),
});

type MBSType = {
  kd_satuan: string;
  jumlah: string;
  harga: string;
  status: string;
  margin: string;
};

const Edit = () => {
  const params = useParams();
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [produk, setProduk] = useState<SingleProdukType>();
  const methods = useForm({ resolver: yupResolver(schema) });
  const [gambar, setGambar] = useState<File>();
  const [tags, setTags] = useState<string[]>([]);
  const [mbs, setMbs] = useState<MBSType[]>([]);
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["produk", params.kd_barang],
    queryFn: () =>
      getProduk(
        { company_id: companyId, kd_barang: params?.kd_barang || "" },
        access_token
      ),
  });

  const queryClient = useQueryClient();
  const uploadGambarMutation = useMutation({
    mutationFn: uploadGambar,
  });

  const mutation = useMutation({
    mutationFn: updateProduk,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produk"] });
      toast.success("Berhasil menambah produk baru!");
      navigate("/dashboard/produk", { replace: true });
    },
  });

  const onSubmit = async (form: any) => {
    if (gambar) {
      try {
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
      } catch {
        toast.error("Gagal Menambah produk!");
        uploadGambarMutation.reset();
        mutation.reset();
      }
      return;
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
  };

  useEffect(() => {
    if (query.data) setProduk(query.data.data);
  }, [query.data]);

  useEffect(() => {
    if (produk) {
      methods.reset({
        ...produk.m_barang,
      });
      setTags(produk.m_barang.tag ? produk.m_barang.tag.split(",") : []);
      setMbs(
        produk.m_barang_satuan.map((mbs) => ({ ...mbs, harga: mbs.harga_jual }))
      );
    }
  }, [produk]);

  if (query.isLoading) return <Spinner />;
  if (query.isError)
    return (
      <div className="font-medium text-xl text-red-600">
        Terjadi galat sistem, silakan coba lagi
      </div>
    );

  return (
    <>
      <div className="flex items-center mb-5">
        <MdArrowBack
          onClick={() => history.back()}
          className="text-2xl mr-3 cursor-pointer"
        />
        <h1 className="text-2xl font-semibold font-poppins">Edit Produk</h1>
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
                  className="bg-black text-white rounded font-medium py-2 px-3 ml-auto disabled:bg-opacity-70"
                  disabled={
                    uploadGambarMutation.isLoading || mutation.isLoading
                  }
                >
                  {uploadGambarMutation.isLoading || mutation.isLoading ? (
                    <Spinner color="text-white" />
                  ) : (
                    "Simpan"
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

export default Edit;
