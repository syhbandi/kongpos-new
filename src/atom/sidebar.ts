import { atom } from "recoil";

export const sidebarState = atom({
  key: "sidebar",
  default: window.innerWidth <= 768 ? false : true,
});
