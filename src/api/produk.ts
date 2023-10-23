import { GetProdukType, GetProduksType } from "../constants/Types/produkTypes";
import api from "./api";

export const getProduks = async (
  params: GetProduksType,
  access_token: string
) => {
  const { data } = await api.get("produk/show", {
    params,
    headers: { Authorization: "Bearer " + access_token },
  });
  return data;
};

export const getProduk = async (
  params: GetProdukType,
  access_token: string
) => {
  const { data } = await api.get("produk", {
    params,
    headers: { Authorization: "Bearer " + access_token },
  });
  return data;
};
