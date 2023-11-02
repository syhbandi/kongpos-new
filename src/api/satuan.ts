import { GetSatuansType } from "../constants/Types/satuanTypes";
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
