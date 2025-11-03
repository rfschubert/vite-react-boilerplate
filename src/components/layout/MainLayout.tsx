import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/store/authStore'
import { useAppStore } from '@/store/appStore'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    Menu,
    Home,
    Users,
    LogOut,
    Moon,
    Sun,
    X,
} from 'lucide-react'

const MainLayout = () => {
    const navigate = useNavigate()
    const { user, logout } = useAuthStore()
    const { theme, sidebarOpen, toggleTheme, toggleSidebar } = useAppStore()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? 'w-64' : 'w-0'
                    } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}
            >
                <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">App Logo</h2>
                </div>

                <nav className="mt-6">
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Home size={20} />
                        <span>Dashboard</span>
                    </Link>
                    <Link
                        to="/users"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Users size={20} />
                        <span>Usuários</span>
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleSidebar}
                                className="hover:bg-gray-100"
                            >
                                {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                            </Button>
                            <h1 className="text-xl font-semibold text-gray-800">
                                Bem-vindo, {user?.full_name}
                            </h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="hover:bg-gray-100"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </Button>

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt={user?.full_name} />
                                            <AvatarFallback>{getInitials(user?.full_name || '')}</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium">{user?.full_name}</p>
                                            <p className="text-xs text-gray-500">{user?.email}</p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Sair</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout
