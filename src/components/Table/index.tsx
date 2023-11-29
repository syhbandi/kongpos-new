import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  SortingState,
  OnChangeFn,
} from "@tanstack/react-table";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
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
    <table className="w-full overflow-auto border border-gray-400">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="border-y border-gray-400 p-3 uppercase text-left"
              >
                <span
                  {...{
                    className: header.column.getCanSort()
                      ? "cursor-pointer select-none relative flex items-center gap-1"
                      : "",
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: <MdOutlineKeyboardArrowUp className="text-xl" />,
                    desc: <MdOutlineKeyboardArrowDown className="text-xl" />,
                  }[header.column.getIsSorted() as string] ?? null}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td
              className=" p-3 text-center"
              colSpan={table.getHeaderGroups()[0].headers.length}
            >
              <Spinner />
            </td>
          </tr>
        ) : table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-200 even:bg-gray-100 odd:bg-white"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              className="p-3 text-center"
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
