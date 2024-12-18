import axios from "axios";

const baseURL =
  window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api/todos" // Local development
    : "/api/todos"; // Production

export const api = axios.create({
  baseURL,
});
