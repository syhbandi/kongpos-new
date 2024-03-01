import api from "./api";

type userCredential = {
  no_hp: string;
  passwd: string;
};

export const login = async (user: userCredential) => {
  const { data } = await api.post("auth/login", user);
  return data;
};

export const getUsaha = async (noHp: string) => {
  const { data } = await api.post("login_get_cid", {
    no_hp: noHp,
  });
  return data;
};

export const getInfoUsaha = async (
  company_id: string,
  access_token: string
) => {
  const { data } = await api.get("info-toko", {
    headers: {
      Authorization: "Bearer " + access_token,
    },
    params: {
      company_id,
    },
  });
  return data;
};
