import axios from 'axios';
const baseURL = 'https://education-management-backend-4.onrender.com/api/v1';
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    Token: token,
  },
});

export default axiosInstance;
