import {
  CreateModelType,
  GetModelType,
  GetModelsType,
} from "../constants/Types/modelTypes";
import api from "./api";

export const getModels = async (
  params: GetModelsType,
  access_token: string
) => {
  const { data } = await api.get("model/show", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const getModel = async (params: GetModelType, access_token: string) => {
  const { data } = await api.get("model", {
    params,
    headers: { Authorization: `Bearer ${access_token}` },
  });
  return data;
};

export const createModel = async ({
  body,
  access_token,
}: {
  body: CreateModelType;
  access_token: string;
}) => {
  return await api.post("model", body, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
export const updateModel = async ({
  body,
  access_token,
}: {
  body: CreateModelType;
  access_token: string;
}) => {
  return await api.put("model", body, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
};
