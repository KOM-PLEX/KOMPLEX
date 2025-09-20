import axios from "axios";

export type TokenProvider = () => Promise<string | null>;

export const createApi = (baseURL: string, getToken: TokenProvider) => {
  const api = axios.create({ baseURL });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};
