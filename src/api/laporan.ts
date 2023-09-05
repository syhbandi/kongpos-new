import { PenjualanParams } from "../constants/Types/penjualanTypes";
import { PembelianParams } from "../constants/Types/pembelianTypes";
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

export const getPembelian = async (params: PembelianParams, token: string) => {
  const { data } = await api.post("laporan/pembelian", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getOrderPembelian = async (
  params: PembelianParams,
  token: string
) => {
  const { data } = await api.post("laporan/pembelian_order", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
