import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <Card className="max-w-md w-full p-8 text-center">
                <div className="mb-6">
                    <h1 className="text-9xl font-bold text-gray-200">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                        Página não encontrada
                    </h2>
                    <p className="text-gray-600 mt-2">
                        A página que você está procurando não existe ou foi movida.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        variant="outline"
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Voltar
                    </Button>
                    <Button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2"
                    >
                        <Home size={16} />
                        Ir para Home
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default NotFound
