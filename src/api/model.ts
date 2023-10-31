import { GetModelType, GetModelsType } from "../constants/Types/modelTypes";
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
