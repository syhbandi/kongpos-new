import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useState, useEffect } from "react";
import { GetPersediaanType } from "../../../../constants/Types/persediaanTypes";
import { useQueries } from "@tanstack/react-query";
import { getPersediaan } from "../../../../api/laporan";
import Table from "../../../../components/Table";
import PersediaanColumn from "../../../../constants/ColumnsHelper/persediaan";
import { SortingState } from "@tanstack/react-table";
import DateRange from "../../../../components/Dashboard/DateRange";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";

const index = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetPersediaanType>({
    company_id: companyId,
    awal: new Date().toISOString().split("T")[0],
    akhir: new Date().toISOString().split("T")[0],
    count_stats: 0,
    jenis: 1,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
  });

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

  const queries = useQueries({
    queries: [
      {
        queryKey: ["persediaan", params],
        queryFn: () => getPersediaan(params, access_token),
      },
      {
        queryKey: ["persediaan", { ...params, count_stats: 1 }],
        queryFn: () =>
          getPersediaan({ ...params, count_stats: 1 }, access_token),
      },
    ],
  });

  return (
    <div className="bg-white p-5 rounded shadow">
      <div className="flex items-center gap-3 mb-5">
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
        <div className="flex items-center gap-3">
          <label htmlFor="jenis">Grup</label>
          <select
            id="jenis"
            name="jenis"
            value={params.jenis}
            onChange={(e) =>
              setParams((prev) => ({ ...prev, jenis: e.target.value }))
            }
            className="rounded border border-gray-400 outline-none p-2"
          >
            {PersediaanColumn.map((col) => (
              <option value={col.jenis} key={col.jenis}>
                {col.nama}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center mb-2 justify-between">
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

        <div className="flex items-center gap-2">
          {/* <button
            className="px-3 py-2 rounded bg-green-600 text-white font-medium flex items-center gap-1 hover:bg-green-700 disabled:bg-opacity-50"
            disabled={!data.length || exportMutation.isLoading}
            onClick={onExport}
          >
            <MdDownload />
            <span>Ekspor</span>
          </button> */}
          <Search
            onChange={(cari: string) =>
              setParams((prev) => ({ ...prev, search: cari, limit: 0 }))
            }
          />
        </div>
      </div>
      <Table
        data={queries[0].data || []}
        columns={
          PersediaanColumn.find(
            (persediaan) => persediaan.jenis == params.jenis
          )?.columns
        }
        isLoading={queries[0].isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
    </div>
  );
};

export default index;
