import axios from 'axios';

export const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3535',
  headers: { 'Access-Control-Allow-Origin': '*' }
});
