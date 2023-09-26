import { MdArrowBack } from "react-icons/md";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { companyIdState, userState } from "../../../../atom/User";
import { useEffect, useState } from "react";
import {
  SupplierItemCountType,
  SupplierItemParams,
  SupplierItemType,
} from "../../../../constants/Types/kontrakTypes";
import { SortingState } from "@tanstack/react-table";
import { useQueries } from "@tanstack/react-query";
import { getSupplierItems } from "../../../../api/kontrak";
import PageSelect from "../../../../components/Table/PageSelect";
import Search from "../../../../components/Table/Search";
import Table from "../../../../components/Table";
import { useFormatNumber } from "../../../../hooks/userFormat";
import Pagination from "../../../../components/Table/Pagination";
import supplierItemsColumns from "../../../../constants/ColumnsHelper/kontrak/supplierItems";

const Mapping = () => {
  const companyId = useRecoilValue(companyIdState);
  const { access_token } = useRecoilValue(userState);
  const { state } = useLocation();
  const [params, setParams] = useState<SupplierItemParams>({
    cid_customer: companyId,
    count_stats: 0,
    length: 10,
    limit: 0,
    order_col: "",
    order_type: "",
    search: "",
    id_cid_supplier: state.id_cid_supplier,
    sup_key: `${state.kd_supplier}_${state.id_cid_supplier}`,
  });
  const [data, setData] = useState<SupplierItemType[]>([]);
  const [count, setCount] = useState<SupplierItemCountType>({
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
        queryKey: ["supplierItem", params],
        queryFn: () => getSupplierItems(params, access_token),
      },
      {
        queryKey: ["supplierItem", { ...params, count_stats: 1 }],
        queryFn: () =>
          getSupplierItems({ ...params, count_stats: 1 }, access_token),
      },
    ],
  });

  useEffect(() => {
    if (queries[0].data) setData(queries[0].data);
    if (queries[1].data) setCount(queries[1].data);
  }, [queries[0].data, queries[1].data]);

  if (!state || state.company_id !== companyId)
    return <Navigate to={"/dashboard/kontrak/supplier"} />;

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Link to={"/dashboard/kontrak/supplier"}>
          <MdArrowBack className="text-xl" />
        </Link>
        <h1 className="text-xl font-medium">
          Mapping Produk ({state.supplier})
        </h1>
      </div>
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
          columns={supplierItemsColumns}
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
    </div>
  );
};

export default Mapping;
