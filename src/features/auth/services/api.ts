import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Interceptor to add token to all requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

// Interceptor to handle errors and refresh token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // If receiving 401 and not the login route
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const refreshToken = localStorage.getItem('refresh_token')

                if (refreshToken) {
                    // Try to refresh the token
                    const response = await axios.post(
                        `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
                        { refresh_token: refreshToken }
                    )

                    const { access_token } = response.data
                    localStorage.setItem('access_token', access_token)

                    // Retry the original request with the new token
                    originalRequest.headers.Authorization = `Bearer ${access_token}`
                    return api(originalRequest)
                }
            } catch (refreshError) {
                // If refresh fails, logout the user
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
