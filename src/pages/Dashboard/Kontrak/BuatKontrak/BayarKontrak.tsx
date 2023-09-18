import { Link, Navigate, useLocation } from "react-router-dom";
import { MdArrowBack, MdCancel, MdClose, MdCloudUpload } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../atom/User";
import { getKontrak } from "../../../../api/kontrak";
import Spinner from "../../../../components/Dashboard/Spinner";
import {
  useFormatTanggal,
  userFormatRupiah,
} from "../../../../hooks/userFormat";
import { useState } from "react";

const BayarKontrak = () => {
  const { state } = useLocation();
  const user = useRecoilValue(userState);
  const [gambar, setGambar] = useState<File>();

  console.log(gambar);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["kontrak", state.kontrak_id],
    queryFn: () => getKontrak(state, user.access_token),
  });

  if (!state) return <Navigate to={"/dashboard/kontrak"} />;
  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <h1 className="font-semibold text-red-600">
        Terjadi kesalahan saat mengambil data! silakan coba lagi
      </h1>
    );

  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <Link to={"/dashboard/kontrak"} className="text-2xl">
          <MdArrowBack />
        </Link>
        <h1 className="text-xl font-medium">Bayar Kontrak ({state.nama})</h1>
      </div>
      <div>{JSON.stringify(data)}</div>
      <div className="bg-white rounded p-5 shadow w-full md:max-w-[700px]">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
          <div>Periode Kontrak</div>
          <div className="col-span-3">
            {useFormatTanggal(data[0].tanggal_kontrak, true)} -{" "}
            {useFormatTanggal(data[0].tanggal_jatuh_tempo, true)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
          <div>Lama kontrak</div>
          <div className="col-span-3">{data[0].periode_bulan} bulan</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
          <div>Biaya</div>
          <div className="col-span-3 flex items-center gap-2">
            {userFormatRupiah(50000)} <MdClose /> {data[0].periode_bulan} bulan
            = <strong>{userFormatRupiah(50000 * data[0].periode_bulan)}</strong>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mb-5">
          <div>Bukti Bayar</div>
          <div className="col-span-3">
            <label
              htmlFor="gambar"
              className="border-2 border-dashed border-gray-400 focus-within:border-black p-5 flex flex-col items-center justify-center rounded cursor-pointer w-full bg-gray-100 text-gray-400"
            >
              <span className="text-5xl">
                <MdCloudUpload />
              </span>
              <span className="text-sm">Telusuri</span>
              <span className="text-xs font-light mt-2">
                Pastikan gambar berukuran tidak lebih dari 10kb
              </span>
              <input
                type="file"
                accept="image/*"
                name="gambar"
                id="gambar"
                onChange={(e) => setGambar(e.target.files?.[0])}
                hidden
              />
            </label>
            {gambar && (
              <div className="flex items-center p-2 border border-gray-300 rounded gap-3 mt-2">
                <img
                  src={URL.createObjectURL(gambar)}
                  className="max-w-10 max-h-10"
                />
                <div>
                  <h1 className="text-sm ">{gambar?.name}</h1>
                  <p className="text-xs font-light text-gray-400">
                    {Math.round(gambar?.size / 1024)}Kb
                  </p>
                </div>
                <span
                  className="ml-auto text-xl text-red-500 cursor-pointer"
                  onClick={() => setGambar(undefined)}
                >
                  <MdCancel />
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button className="rounded py-2 px-5 border border-black bg-black font-medium text-white hover:bg-gray-800">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default BayarKontrak;
