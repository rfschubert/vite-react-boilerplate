import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'

// Páginas
import Login from '@/features/auth/pages/Login'
import Register from '@/features/auth/pages/Register'
import Dashboard from '@/features/dashboard/pages/Dashboard'
import Users from '@/features/users/pages/Users'
import NotFound from '@/features/errors/pages/NotFound'

// Hook customizado para verificar autenticação
import { useAuthStore } from '@/features/auth/store/authStore'

const AppRoutes = () => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

    return (
        <Routes>
            {/* Rotas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rotas protegidas */}
            <Route
                path="/"
                element={
                    isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />
                }
            >
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
            </Route>

            {/* Rota 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes
