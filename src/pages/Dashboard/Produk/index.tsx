import { useState } from "react";
import { ProdukType } from "../../../constants/Types/produkTypes";
import Table from "../../../components/Table";
import produkColumns from "../../../constants/ColumnsHelper/produk";
import { SortingState } from "@tanstack/react-table";

const index = () => {
  const [data, setData] = useState<ProdukType[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  return (
    <>
      <h1 className="text-2xl font-poppins font-semibold mb-5">Produk</h1>
      <div className="bg-white p-5 shadow rounded">
        <div className="flex items-center justify-between"></div>
        <Table
          columns={produkColumns}
          data={data}
          sorting={sorting}
          setSorting={setSorting}
          isLoading={false}
        />
      </div>
    </>
  );
};

export default index;
