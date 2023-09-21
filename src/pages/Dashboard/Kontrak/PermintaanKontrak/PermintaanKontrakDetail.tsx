import { MdArrowBack, MdCheckCircle, MdError } from "react-icons/md";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { companyIdState } from "../../../../atom/User";
import { useState } from "react";
import PilihSupplier from "./PilihSupplier";

const PermintaanKontrakDetail = () => {
  const { state } = useLocation();
  const companyId = useRecoilValue(companyIdState);
  const [supplier, setSupplier] = useState("");
  const [supplierPanel, setSupplierPanel] = useState(false);

  if (!state || companyId !== state.this_company_id) {
    return <Navigate to={"/dashboard/kontrak/permintaan"} />;
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2 mb-3">
        <Link to={"/dashboard/kontrak/permintaan"}>
          <MdArrowBack className="text-xl" />
        </Link>
        <h1 className="text-xl font-medium">
          Tinjau Permintaan ({state["Nama Usaha"]})
        </h1>
      </div>
      <div className="bg-white rounded p-5 shadow">
        <div className="bg-green-100 p-2 rounded text-green-700">
          <div className="flex items-center gap-2 mb-2">
            <MdError className="text-xl" />
            <h1 className="text-lg font-medium">Penting!</h1>
          </div>
          <p>
            Pastikan melakukan verifikasi supplier yang sebelum menyetujui
            permintaan kontrak. daftarkan supplier sebelum menyetujui permintaan
            dengan mencocokkan dengan data supplier yang sudah ada atau dengan
            memasukkan data supplier baru jika belum tersedia
          </p>
        </div>
        {Object.keys(state).map((key) => (
          <div className="grid grid-cols-1 md:grid-cols-4 py-2" key={key}>
            <div className="capitalize font-medium">{key}</div>
            <div className="col-span-3">{state[key]}</div>
          </div>
        ))}
        <div className="grid grid-cols-1 md:grid-cols-4 py-2">
          <div className="capitalize">daftarkan supplier</div>
          <div className="col-span-3">
            {!supplierPanel && (
              <div className="inline-flex items-center gap-2 mb-2">
                <button
                  className="font-medium text-blue-600  hover:text-blue-900 rounded  text-sm disabled:opacity-50"
                  disabled={true}
                >
                  Baru
                </button>{" "}
                atau
                <button
                  className="font-medium text-blue-600  hover:text-blue-900 rounded  text-sm"
                  onClick={() => setSupplierPanel(!supplierPanel)}
                >
                  {" "}
                  Sudah ada
                </button>
              </div>
            )}
            <PilihSupplier
              display={supplierPanel}
              setDisplay={setSupplierPanel}
              setState={setSupplier}
              state={supplier}
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end pt-5 border-t border-gray-400">
          <button
            className="py-2 px-5 bg-black hover:bg-gray-700 text-white flex items-center justify-center gap-2 rounded font-medium disabled:opacity-50 disabled:hover:bg-black"
            disabled={!supplier ? true : false}
          >
            <MdCheckCircle />
            Setujui Kontrak
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermintaanKontrakDetail;
