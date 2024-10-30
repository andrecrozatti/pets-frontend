import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';


// Criação da instância Axios
const api = axios.create({
  baseURL: 'http://localhost:3000',  // URL do backend
});


const token = sessionStorage.getItem("token");

// Interceptor para adicionar o token em todas as requisições
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const currentToken = token;  // Obtém o token do usuário autenticado
    if (currentToken && config.headers) {
      config.headers.Authorization = `Bearer ${currentToken}`;  // Adiciona o token ao header
    }
    return config;
  },
  (error: AxiosError ) => {
    return Promise.reject(error);
  }
);

export default api;
