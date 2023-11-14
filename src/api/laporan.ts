import { PenjualanParams } from "../constants/Types/penjualanTypes";
import { PembelianParams } from "../constants/Types/pembelianTypes";
import api from "./api";
import { InventoriParams } from "../constants/Types/inventoriTypes";
import { biayaParams } from "../constants/Types/biayaTypes";
import { pendapatanParams } from "../constants/Types/pendapatanTypes";
import { HutangParams } from "../constants/Types/hutangTypes";
import { piutangParams } from "../constants/Types/piutangTypes";
import { GetFmisType } from "../constants/Types/fmiTypes";

export const getPenjualan = async (params: PenjualanParams, token: string) => {
  const { data } = await api.post("laporan/penjualan", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

type ExportPenjualanType = {
  data: PenjualanParams;
  access_token: string;
};
export const exportPenjualan = async (params: ExportPenjualanType) => {
  const { data } = await api.get("laporan/penjualan", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    responseType: "blob",
    params: params.data,
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

type ExportOrderPenjualanType = {
  data: PenjualanParams;
  access_token: string;
};

export const exportOrderPenjualan = async (
  params: ExportOrderPenjualanType
) => {
  const { data } = await api.get("laporan/penjualan_order", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
  });
  return data;
};

export const getReturPenjualan = async (
  params: PenjualanParams,
  token: string
) => {
  const { data } = await api.post("laporan/penjualan_retur", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

type ExportReturPenjualanType = {
  data: PenjualanParams;
  access_token: string;
};
export const exportReturPenjualan = async (
  params: ExportReturPenjualanType
) => {
  const { data } = await api.get("laporan/penjualan_retur", {
    headers: { Authorization: `Bearer ${params.access_token}` },
    responseType: "blob",
    params: params.data,
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

type ExportPembelianType = {
  data: PembelianParams;
  access_token: string;
};

export const exportPembelian = async (params: ExportPembelianType) => {
  const { data } = await api.get("laporan/pembelian", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
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

type ExportOrderPembelianType = {
  data: PembelianParams;
  access_token: string;
};

export const exportOrderPembelian = async (
  params: ExportOrderPembelianType
) => {
  const { data } = await api.get("laporan/pembelian_order", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
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

type ExportReturPembelianType = {
  data: PembelianParams;
  access_token: string;
};

export const exportReturPembelian = async (
  params: ExportReturPembelianType
) => {
  const { data } = await api.get("laporan/pembelian_retur", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
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

type ExportBiayaType = {
  data: biayaParams;
  access_token: string;
};

export const exportBiaya = async (params: ExportBiayaType) => {
  const { data } = await api.get("laporan/biaya", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
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

type ExportPendapatanType = {
  data: pendapatanParams;
  access_token: string;
};

export const exportPendapatan = async (params: ExportPendapatanType) => {
  const { data } = await api.get("laporan/pendapatan", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
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

type ExportHutangType = {
  data: HutangParams;
  access_token: string;
};

export const exportHutang = async (params: ExportHutangType) => {
  const { data } = await api.get("laporan/hutang", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
  });

  return data;
};

export const getPiutang = async (params: piutangParams, token: string) => {
  const { data } = await api.post("laporan/piutang", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

type ExportPiutangType = {
  data: piutangParams;
  access_token: string;
};

export const exportPiutang = async (params: ExportPiutangType) => {
  const { data } = await api.get("laporan/piutang", {
    headers: {
      Authorization: `Bearer ${params.access_token}`,
    },
    params: params.data,
    responseType: "blob",
  });
  return data;
};

export const getFmi = async (params: GetFmisType, access_token: string) => {
  const { data } = await api.get("laporan/get-fmi-smi-stock", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params,
  });
  return data;
};
