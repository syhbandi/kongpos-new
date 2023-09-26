import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  BarangTypes,
  GetBarangParams,
  SupplierItemType,
} from "../../constants/Types/kontrakTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../atom/User";
import { getBarang } from "../../api/kontrak";
import Spinner from "../Dashboard/Spinner";
import Search from "../Table/Search";

type Props = {
  barang: SupplierItemType;
};
const CariBarang = ({ barang }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetBarangParams>({
    company_id: companyId,
    length: 10,
    limit: 0,
    nama: barang.nama,
  });
  const [dataBarang, setDataBarang] = useState<BarangTypes[] | undefined>([]);

  const { data, isLoading, isError } = useQuery<BarangTypes[]>({
    queryKey: ["barang", params],
    queryFn: () => getBarang(params, access_token),
  });

  useEffect(() => {
    if (data) {
      setDataBarang((prev) => {
        if (params.limit) return prev?.concat(data);
        return data;
      });
    }
  }, [data]);

  const showMore = () => {
    setParams((prev) => ({ ...prev, limit: prev.limit + 10 }));
  };

  return (
    <>
      <Search
        onChange={(cari) =>
          setParams((prev) => ({ ...prev, nama: cari, limit: 0 }))
        }
        value={params.nama}
        autoFocus={true}
      />

      <div className="max-h-80 flex flex-col overflow-auto mt-2">
        {dataBarang?.length ? (
          <>
            {dataBarang?.map((item, index) => (
              <div className="py-2" key={item.kd_barang}>
                {index}
                {item.nama}
              </div>
            ))}
            <div className={`${isLoading ? "hidden" : "flex"} justify-center`}>
              <button
                className="bg-white border-2 border-black font-semibold py-2 px-3 font-roboto rounded hover:text-white hover:bg-black"
                onClick={showMore}
              >
                Lebih banyak
              </button>
            </div>
          </>
        ) : null}
      </div>
      {isLoading && (
        <div className="py-3 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      {isError && (
        <div className="text-2xl font-semibold text-red-600">Ada error</div>
      )}
    </>
  );
};

export default CariBarang;
