// Resposta padrão da API
export interface ApiResponse<T> {
    data: T
    message: string
    status: number
    success: boolean
}

// Erro padrão da API
export interface ApiError {
    message: string
    code: string
    details?: Record<string, string[]>
}

// Paginação
export interface PaginationParams {
    page: number
    limit: number
}

export interface PaginatedResponse<T> {
    data: T[]
    total: number
    page: number
    totalPages: number
}
