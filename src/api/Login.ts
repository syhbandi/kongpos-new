import api from "./api";

type userCredential = {
  no_hp: string;
  passwd: string;
};

export const login = async (user: userCredential) => {
  const { data } = await api.post("auth/login", user);
  return data;
};
