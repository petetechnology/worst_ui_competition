// src/api/avaliar.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { juizId, competidorId, esporteId, notas } = req.body;

    let total = 0;
    let count = 0;
    for (let criterio in notas) {
      total += notas[criterio];
      count++;
    }
    const pontuacaoFinal = total / count;

    // Aqui você pode salvar a pontuação no banco de dados, se necessário

    res.status(200).json({ message: 'Avaliação salva com sucesso!', pontuacaoFinal });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
