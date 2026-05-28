import { useLocation, useNavigate } from 'react-router-dom';

import bgWelcome from '../../assets/background-img-welcome-page.png';
import bgCloud1 from '../../assets/img-nuvem-1.png'; 
import bgCloud2 from '../../assets/img-nuvem-2.png';
import bgCloud3 from '../../assets/img-nuvem-3.png';
import bgBlue from '../../assets/background-img-blue.png';

export function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();

  const playerName = location.state?.playerName || 'gestor';

  const handleStartMandate = () => {
    navigate('/game', { state: { playerName } });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center overflow-hidden">
      

      <div 
        className="absolute inset-0 z-0" 
        style={{ background: `url(${bgBlue}) center center / cover no-repeat` }} 
      />


      <div className="absolute inset-0 bg-gradient-to-b from-[#1e64c8]/90 via-[#1e64c8]/30 to-transparent z-[1]"></div>

  
      <div 
        className="absolute inset-0 z-[2]"
        style={{ 
          backgroundImage: `url(${bgCloud1}), url(${bgCloud2}), url(${bgCloud3}), url(${bgCloud1}), url(${bgCloud2}), url(${bgCloud3})`,
          backgroundPosition: '5% 12%, 48% 6%, 92% 16%, 18% 30%, 82% 35%, 40% 26%',
          backgroundSize: '16% auto, 14% auto, 18% auto, 9% auto, 12% auto, 10% auto', 
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, no-repeat'
        }}
      />

  
      <div 
        className="absolute inset-0 z-[3]" 
        style={{ background: `url(${bgWelcome}) center bottom / 100% auto no-repeat` }} 
      />

    
      <div className="z-10 flex flex-col items-center px-4 pt-[22vh]">
       
        <div className="max-w-[820px] text-center animate-fade-in-up">
          <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] mb-5">
            Parabéns, <span className="font-medium capitalize">{playerName}</span>! Ratanabá acaba de entregar a você a responsabilidade de conduzir a cidade em um momento decisivo.
          </p>
          <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Seu mandato começa com R$ 100.000 em caixa público, 50% de aprovação popular e decisões que vão exigir equilíbrio entre responsabilidade fiscal, transparência e bem-estar social.
          </p>
        </div>

        <button 
          onClick={handleStartMandate}
          className="mt-[32px] bg-[#D4E157] hover:bg-[#C5D64A] active:bg-[#B5C63A] text-[#1F2937] text-[16px] font-medium py-[12px] px-[28px] rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 hover:-translate-y-[2px] focus:outline-none animate-fade-in-up-delay"
        >
          Começar mandato
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fade-in-up-delay {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out 0.2s forwards;
        }
      `}</style>
    </div>
  );
}
