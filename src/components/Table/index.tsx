import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

type Props = {
  data: any;
  columns: any;
  isLoading: boolean;
};

const Table = ({ data, columns, isLoading }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
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
  );
};

export default Table;
