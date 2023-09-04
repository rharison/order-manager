import axios from "axios";
const BASE_URL_API = 'http://localhost:8080/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL_API,
});
