import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useQuery } from "@tanstack/react-query";
import { GetMutasiStokType } from "../../../../constants/Types/persediaanTypes";
import { getMutasiStok } from "../../../../api/laporan";
import DateRange from "../../../../components/Dashboard/DateRange";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import mutasiStokColumns from "../../../../constants/ColumnsHelper/persediaan/mutasiStok";
import { SortingState } from "@tanstack/react-table";
import Pagination from "../../../../components/Table/Pagination";

const MutasiStok = () => {
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetMutasiStokType>({
    company_id,
    awal: new Date().toISOString().split("T")[0],
    akhir: new Date().toISOString().split("T")[0],
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

  const query = useQuery({
    queryKey: ["mutasiStok", params],
    queryFn: () => getMutasiStok(params, access_token),
  });

  return (
    <>
      {/* periode */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 mb-5">
          <label htmlFor="awal">Awal </label>
          <DateRange
            id="awal"
            name="awal"
            onChange={(e) =>
              setParams((prev) => ({
                ...prev,
                awal: e.target.value,
                limit: 0,
              }))
            }
            value={params.awal}
          />
        </div>
        <div className="flex items-center gap-3 mb-5">
          <label htmlFor="akhir">Akhir </label>
          <DateRange
            id="akhir"
            name="akhir"
            onChange={(e) =>
              setParams((prev) => ({
                ...prev,
                akhir: e.target.value,
                limit: 0,
              }))
            }
            value={params.akhir}
          />
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
        data={query?.data?.data}
        columns={mutasiStokColumns}
        isLoading={query.isLoading}
        sorting={sorting}
        setSorting={setSorting}
      />
      <div className="mt-2 flex items-center">
        <span>
          Menampilkan {params.limit + 1} ke {params.length + params.limit} dari{" "}
          {query?.data?.jumlah_record}
        </span>
        <div className="ml-auto">
          <Pagination
            dataCount={query?.data?.jumlah_record}
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

export default MutasiStok;
