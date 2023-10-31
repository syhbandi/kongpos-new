import {
  GetKategorisType,
  getKategoriType,
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
