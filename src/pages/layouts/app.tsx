import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '@/components/header';
import { api } from '@/lib/axios';

export function AppLayout() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Verificar se o usuário está autenticado
        await api.get('client/check-auth');
        setIsAuthenticated(true);
      } catch (error) {
        navigate('/sign-in', { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  // Renderizar apenas se o usuário estiver autenticado
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />
      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
