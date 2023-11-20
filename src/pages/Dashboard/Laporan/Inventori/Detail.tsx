import { useState, useEffect } from "react";
import {
  InventoriCount,
  InventoriParams,
} from "../../../../constants/Types/inventoriTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import inventoriColumns from "../../../../constants/ColumnsHelper/inventori";
import { SortingState } from "@tanstack/react-table";
import { useMutation, useQueries } from "@tanstack/react-query";
import { exportInventori, getInventori } from "../../../../api/laporan";
import Table from "../../../../components/Table";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Pagination from "../../../../components/Table/Pagination";
import { useFormatNumber } from "../../../../hooks/userFormat";
import { MdDownload } from "react-icons/md";
import fileDownload from "js-file-download";

type Props = {
  periode: string;
  jenis: string;
};

const Detail = ({ periode, jenis }: Props) => {
  const companyId = useRecoilValue(companyIdState);
  const user = useRecoilValue(userState);
  const column = inventoriColumns.find((col) => col.jenis === jenis)?.column;
  const [data, setData] = useState([]);
  const [count, setCount] = useState<InventoriCount>({
    jumlah_record: "0",
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [params, setParams] = useState<InventoriParams>({
    company_id: companyId,
    kd_barang: "",
    kd_divisi: "",
    periode,
    jenis,
    search: "",
    order_col: "",
    order_type: "",
    limit: 0,
    length: 10,
    count_stats: 0,
    export: 0,
  });

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      company_id: companyId,
      jenis,
      periode,
      limit: 0, //reset page pagination
    }));
  }, [periode, jenis, companyId]);

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
        queryKey: ["inventori", params],
        queryFn: () => getInventori(params, user.access_token),
      },
      {
        queryKey: ["inventori", { ...params, count_stats: 1 }],
        queryFn: () =>
          getInventori({ ...params, count_stats: 1 }, user.access_token),
      },
    ],
  });

  useEffect(() => {
    if (queries[0].data && queries[1].data) {
      setData(queries[0].data);
      setCount(queries[1].data);
    }

    return () => {
      setData([]);
      setCount({ jumlah_record: "" });
    };
  }, [queries[0].data, queries[1].data]);

  const exportMutation = useMutation({
    mutationFn: exportInventori,
    onSuccess: (data) => fileDownload(data, "Inventori.xlsx"),
  });

  const onExport = () => {
    exportMutation.mutate({
      data: { ...params, export: 1 },
      access_token: user.access_token,
    });
  };

  return (
    <>
      <div className="flex items-center mb-2 mt-5 justify-between">
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
            className="py-2 px-3 rounded bg-green-600 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
            onClick={onExport}
            disabled={exportMutation.isLoading || !data.length}
          >
            <MdDownload />
            Export
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
        <div className="inline-flex items-center gap-3">
          <span>Data:</span>
          <strong>{useFormatNumber(parseFloat(count.jumlah_record))}</strong>
        </div>
        <div className="ml-auto">
          <Pagination
            dataCount={count.jumlah_record}
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
