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
