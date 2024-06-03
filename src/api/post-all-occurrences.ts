import { api } from "@/lib/axios";

export const processarOcorrencias = async (information: string, refetch: () => void, setInformation: (info: string) => void, setErrorMessage: (message: string) => void) => {
  try {
      const response = await api.post('ocurrence/processar-informacoes', {
          informacoes: information
      }, {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) {
          console.log('Informações processadas com sucesso:', response.data);
          refetch();
          setInformation('');
          return { success: true, message: response.data.message };
      } else {
          console.error('Erro ao processar informações:', response.data.errorMessage);
          setErrorMessage(response.data.errorMessage);
          return { success: false, message: response.data.errorMessage };
      }
  } catch (error) {
      console.error('Erro ao processar informações:', error);
      setErrorMessage('Erro ao processar informações');
      return { success: false, message: 'Erro ao processar informações' };
  }
};
