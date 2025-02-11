import axios from "axios";
import config from "../config/dotenv.js";

/**
 * Obtém o resumo do relatório de um token a partir do Token Mint.
 * @param {string} mint - Endereço do contrato (Token Mint)
 * @returns {Promise<Object>} - Dados do relatório
 */
export async function getTokenSummary(mint) {
  try {
    const response = await axios.get(`${config.baseUrl}/tokens/${mint}/report/summary`);
    console.log(config.baseUrl)
    return response.data;
  } catch (error) {
    console.error("Erro ao obter o relatório:", error.response?.data || error.message);
    throw new Error("Não foi possível obter o relatório do token.");
  }
}
