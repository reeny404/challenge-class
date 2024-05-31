import axios from "axios";

const BASE_URL = "https://api.ballang.yoojinyoung.com";
export const client = axios.create({ baseURL: BASE_URL });

export const updateToken = (token) => {
  client.defaults.headers.common.Authorization = token ? `Bearer ${token}` : "";
};
