import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backend-app-stock.vercel.app',
  // baseURL: 'http://localhost:3333',
})
