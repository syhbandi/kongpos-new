import {
  CreateMerkType,
  GetMerksType,
  getMerkType,
} from "../constants/Types/merkTypes";
import api from "./api";

export const getMerks = async (params: GetMerksType, access_token: string) => {
  const { data } = await api.get("merk/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getMerk = async (params: getMerkType, access_token: string) => {
  const { data } = await api.get("merk", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const createMerk = async ({
  body,
  access_token,
}: {
  body: CreateMerkType;
  access_token: string;
}) => {
  const { data } = await api.post("merk", body, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};
