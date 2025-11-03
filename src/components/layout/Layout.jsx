import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <header style={{ padding: '20px', background: '#f0f0f0' }}>
                <nav style={{ display: 'flex', gap: '20px' }}>
                    <Link to="/">Home</Link>
                    <Link to="/users">Usuários</Link>
                    <Link to="/about">Sobre</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>

            <main style={{ padding: '20px' }}>
                <Outlet /> {/* Aqui renderizam as páginas */}
            </main>

            <footer style={{ padding: '20px', background: '#f0f0f0', marginTop: '40px' }}>
                <p>&copy; 2025 React Boilerplate</p>
            </footer>
        </div>
    )
}
