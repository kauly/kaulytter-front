import axios from "axios";

const token = localStorage.getItem("token");
const uri = "http://localhost:5000/api";

export const API = axios.create({
  baseURL: uri,
  headers: { authorization: `Bearer ${token}` },
  validateStatus: status => status < 500
});

export default API;
