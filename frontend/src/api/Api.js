import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api/auth', // Ensure this matches your server port
});

// Automatically attach JWT token to every request if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;