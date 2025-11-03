import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

// Interceptor para tratar erros e renovar token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // Se receber 401 e não for a rota de login
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem('refresh_token')

                if (refreshToken) {
                    // Tenta renovar o token
                    const response = await axios.post(
                        `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
                        { refresh_token: refreshToken }
                    )

                    const { access_token } = response.data
                    localStorage.setItem('access_token', access_token)

                    // Refaz a requisição original com o novo token
                    originalRequest.headers.Authorization = `Bearer ${access_token}`
                    return api(originalRequest)
                }
            } catch (refreshError) {
                // Se falhar ao renovar, desloga o usuário
                localStorage.removeItem('access_token')
                localStorage.removeItem('refresh_token')
                localStorage.removeItem('auth-storage')
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    }
)

export default api
