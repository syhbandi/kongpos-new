import { useEffect, useState } from "react";
import {
  GetProduksType,
  ProdukType,
} from "../../../constants/Types/produkTypes";
import Table from "../../../components/Table";
import produkColumns from "../../../constants/ColumnsHelper/produk";
import { SortingState } from "@tanstack/react-table";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../atom/User";
import { useQuery } from "@tanstack/react-query";
import { getProduks } from "../../../api/produk";
import PageSelect from "../../../components/Table/PageSelect";
import Search from "../../../components/Table/Search";
import Pagination from "../../../components/Table/Pagination";
import { Link } from "react-router-dom";
import { MdAddCircle, MdDownload, MdUpload } from "react-icons/md";

const index = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const [data, setData] = useState<ProdukType[]>([]);
  const [params, setParams] = useState<GetProduksType>({
    company_id: companyId,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, company_id: companyId, limit: 0 }));
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

  const query = useQuery({
    queryKey: ["produk", params],
    queryFn: () => getProduks(params, access_token),
  });

  useEffect(() => {
    if (query.data) setData(query.data.data);
  }, [query.data]);

  return (
    <>
      <h1 className="text-2xl font-poppins font-semibold mb-5">Produk</h1>
      <div className="bg-white p-5 shadow rounded">
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
            <button className="rounded bg-teal-600 border border-teal-600 py-2 px-3 flex items-center gap-1 justify-center text-white font-medium hover:bg-teal-700">
              <MdUpload />
              <span>Ekspor</span>
            </button>
            <button className="rounded bg-green-600 border border-green-600 py-2 px-3 flex items-center gap-1 justify-center text-white font-medium hover:bg-green-700">
              <MdDownload />
              <span>Impor Google Sheet</span>
            </button>
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
          columns={produkColumns}
          data={data}
          sorting={sorting}
          setSorting={setSorting}
          isLoading={query.isLoading}
        />
        <div className="flex items-center justify-between mt-2">
          <div>
            Menampilkan {params.limit + 1} ke {params.limit + data.length} dari{" "}
            {query.data?.jumlah_record}
          </div>
          <Pagination
            dataCount={query.data?.jumlah_record}
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
