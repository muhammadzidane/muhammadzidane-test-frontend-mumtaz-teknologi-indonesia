import axios from "axios";
import { ref } from "vue";

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL
    ? `${import.meta.env.VITE_APP_API_URL}`
    : "/api",
});

const loading = ref(false);

http.interceptors.request.use(
  (config) => {
    loading.value = true;

    return config;
  },
  (error) => {
    loading.value = false;
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response) => {
    loading.value = false;
    return response;
  },
  (error) => {
    loading.value = false;

    return Promise.reject(error);
  },
);

export { http, loading };
