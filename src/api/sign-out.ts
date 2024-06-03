import { api } from '@/lib/axios'

export async function signOut() {
    try {
        await api.post('client/sign-out')
         // Redirecionamento após logout
    
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }

  
}