import axios from "axios";

const api = axios.create({
  baseURL: "http://api.pos.misterkong.com/api/",
});

export default api;
