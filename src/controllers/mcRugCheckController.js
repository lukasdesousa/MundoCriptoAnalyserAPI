import { getTokenSummary, getTokenReport } from "../services/mcRugCheckService.service.js";

export async function getTokenSummaryController(req, res) {
  try {
    const { mint } = req.params;
    const data = await getTokenSummary(mint);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export async function getTokenReportController(req, res) {
  try {
    const { mint } = req.params;
    const data = await getTokenReport(mint);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export function home(req, res) {
  return res.send({message: 'Seja muito bem-vindo(a) a API do Mundo Cripto Analyser!'})
}
