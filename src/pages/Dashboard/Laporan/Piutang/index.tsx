import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { SortingState } from "@tanstack/react-table";
import { useMutation, useQueries } from "@tanstack/react-query";
import { exportPiutang, getPiutang } from "../../../../api/laporan";
import DateRange from "../../../../components/Dashboard/DateRange";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import Pagination from "../../../../components/Table/Pagination";
import {
  useFormatNumber,
  userFormatRupiah,
} from "../../../../hooks/userFormat";
import {
  piutangCountType,
  piutangParams,
  piutangType,
} from "../../../../constants/Types/piutangTypes";
import piutangColumns from "../../../../constants/ColumnsHelper/piutang";
import fileDownload from "js-file-download";
import { MdDownload } from "react-icons/md";
const index = () => {
  const company_id = useRecoilValue(companyIdState);
  const user = useRecoilValue(userState);
  const [data, setData] = useState<piutangType[]>([]);
  const [count, setCount] = useState<piutangCountType>({
    "Jumlah Record": "",
    "Sisa Hutang": "",
    "Total Cicilan": "",
    "Total Penjualan": "",
  });
  const [params, setParams] = useState<piutangParams>({
    company_id,
    kd_customer: "",
    count_stats: 0,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    periode: new Date().toISOString().split("T")[0],
    export: 0,
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, company_id, limit: 0 }));
  }, [company_id]);

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
        queryKey: ["piutang", params],
        queryFn: () => getPiutang(params, user.access_token),
      },
      {
        queryKey: ["piutang", { ...params, count_stats: 1 }],
        queryFn: () =>
          getPiutang({ ...params, count_stats: 1 }, user.access_token),
      },
    ],
  });

  const exportMutation = useMutation({
    mutationFn: exportPiutang,
    onSuccess: (data) => fileDownload(data, `Piutang_${params.periode}.xlsx`),
  });

  const onExport = () =>
    exportMutation.mutate({
      data: {
        ...params,
        export: 1,
        limit: 0,
        length: 0,
      },
      access_token: user.access_token,
    });
  useEffect(() => {
    if (queries[0].data && queries[1].data) {
      setData(queries[0].data);
      setCount(queries[1].data);
    }

    return () => {
      setData([]);
      setCount({
        "Jumlah Record": "",
        "Sisa Hutang": "",
        "Total Cicilan": "",
        "Total Penjualan": "",
      });
    };
  }, [queries[0].data, queries[1].data]);

  return (
    <div className="bg-white rounded shadow p-5">
      <div className="flex items-center gap-3 mb-5">
        <label htmlFor="periode">Periode: </label>
        <DateRange
          id="periode"
          name="periode"
          onChange={(e) =>
            setParams((prev) => ({
              ...prev,
              periode: e.target.value,
              limit: 0,
            }))
          }
          value={params.periode}
        />
      </div>
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
        columns={piutangColumns}
        isLoading={queries[0].isLoading || queries[1].isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div className="flex gap-2 my-2">
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
      <Info data={data} count={count} />
    </div>
  );
};

type InfoTypes = {
  data: piutangType[];
  count: piutangCountType;
};

const Info = ({ data, count }: InfoTypes) => {
  const all = {
    "Subtotal Penjualan": userFormatRupiah(
      data.reduce((total, cur) => total + parseFloat(cur["Total Penjualan"]), 0)
    ),
    "Subtotal Cicilan": userFormatRupiah(
      data.reduce((total, cur) => total + parseFloat(cur["Total Cicilan"]), 0)
    ),
    "Subtotal Sisa piutang": userFormatRupiah(
      data.reduce((total, cur) => total + parseFloat(cur["Sisa Piutang"]), 0)
    ),
    "Jumlah Record": useFormatNumber(parseFloat(count["Jumlah Record"])),
    "Total Penjualan": userFormatRupiah(parseFloat(count["Total Penjualan"])),
    "Total Cicilan": userFormatRupiah(parseFloat(count["Total Cicilan"])),
    "Sisa piutang": userFormatRupiah(parseFloat(count["Sisa Hutang"])),
  };

  return (
    <table className="w-full">
      <thead>
        <tr>
          {Object.keys(all).map((a) => (
            <td className="p-2 border border-gray-400 text-center" key={a}>
              {a}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(all).map((v, index) => (
            <td
              key={index}
              className="p-2 border border-gray-400 font-bold text-right"
            >
              {v}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default index;
