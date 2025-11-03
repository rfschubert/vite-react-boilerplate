import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search, Plus, Edit, Trash } from 'lucide-react'

interface User {
    id: string
    name: string
    email: string
    role: string
    avatar?: string
}

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('')

    // Dados mockados
    const users: User[] = [
        {
            id: '1',
            name: 'João Silva',
            email: 'joao@example.com',
            role: 'Admin',
            avatar: '',
        },
        {
            id: '2',
            name: 'Maria Santos',
            email: 'maria@example.com',
            role: 'User',
            avatar: '',
        },
        {
            id: '3',
            name: 'Pedro Oliveira',
            email: 'pedro@example.com',
            role: 'User',
            avatar: '',
        },
        {
            id: '4',
            name: 'Ana Costa',
            email: 'ana@example.com',
            role: 'Manager',
            avatar: '',
        },
    ]

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Usuários</h2>
                    <p className="text-gray-500 mt-1">
                        Gerencie os usuários do sistema
                    </p>
                </div>
                <Button className="flex items-center gap-2">
                    <Plus size={16} />
                    Novo Usuário
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>Lista de Usuários</span>
                        <div className="relative w-64">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                                placeholder="Buscar usuários..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Usuário</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Função</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={user.avatar} alt={user.name} />
                                                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">{user.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            {user.role}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button variant="ghost" size="icon">
                                                <Edit size={16} />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                                                <Trash size={16} />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {filteredUsers.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            Nenhum usuário encontrado
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default Users
