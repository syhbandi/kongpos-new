import { useState, useEffect } from "react";
import { MdCheckCircle, MdSearch } from "react-icons/md";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../../../../api/kontrak";

type Props = {
  display: boolean;
  setDisplay: (display: boolean) => void;
  state: string;
  setState: (supplier: string) => void;
};

type supplierType = {
  kd_supplier: string;
  nama: string;
};

const PilihSupplier = ({ display, setDisplay, state, setState }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [data, setData] = useState<supplierType[]>([]);
  const [cari, setCari] = useState("");

  const query = useQuery({
    queryKey: ["supplier", companyId],
    queryFn: () => getSuppliers(companyId, access_token),
  });

  useEffect(() => {
    if (query.data) {
      setData(query.data);
    }
  }, [query.data]);

  const onBatal = () => {
    setDisplay(false);
    setState("");
  };

  if (!display) return null;
  return (
    <div className="bg-gray-100 rounded p-3 w-full md:w-96">
      <div className="flex items-stretch gap-2">
        <div className="rounded bg-inherit border border-gray-400 p-2 flex items-center gap-3 focus-within:border-black flex-grow">
          <MdSearch className="text-xl text-gray-500" />
          <input
            type="search"
            className="outline-none flex-grow bg-inherit"
            autoFocus={true}
            placeholder="Cari supplier"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
          />
        </div>
        <button
          className="px-3 py-2 bg-inherit border border-red-600 text-red-600 font-medium rounded hover:bg-red-600 hover:text-white text-sm"
          onClick={onBatal}
        >
          Batal
        </button>
      </div>
      <div className="h-[200px] overflow-auto mt-3">
        {data
          .filter((supplier) =>
            supplier.nama.toLowerCase().includes(cari.toLowerCase())
          )
          .map((supplier) => (
            <div key={supplier.kd_supplier} className="relative">
              <input
                type="radio"
                name={supplier.kd_supplier}
                id={supplier.kd_supplier}
                value={supplier.kd_supplier}
                checked={state === supplier.kd_supplier}
                onChange={(e) => setState(e.target.value)}
                hidden
                className="peer"
              />
              <label
                htmlFor={supplier.kd_supplier}
                className="peer-checked:bg-blue-500 peer-checked:text-white peer-checked:font-medium rounded p-2 flex cursor-pointer hover:font-medium items-center"
              >
                {supplier.nama}
              </label>
              <div className="hidden peer-checked:flex absolute right-2 top-0 h-full items-center justify-center text-white">
                <MdCheckCircle className="text-xl" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PilihSupplier;
