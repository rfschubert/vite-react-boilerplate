import api from '@/features/auth/services/api'
import { LoginCredentials, LoginResponse } from '../types/auth.types'

export const authService = {
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        const response = await api.post<LoginResponse>('/api/auth/login', credentials)
        return response.data
    },

    async logout(): Promise<void> {
        try {
            await api.post('/api/auth/logout')
        } catch (error) {
            console.error('Erro ao fazer logout:', error)
        } finally {
            // Limpa os tokens mesmo se o logout falhar
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('auth-storage')
        }
    },

    async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
        const response = await api.post('/api/auth/refresh', {
            refresh_token: refreshToken,
        })
        return response.data
    },

    async me(): Promise<LoginResponse['user']> {
        const response = await api.get('/api/auth/me')
        return response.data
    },
}
