import axios from 'axios';

// Use REACT_APP_API_URL from .env, or default to localhost:5000 for local dev
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export default API;
