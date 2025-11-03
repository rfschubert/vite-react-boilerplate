import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'

const Dashboard = () => {
    const stats = [
        {
            title: 'Total de Usuários',
            value: '1,234',
            icon: Users,
            change: '+12%',
            changeType: 'positive',
        },
        {
            title: 'Receita Total',
            value: 'R$ 45.231',
            icon: DollarSign,
            change: '+8%',
            changeType: 'positive',
        },
        {
            title: 'Vendas',
            value: '892',
            icon: ShoppingCart,
            change: '-3%',
            changeType: 'negative',
        },
        {
            title: 'Crescimento',
            value: '23%',
            icon: TrendingUp,
            change: '+15%',
            changeType: 'positive',
        },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-500 mt-1">
                    Visão geral do sistema e métricas principais
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium text-gray-600">
                                    {stat.title}
                                </CardTitle>
                                <Icon className="h-4 w-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p
                                    className={`text-xs mt-1 ${stat.changeType === 'positive'
                                        ? 'text-green-600'
                                        : 'text-red-600'
                                        }`}
                                >
                                    {stat.change} em relação ao mês anterior
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-between border-b pb-3 last:border-b-0"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Novo usuário registrado</p>
                                        <p className="text-xs text-gray-500">Há {item} hora(s)</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-400">#{item}234</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard
