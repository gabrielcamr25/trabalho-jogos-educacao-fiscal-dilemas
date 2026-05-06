import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [playerName, setPlayerName] = useState('');
  const [cityName, setCityName] = useState('');
  const navigate = useNavigate();

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName && cityName) {
      navigate('/game', { state: { playerName, cityName } });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Simulador de Gestão Pública</h1>
        <p className="text-lg text-slate-600">Educação Fiscal e Cidadania</p>
      </div>
      
      <form 
        onSubmit={handleStartGame} 
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Prefeito</label>
          <input 
            type="text" 
            placeholder="Ex: Gabriel Câmara" 
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nome da Cidade</label>
          <input 
            type="text" 
            placeholder="Ex: Fortaleza" 
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            required
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <button 
          type="submit" 
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md"
        >
          Assumir a Prefeitura
        </button>
      </form>

    </div>
  );
}