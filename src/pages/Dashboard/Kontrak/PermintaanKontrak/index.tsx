import { useEffect, useState } from "react";
import {
  PermintaanKontrakCount,
  PermintaanKontrakParams,
  PermintaanKontrakTypes,
} from "../../../../constants/Types/kontrakTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useQueries } from "@tanstack/react-query";
import { getPermintaanKontrak } from "../../../../api/kontrak";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import permintaanKontrakColumns from "../../../../constants/ColumnsHelper/kontrak/permintaanKontrak";
import { SortingState } from "@tanstack/react-table";
import { useFormatNumber } from "../../../../hooks/userFormat";
import Pagination from "../../../../components/Table/Pagination";

const index = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<PermintaanKontrakParams>({
    comp_id: companyId,
    count_stats: 0,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
  });
  const [data, setData] = useState<PermintaanKontrakTypes[]>([]);
  const [count, setCount] = useState<PermintaanKontrakCount>({
    "jumlah record": "0",
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, comp_id: companyId, limit: 0 }));
  }, [companyId]);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["permintaanKontrak", params],
        queryFn: () => getPermintaanKontrak(params, access_token),
      },
      {
        queryKey: ["permintaanKontrakCount", params],
        queryFn: () =>
          getPermintaanKontrak({ ...params, count_stats: 1 }, access_token),
      },
    ],
  });

  useEffect(() => {
    setData(queries[0].data);
    setCount(queries[1].data);

    return () => {
      setData([]);
      setCount({ "jumlah record": "0" });
    };
  }, [queries[0].data, queries[1].data]);

  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex items-center justify-between mb-2">
        <PageSelect
          id="length"
          name="length"
          value={params.length}
          onChange={(e) =>
            setParams((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
              limit: 0, //reset page pagination
            }))
          }
        />

        <Search
          onChange={(cari: string) =>
            setParams((prev) => ({ ...prev, search: cari, limit: 0 }))
          }
        />
      </div>
      <Table
        data={data}
        columns={permintaanKontrakColumns}
        isLoading={queries[0].isLoading || queries[1].isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div className="flex items-center mt-2">
        {count?.["jumlah record"] !== "0" && (
          <div className="inline-flex items-center gap-3">
            <span>
              Menampilkan {params.limit + 1} ke {params.limit + data?.length}{" "}
              dari{" "}
            </span>
            <strong>
              {useFormatNumber(parseFloat(count?.["jumlah record"]))}
            </strong>
          </div>
        )}
        <div className="ml-auto">
          <Pagination
            dataCount={count?.["jumlah record"]}
            dataPerPage={params.length}
            offset={params.limit}
            setOffset={(offset) =>
              setParams((prev) => ({ ...prev, limit: offset }))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default index;
