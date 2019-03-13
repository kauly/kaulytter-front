import axios from "axios";

const token = localStorage.getItem("token");
const uri = `${process.env.REACT_APP_API}/api`;

export const API = axios.create({
  baseURL: uri,
  headers: { authorization: `Bearer ${token}` },
  validateStatus: status => status < 500
});

export default API;
