import axios from "axios";

const api = axios.create({
  baseURL: "https://potential-enigma-r4r5j4566w4xcxvpp-8000.app.github.dev/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
