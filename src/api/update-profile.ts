import { api } from '@/lib/axios';
import { getProfile } from './get-profile';

export interface UpdateProfileRequest {
    id: string;
    name: string;
    email: string;
    phone: string 
    address: string;
    password?: string;
    confirmPassword?: string;
}

export async function updateProfile(data: UpdateProfileRequest) {
    try {
        // Obtenha as informações do usuário autenticado
        const currentUser = await getProfile();
        
        // Verifique se o ID do usuário autenticado corresponde ao ID fornecido nos dados
        if (currentUser.id !== data.id) {
            throw new Error('Você não tem permissão para editar este perfil');
        }

        // Faça a chamada para atualizar o perfil usando o ID fornecido
        const response = await api.patch(`client/edit/${data.id}`, data);
        return response.data;
    } catch (error) {
        throw new Error((error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Erro ao atualizar perfil');

    }
}
