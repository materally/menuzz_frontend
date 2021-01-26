import axios from 'axios';

export const API_SECRET = process.env.REACT_APP_API_SECRET
export const API_URL = process.env.REACT_APP_BASE_URL

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
export default API