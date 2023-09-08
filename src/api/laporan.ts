import { PenjualanParams } from "../constants/Types/penjualanTypes";
import { PembelianParams } from "../constants/Types/pembelianTypes";
import api from "./api";
import { InventoriParams } from "../constants/Types/inventoriTypes";
import { biayaParams } from "../constants/Types/biayaTypes";
import { pendapatanParams } from "../constants/Types/pendapatanTypes";
import { HutangParams } from "../constants/Types/hutangTypes";

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

export const getReturPembelian = async (
  params: PembelianParams,
  token: string
) => {
  const { data } = await api.post("laporan/pembelian_retur", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getInventori = async (params: InventoriParams, token: string) => {
  const { data } = await api.post("laporan/stok", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getBiaya = async (params: biayaParams, token: string) => {
  const { data } = await api.post("laporan/biaya", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getPendapatan = async (
  params: pendapatanParams,
  token: string
) => {
  const { data } = await api.post("laporan/pendapatan", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getHutang = async (params: HutangParams, token: string) => {
  const { data } = await api.post("laporan/hutang", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
