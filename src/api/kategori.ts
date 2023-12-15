import {
  GetKategorisType,
  getKategoriType,
  CreateKategoriType,
} from "../constants/Types/kategoriTypes";
import api from "./api";

export const getKategoris = async (
  params: GetKategorisType,
  access_token: string
) => {
  const { data } = await api.get("kategori/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getKategori = async (
  params: getKategoriType,
  access_token: string
) => {
  const { data } = await api.get("kategori", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const createKategori = async ({
  body,
  access_token,
}: {
  body: CreateKategoriType;
  access_token: string;
}) => {
  const { data } = await api.post("kategori", body, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const updateKategori = async ({
  body,
  access_token,
}: {
  body: CreateKategoriType;
  access_token: string;
}) => {
  return await api.put("kategori", body, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
