import {
  CreateJenisBahanType,
  GetJenisBahanType,
  GetJenisBahansType,
} from "../constants/Types/jenisBahanTypes";
import api from "./api";

export const getJenisBahans = async (
  params: GetJenisBahansType,
  access_token: string
) => {
  const { data } = await api.get("jenis_bahan/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getJenisBahan = async (
  params: GetJenisBahanType,
  access_token: string
) => {
  const { data } = await api.get("jenis_bahan", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const createJenisBahan = async ({
  body,
  access_token,
}: {
  body: CreateJenisBahanType;
  access_token: string;
}) => {
  return await api.post("jenis_bahan", body, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
