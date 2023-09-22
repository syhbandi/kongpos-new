import { createColumnHelper } from "@tanstack/react-table";
import { ProdukKontrakType } from "../../Types/kontrakTypes";

const helper = createColumnHelper<ProdukKontrakType>();
const produkKontrakColumns = [
  helper.accessor("item", { cell: (data) => data.getValue() }),
  helper.accessor("merk", { cell: (data) => data.getValue() }),
  helper.accessor("kategori", { cell: (data) => data.getValue() }),
  helper.accessor("satuan", { cell: (data) => data.getValue() }),
  helper.display({
    header: "Aksi",
    cell: ({ row: { original } }) => "tes",
  }),
];

export default produkKontrakColumns;
