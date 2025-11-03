import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    // Aqui você verifica se o usuário está autenticado
    const isAuthenticated = false // Substitua pela sua lógica de autenticação

    return isAuthenticated ? children : <Navigate to="/login" />
}
