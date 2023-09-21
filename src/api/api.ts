import axios from "axios";

const api = axios.create({
  baseURL: "https://api.pos.misterkong.com/api/",
});

export default api;
