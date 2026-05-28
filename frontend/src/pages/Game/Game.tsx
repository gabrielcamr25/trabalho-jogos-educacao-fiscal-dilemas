import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { startGameDeck } from '../../services/api';

import { HeaderStatus } from '../../components/HeaderStatus';
import { DilemmaCard } from '../../components/DilemmaCards'; 

import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';

import bgWelcome from '../../assets/background-img-welcome-page.png';
import bgCloud1 from '../../assets/img-nuvem-1.png'; 
import bgCloud2 from '../../assets/img-nuvem-2.png';
import bgCloud3 from '../../assets/img-nuvem-3.png';
import bgBlue from '../../assets/background-img-blue.png';

interface ImprovementOption {
  id: string;
  title: string;
  description: string;
  cost: number;
  approvalBonus: number;
  icon: string;
}

interface ImprovementTemplate {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const INITIAL_BUDGET = 100000;
const INITIAL_APPROVAL = 50;

const INVESTMENT_TIERS = [
  { minCost: 6000, maxCost: 10000, minApprovalBonus: 3, maxApprovalBonus: 5 },
  { minCost: 15000, maxCost: 25000, minApprovalBonus: 5, maxApprovalBonus: 7 },
  { minCost: 25000, maxCost: 50000, minApprovalBonus: 7, maxApprovalBonus: 12 }
] as const;

const ROUND_INVESTMENTS: ImprovementTemplate[][] = [
  [
    {
      id: 'fiscal',
      title: 'Educação Fiscal',
      description: 'Conscientização nas escolas sobre a função social dos tributos arrecadados.',
      icon: '📚'
    },
    {
      id: 'saude-posto',
      title: 'Ampliar Posto',
      description: 'Médicos especialistas e vans móveis para agilizar atendimentos locais.',
      icon: '🏥'
    },
    {
      id: 'infra-pavimentacao',
      title: 'Infraestrutura',
      description: 'Obras de pavimentação, asfalto novo e modernização para iluminação LED.',
      icon: '🚧'
    }
  ],
  [
    {
      id: 'ouvidoria',
      title: 'Ouvidoria Cidadã',
      description: 'Canal digital para registrar demandas, acompanhar protocolos e medir satisfação.',
      icon: '📣'
    },
    {
      id: 'creche',
      title: 'Vagas em Creche',
      description: 'Abertura de turmas extras e contratação temporária para reduzir a fila infantil.',
      icon: '🧸'
    },
    {
      id: 'saneamento',
      title: 'Rede de Saneamento',
      description: 'Ampliação de esgoto tratado em bairros com maior risco sanitário.',
      icon: '🚰'
    }
  ],
  [
    {
      id: 'portal-transparencia',
      title: 'Portal Aberto',
      description: 'Publicação clara de contratos, despesas e indicadores para controle social.',
      icon: '🧾'
    },
    {
      id: 'transporte-escolar',
      title: 'Transporte Escolar',
      description: 'Revisão de rotas, manutenção da frota e reforço para estudantes da zona rural.',
      icon: '🚌'
    },
    {
      id: 'drenagem',
      title: 'Drenagem Urbana',
      description: 'Limpeza de galerias e obras em pontos críticos de alagamento.',
      icon: '🌧️'
    }
  ],
  [
    {
      id: 'mutirao-iptu',
      title: 'Mutirão do IPTU',
      description: 'Atendimento orientado para regularização, isenção correta e negociação de débitos.',
      icon: '🏠'
    },
    {
      id: 'ubs-digital',
      title: 'UBS Digital',
      description: 'Agendamento online, prontuário integrado e triagem para reduzir filas.',
      icon: '💻'
    },
    {
      id: 'praca-segura',
      title: 'Praça Segura',
      description: 'Iluminação, câmeras comunitárias e reforma de áreas públicas de convivência.',
      icon: '💡'
    }
  ],
  [
    {
      id: 'coleta-seletiva',
      title: 'Coleta Seletiva',
      description: 'Ecobairros, cooperativas e pontos de entrega voluntária para resíduos recicláveis.',
      icon: '♻️'
    },
    {
      id: 'merenda',
      title: 'Merenda de Qualidade',
      description: 'Compra local, cardápio nutricional e fiscalização do abastecimento escolar.',
      icon: '🍽️'
    },
    {
      id: 'ponte-rural',
      title: 'Ponte Rural',
      description: 'Recuperação de acesso usado por produtores, estudantes e equipes de saúde.',
      icon: '🌉'
    }
  ],
  [
    {
      id: 'capacitacao-servidores',
      title: 'Capacitar Servidores',
      description: 'Treinamento em atendimento, compras públicas, ética e gestão por resultados.',
      icon: '🎓'
    },
    {
      id: 'guarda-comunitaria',
      title: 'Guarda Comunitária',
      description: 'Rondas preventivas em escolas, feiras e terminais com foco em mediação.',
      icon: '🛡️'
    },
    {
      id: 'centro-reabilitacao',
      title: 'Centro de Reabilitação',
      description: 'Serviços de fisioterapia e acompanhamento para reduzir viagens a outras cidades.',
      icon: '🩺'
    }
  ],
  [
    {
      id: 'feira-empreendedor',
      title: 'Feira do Empreendedor',
      description: 'Apoio a pequenos negócios, formalização e educação financeira local.',
      icon: '🛍️'
    },
    {
      id: 'biblioteca-viva',
      title: 'Biblioteca Viva',
      description: 'Ampliação do acervo, oficinas culturais e espaço de estudo no contraturno.',
      icon: '📖'
    },
    {
      id: 'terminal-integrado',
      title: 'Terminal Integrado',
      description: 'Reorganização de linhas, abrigos cobertos e acessibilidade no transporte público.',
      icon: '🚏'
    }
  ],
  [
    {
      id: 'hortas-urbanas',
      title: 'Hortas Urbanas',
      description: 'Uso de terrenos públicos para produção comunitária e educação ambiental.',
      icon: '🌱'
    },
    {
      id: 'farmacia-basica',
      title: 'Farmácia Básica',
      description: 'Reposição estratégica de medicamentos essenciais e controle de estoque.',
      icon: '💊'
    },
    {
      id: 'habita-ratanaba',
      title: 'Habitação Social',
      description: 'Projeto de moradia digna com prioridade para famílias em área de risco.',
      icon: '🏘️'
    }
  ],
  [
    {
      id: 'auditoria-contratos',
      title: 'Auditoria de Contratos',
      description: 'Revisão de contratos ativos para cortar desperdícios e aumentar confiança pública.',
      icon: '🔎'
    },
    {
      id: 'esporte-bairros',
      title: 'Esporte nos Bairros',
      description: 'Equipamentos, monitores e torneios comunitários para jovens no contraturno.',
      icon: '🏀'
    },
    {
      id: 'hospital-dia',
      title: 'Hospital Dia',
      description: 'Estrutura para procedimentos de baixa complexidade e desafogamento da rede.',
      icon: '🏥'
    }
  ],
  [
    {
      id: 'regularizacao-fundiaria',
      title: 'Regularização Fundiária',
      description: 'Mutirão jurídico e técnico para entregar segurança de posse a famílias vulneráveis.',
      icon: '📄'
    },
    {
      id: 'defesa-civil',
      title: 'Defesa Civil',
      description: 'Mapeamento de risco, alertas preventivos e kits emergenciais para enchentes.',
      icon: '🚨'
    },
    {
      id: 'parque-linear',
      title: 'Parque Linear',
      description: 'Recuperação ambiental de córrego urbano com lazer, drenagem e arborização.',
      icon: '🌳'
    }
  ],
  [
    {
      id: 'conselhos-populares',
      title: 'Conselhos Populares',
      description: 'Fortalecimento de reuniões públicas para priorizar obras e fiscalizar serviços.',
      icon: '🤝'
    },
    {
      id: 'laboratorio-inovacao',
      title: 'Laboratório Público',
      description: 'Equipe para simplificar serviços, automatizar processos e reduzir filas.',
      icon: '🧪'
    },
    {
      id: 'anel-viario',
      title: 'Anel Viário',
      description: 'Intervenção de mobilidade para tirar tráfego pesado do centro da cidade.',
      icon: '🛣️'
    }
  ],
  [
    {
      id: 'prestacao-contas',
      title: 'Prestação de Contas',
      description: 'Audiências de encerramento com indicadores, metas cumpridas e próximos desafios.',
      icon: '📊'
    },
    {
      id: 'plano-diretor',
      title: 'Plano Diretor',
      description: 'Revisão participativa do crescimento urbano, zoneamento e proteção ambiental.',
      icon: '🗺️'
    },
    {
      id: 'complexo-educacional',
      title: 'Complexo Educacional',
      description: 'Escola em tempo integral com esporte, cultura, tecnologia e apoio pedagógico.',
      icon: '🏫'
    }
  ]
];

export function Game() {
  const location = useLocation();
  const navigate = useNavigate();
  const playerName = location.state?.playerName || 'Prefeito';

  const [dilemmas, setDilemmas] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); 
  const [loading, setLoading] = useState(true);

