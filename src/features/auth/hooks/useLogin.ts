import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { authService } from '../services/authService'
import { LoginCredentials, AuthError } from '../types/auth.types'
import { AxiosError } from 'axios'

export const useLogin = () => {
    const navigate = useNavigate()
    const { login, setLoading, setError } = useAuthStore()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleLogin = async (credentials: LoginCredentials) => {
        try {
            setIsSubmitting(true)
            setLoading(true)
            setError(null)

            const response = await authService.login(credentials)

            // Save data to store
            login(
                response.user,
                response.access_token,
                response.refresh_token,
                response.token_type,
                response.expires_in
            )

            // Redirect to dashboard
            navigate('/dashboard')

            return { success: true, data: response }
        } catch (err) {
            const error = err as AxiosError<AuthError>
            const errorMessage =
                error.response?.data?.message ||
                'Erro ao fazer login. Verifique suas credenciais.'

            setError(errorMessage)

            return {
                success: false,
                error: errorMessage,
                details: error.response?.data?.errors
            }
        } finally {
            setIsSubmitting(false)
            setLoading(false)
        }
    }

    return {
        handleLogin,
        isSubmitting,
    }
}
