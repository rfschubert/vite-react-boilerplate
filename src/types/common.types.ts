// Default API response
export interface ApiResponse<T> {
    data: T
    message: string
    status: number
    success: boolean
}

// Default API error
export interface ApiError {
    message: string
    code: string
    details?: Record<string, string[]>
}

// Pagination
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
