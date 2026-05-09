import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Settings } from 'lucide-react';

import bgImage from '../../assets/background-img-home.png';
import bgBlue from '../../assets/background-img-blue.png';

export function Home() {
  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName) {
      navigate('/game', { state: { playerName, cityName: 'Sua Cidade' } });
    }
  };

  return (
    <div 
      className="relative min-h-screen w-full flex items-start justify-center pt-40 md:pt-52"
      style={{ 
        backgroundImage: `url(${bgImage}), url(${bgBlue})`,
        backgroundPosition: 'center bottom, center center',
 
        backgroundSize: '100% auto, cover',
        backgroundRepeat: 'no-repeat, no-repeat'
      }}
    >
      <div className="absolute top-0 w-full p-6 flex justify-end gap-4 z-10">
        <button 
          className="text-white hover:text-gray-200 hover:opacity-80 transition-all cursor-pointer"
          onClick={() => alert('Modal de Tutorial em breve!')}
        >
          <HelpCircle size={28} strokeWidth={1.5} />
        </button>
        <button 
          className="text-white hover:text-gray-200 hover:opacity-80 transition-all cursor-pointer"
          onClick={() => alert('Painel de Configurações em breve!')}
        >
          <Settings size={28} strokeWidth={1.5} />
        </button>
      </div>

    
      <div className="z-10 flex flex-col items-center px-4 w-full">
        

        <div className="text-center mb-[48px]">
    
          <h1 className="font-light text-[40px] text-white tracking-[-0.5px] mb-[8px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] leading-none">
            Bem-vindo ao
          </h1>
       
          <h2 className="font-bold text-[48px] text-white tracking-[-0.5px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)] leading-none">
            Dilemas do Gestor
          </h2>
        </div>

    
        <form 
          onSubmit={handleStartGame} 
          className="inline-flex shadow-[0_2px_8px_rgba(0,0,0,0.12)] rounded-[8px]"
        >
          <input 
            type="text" 
            placeholder="Digite seu nome..." 
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
            className="w-[240px] h-[48px] px-[16px] border-none outline-none bg-[#F3F4F6] text-[16px] text-[#1F2937] placeholder-[#9CA3AF] rounded-l-[8px]"
          />
          <button 
            type="submit" 
            className="h-[48px] px-[24px] border-none bg-[#D4E157] text-[#1F2937] text-[16px] font-medium cursor-pointer rounded-r-[8px] transition-all duration-200 hover:bg-[#C5D64A] hover:-translate-y-[1px]"
          >
            Avançar
          </button>
        </form>

      </div>
    </div>
  );
}