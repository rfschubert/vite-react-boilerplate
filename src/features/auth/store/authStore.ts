import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { User } from '../types/auth.types'

interface AuthState {
    user: User | null
    accessToken: string | null
    refreshToken: string | null
    tokenType: string | null
    expiresIn: number | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null

    // Actions
    setUser: (user: User) => void
    setTokens: (accessToken: string, refreshToken: string, tokenType: string, expiresIn: number) => void
    login: (user: User, accessToken: string, refreshToken: string, tokenType: string, expiresIn: number) => void
    logout: () => void
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    clearError: () => void
}

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                user: null,
                accessToken: null,
                refreshToken: null,
                tokenType: null,
                expiresIn: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,

                setUser: (user) => set({ user }),

                setTokens: (accessToken, refreshToken, tokenType, expiresIn) => {
                    localStorage.setItem('access_token', accessToken)
                    localStorage.setItem('refresh_token', refreshToken)

                    set({
                        accessToken,
                        refreshToken,
                        tokenType,
                        expiresIn,
                    })
                },

                login: (user, accessToken, refreshToken, tokenType, expiresIn) => {
                    localStorage.setItem('access_token', accessToken)
                    localStorage.setItem('refresh_token', refreshToken)

                    set({
                        user,
                        accessToken,
                        refreshToken,
                        tokenType,
                        expiresIn,
                        isAuthenticated: true,
                        error: null,
                    })
                },

                logout: () => {
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')

                    set({
                        user: null,
                        accessToken: null,
                        refreshToken: null,
                        tokenType: null,
                        expiresIn: null,
                        isAuthenticated: false,
                        error: null,
                    })
                },

                setLoading: (loading) => set({ isLoading: loading }),

                setError: (error) => set({ error }),

                clearError: () => set({ error: null }),
            }),
            {
                name: 'auth-storage',
                partialize: (state) => ({
                    user: state.user,
                    accessToken: state.accessToken,
                    refreshToken: state.refreshToken,
                    tokenType: state.tokenType,
                    expiresIn: state.expiresIn,
                    isAuthenticated: state.isAuthenticated,
                }),
            }
        )
    )
)
