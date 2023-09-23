import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useEffect, useState } from "react";
import {
  SupplierKontrakCountType,
  SupplierKontrakParams,
  SupplierKontrakType,
} from "../../../../constants/Types/kontrakTypes";
import { SortingState } from "@tanstack/react-table";
import { useQueries } from "@tanstack/react-query";
import { getSupplierKontrak } from "../../../../api/kontrak";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import supplierKontrakColumns from "../../../../constants/ColumnsHelper/kontrak/supplierKontrak";
import { useFormatNumber } from "../../../../hooks/userFormat";
import Pagination from "../../../../components/Table/Pagination";

const index = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<SupplierKontrakParams>({
    comp_id: companyId,
    count_stats: 0,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
  });
  const [data, setData] = useState<SupplierKontrakType[]>([]);
  const [count, setCount] = useState<SupplierKontrakCountType>({
    "Jumlah Record": "0",
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, comp_id: companyId }));
  }, [companyId]);

  useEffect(() => {
    if (sorting.length) {
      setParams((prev) => ({
        ...prev,
        order_col: sorting[0].id,
        order_type: sorting[0].desc ? "DESC" : "ASC",
      }));
    }

    return () =>
      setParams((prev) => ({ ...prev, order_col: "", order_type: "" }));
  }, [sorting]);

  const queries = useQueries({
    queries: [
      {
        queryKey: ["supplierKontrak", params],
        queryFn: () => getSupplierKontrak(params, access_token),
      },
      {
        queryKey: ["supplierKontrak", { ...params, count_stats: 1 }],
        queryFn: () =>
          getSupplierKontrak({ ...params, count_stats: 1 }, access_token),
      },
    ],
  });

  useEffect(() => {
    if (queries[0].data) setData(queries[0].data);
    if (queries[1].data) setCount(queries[1].data);
  }, [queries[0].data, queries[1].data]);

  return (
    <div className="bg-white rounded p-5 shadow">
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
        columns={supplierKontrakColumns}
        data={data}
        isLoading={queries[0].isLoading || queries[1].isLoading}
        setSorting={setSorting}
        sorting={sorting}
      />
      <div className="flex items-center mt-2">
        <div>
          {Object.keys(count).map((el) => (
            <div key={el} className="flex items-center gap-2">
              {el} :{" "}
              <strong>
                {useFormatNumber(parseFloat(count[el as keyof typeof count]))}
              </strong>
            </div>
          ))}
        </div>
        <div className="ml-auto">
          <Pagination
            dataCount={count?.["Jumlah Record"]}
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
