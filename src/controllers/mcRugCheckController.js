import { getTokenSummary } from "../services/mcRugCheckService.service.js";

export async function getTokenSummaryController(req, res) {
  try {
    console.log('getTokenSummaryController foi chamado')
    const { mint } = req.params;
    const data = await getTokenSummary(mint);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function home(req, res) {
  return res.send({message: 'Bem-vindo(a)!'})
}
