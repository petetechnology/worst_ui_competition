'use client';
import { useState, useEffect, useCallback } from 'react';

const Home = () => {
  const [notas, setNotas] = useState({
    Dificuldade: 0,
    Inovacao: 0,
    Consistencia: 0,
    Estilo: 0,
  });
  const [pontuacaoFinal, setPontuacaoFinal] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  type Position = {
    x: number;
  };

  type PositionsMap = {
    [key: string]: Position;
  };

  const [positions, setPositions] = useState<PositionsMap>({});

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = Number.parseFloat(value);
    if (!Number.isNaN(parsedValue)) {
      setNotas({ ...notas, [name]: parsedValue });
    } else {
      setError('Valor inválido inserido');
    }
  };

  // Função para calcular a pontuação
  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      try {
        let total = 0;
        let count = 0;
        for (const criterio in notas) {
          total += notas[criterio as keyof typeof notas]; // Afirmação de tipo
          count++;
        }
        const pontuacaoFinal = total / count;
        setPontuacaoFinal(pontuacaoFinal);
        setError(null);
      } catch (err) {
        setError('Erro ao calcular a pontuação');
        setPontuacaoFinal(null);
      } finally {
        setIsCalculating(false);
      }
    }, 3000);
  };

  // Função para mover os sliders de forma aleatória
  const moveInputs = useCallback(() => {
    const newPositions: PositionsMap = {};
    // biome-ignore lint/complexity/noForEach: <explanation>
    ['Dificuldade', 'Inovacao', 'Consistencia', 'Estilo'].forEach((criterio) => {
      const randomX = Math.floor(Math.random() * 50); 
      newPositions[criterio] = { x: randomX };
    });
    setPositions(newPositions);
  }, []);

  
  useEffect(() => {
    const intervalId = setInterval(moveInputs, 1000);
    return () => clearInterval(intervalId);
  }, [moveInputs]);

  return (
    <div className="flex items-center justify-center h-screen bg-background-light">
      <div className="p-4 flex h-96 flex-col justify-center bg-white shadow-md rounded-lg relative">
        <h3 className="text-xl flex justify-center font-semibold mb-4 text-dark-gray">Avaliação</h3>

        <div className="relative flex justify-between items-center w-full space-x-10">
          {['Dificuldade', 'Inovacao', 'Consistencia', 'Estilo'].map((criterio) => (
            <div
              key={criterio}
              className="relative transition-transform duration-500"
              style={{
                left: `${positions[criterio]?.x}%`,
                transform: 'translateX(-50%)',
              }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">{criterio}</label>
              <input
                type="range"
                name={criterio}
                min="0"
                max="100"
                step="1"
                value={notas[criterio as keyof typeof notas]}
                onChange={handleInputChange}
                className="w-48 mt-1 text-dark-gray"
                style={{ accentColor: '#38B2AC' }}
              />
              <p className="text-sm text-gray-500 mt-2">Nota: {notas[criterio as keyof typeof notas]}</p>
            </div>
          ))}
        </div>

        <button
          type="submit"
          onClick={handleCalculate}
          className={`w-full bg-teal text-white font-semibold py-2 px-4 rounded-lg border hover:bg-white hover:text-teal hover:border-teal mt-4 ${isCalculating ? 'shake' : ''}`}
          disabled={isCalculating}
        >
          {isCalculating ? 'Calculando...' : 'Calcular Pontuação'}
        </button>

        {pontuacaoFinal !== null && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-dark-gray">Pontuação Final:</h4>
            <p className="text-dark-gray">{pontuacaoFinal.toFixed(2)}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
