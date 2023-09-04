import { PenjualanParams } from "./Types/penjualanTypes";

export const penjualan: PenjualanParams = {
  company_id: "",
  awal: new Date().toISOString().split("T")[0],
  akhir: new Date().toISOString().split("T")[0],
  jenis: "",
  search: "",
  order_col: "",
  order_type: "",
  limit: 0,
  length: 10,
  count_stats: 0,
};