  const [budget, setBudget] = useState(INITIAL_BUDGET); 
  const [approval, setApproval] = useState(INITIAL_APPROVAL); 
  const [showImprovement, setShowImprovement] = useState(false);
  const [purchasedImprovements, setPurchasedImprovements] = useState<any[]>([]);

  const [history, setHistory] = useState<any[]>([
    { name: 'Início', Caixa: INITIAL_BUDGET, Aprovação: INITIAL_APPROVAL }
  ]);

  useEffect(() => {
    const fetchDilemmas = async () => {
      const deck = await startGameDeck();
      setDilemmas(deck);
      setLoading(false);
    };
    fetchDilemmas();
  }, []);

  const getScaledImprovements = (round: number): ImprovementOption[] => {
    const scaleValue = (min: number, max: number) => {
      if (round <= 1) return min;
      if (round >= 12) return max;
      return Math.round(min + ((max - min) / 11) * (round - 1));
    };

    const templates = ROUND_INVESTMENTS[(round - 1) % ROUND_INVESTMENTS.length];

    return templates.map((template, index) => {
      const tier = INVESTMENT_TIERS[index];

      return {
        ...template,
        id: `${template.id}-round-${round}`,
        cost: scaleValue(tier.minCost, tier.maxCost),
        approvalBonus: scaleValue(tier.minApprovalBonus, tier.maxApprovalBonus)
      };
    });
  };

