import {
  AjukanKontrakTypes,
  BuatKontrakParamsTypes,
  GetKontrakTypes,
} from "../constants/Types/kontrakTypes";
import api from "./api";

export const getCustomerContract = async (
  params: BuatKontrakParamsTypes,
  access_token: string
) => {
  const { data } = await api.post("customer_contract", params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return data;
};

export const ajukanKontrak = async ({
  params,
  access_token,
}: {
  params: AjukanKontrakTypes;
  access_token: string;
}) => {
  const { data } = await api.post("post_request_contract", params, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return data;
};

export const getKontrak = async (params: GetKontrakTypes, token: string) => {
  const { data } = await api.post("selected_contracted", params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
