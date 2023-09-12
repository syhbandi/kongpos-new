import { BuatKontrakParamsTypes } from "../constants/Types/kontrakTypes";
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
