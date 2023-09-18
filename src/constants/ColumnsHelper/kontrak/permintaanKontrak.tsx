import { createColumnHelper } from "@tanstack/react-table";
import { PermintaanKontrakTypes } from "../../Types/kontrakTypes";

const helper = createColumnHelper<PermintaanKontrakTypes>();
const permintaanKontrakColumns = [
  helper.accessor("Nama Usaha", { cell: (data) => data.getValue() }),
  helper.accessor("No Telp", { cell: (data) => data.getValue() }),
  helper.accessor("email", { cell: (data) => data.getValue() }),
];

export default permintaanKontrakColumns;
