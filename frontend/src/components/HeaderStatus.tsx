import React from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  YAxis, 
  Tooltip
} from 'recharts';

interface HistoryPoint {
  Caixa?: number;
  Aprovação?: number;
  name?: string; 
}

interface HeaderStatusProps {
  playerName: string;
  budget: number;
  approval: number;
  currentQuestionIndex?: number; 
  history?: HistoryPoint[];
}

export function HeaderStatus({ 
  playerName, 
  budget, 
  approval, 
  currentQuestionIndex = 0,
  history = []
}: HeaderStatusProps) {

  const currentMonth = currentQuestionIndex + 1;
  const currentYear = Math.floor(currentQuestionIndex / 12) + 1;
  const currentRound = Math.floor(currentQuestionIndex / 4) + 1;

  const formattedBudget = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(budget);

  const getTrend = (key: 'Caixa' | 'Aprovação') => {
    if (history.length < 2) return 0;
    const last = history[history.length - 1][key] || 0;
    const prev = history[history.length - 2][key] || 0;
    return last - prev;
  };

  const budgetTrend = getTrend('Caixa');
  const approvalTrend = getTrend('Aprovação');


  const budgetColor = budget < 0 ? '#ef4444' : '#059669';
  const budgetBg = budget < 0 ? 'bg-red-50' : 'bg-emerald-50';
  const budgetBorder = budget < 0 ? 'border-red-100' : 'border-emerald-100';
  const budgetText = budget < 0 ? 'text-red-700' : 'text-emerald-700';
  const budgetGradientId = budget < 0 ? 'budgetRed' : 'budgetGreen';

  const approvalColor = approval < 30 ? '#ef4444' : '#2563eb';
  const approvalBg = approval < 30 ? 'bg-red-50' : 'bg-blue-50';
  const approvalBorder = approval < 30 ? 'border-red-100' : 'border-blue-100';
  const approvalText = approval < 30 ? 'text-red-700' : 'text-blue-700';
  const approvalGradientId = approval < 30 ? 'approvalRed' : 'approvalBlue';

  const CustomTooltip = ({ active, payload, dataKey }: any) => {
    if (active && payload && payload.length) {
      const pointName = payload[0].payload?.name || '';
      return (
        <div className="bg-gray-900 text-white text-[10px] font-medium px-2.5 py-1.5 rounded-lg shadow-lg border border-gray-700 z-50">
          <span className="text-gray-400 mr-1">{pointName}:</span>
          <span className="font-bold">
            {dataKey === 'Caixa' 
              ? `R$ ${payload[0].value?.toLocaleString('pt-BR')}` 
              : `${payload[0].value}%`
            }
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto min-w-0">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/50 p-5 md:p-6 flex flex-col md:flex-row gap-6 justify-between items-center min-w-0">

        {/* Perfil */}
        <div className="flex items-center gap-4 w-full md:w-auto shrink-0">
          <div className="w-14 h-14 bg-gradient-to-br from-[#2563eb] to-[#1e40af] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 ring-4 ring-blue-50">
            <span className="text-white text-2xl font-black uppercase tracking-tight">
              {playerName.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.15em] mb-0.5">
              Gabinete de Diretrizes
            </p>
            <h2 className="text-xl font-black text-gray-800 capitalize tracking-tight leading-none">
              {playerName}
            </h2>
          </div>
        </div>

        {/* Tempo de Mandato */}
        <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-3 rounded-2xl border border-gray-100/80 text-center shadow-sm w-full md:w-auto shrink-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-80" />
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">
            Tempo de Mandato
          </p>
          <p className="text-lg font-black text-gray-800 tracking-tight">
            {currentMonth}º Mês <span className="text-gray-300 font-light mx-1">|</span> Ano {currentYear}
          </p>
          <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
            Rodada {currentRound} de 12
          </p>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto min-w-0">

     
          <div className={`flex items-center justify-between gap-4 ${budgetBg} p-4 rounded-2xl border ${budgetBorder} w-full sm:w-72 min-w-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}>
            <div className="flex flex-col min-w-[120px] shrink-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Caixa Público
                </span>
                {budgetTrend !== 0 && (
                  <span className={`text-[10px] font-bold ${budgetTrend > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {budgetTrend > 0 ? '↑' : '↓'} {Math.abs(budgetTrend) >= 1000 ? (Math.abs(budgetTrend)/1000).toFixed(1) + 'k' : Math.abs(budgetTrend)}
                  </span>
                )}
              </div>
              <span className={`text-lg font-black truncate ${budgetText} tracking-tight`}>
                {formattedBudget}
              </span>
            </div>

      
            <div className="w-full h-12 min-w-0 relative overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={history} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                  <defs>
                    <linearGradient id={budgetGradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={budgetColor} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={budgetColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={['dataMin - 5000', 'dataMax + 5000']} />
                  <Tooltip 
                    content={<CustomTooltip dataKey="Caixa" />}
                    cursor={{ stroke: budgetColor, strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Caixa" 
                    stroke={budgetColor} 
                    strokeWidth={2.5} 
                    fill={`url(#${budgetGradientId})`}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Card: Aprovação */}
          <div className={`flex items-center justify-between gap-4 ${approvalBg} p-4 rounded-2xl border ${approvalBorder} w-full sm:w-72 min-w-0 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]`}>
            <div className="flex flex-col min-w-[120px] shrink-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  Aprovação
                </span>
                {approvalTrend !== 0 && (
                  <span className={`text-[10px] font-bold ${approvalTrend > 0 ? 'text-blue-600' : 'text-red-500'}`}>
                    {approvalTrend > 0 ? '↑' : '↓'} {Math.abs(approvalTrend)}
                  </span>
                )}
              </div>
              <span className={`text-lg font-black ${approvalText} tracking-tight`}>
                {approval}%
              </span>
            </div>

          
            <div className="w-full h-12 min-w-0 relative overflow-hidden">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={history} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                  <defs>
                    <linearGradient id={approvalGradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={approvalColor} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={approvalColor} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    content={<CustomTooltip dataKey="Aprovação" />}
                    cursor={{ stroke: approvalColor, strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="Aprovação" 
                    stroke={approvalColor} 
                    strokeWidth={2.5} 
                    fill={`url(#${approvalGradientId})`}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}