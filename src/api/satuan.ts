import {
  CreateSatuanType,
  GetSatuanType,
  GetSatuansType,
} from "../constants/Types/satuanTypes";
import api from "./api";

export const getSatuans = async (
  params: GetSatuansType,
  access_token: string
) => {
  const { data } = await api.get("satuan/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getSatuan = async (
  params: GetSatuanType,
  access_token: string
) => {
  const { data } = await api.get("satuan", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

type CreateSatuan = {
  data: CreateSatuanType;
  access_token: string;
};

export const createSatuan = async ({ data, access_token }: CreateSatuan) => {
  return await api.post("satuan", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const updateSatuan = async ({ data, access_token }: CreateSatuan) => {
  return await api.put("satuan", data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
