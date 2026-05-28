interface Option {
  id: string;
  text: string;
  budgetImpact: number;
  approvalImpact: number;
}

interface DilemmaCardProps {
  theme: string;
  title: string;
  description: string;
  options: Option[];
  currentRound: number; 
  totalRounds: number;  
  onChoice: (budgetImpact: number, approvalImpact: number) => void;
  macroRound: number;  
}

export function DilemmaCard({ 
  theme, 
  title, 
  description, 
  options, 
  currentRound, 
  totalRounds = 4, 
  onChoice,
  macroRound
}: DilemmaCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 mt-6 flex flex-col items-center">

      <div className="w-full flex justify-between items-center mb-6">
        <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-[#1e64c8] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-100/50 shadow-sm">
          {theme}
        </span>
        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
          Pergunta {currentRound} de {totalRounds} <span className="text-gray-300 font-normal mx-1">|</span> Rodada {macroRound}/12
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-gray-800 text-center mb-4 leading-snug">
        {title}
      </h3>
      <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed mb-8 max-w-lg">
        {description}
      </p>

      <div className="w-full flex flex-col gap-3.5">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChoice(option.budgetImpact, option.approvalImpact)}
            className="w-full text-left bg-white hover:bg-blue-50/60 border border-gray-200 hover:border-blue-300 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group active:translate-y-0 active:shadow-sm flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 group-hover:border-blue-300 group-hover:from-blue-50 group-hover:to-white text-gray-400 group-hover:text-blue-600 font-bold text-sm flex items-center justify-center shadow-sm transition-all duration-200 shrink-0">
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-gray-700 font-semibold text-sm md:text-base leading-snug group-hover:text-gray-900 transition-colors">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
