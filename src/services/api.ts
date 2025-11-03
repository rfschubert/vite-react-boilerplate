import axios from 'axios'
import { useAuthStore } from '@/features/auth/store/authStore'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

// Interceptor para tratar erros globalmente
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            useAuthStore.getState().logout()
            window.location.href = '/login'
        }

        return Promise.reject(error)
    }
)

export default api
