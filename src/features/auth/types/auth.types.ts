export interface User {
    id: number
    username: string
    email: string
    full_name: string
}

export interface LoginCredentials {
    username: string
    password: string
}

export interface LoginResponse {
    access_token: string
    refresh_token: string
    token_type: string
    expires_in: number
    user: User
}

export interface AuthError {
    message: string
    errors?: Record<string, string[]>
}
