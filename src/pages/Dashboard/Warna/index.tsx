import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { GetWarnasType } from "../../../constants/Types/warnaTypes";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { getWarnas } from "../../../api/warna";
import Table from "../../../components/Table";
import warnaColumns from "../../../constants/ColumnsHelper/warna";
import { SortingState } from "@tanstack/react-table";
import PageSelect from "../../../components/Table/PageSelect";
import { Link } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import Search from "../../../components/Table/Search";
import Pagination from "../../../components/Table/Pagination";

const index = () => {
  const company_id = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [params, setParams] = useState<GetWarnasType>({
    company_id,
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

  const { data, isLoading } = useQuery({
    queryKey: ["warna", params],
    queryFn: () => getWarnas(params, access_token),
  });
  return (
    <>
      <h1 className="text-2xl font-poppins font-semibold mb-5">Warna</h1>
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

          <div className="flex items-center gap-3">
            <Link to={"tambah"}>
              <button className="rounded bg-blue-600 border border-blue-600 py-2 px-3 flex items-center gap-1 justify-center text-white font-medium hover:bg-blue-700">
                <MdAddCircle />
                <span>Tambah</span>
              </button>
            </Link>
            <Search
              onChange={(cari: string) =>
                setParams((prev) => ({ ...prev, search: cari, limit: 0 }))
              }
            />
          </div>
        </div>
        <Table
          data={data?.data || []}
          columns={warnaColumns}
          isLoading={isLoading}
          sorting={sorting}
          setSorting={setSorting}
        />
        <div className="flex items-center justify-between mt-2">
          <div>
            {data?.data ? (
              <>
                Menampilkan {params.limit + 1} ke{" "}
                {params.limit + data?.data.length} dari {data?.jumlah_record}
              </>
            ) : null}
          </div>
          <Pagination
            dataCount={data?.jumlah_record}
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

export default index;
