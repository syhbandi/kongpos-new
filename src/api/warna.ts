import { GetWarnasType, getWarnaType } from "../constants/Types/warnaTypes";
import api from "./api";

export const getWarnas = async (
  params: GetWarnasType,
  access_token: string
) => {
  const { data } = await api.get("warna/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getWarna = async (params: getWarnaType, access_token: string) => {
  const { data } = await api.get("warna", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};
