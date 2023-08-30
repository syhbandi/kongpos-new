import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ReactElement, useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import Pagination from "./Pagination";

type Props = {
  data: any;
  columns: any;
  setSearch: (cari: string) => void;
  length: number;
  setParams: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  isLoading: boolean;
  additional?: ReactElement;
  additionalFooter?: ReactElement;
  totalData?: any;
  setOffset: (e: number) => void;
};

const Table = ({
  data,
  columns,
  setSearch,
  length,
  setParams,
  isLoading,
  additional,
  totalData,
  additionalFooter,
  setOffset,
}: Props) => {
  const [cari, setCari] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(cari);
    }, 500);

    return () => clearTimeout(timer);
  }, [cari]);

  return (
    <>
      {/* komponen kontrol */}
      <div className="flex items-center mb-5">
        <select
          name="length"
          className="p-2 rounded border border-gray-400"
          value={length}
          onChange={setParams}
        >
          {[10, 25, 50, 100].map((offset) => (
            <option key={offset} value={offset}>
              {offset}
            </option>
          ))}
        </select>
        <div className="flex items-center ml-auto gap-3">
          {additional}
          <div className="flex items-center gap-2 ml-auto rounded border border-gray-400 overflow-clip p-2 focus-within:border-black">
            <MdSearch className="text-2xl text-gray-400" />
            <input
              type="search"
              className="outline-none"
              placeholder="Cari"
              value={cari}
              onChange={({ target }) => setCari(target.value)}
            />
          </div>
        </div>
      </div>
      <table className="w-full overflow-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border border-gray-400 p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td
                className="border border-gray-400 p-2 text-center"
                colSpan={table.getHeaderGroups()[0].headers.length}
              >
                Memuat...
              </td>
            </tr>
          ) : table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-100">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-400 p-2 text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="border border-gray-400 p-2 text-center"
                colSpan={table.getHeaderGroups()[0].headers.length}
              >
                Tidak menemukan data
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-between mt-5">
        {additionalFooter}
        <Pagination
          pageCount={
            totalData?.["Jumlah Record"]
              ? Math.ceil(totalData?.["Jumlah Record"] / length)
              : 0
          }
          setOffset={setOffset}
          length={length}
        />
      </div>
    </>
  );
};

export default Table;
