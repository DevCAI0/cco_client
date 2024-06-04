import axios from 'axios'



export const api = axios.create({
  baseURL: 'https://cco-api-beta.onrender.com',
  withCredentials: true,
})

