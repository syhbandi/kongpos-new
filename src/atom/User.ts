import { atom, selector } from "recoil";
export const userState = atom({
  key: "user",
  default: JSON.parse(localStorage.getItem("KONGPOS_AUTH") || "{}"),
});

export const isLoggedInState = selector({
  key: "isLoggedIn",
  get: ({ get }) => Boolean(Object.keys(get(userState)).length),
});

export const companyIdState = atom({
  key: "companyId",
  default: localStorage.getItem("KONGPOS_CID") || "",
});
