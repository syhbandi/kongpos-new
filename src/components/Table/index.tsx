import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  OnChangeFn,
} from "@tanstack/react-table";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Spinner from "../Dashboard/Spinner";

type Props<TData> = {
  data: TData[];
  columns: ColumnDef<TData, string>[];
  isLoading: boolean;
  sorting?: SortingState;
  setSorting?: OnChangeFn<SortingState>;
};

const Table = <TData extends Object>({
  data,
  columns,
  isLoading,
  sorting,
  setSorting,
}: Props<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
  });

  return (
    <table className="w-full overflow-auto">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border border-gray-400 p-2">
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer select-none relative"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: (
                      <div className="absolute right-0 top-0 h-full flex items-center justify-center">
                        <MdArrowDropUp />
                      </div>
                    ),
                    desc: (
                      <div className="absolute right-0 top-0 h-full flex items-center justify-center">
                        <MdArrowDropDown />
                      </div>
                    ),
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
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
              <Spinner />
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
  );
};

export default Table;