  const handleChoice = (budgetImpact: number, approvalImpact: number) => {
    const nextBudget = budget + budgetImpact;
    const nextApproval = Math.min(100, Math.max(0, approval + approvalImpact));
    const nextMonth = currentQuestionIndex + 1;

    setBudget(nextBudget);
    setApproval(nextApproval);
    
    setHistory((prev) => [
      ...prev, 
      { name: `${nextMonth}º M`, Caixa: nextBudget, Aprovação: nextApproval }
    ]);
    
    if (nextMonth % 4 === 0 && nextMonth < dilemmas.length) {
      setShowImprovement(true);
    }

    setCurrentQuestionIndex(nextMonth);
  };

  const handleApplyImprovement = (cost: number, approvalBonus: number, title: string, icon: string, round: number) => {
    const nextBudget = budget - cost;
    const nextApproval = Math.min(100, approval + approvalBonus);

    setBudget(nextBudget);
    setApproval(nextApproval);

    setPurchasedImprovements((prev) => [
      ...prev,
      { title, cost, icon, round }
    ]);

    setHistory((prev) => [
      ...prev,
      { name: `Inv.`, Caixa: nextBudget, Aprovação: nextApproval }
    ]);

    setShowImprovement(false);
  };

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#1e64c8] flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mb-2"></div>
        <h2 className="text-sm font-medium animate-pulse">Acessando Gabinete...</h2>
      </div>
    );
  }

  if (!loading && dilemmas.length === 0) {
    return (
      <div className="h-screen w-full bg-[#1e64c8] flex flex-col items-center justify-center text-white p-4 text-center">
        <h2 className="text-base font-bold mb-1">Conexão interrompida</h2>
        <button onClick={() => window.location.reload()} className="bg-[#D4E157] text-[#1F2937] font-bold py-1 px-3 rounded-lg text-[10px]">
          Tentar Novamente
        </button>
      </div>
    );
  }

  if (currentQuestionIndex >= dilemmas.length && !showImprovement) {
    return (
      <div className="h-screen w-full bg-[#1e64c8] flex items-center justify-center p-3">
        <div className="bg-white p-5 rounded-2xl shadow-xl text-center max-w-3xl w-full border border-white/20 flex flex-col items-center animate-fade-in-up max-h-[96vh] overflow-y-auto">
          
          <div className="mb-2">
            <h1 className="text-xl font-black text-gray-800 tracking-tight leading-none">Mandato Concluído!</h1>
            <p className="text-gray-400 text-xs mt-0.5">Balanço final da sua gestão pública:</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-3">
            <div className="bg-emerald-50/60 p-2 rounded-xl border border-emerald-100 flex flex-col items-center">
              <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Caixa Final</span>
              <span className={`text-base font-black ${budget < 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(budget)}
              </span>
            </div>
            <div className="bg-blue-50/60 p-2 rounded-xl border border-blue-100 flex flex-col items-center">
              <span className="text-[10px] text-blue-700 font-bold uppercase tracking-wider">Aprovação Final</span>
              <span className={`text-base font-black ${approval < 30 ? 'text-red-600' : 'text-[#1e64c8]'}`}>{approval}%</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 w-full">
              <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider text-left mb-1 pl-1">Evolução do Caixa</h3>
              <div className="w-full h-24 text-[8px] font-medium text-gray-400">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history} margin={{ top: 2, right: 2, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="finalCaixa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" tickLine={false} stroke="#9ca3af" />
                    <YAxis tickLine={false} axisLine={false} stroke="#9ca3af" />
                    <Tooltip formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Caixa']} />
                    <Area type="monotone" dataKey="Caixa" stroke="#10b981" strokeWidth={1.5} fillOpacity={1} fill="url(#finalCaixa)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-50 p-2.5 rounded-xl border border-gray-100 w-full">
              <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider text-left mb-1 pl-1">Evolução da Aprovação</h3>
              <div className="w-full h-24 text-[8px] font-medium text-gray-400">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={history} margin={{ top: 2, right: 2, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="finalAprovacao" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis dataKey="name" tickLine={false} stroke="#9ca3af" />
                    <YAxis tickLine={false} axisLine={false} domain={[0, 100]} stroke="#9ca3af" />
                    <Tooltip formatter={(value: any) => [`${value}%`, 'Aprovação']} />
                    <Area type="monotone" dataKey="Aprovação" stroke="#2563eb" strokeWidth={1.5} fillOpacity={1} fill="url(#finalAprovacao)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-50/70 p-2.5 rounded-xl border border-gray-100 mb-3 text-left">
            <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-1.5 pl-1">Investimentos Realizados</h3>
            {purchasedImprovements.length === 0 ? (
              <p className="text-gray-400 text-xs italic pl-1">Nenhum investimento opcional foi efetuado.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 w-full max-h-16 overflow-y-auto pr-1">
                {purchasedImprovements.map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-1.5 rounded-lg flex items-center gap-2 shadow-sm">
                    <div className="text-sm bg-gray-50 p-0.5 rounded shrink-0">{item.icon}</div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-800 text-[11px] truncate leading-none">{item.title}</h4>
                      <p className="text-[9px] text-gray-400 mt-0.5">R$ {item.cost.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => navigate('/')} className="w-full max-w-xs bg-[#D4E157] text-[#1F2937] text-xs font-black py-2.5 rounded-lg shadow-md hover:bg-[#c4d24a]">
            Voltar ao Menu Principal
          </button>
        </div>
      </div>
    );
  }

  const currentDilemma = dilemmas[currentQuestionIndex] || dilemmas[dilemmas.length - 1];
  const questionNumberInRound = (currentQuestionIndex % 4) + 1;
  
  const macroRound = showImprovement 
    ? Math.floor((currentQuestionIndex - 1) / 4) + 1 
    : Math.floor(currentQuestionIndex / 4) + 1;

  const activeImprovements = getScaledImprovements(macroRound);

  return (
    <div className="relative h-screen w-full flex flex-col items-center overflow-hidden select-none pb-4">
      <div className="absolute inset-0 z-0" style={{ background: `url(${bgBlue}) center center / cover no-repeat` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e64c8]/90 via-[#1e64c8]/70 to-[#1e64c8]/20 z-[1]"></div>
      <div 
        className="absolute inset-0 z-[2] opacity-80 pointer-events-none"
        style={{ 
          backgroundImage: `url(${bgCloud1}), url(${bgCloud2}), url(${bgCloud3})`,
          backgroundPosition: '5% 1%, 85% 0.5%, 45% 2%',
          backgroundSize: '8% auto, 6% auto, 9% auto', 
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat'
        }}
      />
      <div className="absolute inset-0 z-[3] opacity-10 mix-blend-overlay pointer-events-none" style={{ background: `url(${bgWelcome}) center bottom / 100% auto no-repeat` }} />

      <div className="z-10 w-full max-w-5xl px-3 pt-2 md:pt-3 flex flex-col items-center h-full max-h-screen overflow-hidden">
        
        <HeaderStatus 
          playerName={playerName} 
          budget={budget} 
          approval={approval} 
          currentQuestionIndex={showImprovement ? currentQuestionIndex - 1 : currentQuestionIndex} 
          history={history}
        />

        <div className="w-full flex-1 flex flex-col items-center justify-center min-h-0 mt-2">
          {showImprovement ? (
            <div className="w-full max-w-[840px] bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-5 animate-fade-in-up flex flex-col max-h-[72vh] min-h-0">
              
              <div className="text-center mb-3 shrink-0">
                <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Balanço Quadrimestral
                </span>
                <h3 className="text-base md:text-lg font-black text-gray-800 mt-1 tracking-tight leading-none">
                  Investimentos da Cidade — Rodada {macroRound} Concluída!
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full flex-1 min-h-0 overflow-y-auto py-1 pr-1">
                {activeImprovements.map((opt) => {
                  const canAfford = budget >= opt.cost;
                  return (
                    <div 
                      key={opt.id} 
                      className={`bg-gray-50/70 rounded-xl p-3.5 border flex flex-col justify-between transition-all ${
                        canAfford ? 'border-gray-200 shadow-md bg-white' : 'border-gray-100 opacity-40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1.5 border-b border-gray-100 pb-1.5">
                          <span className="text-xl leading-none">{opt.icon}</span>
                          <h4 className="font-extrabold text-gray-800 text-[13px] tracking-tight leading-tight">{opt.title}</h4>
                        </div>
                        <p className="text-gray-500 text-[11.5px] leading-relaxed mb-3">{opt.description}</p>
                      </div>

                      <div>
                        <div className="flex flex-col gap-1 text-[10.5px] font-bold border-t border-gray-100 pt-2 mb-2.5">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Custo Geral:</span>
                            <span className="text-gray-800 font-black">R$ {opt.cost.toLocaleString('pt-BR')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Bônus Popular:</span>
                            <span className="text-emerald-600 font-black">+{opt.approvalBonus}%</span>
                          </div>
                        </div>
                        <button
                          disabled={!canAfford}
                          onClick={() => handleApplyImprovement(opt.cost, opt.approvalBonus, opt.title, opt.icon, macroRound)}
                          className={`w-full py-2 rounded-lg font-black text-[11.5px] tracking-wide shadow-sm transition-all ${
                            canAfford 
                              ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {canAfford ? 'Confirmar Investimento' : 'Saldo Insuficiente'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full text-center mt-3 pt-2 border-t border-gray-100 shrink-0">
                <button
                  onClick={() => setShowImprovement(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-700 bg-blue-600 px-7 py-2.5 text-[12px] font-black tracking-wide text-white shadow-md shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Poupar Recursos e Avançar
                  <ArrowRight size={15} strokeWidth={3} aria-hidden="true" />
                </button>
              </div>

            </div>
          ) : (
            <div className="w-full flex justify-center items-center min-h-0">
              <DilemmaCard 
                theme={currentDilemma.theme}
                title={currentDilemma.title}
                description={currentDilemma.description}
                options={currentDilemma.options}
                currentRound={questionNumberInRound} 
                totalRounds={4} 
                macroRound={macroRound}
                onChoice={handleChoice}
              />
            </div>
          )}
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.25s ease-out forwards;
        }

        .z-10 w-full .bg-white, [class*="DilemmaCard"], .shadow-xl {
          padding: 0.8rem 1.2rem !important;
          margin-top: 0.2rem !important;
          border-radius: 1.25rem !important;
          max-width: 840px !important;
          width: 100% !important;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05) !important;
        }
        
        .z-10 h2, .z-10 h3, .z-10 [class*="title"] {
          font-size: 16.5px !important;
          font-weight: 900 !important;
          margin-bottom: 0.3rem !important;
          color: #1f2937 !important;
          letter-spacing: -0.025em !important;
        }
        .z-10 p, .z-10 .text-gray-600, .z-10 [class*="description"] {
          font-size: 13px !important;
          line-height: 1.45 !important;
          margin-bottom: 0.6rem !important;
          color: #4b5563 !important;
        }

        .z-10 button, .z-10 [class*="OptionButton"], .z-10 [class*="option"] {
          padding-top: 0.35rem !important;
          padding-bottom: 0.35rem !important;
          padding-left: 0.75rem !important;
          padding-right: 0.75rem !important;
          margin-bottom: 0.2rem !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          min-height: auto !important;
          border-radius: 0.6rem !important;
        }

        .z-10 button > div, .z-10 [class*="option"] > div {
          padding: 0px !important;
          gap: 0.3rem !important;
        }
      `}</style>
    </div>
  );
}
