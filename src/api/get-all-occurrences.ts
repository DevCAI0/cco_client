
import { api } from '@/lib/axios';

interface OccurrencesResponse {
    informacoes: ViolationRecord[];
  }
  
  interface ViolationRecord {
    ID: number;
    MOTORISTA: string;
    MOTIVO: string;
    UNIDADE: string;
    QUANTIDADE: string;
    VELOCIDADE_MAXIMA: string;
    DATA: string;
    ULTIMA_OCORRENCIA: string;
    CONTATO: {
      id: number;
      nome: string;
      contato: string;
    };
  }
  

export async function useGetAllOccurrences() {
   const response = await api.get<OccurrencesResponse>('/ocurrence/obter-todas-informacoes')
   return response.data
}
  