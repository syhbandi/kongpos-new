import { AxiosProgressEvent } from "axios";
import {
  CreateProdukType,
  GetProdukType,
  GetProduksType,
  UploadGambarType,
} from "../constants/Types/produkTypes";
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

type UploadGambar = {
  data: UploadGambarType;
  access_token: string;
  progressFunc?: (event: AxiosProgressEvent) => void;
};
export const uploadGambar = async ({
  data,
  access_token,
  progressFunc,
}: UploadGambar) => {
  return await api.post("upload-produk", data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      progressFunc && progressFunc(progressEvent);
    },
  });
};

type CreateProduk = {
  data: CreateProdukType;
  access_token: string;
};

export const createProduk = async ({ data, access_token }: CreateProduk) => {
  return await api.post("produk", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};

export const updateProduk = async ({ data, access_token }: CreateProduk) => {
  return await api.put("produk", data, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
