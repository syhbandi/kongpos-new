import {
  AjukanKontrakTypes,
  BuatKontrakParamsTypes,
  DaftarkanSupplierParamsType,
  GetKontrakTypes,
  PermintaanKontrakParams,
  ProdukKontrakParams,
  bayarKontrakParamsTypes,
  terimaKontrakParamsTYpe,
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

export const postBayarKontrak = async ({
  params,
  access_token,
}: {
  params: bayarKontrakParamsTypes;
  access_token: string;
}) => {
  const { data } = await api.post("post_do_payment", params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

export const getPermintaanKontrak = async (
  params: PermintaanKontrakParams,
  access_token: string
) => {
  const { data } = await api.post("compare_supplier", params, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return data;
};

export const getSuppliers = async (comp_id: string, access_token: string) => {
  const { data } = await api.post(
    "m_supplier",
    { comp_id },
    { headers: { Authorization: "Bearer " + access_token } }
  );

  return data;
};

export const daftarkanSupplier = async ({
  params,
  access_token,
}: {
  params: DaftarkanSupplierParamsType;
  access_token: string;
}) => {
  const { data } = await api.post("post_compare_supplier_data", params, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return data;
};

export const terimaKontrak = async ({
  params,
  access_token,
}: terimaKontrakParamsTYpe) => {
  const { data } = await api.post("post_customer_respons_contract", params, {
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  return data;
};

export const getProdukKontrak = async (
  params: ProdukKontrakParams,
  access_token: string
) => {
  const { data } = await api.post("get_list_supplier_item", params, {
    headers: { Authorization: "Bearer " + access_token },
  });
  return data;
};
