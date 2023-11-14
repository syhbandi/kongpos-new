import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useEffect, useState } from "react";
import { FmiType, GetFmisType } from "../../../../constants/Types/fmiTypes";
import { SortingState } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { getFmi } from "../../../../api/laporan";
import DateRange from "../../../../components/Dashboard/DateRange";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import fmiColumns from "../../../../constants/ColumnsHelper/fmi";
import Pagination from "../../../../components/Table/Pagination";

const index = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetFmisType>({
    company_id: companyId,
    akhir: new Date().toISOString().split("T")[0],
    awal: new Date().toISOString().split("T")[0],
    count_stats: 0,
    jenis: "1",
    kd_customer: "",
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    periode: "",
  });
  const [data, setData] = useState<FmiType[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

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

  const query = useQuery({
    queryKey: ["fmi", params],
    queryFn: () => getFmi(params, access_token),
  });

  useEffect(() => {
    if (query.data) {
      setData(query.data?.data);
    }
  }, [query.data]);

  return (
    <div className="bg-white rounded shadow p-5">
      <div className="flex items-center mb-2 gap-5">
        <div className="flex items-center gap-3">
          <label htmlFor="awal">Awal</label>
          <DateRange
            id="awal"
            name="awal"
            value={params.awal}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, awal: e.target.value }))
            }
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="akhir">Akhir</label>
          <DateRange
            id="akhir"
            name="akhir"
            value={params.akhir}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, akhir: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="flex items-center mb-2 justify-between mt-5">
        <PageSelect
          id="length"
          name="length"
          value={params.length}
          onChange={(e) =>
            setParams((prev) => ({
              ...prev,
              length: parseFloat(e.target.value),
              limit: 0, //reset page pagination
            }))
          }
        />
        <div className="flex items-center gap-2">
          {/* <button
        className="px-3 py-2 rounded bg-green-600 text-white font-medium flex items-center gap-1 hover:bg-green-700 disabled:bg-opacity-50"
        disabled={!data.length || exportMutation.isLoading}
        onClick={onExport}
      >
        <MdDownload />
        <span>Expor</span>
      </button> */}
          <Search
            onChange={(cari: string) =>
              setParams((prev) => ({ ...prev, search: cari, limit: 0 }))
            }
          />
        </div>
      </div>
      <Table
        data={data}
        columns={fmiColumns}
        isLoading={query.isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
      {query.isSuccess && (
        <div className="flex items-center gap-2 my-2">
          <div>
            Menampilkan {params.limit + 1} ke {params.limit + data.length} dari{" "}
            {query.data?.jumlah_record}
          </div>
          <div className="ml-auto">
            <Pagination
              dataCount={query.data?.jumlah_record || 0}
              dataPerPage={params.length}
              offset={params.limit}
              setOffset={(offset) =>
                setParams((prev) => ({ ...prev, limit: offset }))
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default index;
