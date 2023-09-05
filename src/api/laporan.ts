import { PenjualanParams } from "../constants/Types/penjualanTypes";
import api from "./api";

export const getPenjualan = async (params: PenjualanParams, token: string) => {
  const { data } = await api.post("laporan/penjualan", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getOrderPenjualan = async (
  params: PenjualanParams,
  token: string
) => {
  const { data } = await api.post("laporan/penjualan_order", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getReturPenjualan = async (
  params: PenjualanParams,
  token: string
) => {
  const { data } = await api.post("laporan/penjualan_order", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
