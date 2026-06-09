import axios from "axios";

export const axiosInstance = axios.create({
  // 🔴 DO NOT USE "localhost". Use "127.0.0.1"
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api",
  withCredentials: true,
});
