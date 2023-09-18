import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { MdArrowBack, MdSend } from "react-icons/md";
import { Link, Navigate, redirect, useLocation } from "react-router-dom";
import { ajukanKontrak } from "../../../../api/kontrak";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../atom/User";
import Spinner from "../../../../components/Dashboard/Spinner";
import { toast } from "react-toastify";

const PengajuanKontrak = () => {
  const { state } = useLocation();
  const user = useRecoilValue(userState);
  const [durasi, setDurasi] = useState("1");

  const mutation = useMutation({
    mutationFn: ajukanKontrak,
    onSuccess: (data) => {
      toast.success(data?.Pesan);
      return redirect("/dashboard/kontrak");
    },
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      params: { ...state, periode_bulan: durasi },
      access_token: user.access_token,
    });
  };

  if (!state || state.kontrak_id) return <Navigate to={"/dashboard/kontrak"} />;
  return (
    <>
      <div className="flex items-center gap-3 mb-5">
        <Link to={""} className="text-2xl">
          <MdArrowBack />
        </Link>
        <h1 className="text-xl font-medium">Ajukan Kontrak ({state.nama})</h1>
      </div>
      <div className="md:w-[500px] w-full bg-white rounded shadow p-5">
        <div className="bg-green-100 text-green-600 rounded p-3 mb-3">
          Silahkan pilih lama kontrak(bulan) yang ingin anda ajukan kepada
          customer agar bisa dilanjutkan ke tahap berikutnya. Kontrak dibayarkan
          perbulan dengan biaya yang telah ditentukan oleh admin.
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="durasi">Lama kontrak</label>
            <select
              name="durasi"
              id="durasi"
              value={durasi}
              onChange={(e) => setDurasi(e.target.value)}
              className="outline-none p-2 border border-gray-400 focus:border-black rounded"
            >
              {[1, 3, 6, 12].map((dur) => (
                <option value={dur} key={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-3">
            <button
              className="flex items-center py-2 px-5 gap-2 justify-center bg-black rounded text-white border border-black hover:bg-gray-800 hover:border-gray-800 disabled:opacity-70"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? (
                <Spinner />
              ) : (
                <>
                  <MdSend />
                  Kirim
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PengajuanKontrak;
