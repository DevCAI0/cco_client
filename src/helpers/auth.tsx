// No arquivo helpers/auth.js
import Cookies from "js-cookie";

// Função para verificar se o usuário está autenticado
export function isAuthenticated() {
  // Verifica se o cookie de autenticação está presente
  const token = Cookies.get("token");
  // Retorna true se o cookie estiver presente, indicando que o usuário está autenticado
  // Retorna false se o cookie estiver ausente, indicando que o usuário não está autenticado
  return !!token;
}
