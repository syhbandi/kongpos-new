import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { SortingState } from "@tanstack/react-table";
import { useMutation, useQueries } from "@tanstack/react-query";
import { exportPendapatan, getPendapatan } from "../../../../api/laporan";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import Info from "../../../../components/Table/Info";
import Pagination from "../../../../components/Table/Pagination";
import pendapatanColumns from "../../../../constants/ColumnsHelper/pendapatan";
import {
  pendapatanCount,
  pendapatanParams,
} from "../../../../constants/Types/pendapatanTypes";
import fileDownload from "js-file-download";
import { MdDownload } from "react-icons/md";

type Props = {
  jenis: string;
  awal: string;
  akhir: string;
};

const Detail = ({ jenis, awal, akhir }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const user = useRecoilValue(userState);
  const column = pendapatanColumns.find((col) => col.jenis === jenis)?.column;
  const [data, setData] = useState([]);
  const [count, setCount] = useState<pendapatanCount>({
    "Grand Total": "",
    "Jumlah Record": "",
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [params, setParams] = useState<pendapatanParams>({
    company_id: companyId,
    jenis,
    awal,
    akhir,
    count_stats: 0,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
    export: 0,
  });

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      company_id: companyId,
      jenis,
      awal,
      akhir,
      limit: 0, //reset page pagination
    }));
  }, [awal, akhir, jenis, companyId]);

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
        queryKey: ["pendapatan", params],
        queryFn: () => getPendapatan(params, user.access_token),
      },
      {
        queryKey: ["pendapatan", { ...params, count_stats: 1 }],
        queryFn: () =>
          getPendapatan({ ...params, count_stats: 1 }, user.access_token),
      },
    ],
  });

  const exportMutation = useMutation({
    mutationFn: exportPendapatan,
    onSuccess: (data) =>
      fileDownload(data, `Pendapatan_${params.awal}_${params.akhir}.xlsx`),
  });

  const onExport = () =>
    exportMutation.mutate({
      data: { ...params, export: 1, limit: 0, length: 0 },
      access_token: user.access_token,
    });

  useEffect(() => {
    if (queries[0].data && queries[1].data) {
      setData(queries[0].data);
      setCount(queries[1].data);
    }

    return () => {
      setData([]);
      setCount({ "Grand Total": "", "Jumlah Record": "" });
    };
  }, [queries[0].data, queries[1].data]);

  return (
    <>
      <div className="flex items-center mb-2 justify-between mt-5">
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
          <button
            className="px-3 py-2 rounded bg-green-600 text-white font-medium flex items-center gap-1 hover:bg-green-700 disabled:bg-opacity-50"
            disabled={!data.length || exportMutation.isLoading}
            onClick={onExport}
          >
            <MdDownload />
            <span>Expor</span>
          </button>

          <Search
            onChange={(cari: string) =>
              setParams((prev) => ({ ...prev, search: cari, limit: 0 }))
            }
          />
        </div>
      </div>
      <Table
        data={data}
        columns={column}
        isLoading={queries[0].isLoading || queries[1].isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div className="flex items-center mt-2">
        <Info
          data={data}
          dataCount={count}
          sumColumn={
            pendapatanColumns.find((col) => col.jenis === jenis)?.sumColumn
          }
        />
        <div className="ml-auto">
          <Pagination
            dataCount={count["Jumlah Record"]}
            dataPerPage={params.length}
            offset={params.limit}
            setOffset={(offset) =>
              setParams((prev) => ({ ...prev, limit: offset }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default Detail;
