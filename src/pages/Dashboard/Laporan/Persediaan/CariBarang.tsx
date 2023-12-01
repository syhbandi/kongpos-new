import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import {
  BarangTypes,
  GetBarangParams,
} from "../../../../constants/Types/kontrakTypes";
import { useQuery } from "@tanstack/react-query";
import { getBarang } from "../../../../api/kontrak";
import Search from "../../../../components/Table/Search";
import Spinner from "../../../../components/Dashboard/Spinner";

type Props = {
  setBarang: (barang: any) => void;
  setModal: (open: boolean) => void;
};

const CariBarang = ({ setBarang, setModal }: Props) => {
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetBarangParams>({
    company_id,
    nama: "",
    length: 10,
    limit: 0,
  });
  const [data, setData] = useState<BarangTypes[]>([]);

  const query = useQuery({
    queryKey: ["barang", params],
    queryFn: () => getBarang(params, access_token),
  });

  useEffect(() => {
    if (query.data)
      setData((prev) => {
        if (params.limit) return prev.concat(query.data);
        return query.data;
      });
  }, [query.data]);

  const onSearch = (data: string) => {
    setParams((prev) => ({ ...prev, nama: data, limit: 0 }));
  };

  const showMore = () => {
    setParams((prev) => ({ ...prev, limit: prev.limit + 10 }));
  };

  const onSelect = (barang: BarangTypes) => {
    setBarang({ kd_barang: barang.kd_barang, barang: barang.nama });
    setModal(false);
  };

  return (
    <div className="font-roboto">
      <Search onChange={onSearch} value={params.nama} />
      <ul className="mt-5 max-h-96 overflow-auto scrollbar-custom">
        {data.length ? (
          <>
            {data.map((barang) => (
              <li
                key={barang.no}
                className="cursor-pointer py-2 hover:rounded hover:font-medium"
                onClick={() => onSelect(barang)}
              >
                {barang.nama}
              </li>
            ))}
            {!query.isLoading && (
              <li className="flex items-center justify-center py-3">
                <button
                  className="rounded py-2 px-5 border-2 border-black font-medium hover:bg-black hover:text-white"
                  onClick={showMore}
                >
                  Lebih banyak
                </button>
              </li>
            )}
          </>
        ) : !query.isLoading ? (
          <div className="text-center py-3 font-medium text-red-600">
            Tidak menemukan barang yang dicari
          </div>
        ) : null}
      </ul>
      {query.isLoading && (
        <div className="flex justify-center py-3">
          <Spinner />
        </div>
      )}
      {query.isError && (
        <div className="flex justify-center py-3 text-red-600">
          Terjadi galat sistem, coba lagi
        </div>
      )}
    </div>
  );
};

export default CariBarang;
