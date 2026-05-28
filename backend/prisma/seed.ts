import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

async function main() {
  console.log('🌱 Iniciando seed revisado, contextualizado e embaralhado...');

  await prisma.option.deleteMany();
  await prisma.dilemma.deleteMany();

  const roundEasy = [
    {
      title: "UBS Novo Horizonte sem médico há 14 dias",
      description: "A UBS do bairro Novo Horizonte perdeu seus dois médicos — um se aposentou e outro foi convocado por concurso estadual. A fila de espera na porta chega a 40 pessoas às 5h. Dona Nazaré organizou um protesto com panelas na frente da prefeitura ontem. O secretário Marcelo Figueira diz que o governo estadual tem obrigação legal de repor, mas o ofício enviado há 10 dias não foi respondido. A câmara quer uma solução até sexta-feira.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Abrir processo seletivo simplificado de emergência, contratar dois médicos por 90 dias com diária de R$ 450 e reabrir a UBS em 48 horas, assumindo o custo extra.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Enviar segundo ofício ao estado, desta vez com cópia ao Ministério Público, e montar tenda de acolhimento na praça sem atendimento médico efetivo.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Publicar nota oficial transferindo toda a responsabilidade ao governo estadual e ignorar o protesto, sob risco de Dona Nazaré convocar a imprensa nacional.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Desviar R$ 18 mil da verba de manutenção de ambulâncias para pagar dívidas da campanha do vereador Claudinho, deixando a UBS fechada indefinidamente.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Vacina da gripe acaba no 1º dia da campanha",
      description: "O estoque de 2.400 doses de vacina contra influenza acabou às 9h30 do primeiro dia. Idosos acima de 80 anos dormiram na fila e voltaram para casa sem imunização. O fornecedor, Krieger Pharma (do empresário Otávio Krieger), alega 'atraso na cadeia logística nacional'. O Ministério da Saúde confirmou que o lote emergencial pode chegar em 72h se houver solicitação formal com justificativa de surto local.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Solicitar lote emergencial ao MS, abrir ponto extra de vacinação no ginásio poliesportivo e priorizar idosos acima de 80 com senha numerada.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Remarcar idosos para daqui a 7 dias, montar lista manual por ordem de chegada e aguardar o lote federal sem ampliar pontos de vacinação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender as 200 doses remanescentes de outra unidade para uma clínica privada do primo do secretário Marcelo, recebendo comissão de 15% em dinheiro vivo.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Cancelar a campanha municipal e convocar coletiva culpando o repasse federal, sem mencionar que a prefeitura solicitou estoque insuficiente há dois meses.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ambulância rural parada na estrada de terra",
      description: "A única ambulância do distrito rural (placa KRI-1980, modelo 2011) quebrou o eixo na estrada de terra do Sítio São José. O motorista ficou 6 horas esperando reboque. Emergências agora dependem de carros de populares. O conserto na oficina municipal levaria 20 dias por falta de peça. Uma locadora particular oferece uma ambulância tipo II por R$ 3.800/mês.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Alugar ambulância particular emergencialmente por 60 dias e acelerar a compra do eixo via licitação de menor preço com entrega expressa.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Solicitar reforço ao SAMU estadual, sabendo que a base mais próxima fica a 45 minutos e já recusou três pedidos anteriores do município.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender a ambulância quebrada por R$ 4.200 para a sucateira do irmão do vereador Claudinho, sem licitação e sem reserva técnica de avaliação.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Emitir nota orientando que moradores adquiram veículos próprios para emergências, citando 'autonomia comunitária' como política de governo.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Dengue explode e centro de saúde sem soro",
      description: "Casos de dengue subiram de 12 para 89 em 21 dias. O Centro de Saúde Dr. Alcides Teixeira não tem soro fisiológico nem dipirona em gotas para crianças há uma semana. A farmácia básica recebeu um lote de soro vencido em março. O governo federal liberou verba de R$ 120 mil para combate, mas o repasse depende de apresentação de plano municipal de contingência.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Declarar emergência epidemiológica, mobilizar 6 equipes de combate ao mosquito, reabastecer estoque de soro e apresentar plano para liberar verba federal.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Fazer palestras de conscientização nas 8 escolas municipais e aguardar a temporada de chuvas passar, sem mobilizar equipes de combate ao vetor.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Proibir a divulgação dos números reais, ameaçar processar Bruna Costa do Correio da Cidade por 'alarmismo', e negar epidemia em coletiva.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Comprar 400 litros de inseticida vencido superfaturado (R$ 28 mil) de Krieger Pharma e pulverizar apenas nos 3 bairros de eleitores da base aliada.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Farmácia básica sem insulina para 73 diabéticos",
      description: "A farmácia básica da rua XV de Novembro está sem insulina NPH e anti-hipertensivos há 9 dias. O estoque foi desviado indevidamente para a UBS do centro, que tem demanda menor. Pacientes crônicos cadastrados estão comprando insulina na farmácia particular por R$ 87 a cartela. A fila de reclamação no balcão viralizou nas redes sociais ontem à noite.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Adquirir medicamentos via licitação emergencial de menor preço (R$ 14.300), redistribuir do centro para a farmácia básica e notificar os 73 pacientes por SMS.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Limitar a entrega para 1 caixa por família e distribuir folheto pedindo 'economia solidária' até a reposição, sem data definida.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Afirmar que o fornecedor Krieger Pharma falhou na entrega e recomendar que pacientes comprem em farmácia particular, com nota fiscal para possível ressarcimento.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Desviar o remanescente do estoque para venda no mercado paralelo via funcionário fantasma, falsificando registros de dispensação.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Infiltração interdita Escola João Paulo",
      description: "A Escola Municipal João Paulo, construída em 1978, apresenta infiltração grave no forro de 4 salas após as chuvas de janeiro. O engenheiro da prefeitura constatou risco de desabamento parcial. 187 alunos do 1º ao 5º ano foram deslocados para o pátio coberto. Os pais ameaçam ação coletiva. A reforma orçada pela Krieger Construções é de R$ 340 mil.",
      theme: "Educação",
      options: {
        create: [
          { text: "Contratar reforma emergencial por R$ 290 mil via licitação de menor preço, realocar alunos provisoriamente no prédio da antiga creche municipal desativada.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Transferir as 187 crianças para o ginásio poliesportivo dividindo espaço com turmas de judô e futsal, adiando a reforma para o orçamento de 2027.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar orçamento de R$ 520 mil com a Krieger Construções, incluindo R$ 180 mil de 'administração de obra' que será repassada ao vereador Claudinho em caixa dois.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Manter aulas no pátio descoberto em formato 'escola ao ar livre', justificando em nota que o contato com a natureza melhora a imunidade das crianças.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Fornecedor de merenda suspende entrega por dívidas",
      description: "O Consórcio Alimentar Norte, fornecedor de merenda escolar há 4 anos, suspendeu as entregas porque a prefeitura deve R$ 87 mil de entregas de novembro e dezembro. 1.420 crianças da rede municipal estão sem almoço há 3 dias. O contrato vence em 60 dias e a multa por rescisão antecipada é de R$ 25 mil. O FNDE confirmou que o repasse federal caiu na conta em 15 de janeiro, mas o dinheiro foi usado para pagar 13º dos comissionados.",
      theme: "Educação",
      options: {
        create: [
          { text: "Negociar pagamento parcelado emergencial de R$ 20 mil à vista e restante em 3 parcelas, garantindo retomada da merenda já na segunda-feira.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Solicitar que as mães levem marmita de casa durante 30 dias, prometendo reembolso simbólico de R$ 3 por dia que nunca será pago.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Emitir circular aos pais culpando o governo federal pelo atraso do FNDE e suspender a merenda por tempo indeterminado.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Fingir pagamento ao Consórcio Alimentar Norte via nota de empenho atrasada, desviando a verba para cobrir diárias de viagem do gabinete do prefeito.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Laboratório de informática virou depósito",
      description: "Os 12 computadores doados em 2014 pelo programa federal não ligam há 8 meses. O professor de informática, Heitor Campos (também secretário de Educação), está dando aula de 'lógica de programação' no quadro negro com giz. O colégio estadual vizinho recebeu 20 novos computadores via parceria com a empresa TechVale. A Krieger Eventos ofereceu doar 15 notebooks usados de seu escritório.",
      theme: "Educação",
      options: {
        create: [
          { text: "Doar 8 equipamentos ociosos da Secretaria de Finanças, instalar Linux educacional e buscar parceria com a TechVale para reposição gradual.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Transformar o laboratório em 'sala de leitura digital' com revistas em PDF impressas, aguardando verba federal que está congelada há 18 meses.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Comprar 12 computadores usados por R$ 18 mil (preço de novos) do sócio do vereador Claudinho, recebendo propina de R$ 4 mil em equipamentos de som.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Publicar nota oficial afirmando que tecnologia não é prioridade na educação básica e que o quadro negro desenvolve 'pensamento analógico'.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Professor de matemática abandona turma no 2º bimestre",
      description: "O professor Carlos Menezes, único habilitado em matemática do ensino médio, pediu exoneração para assumir cargo estadual. A turma do 2º ano do Colégio Municipal Rui Barbosa está sem aula há 11 dias. O ENEM é daqui a 5 meses. O sindicato exige contratação imediata. Há 3 licenciados em matemática no cadastro de reserva do município, mas a lista vence em 15 dias.",
      theme: "Educação",
      options: {
        create: [
          { text: "Convocar os 3 licenciados do cadastro de reserva, fazer contratação temporária de 150 dias e homologar em 48 horas com pagamento retroativo.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Redistribuir os 32 alunos entre os professores de física, química e história, aumentando a carga horária deles em 20% sem adicional.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar a turma sem aula e declarar em nota que 'não há profissionais disponíveis no mercado de trabalho', culpando o desemprego zero na cidade.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Nomear o sobrinho do vereador Claudinho, formado em administração, para lecionar matemática via 'experiência prática em gestão de números'.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ônibus escolar rural KRI-1981 quebra na ladeira",
      description: "O único ônibus escolar que atende 6 sítios da zona rural quebrou o câmbio na ladeira do Sítio Santa Luzia. 47 crianças estão faltando à escola há 5 dias. O conserto no CNH do município leva 25 dias. O transportador particular João da Van cobra R$ 80/dia para fazer o itinerário. O pai de 12 alunos é funcionário da Krieger Construções e ofereceu 'intermediar' uma doação de uma van usada.",
      theme: "Educação",
      options: {
        create: [
          { text: "Alugar 2 vans emergencialmente por R$ 4.800/mês e iniciar conserto imediato do ônibus na oficina municipal com peça consorciada com cidade vizinha.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Pedir que os pais se organizem em caronas solidárias temporárias, oferecendo combustível de R$ 200/semana para 3 motoristas voluntários.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Reduzir o número de dias de aula para 2 vezes por semana, justificando 'modelo híbrido de educação rural' até o conserto.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Vender o ônibus para a sucateira do vereador Claudinho por R$ 3 mil e comprar outro inutilizável de 1998 com preço de 2015 via dispensa de licitação.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Cratera na Avenida Brasil após temporal",
      description: "Um buraco de 4 metros de diâmetro e 1,5m de profundidade abriu na Avenida Brasil, principal via de acesso ao centro comercial, após o temporal de 72mm em 3 horas. Dois motociclistas sofreram quedas. A Krieger Construções orçou o recapeamento do trecho em R$ 280 mil. O DAE (Departamento de Água e Esgoto) admite que a tubulação de 1960 rompeu e causou erosão.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Executar tapa-buraco emergencial com concreto usinado, sinalizar com placas luminosas e programar troca da tubulação do DAE para o próximo mês.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Colocar barricada de lonas e aguardar o período de chuvas passar (estimado em 45 dias) para fazer obra definitiva, mantendo desvio no trânsito.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar gravidade em entrevista, culpar a concessionária de água pela erosão e instalar apenas 3 cones de plástico sem sinalização noturna.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Aprovar recapeamento total da avenida por R$ 520 mil com a Krieger Construções, incluindo R$ 140 mil de 'despesas administrativas' não detalhadas.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ponte do distrito rural interditada pela Defesa Civil",
      description: "A ponte de madeira que dá acesso ao distrito rural (construída em 1992 pelo ex-prefeito) está com 4 vigas podres. A Defesa Civil interditou o trânsito de veículos acima de 1,5 tonelada. O transporte de leite dos 14 produtores locais está parado. A Krieger Construções ofereceu fazer uma ponte de concreto por R$ 420 mil em 90 dias. O prazo de entrega do leite vence em 48 horas.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Construir ponte provisória metálica (R$ 68 mil) em 72h e iniciar projeto definitivo com engenheiros estruturais independentes da Krieger.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Instalar ponte de madeira improvisada com vigas de eucalipto tratado e limitar peso a 800kg, como solução paliativa de 60 dias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Contratar a Krieger Construções por R$ 420 mil sem licitação, usando madeira de segunda qualidade e omitindo laudo técnico no processo.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Deixar a ponte interditada e declarar que 'não há recursos no caixa para obra de infraestrutura neste exercício', prejudicando os produtores.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Bairro Jardim das Flores sem água há 5 dias",
      description: "O rompimento de uma adutora de 200mm na rua das Magnólias deixou 1.200 residências do bairro Jardim das Flores sem água. A concessionária alega que o trecho é de responsabilidade municipal pelo contrato firmado sob a Lei 11.445/2007, atualizada pela Lei 14.026/2020. Moradores fazem fila em 3 cisternas improvisadas. O DAE tem equipe própria, mas o encanador chefe está de férias. Uma empresa particular cobra R$ 8 mil para reparo em 24h.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Enviar 2 caminhões-pipa emergenciais em rodízio 24h, contratar empresa particular por R$ 8 mil e iniciar reparo imediato com equipe terceirizada.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Distribuir água em horários limitados (6h-8h / 18h-20h) e pedir economia até o retorno do encanador chefe em 10 dias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar taxa extra de 'emergência hídrica' de R$ 15 por residência, condicionando o reparo ao pagamento, o que configura crime de concussão.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Emitir nota transferindo responsabilidade à concessionária, sem mencionar que o laudo técnico municipal de 2023 apontou corrosão no trecho.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Esgoto jorra na Rua das Acácias há 8 dias",
      description: "O bueiro de 600mm na Rua das Acácias entupiu devido a descarte de resíduos de obra por uma empresa terceirizada da Krieger Construções. O esgoto jorra há 8 dias, invadindo 3 residências. O cheiro atingiu a padaria do Seu Jorge, que ameaça fechar. O DAE notificou a Krieger, que nega responsabilidade. A multa ambiental por dia de descaso é de R$ 1.200.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Desentupir e higienizar a área em 24h, aplicar multa de R$ 9.600 à Krieger Construções e exigir reparo das 3 residências atingidas.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Colocar cal no local, agendar limpeza para a próxima semana e negociar com a Krieger sem aplicar multa.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Emitir nota afirmando que a rua é de responsabilidade dos moradores por 'falta de zelo comunitário' e recusar ação municipal.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Cobrar R$ 500 de cada uma das 12 residências atingidas para 'custo operacional de desentupimento', configurando cobrança indevida.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Praça da Matriz virou ponto de abandono",
      description: "A Praça da Matriz, cartão-postal do município desde 1954, está com 40% do gramado morto, playground destruído por incêndio criminoso e usada como ponto de abandono de lixo e consumo de drogas noturno. O posto da Guarda Municipal a 200m foi fechado por corte de verba. A igreja matriz ofereceu ceder 10 voluntários para vigilância. A Krieger Eventos quer alugar o espaço para feirões mensais.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Revitalizar a praça com R$ 45 mil, instalar 12 luminárias LED, playground novo e criar comissão comunitária de segurança com os voluntários da igreja.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Cercar a praça com alambrado e colocar 1 vigia noturno terceirizado por R$ 2.100/mês, mantendo o restante abandonado.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender 30% da praça para estacionamento privado do empresário Otávio Krieger, alterando o zoneamento via decreto sem discussão pública.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Fechar a praça indefinidamente com tapumes e dizer que a área é de responsabilidade do IPHAN estadual, transferindo o problema.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Viatura KRI-2015 da GM quebra e patrulhamento para",
      description: "A única viatura da Guarda Municipal (modelo 2015, 187.000km) apresentou falha no câmbio automático. O patrulhamento noturno no centro comercial foi suspenso. O sindicato ameaça greve por segurança. O conserto na autorizada custa R$ 14 mil e leva 12 dias. Uma locadora oferece viatura similar por R$ 180/dia. O comércio relatou 4 arrombamentos nas últimas 72h.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Alugar viatura emergencialmente por 20 dias e acelerar manutenção da frota na oficina municipal com peça recondicionada.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Reduzir o número de rondas para 1 a cada 3 horas e concentrar esforços apenas na rua do comércio, abandonando bairros periféricos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Comprar 2 viaturas zero de marca luxuosa por R$ 340 mil via dispensa de licitação 'para segurança pública', deixando sem verba para combustível.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Cancelar o patrulhamento noturno e emitir nota oficial dizendo que 'segurança pública noturna é função exclusiva da Polícia Militar estadual'.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Posto da PM no bairro industrial vai fechar",
      description: "O 8º BPM anunciou o fechamento do posto policial do bairro industrial por falta de efetivo estadual. O bairro concentra 120 indústrias e 8 mil trabalhadores. O sindicato patronal ameaça demissões se a segurança piorar. O prefeito pode oferecer sede municipal e custeio parcial (R$ 18 mil/mês) para manter 6 policiais. O governador é aliado, mas exige contrapartida política no estado.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Oferecer sede municipal reformada e custeio de R$ 18 mil/mês para manter o posto com efetivo estadual, assumindo contrapartida.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Solicitar reforço apenas nos fins de semana, quando o comércio funciona, deixando a área industrial desprotegida de segunda a sexta.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar 'taxa de segurança industrial' de R$ 8 por funcionário, cobrada das empresas para bancar policiais particulares no bairro.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Deixar o posto fechar e culpar o governo estadual em série de lives, sem oferecer alternativa concreta às indústrias.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Iluminação pública do bairro industrial apagada há 40 dias",
      description: "As 34 luminárias de vapor de sódio do bairro industrial apagaram após explosão do transformador da subestação municipal. A concessionária de energia elétrica alega que o transformador é de propriedade da prefeitura. Assaltos aumentaram 40% no período. O sindicato patronal ameaça mudar as indústrias para cidade vizinha. A troca do transformador custa R$ 42 mil.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Trocar transformador emergencialmente, fazer auditoria elétrica completa do bairro e cobrar da concessionária ressarcimento se comprovada responsabilidade.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Instalar 10 luminárias provisórias nos pontos mais críticos de assaltos, deixando o restante do bairro sem luz por tempo indeterminado.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Fazer contrato direto com a concessionária por R$ 58 mil (30% acima do orçado) e receber mensalidade de R$ 2 mil em troca da agilidade.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Emitir nota transferindo responsabilidade à concessionária e recusar qualquer ação, deixando o bairro às escuras.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Cruzamento da escola gera 3ª briga grave esta semana",
      description: "O cruzamento entre a Rua das Palmeiras e a Av. Brasil, saída principal da Escola Municipal João Paulo, não tem semáforo nem faixa de pedestres. Três brigas graves entre motoristas e pais de alunos ocorreram esta semana, uma com faca. A última foi filmada e viralizou. O DAE precisa relocar 2 hidrantes para instalar semáforo. A Krieger Construções orçou a obra em R$ 78 mil.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Instalar semáforo temporário solar e colocar 1 agente de trânsito no horário de pico (11h30-12h30 / 16h30-17h30) por 90 dias.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Pintar faixa de pedestre com tinta comum e instalar 2 placas de advertência, solução que dura no máximo 15 dias de chuva.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Declarar que os pais 'devem se educar no trânsito' e recusar intervenção, citando falta de verba por causa do 13º dos servidores.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Cobrar propina de R$ 8 mil dos comerciantes do entorno para 'resolver' o problema sem instalar semáforo.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Fornecedor oferece 10% de desconto em dinheiro vivo",
      description: "O fornecedor de material de expediente (papel, toner, cartuchos) enviou e-mail ao secretário de Administração oferecendo 10% de desconto se o pagamento de R$ 47 mil for feito em dinheiro vivo, sem nota fiscal complementar. O valor é referente a 3 meses de fornecimento. O secretário é primo do vereador Claudinho. A Controladoria Interna está fazendo auditoria de rotina nesta semana.",
      theme: "Ética",
      options: {
        create: [
          { text: "Recusar a proposta, encaminhar o e-mail à Controladoria e ao Ministério Público como prova de tentativa de fraude, mantendo o processo regular.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Pedir o desconto legal via nota fiscal complementar e manter o pagamento bancário com rastreabilidade, sem ganho imediato de caixa.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aceitar o desconto discretamente, sacar R$ 42.300 em dinheiro no caixa da prefeitura e destruir o e-mail do fornecedor.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Exigir 15% de propina para aprovar o pagamento em dinheiro, ameaçando trocar de fornecedor se não houver acordo.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Vereador Claudinho exige nomeação do filho",
      description: "O vereador Claudinho Duarte, líder da base aliada com 4 votos na Câmara, exige a nomeação do filho recém-formado em Direito para o cargo de assessor jurídico da prefeitura (R$ 9.800/mês). O filho não tem OAB nem experiência. A Lei de Responsabilidade Fiscal limita os cargos comissionados. A vice Jô Matos alerta que ceder abrirá precedente para outros 7 vereadores.",
      theme: "Ética",
      options: {
        create: [
          { text: "Recusar formalmente, explicar que a LRF impede ampliação de cargos, e oferecer estágio não remunerado ao filho na Procuradoria.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Nomear para um cargo em comissão sem função definida, sem acesso a verba ou decisões, apenas para cumprir a aparência do acordo político.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar cargo de 'assessor especial de projetos legislativos' para o filho e mais 3 apadrinhados, aumentando a folha em R$ 31 mil/mês.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Nomear o filho para secretaria de Finanças, substituindo o técnico de carreira, e justificar que 'a juventude traz inovação'.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Empresário presenteia prefeito com relógio de R$ 18 mil",
      description: "Após vencer licitação de R$ 2,3 milhões para reforma do paço municipal, o empresário Otávio Krieger presenteou o prefeito Ricardo Viana com um relógio de luxo avaliado em R$ 18 mil durante jantar fechado. A assessora de imprensa flagrou o momento. A Lei nº 12.813/2013 exige devolução de presentes acima de R$ 100 de agentes públicos. A Comissão de Ética não foi instituída nesta gestão.",
      theme: "Ética",
      options: {
        create: [
          { text: "Devolver o relógio pessoalmente a Otávio Krieger, registrar o fato em ata pública e instituir a Comissão de Ética municipal em 30 dias.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Aceitar o relógio, doá-lo para leilão beneficente da Santa Casa, declarar publicamente a origem e o valor, e usar o fato para promover transparência.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Exigir relógios similares dos outros 3 licitantes como 'custo de relacionamento' e ameaçar excluir quem não oferecer presente.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Guardar o relógio, afirmar que é 'presente de amigo pessoal de longa data' e processar a assessora por violação de intimidade.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Vazamento expõe CPF e renda de 8 mil contribuintes",
      description: "Um erro de configuração no portal da transparência expôs planilha com CPF, endereço e renda declarada de 8.047 contribuintes do IPTU. A planilha ficou acessível por 11 dias. Bruna Costa, do Correio da Cidade, descobriu e publicou a notícia. A LGPD prevê multa de até 2% do faturamento. O responsável pelo TI é sobrinho do vereador Claudinho. A população cobra explicações.",
      theme: "Ética",
      options: {
        create: [
          { text: "Abrir investigação interna, notificar todas as 8.047 vítimas por e-mail e carta, reforçar segurança digital e assumir erro publicamente.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Dizer que foi 'falha técnica pontual do servidor de hospedagem' e contratar empresa de TI do vereador Claudinho para 'avaliação' por R$ 35 mil.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar o vazamento, chamar a reportagem de 'fake news', ameaçar processar Bruna Costa e manter a planilha no ar por descuido.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Vender os dados restantes para empresa de marketing de Salvador por R$ 12 mil, sem consentimento dos contribuintes.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Câmara aprova redução geral do IPTU sem contrapartida",
      description: "Por pressão da base eleitoral, a Câmara aprovou projeto de lei reduzindo em 15% a alíquota geral do IPTU a partir do próximo exercício. A arrecadação cairá R$ 4,2 milhões anuais. Não há previsão de corte de despesa. O TCE alertou que a medida pode configurar irresponsabilidade fiscal. A eleição municipal é daqui a 14 meses. A população comemora nas redes sociais.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Vetar o projeto por inconstitucionalidade formal, propor reforma tributária estruturada com revisão de isenções e redução gradual.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Sancionar com redução escalonada: 5% no 1º ano, 10% no 2º, apenas se meta de arrecadação alternativa for atingida.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Sancionar imediatamente para capitalizar popularidade eleitoral, ignorando o déficit futuro e a advertência do TCE.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Aprovar redução para 6 bairros da base aliada e aumentar alíquota de 4 bairros da oposição, criando inconstitucionalidade regional.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Indústria Krieger deixa de recolher ISS há 2 anos",
      description: "A Krieger Indústria Metalúrgica, maior empregadora do município (320 funcionários), deixou de recolher ISS sobre notas de serviço por 24 meses. A dívida passa de R$ 2,1 milhões. Otávio Krieger alega crise do setor. O procurador recomenda execução fiscal. O sindicato dos metalúrgicos ameaça greve se a fábrica fechar. A Câmara quer anistia via Refis.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Inscrever na dívida ativa, ajuizar execução fiscal imediata, penhorar contas e equipamentos, assumindo risco de fechamento da empresa.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Negociar parcelamento especial em 60 meses, com redução de 30% dos juros, para evitar fechamento da fábrica e demissões em massa.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 180 mil de propina de Otávio Krieger para arquivar o processo e fraudar a dívida tributária como 'inscrita em dívida ativa prescrita'.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Perdoar 80% da dívida via decreto, em troca de promessa de manter empregos e apoio político nas eleições, sem garantia formal.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Taxa de limpeza de festas é declarada ilegal",
      description: "O Ministério Público obteve liminar declarando ilegal a taxa de 'limpeza de festas' cobrada de bares e restaurantes (R$ 120/evento). A arrecadação mensal era de R$ 18 mil. O dinheiro financiava a coleta noturna do centro. Sem a taxa, 4 caminhões de lixo ficarão parados. A Câmara quer criar nova taxa com outro nome. Os comerciantes celebraram na porta do fórum.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Extirpar a cobrança ilegal, regulamentar apenas taxas previstas em lei e redirecionar verba do gabinete para manter a coleta noturna.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Criar 'taxa de conservação do espaço público' com alíquota de R$ 90/evento, mantendo a mesma base tributária sob outra nomenclatura.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dobrar a cobrança informalmente e ameaçar fechar estabelecimentos que reclamarem, usando fiscais para intimidar donos de bar.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Manter a cobrança clandestina e orientar fiscais a agirem com 'discrição', sem recibo, dividindo o arrecadado com a Câmara.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Refis perdoa 90% dos juros para devedores de longa data",
      description: "O projeto de Refis aprovado na Câmara perdoa 90% dos juros e 40% da multa para contribuintes com dívidas acima de 5 anos. O impacto estimado é R$ 8,7 milhões a menos na receita. A maior parte da dívida é de 3 grandes empresas do setor imobiliário, todas doadoras de campanha. O TCE diz que o perdão configura benefício indevido. A população comum tem dívidas menores e não será beneficiada.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Vetar por ilegalidade e propor programa de regularização justo com redução de 25% dos juros e parcelamento em 24 meses para todos.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Sancionar com redução de 50% dos juros e parcelamento curto de 12 meses, limitando o benefício a dívidas de até R$ 50 mil.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar Refis secreto para os 3 grandes devedores aliados, sem publicidade, e sancionar o projeto público apenas para pequenos devedores.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Sancionar como está, beneficiando os 3 grandes devedores e promovendo evento de lançamento com os empresários no palanque.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Sistema duplica IPTU de 500 idosos por bug",
      description: "Um erro de programação no sistema tributário duplicou o valor do IPTU de 500 contribuintes acima de 65 anos que tinham direito à isenção por renda baixa. O valor extra arrecadado é de R$ 340 mil. O erro foi identificado internamente há 20 dias, mas ninguém corrigiu por medo de assumir culpa. Os idosos começaram a receber cobranças do Prodam (processamento de dívida ativa).",
      theme: "Impostos",
      options: {
        create: [
          { text: "Corrigir sistema imediatamente, restituir R$ 340 mil integralmente com correção pelo IPCA, pedir desculpas públicas e afastar gestor do TI.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Estornar em 12 parcelas ao longo do próximo ano fiscal, sem correção monetária, para não comprometer o caixa do exercício atual.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Apropriar-se do valor extra, justificar que será usado em 'obras de infraestrutura para a terceira idade' e manter o sistema com erro.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Negar o erro, dizer que os idosos 'preencheram formulário de isenção incorretamente' e exigir que recorram judicialmente.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Caminhão de lixo KLI-4522 quebra e lixo acumula no centro",
      description: "O caminhão compactador KLI-4522 (único do centro comercial) quebrou o sistema hidráulico. O lixo se acumula há 4 dias na Rua XV de Novembro, atraindo ratos e mau cheiro. O comércio ameaça fechar na próxima sexta-feira. O conserto leva 8 dias. Uma locadora de equipamentos pesados cobra R$ 1.200/dia por caminhão substituto. A Krieger Construções ofereceu 'doar' um caminhão usado.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Alugar caminhão substituto emergencialmente por 10 dias e acelerar manutenção do KLI-4522 na garagem municipal com peça importada.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Organizar mutirão comunitário com 30 moradores, fornecer luvas e álcool em gel, e pedir ajuda para recolhimento provisório.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar acumular e culpar a empresa terceirizada de limpeza urbana, ameaçando rescindir contrato que vence só no próximo ano.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Desviar R$ 25 mil da verba de manutenção da frota para pagar viagens do prefeito a Brasília, deixando a cidade em estado de abandono.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Queimadas em lotes baldios invadem UBS",
      description: "Moradores de 7 lotes baldios no bairro São Cristóvão estão queimando lixo e entulho para 'limpar' os terrenos. A fumaça invade a UBS Dr. Alcides Teixeira, prejudicando pacientes com problemas respiratórios. O Código Florestal municipal proíbe queimadas urbanas, mas não há fiscalização. Um dos terrenos pertence ao vereador Claudinho. A multa por infração é de R$ 1.500 por lote.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Proibir queimadas via decreto, multar os 7 infratores e intensificar coleta de lixo no bairro com caminhão extra aos sábados.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Fazer campanha educativa nas escolas e pedir que não queimem nos horários de pico de ventilação (10h-14h), como medida paliativa.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar as queimadas, declarar que é 'tradição local de limpeza pré-construção' e recusar multar os proprietários.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Vender autorização de queimada por R$ 800 por lote para desocupar terrenos e favorecer especulação imobiliária de Otávio Krieger.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Rio da cidade espuma e peixes mortos às margens",
      description: "O Rio das Flores, que corta o centro, está com espuma branca e cheiro de amônia tóxica. Centenas de peixes apareceram mortos nas últimas 48h. A fiscalização ambiental identificou descarte irregular da Krieger Indústria Metalúrgica no córrego tributário. O Ibama foi acionado. Otávio Krieger ofereceu R$ 50 mil para 'arquivar' o auto de infração. A comunidade ribeirinha está com náuseas.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Fiscalizar a Krieger Indústria, embargar o despejo, instalar ETA emergencial no córrego e cobrar ressarcimento ao município.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Recolher os peixes mortos com equipe de limpeza e aguardar relatório ambiental de 90 dias para tomar qualquer providência.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 50 mil de Otávio Krieger, arquivar o auto de infração e dizer que a mortandade foi causada por 'onda de calor atípica'.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Dizer que a poluição vem de cidade vizinha a montante e lavar as mãos, sem fiscalizar a Krieger.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Árvore centenária cai sobre fiação elétrica",
      description: "Um figueira de aproximadamente 180 anos caiu sobre a rede de alta tensão da Rua das Palmeiras após vendaval. O bairro está sem luz há 30 horas. A concessionária alega que a árvore é de área pública e espera a prefeitura remover. O IBAMA exige laudo de identificação antes do corte. A Krieger Eventos quer a madeira para mobiliário de um salão de festas. 3 postes foram arrancados.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Remover a árvore com autorização do IBAMA, restaurar energia em 48h e replantar 5 espécies nativas no canteiro central.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Cortar a árvore sem laudo, deixar a concessionária restabelecer a luz no prazo dela (estimado em 10 dias) e vender a madeira para Krieger.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar a árvore no local, dizer que é 'patrimônio histórico natural intocável' e transferir responsabilidade ao IPHAN estadual.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Vender a madeira da árvore para marcenaria do vereador Claudinho por R$ 12 mil e apropriar-se do dinheiro sem prestar contas.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Construtora trabalha à noite sem alvará",
      description: "A Krieger Construções está executando obra de edifício residencial no bairro Jardim das Flores sem alvará de funcionamento noturno. O trabalho vai até 3h da manhã, 7 dias por semana. Moradores de 3 quarteirões registraram queixas. O último boletim de ocorrência foi arquivado pela delegacia por 'falta de interesse público'. A construtora ofereceu R$ 15 mil para 'resolver burocraticamente'.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Embargar a obra noturna, multar em R$ 18 mil por poluição sonora reincidente e exigir alvará para retomada diurna.", budgetImpact: 1200, approvalImpact: 1 },
          { text: "Autorizar trabalho noturno apenas aos sábados, limitando horário até 22h, e exigir isolamento acústico de R$ 8 mil.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 15 mil da Krieger Construções, liberar trabalho 24h e orientar fiscais a não autuarem o canteiro.", budgetImpact: -2400, approvalImpact: -2 },
          { text: "Ignorar reclamações e declarar que 'obras geram empregos e devem ser priorizadas sobre o conforto de poucos moradores'.", budgetImpact: -2400, approvalImpact: -2 }
        ]
      }
    }
  ];

  const roundMedium = [
    {
      title: "Hospital Regional com 180% de ocupação nos leitos",
      description: "O Hospital Regional Dr. Mário Lins opera com 180% de ocupação. 47 pacientes aguardam em macas nos corredores há mais de 48h. A mídia estadual cobre diariamente. O governo estadual afirma que não tem verba de repasse porque o município não apresentou o Plano de Ação da Saúde (PAS) atualizado. O sindicato médico ameaça paralisação. A prefeitura pode abrir 30 leitos emergenciais no anexo do antigo fórum.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Abrir 30 leitos emergenciais no anexo, contratar 12 profissionais por 90 dias com diária extra, assumindo déficit de R$ 340 mil.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Instalar 8 tendas externas para estabilização e aguardar ajuda estadual que pode demorar semanas, sem abrir leitos no anexo.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Transferir pacientes para hospitais particulares sem vagas contratadas, gerando custo de R$ 12 mil por dia, e culpar a população por procurar SUS.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Desviar R$ 180 mil da verba do hospital para pagar dívida de campanha do vereador Claudinho e deixar superlotação sem atenção.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "SUS municipal sem cardiologista há 6 meses",
      description: "Não há cardiologista, neurologista nem ortopedista no SUS municipal desde agosto do ano passado. A fila de espera ultrapassa 1.100 pessoas. O CRM alertou para responsabilização técnica do município por abandono de pacientes crônicos. 3 pacientes sofreram AVC sem atendimento especializado. O Conselho Municipal de Saúde ameaça ação civil pública. Há 4 especialistas na região dispostos a mudar se houver contrato.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Contratar 4 especialistas via processo seletivo simplificado com salário de R$ 18 mil (compatível ao mercado), elevando a folha em R$ 72 mil/mês.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Fazer parceria com a Faculdade de Medicina do Vale para atendimento supervisionado de residentes, reduzindo custos mas sem garantia de continuidade.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar a falta de médicos em coletiva e dizer que a população 'deve buscar plano de saúde privado como cidadão responsável'.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Criar 'taxa de agilização' de R$ 150 por consulta para pular fila, desviando dinheiro para caixa do gabinete pessoal.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Mortalidade infantil sobe 25% no trimestre",
      description: "O índice de mortalidade infantil subiu de 8,2 para 10,3 por mil nascidos vivos no último trimestre. A maioria dos óbitos ocorre por desnutrição e infecções respiratórias evitáveis. O Ministério Público abriu investigação. A imprensa nacional cobra ações. O Centro de Atenção à Criança está sem pediatra plantonista há 3 meses. O vereador Claudinho quer usar o caso para atacar o secretário Marcelo Figueira.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Implementar programa municipal de acompanhamento pré-natal domiciliar com 8 equipes multiprofissionais, nutricionistas e leite fortificado.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Distribuir 400 cestas básicas para gestantes e ampliar atendimento pediátrico nos 3 postos existentes sem contratar novo plantonista.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manipular os dados do SIM (Sistema de Informação sobre Mortalidade), alterando causas para 'malformação congênita' e dizendo que alta é sazonal.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Desviar R$ 90 mil da verba do programa maternal para pagar show de aniversário da cidade organizado pela Krieger Eventos.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Fila do SUS chega a 4 meses para consultas eletivas",
      description: "A fila para consultas eletivas no SUS municipal atingiu 4 meses de espera média. Pacientes com diabetes e hipertensão estão abandonando o tratamento. O Conselho Municipal de Saúde ameaça entrar na Justiça citando a Lei 8.080/1990 e o Decreto 7.508/2011, que organizam acesso e regulação no SUS. Há 3 clínicas particulares na cidade com capacidade ociosa. O custo de conveniar seria de R$ 280 por consulta.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Criar centro de regulação municipal, conveniar 3 clínicas e zerar filas em 60 dias com custo estimado de R$ 340 mil.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Priorizar apenas casos graves (AVC, infarto) e deixar consultas de diabetes e hipertensão para o próximo ano fiscal.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que filas são 'normais no SUS' e culpar a 'demanda reprimida da população por excesso de informação na internet'.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Vender vagas de consulta para clínica particular de R$ 400 cada, dividindo lucro de R$ 45 mil/mês com o secretário Marcelo Figueira.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Asma infantil dobra após instalação de aterro irregular",
      description: "O número de crianças com asma dobrou no bairro Nova Esperança após a instalação do aterro irregular 'Krieger Ambiental', a 300m da Escola Municipal João Paulo. 23 pais retiraram filhos da rede. A Secretaria de Saúde está sob pressão. Otávio Krieger nega responsabilidade e ameaça processar quem 'difamar' sua empresa. O Ibama embargou o aterro, mas a operação continua noturna.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Fiscalizar e embargar definitivamente o aterro Krieger, instalar barreira sanitária, monitorar qualidade do ar e oferecer atendimento pulmonar gratuito.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Distribuir 500 máscaras PFF2 nas escolas e aguardar relatório de impacto ambiental de 120 dias antes de tomar decisão contra o aterro.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 40 mil de Otávio Krieger, silenciar a comunidade escolar e ameaçar pais de processo por retirada 'injustificada' dos filhos.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Negar correlação entre aterro e doenças, citar estudo particular pago pela Krieger Ambiental, e processar 3 pais por difamação.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Analfabetismo funcional atinge 45% no fundamental",
      description: "O índice de analfabetismo funcional no ensino fundamental chegou a 45% no último IDEB. O colégio está entre os 10 piores do estado. Pais de 120 alunos ameaçam tirar filhos da escola pública. A secretaria de educação está sem projeto estruturado. O vereador Claudinho propõe 'escola militarizada' como solução. O MEC ameaça intervenção administrativa se não houver plano de melhoria em 90 dias.",
      theme: "Educação",
      options: {
        create: [
          { text: "Implementar programa de reforço escolar integral das 7h30 às 17h, contratar 8 professores extras, comprar material didático novo e avaliar trimestralmente.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Focar recursos apenas no 3º ano (ano de avaliação do IDEB), abandonando os outros 8 anos do fundamental.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Falsificar notas internas do IDEB, desviar R$ 60 mil da verba de material didático para propaganda da gestão, e enganar o MEC.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Culpar 'a cultura local' e dizer que pais 'não valorizam estudo em casa', reduzindo investimento no ensino fundamental.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Escola mais antiga sem rampas e aluna cadeirante é carregada",
      description: "A Escola Municipal Coronel Antônio, construída em 1952, não tem rampas, elevador nem banheiros acessíveis. A aluna Beatriz, 11 anos, cadeirante, é carregada pelos colegas para acessar a sala no 2º andar. O Ministério Público notificou a prefeitura por violação do ECA e da Lei 13.146. A adaptação orçada é de R$ 420 mil. O vereador Claudinho sugere 'transferir a aluna'.",
      theme: "Educação",
      options: {
        create: [
          { text: "Adaptar imediatamente a escola com rampas, elevador de plataforma e 2 banheiros acessíveis, cumprindo a lei em 60 dias.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Transferir Beatriz para escola mais nova a 4km de sua casa e aguardar reforma estrutural no próximo ano, sem previsão orçamentária.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar orçamento de R$ 580 mil com a Krieger Construções, incluindo R$ 160 mil de 'despesas administrativas' para caixa dois do vereador.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Dizer que a escola é patrimônio histórico tombado e 'não pode ser modificada por decreto', ignorando que o tombamento nunca foi requerido.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Evasão no ensino médio chega a 30%",
      description: "A evasão escolar no ensino médio chegou a 30%. Alunos abandonam a escola para trabalhar informalmente em bares, oficinas e na Krieger Indústria. O Conselho Tutelar está sem estrutura para abordagem. A economia local depende do trabalho adolescente. O ECA exige frequência, mas a fiscalização é inexistente. A mãe de um evadido é funcionária do gabinete do prefeito.",
      theme: "Educação",
      options: {
        create: [
          { text: "Criar programa de bolsa auxílio de R$ 300/mês para 200 famílias, acompanhamento psicossocial e contratar 3 assistentes sociais.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Fazer campanha de conscientização com 2 palestras por semestre e busca ativa apenas nos casos 'extremos' de evasão acima de 6 meses.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que evasão é 'problema familiar' e reduzir investimento no ensino médio em 20%, transferindo verba para eventos.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Usar dados de evasão para justificar corte de 8 turmas, desviar verba e manter alunos como mão de obra barata para empresários aliados.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Prefeitura não paga piso do magistério há 4 meses",
      description: "A prefeitura está há 4 meses sem pagar o piso nacional do magistério (R$ 2.640,05). Professores ameaçam greve no segundo semestre, que coincide com o ENEM. A Justiça determinou o pagamento em duas ações distintas, com multa de 10% sobre o atraso. O caixa está bloqueado por precatórios. A Câmara quer manter verba de gabinete intacta. O sindicato aceita parcelamento em 6 vezes.",
      theme: "Educação",
      options: {
        create: [
          { text: "Regularizar imediatamente os salários, criar fundo de reserva de R$ 800 mil para manutenção do piso e cortar diárias do gabinete.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Pagar parcelado em 6 meses com correção pelo IPCA, negociar acordo com o sindicato e suspender contratações temporárias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar 'taxa de educação' de R$ 12 no IPTU para cobrir rombo e punir professores grevistas com desconto de ponto.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Recusar o pagamento e dizer que 'a lei federal do piso não se aplica ao município por ter menos de 50 mil habitantes', argumento já derrubado pelo STF.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "BRT atrasado 2 anos e consórcio pede R$ 50 milhões",
      description: "A obra do BRT está 24 meses atrasada. O consórcio executora (do qual a Krieger Construções é sócia) pediu reequilíbrio econômico de R$ 50 milhões por 'adição de serviços'. O trânsito está caótico: tempo médio de travessia do centro subiu de 15 para 47 minutos. O Ministério Público investiga superfaturamento. A Câmara quer aprovar urgente. O TCE pediu auditoria independente.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Renegociar contrato com auditoria independente do TCE, exigir cronograma rigoroso e aplicar multa de R$ 1,2 milhão por atraso.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Aceitar reequilíbrio parcial de R$ 22 milhões e prorrogar prazo por mais 18 meses para não paralisar a obra.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber propina de R$ 800 mil do consórcio, aprovar reequilíbrio integral com aditivo secreto sem licitação.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Pagar R$ 50 milhões sem auditoria, culpando atraso em 'questões climáticas imprevisíveis' e encerrando investigação.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Recapeamento da Av. Brasil dura apenas 6 meses",
      description: "O recapeamento da Avenida Brasil, orçado em R$ 1,8 milhão e executado pela Krieger Construções, durou apenas 6 meses. O asfalto está se desmanchando em 12 trechos. A empresa garante que cumpriu projeto. Engenheiros municipais apontam especificação inadequada de binder. O contrato prevê garantia de 5 anos. A Krieger oferece 'refazer' por mais R$ 900 mil.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Exigir refazer a obra às custas da Krieger, aplicar multa contratual de 10% e exigir laudo técnico independente.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Fazer reparos pontuais por R$ 280 mil e negociar redução de 20% no valor final do contrato original como acordo.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aceitar a obra como está e dizer que o tráfego pesado de caminhões da Krieger Indústria é o culpado pelo desgaste precoce.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Aprovar novo recapeamento por R$ 1,2 milhão com a mesma Krieger Construções, recebendo propina de R$ 120 mil.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Bairro mais populoso ainda não tem rede de esgoto",
      description: "O bairro Nova Esperança, com 18 mil habitantes, ainda não tem rede de esgoto. A contaminação do lençol freático foi comprovada pelo laudo da Universidade Federal. A Caixa Econômica aprovou financiamento de R$ 12 milhões, mas a prefeitura não apresentou projeto executivo há 14 meses. O engenheiro Silvio Ramos (Obras) diz que falta 'capacidade técnica interna'. Dona Nazaré organizou abaixo-assinado com 4.000 nomes.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Contratar empresa de projetos independente, elaborar executivo emergencial em 60 dias e iniciar obra integrada com a Caixa.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Construir 8 fossas sépticas comunitárias temporárias enquanto aguarda liberação do recurso da Caixa, sem prazo definido.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Desviar R$ 400 mil da verba do saneamento para pagar dívida de campanha do vereador Claudinho com fornecedor de som.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Dizer que saneamento é obrigação estadual e arquivar o financiamento aprovado, apesar de parecer jurídico contrário.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Ciclovia inaugurada passa sobre bueiros e pontos de ônibus",
      description: "A ciclovia da Avenida Brasil, inaugurada com festa e discurso do prefeito, passa sobre 6 bueiros sem tampas e 3 pontos de ônibus. 2 ciclistas foram atropelados em uma semana. O projeto foi feito sem consulta pública. A empresa de engenharia é de um ex-vereador aliado. O contrato custou R$ 780 mil. O Ministério Público pediu interdição. A Krieger Construções oferece 'corrigir' por mais R$ 200 mil.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Reformular projeto com consulta pública obrigatória, corrigir pontos críticos de interseção e aplicar multa à empresa projetista.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Instalar sinalização extra, reduzir velocidade da via para 30km/h e colocar cones como medida paliativa por 90 dias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manter como está e dizer que ciclistas 'devem aprender a conviver com o trânsito e usar ciclovias com atenção redobrada'.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Aprovar ampliação da ciclovia com a mesma empresa por R$ 400 mil e receber contrapartida de R$ 40 mil em caixa dois.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Fila de espera por creche chega a 2 mil bebês",
      description: "A fila de espera por creche municipal chegou a 2.010 crianças de 0 a 3 anos. Mães estão deixando emprego formal por falta de onde deixar os filhos. O Ministério Público ingressou com ação civil pública por descumprimento do PNE (Meta 1). A prefeitura tem 4 terrenos públicos ociosos. O orçamento de 2026 não prevê investimento em creches. A Krieger Construções ofereceu construir via parceria com mensalidade.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Construir 4 creches modulares emergenciais em terrenos públicos e contratar 24 educadoras infantis via processo seletivo.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Fazer parceria com 6 creches conveniadas e pagar voucher de R$ 400/mês para 400 famílias, deixando 1.610 sem benefício.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender 2 terrenos públicos para creche privada da Krieger e desviar verba da construção para reforma do gabinete do prefeito.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Dizer que mães devem cuidar dos filhos em casa e reduzir investimento em educação infantil em 30% no próximo orçamento.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Milícia cobra taxa de segurança no Nova Esperança",
      description: "O bairro Nova Esperança está dominado por uma milícia que cobra 'taxa de segurança' de R$ 50 por comércio. Quem não paga tem o ponto queimado. A PM teme entrar na área porque 2 policiais foram baleados em 2023. Moradores pedem ação da Guarda Municipal. Dona Nazaré recebeu ameaças. O líder da milícia é irmão de um ex-vereador. A Câmara quer debater 'autorização de milícia comunitária'.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Criar base integrada de GM e PM no bairro, programa de proteção a testemunhas e oferecer emprego formal para jovens do morro.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Aumentar rondas periféricas de dia e instalar 6 câmeras nos acessos ao bairro, sem confronto direto com a milícia.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que segurança pública é função exclusivamente estadual e recusar ação municipal, abandonando Nova Esperança.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Fazer acordo informal com o líder da milícia para 'dividir' a área e receber mensalidade de R$ 8 mil do grupo.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Violência doméstica triplica e abrigo municipal lotado",
      description: "Os casos de violência doméstica triplicaram em 18 meses. A delegacia da mulher tem apenas 2 investigadores para 14 mil habitantes. O abrigo municipal tem 12 vagas e está com 18 mulheres (incluindo 7 crianças). A campanha 'Não É Não' não saiu do papel por falta de verba. O vereador Claudinho chamou o tema de 'modinha feminista'. O feminicídio passou de 1 para 4 casos no ano.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Ampliar delegacia da mulher para 6 investigadores, duplicar abrigo, criar patrulha Maria da Penha municipal e campanha permanente.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Distribuir 2 mil cartilhas e fazer parceria com ONGs para atendimento voluntário sem ampliar estrutura pública.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Usar dados de vítimas para intimidar opositoras políticas, proteger agressores aliados e cortar verba do abrigo.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Dizer que violência doméstica é 'problema de família' e reduzir investimento em segurança pública voltada à mulher.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Guarda Municipal sem armamento e sindicato ameaça greve",
      description: "A GM está sem armamento adequado e coletes à prova de bala. O sindicato ameaçou greve por segurança. O conselho de segurança pública recomenda desarmamento, mas o crime organizado está armado com fuzis. A Câmara aprovou compra de 20 pistolas, mas o TCE suspendeu por irregularidade na licitação. A Krieger Eventos ofereceu 'doar' coletes usados de segurança particular.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Equipar a GM com armamento não letal, coletes certificados e treinamento tático contínuo, reabrir licitação de pistolas.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Manter desarmamento, focar em abordagem comunitária e mediação de conflitos, assumindo risco de morte de agentes.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Comprar 20 pistolas superfaturadas por R$ 18 mil cada de empresa do vereador Claudinho e revender 10 no mercado ilegal.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Retirar a GM das ruas e dizer que segurança é problema exclusivo da PM estadual, deixando bairros sem patrulhamento.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Tráfico instala ponto de venda em frente à escola",
      description: "O tráfico de drogas instalou ponto de venda em frente à Escola Municipal João Paulo. Alunos do 6º ao 9º ano são abordados na saída. 15 pais já pediram transferência. A PM diz que não tem efetivo para patrulhar diariamente. O comandante sugere 'fechar a escola'. Dona Nazaré propõe ocupação do espaço com atividades de contraturno. O traficante é primo de um vereador da base.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Instalar base comunitária integrada, iluminação LED, e programa de ocupação juvenil no contraturno com cultura e esporte.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Aumentar rondas esporádicas (2x por semana) e pedir que pais acompanhem filhos na saída, transferindo responsabilidade.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 15 mil do traficante para não interferir no ponto de venda e ameaçar pais que reclamarem.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Fechar a escola e transferir 320 alunos para outras unidades, abandonando o bairro à criminalidade.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Protesto por moradia fecha ponte há 3 dias",
      description: "Um protesto do Movimento Sem Teto ocupa a Ponte da Amizade, principal ligação entre centro e zona norte, há 3 dias. 400 famílias exigem regularização de loteamento. O trânsito está paralisado. A PM pede autorização para desocupar com truculência. A mídia nacional acompanha. O vereador Claudinho quer ação imediata. Dona Nazaré está entre os manifestantes. O prefeito prometeu moradia em 2022.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Negociar mesa de diálogo com representantes, garantir assistência social emergencial e mediar desocupação pacífica em 48h.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Bloquear acesso à ponte com barreiras policiais e deixar o protesto se esvaziar naturalmente por cansaço em 15 dias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Autorizar ação truculenta da PM, prender 20 líderes do movimento em flagrante e acusar invasão de área pública.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Mandar grupos de extermínio agir à paisana durante a noite para dispersar manifestantes com violência extralegal.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Auditoria encontra 12 funcionários fantasmas",
      description: "A auditoria interna encontrou 12 funcionários que nunca compareceram ao trabalho. Eles recebem salários há 8 meses, totalizando R$ 384 mil desviados. 5 são parentes de vereadores da base. A imprensa descobriu e vai publicar amanhã. O chefe de gabinete é irmão do prefeito. O TCE pediu bloqueio imediato dos salários. A Câmara quer CPI. O prazo para explicação é de 24 hours.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar os 12 imediatamente, recuperar R$ 384 mil via desconto em precatórios e encaminhar caso à polícia.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Criar função burocrática fictícia para os 12 e tentar regularizar a situação com nomeação em cargos efetivos vagos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Expandir o esquema para 30 funcionários fantasmas, dividir salários com aliados e intimidar auditora responsável.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Manter os funcionários e dizer que são 'assessores de gabinete com jornada flexível home office', redefinindo cargos.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Edital de R$ 10 milhões para iluminação tem direcionamento",
      description: "O edital de R$ 10 milhões para modernização da iluminação pública tem cláusula técnica que só a Krieger Energia atende (garantia de 8 anos, modelo específico de LED). O concorrente entrou na justiça. O prefeito Ricardo Viana foi sócio de Otávio Krieger até 2022 em empresa de eventos. O TCE encontrou indícios de vício. A população está no escuro em 6 bairros.",
      theme: "Ética",
      options: {
        create: [
          { text: "Cancelar licitação, refazer edital com critérios técnicos abertos e afastar o secretário Silvio Ramos do processo.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Alterar cláusula da garantia de 8 para 3 anos e manter o cronograma da obra com a Krieger Energia.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber propina de R$ 400 mil, ameaçar concorrente judicialmente e manter o edital como está.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Manter o edital e dizer que a Krieger é a 'única empresa qualificada do estado', ignorando 4 concorrentes habilitados.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Chefia humilha servidores e 7 pedem exoneração",
      description: "A chefia do Departamento de Licenciamento humilha funcionários publicamente há 3 anos. 7 servidores pediram exoneração nos últimos 6 meses. O sindicato cobra intervenção. O chefe é irmão do deputado estadual da base aliada. A produtividade do departamento caiu 60%. Processos de abertura de empresas demoram 90 dias. A OAB pediu investigação por assédio moral.",
      theme: "Ética",
      options: {
        create: [
          { text: "Instaurar sindicância, afastar o gestor por 90 dias e criar canal de denúncia anônima permanente na intranet.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Transferir o chefe para o Departamento de Arquivo, sem função de chefia, mas mantendo salário e status.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar denúncias e dizer que 'servidor público tem que aguentar pressão, senão não serve para o Estado'.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Promover o chefe para secretário-adjunto e perseguir os 7 servidores que denunciaram, transferindo-os para zonas rurais.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Festa de aniversário da cidade custa R$ 2 milhões",
      description: "A festa de aniversário de 70 anos do município custou R$ 2,1 milhões. O artista principal recebeu R$ 800 mil. O mercado regional cobra R$ 200 mil pelo mesmo show. A empresa organizadora é a Krieger Eventos, de Otávio Krieger, assessor informal do prefeito. A Câmara quer comissão de 10%. O hospital regional faltou soro no mesmo fim de semana. Bruna Costa publicou contrato vazado.",
      theme: "Ética",
      options: {
        create: [
          { text: "Abrir auditoria independente, suspender pagamentos pendentes de R$ 400 mil e exigir devolução de valores superfaturados.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Reduzir orçamento dos próximos 3 eventos para R$ 200 mil cada e mudar empresa organizadora via licitação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que o artista é caro porque é 'famoso nacionalmente' e manter contrato com a Krieger Eventos.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Aumentar orçamento do próximo evento para R$ 3 milhões e dividir propina de R$ 300 mil com Otávio Krieger.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Secretário de Obras é dono de construtora vencedora",
      description: "O secretário Silvio Ramos é dono oculto (laranja: sua mãe) da Construtora SRM, que venceu 3 licitações no último ano totalizando R$ 4,7 milhões. A mulher do prefeito é sócia da Krieger Eventos, que faz todas as festas municipais. O Ministério Público pediu quebra de sigilo. A Câmara quer CPI. O prefeito alega desconhecimento. A população está revoltada nas redes.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar Silvio, cancelar os 3 contratos, criar lei de conflito de interesses municipal e devolver valores à empresa.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Pedir que Silvio venda a empresa em 90 dias e transferir eventos para terceiros via nova licitação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que não há ilegalidade comprovada e manter tudo como está, aguardando decisão judicial.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Ampliar contratos com as empresas da família e criar offshore em nome de laranjas para receber propina.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Prefeitura ainda cobra ISS manualmente: sonegação de 40%",
      description: "A prefeitura cobra ISS manualmente via guia de papel desde 2005. A sonegação é de 40% (R$ 8 milhões/ano não recolhidos). Empresas pedem modernização. O sistema atual é incompatível com nota fiscal eletrônica. A Krieger Energia ofereceu 'doar' um sistema próprio em troca de isenção de ISS por 5 anos. O TCE alertou para risco de dependência tecnológica.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Implementar NFS-e integrada com bancos e Receita Federal, investindo R$ 1,2 milhão em software e capacitação.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Criar portal web simples para emissão de guia e manter cobrança paralela em papel por 12 meses de transição.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender dados do sistema antigo para empresa de cobrança particular de São Paulo por R$ 120 mil, sem licitação.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Manter sistema antigo e dizer que empresas 'devem se adaptar à burocracia local como parte da identidade do município'.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Igreja pede isenção total de IPTU e ISS",
      description: "A Igreja Evangelica do Avivamento, maior templo do município (pastor aliado do prefeito), pede isenção total de IPTU e ISS. O templo tem escola particular (mensalidade R$ 1.200), estacionamento pago (R$ 10/h) e loja de livros (faturamento R$ 40 mil/mês). A imunidade do art. 150 da Constituição protege o templo, mas a Lei 9.532/97 exige escrituração e finalidade institucional para benefícios tributários. O pastor ameaça mobilizar 3 mil fiéis contra o prefeito se não for atendido.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Conceder isenção apenas para o templo de culto e cobrar normalmente ISS e IPTU das atividades comerciais e educacionais.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Conceder isenção parcial de 50% por 5 anos com renovação condicionada à prestação de contas de atividades filantrópicas.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Conceder isenção total e dizer que a igreja 'faz trabalho social equivalente ao valor dos impostos', sem comprovação.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Trocar isenção total por apoio político explícito nas eleições e doações de campanha de R$ 50 mil em dinheiro vivo.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Dívida ativa passa de R$ 300 milhões",
      description: "A dívida ativa da prefeitura passou de R$ 300 milhões. R$ 87 milhões são da empresa falida do ex-prefeito (1989-1992), que fechou em 1995. O procurador quer parcelar em 100 anos. A população paga imposto em dia e cobra rigor. O TCE diz que parte da dívida é irrecuperável. O prefeito quer usar a dívida como argumento para aumentar IPTU. A Câmara quer Refis geral.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Ajuizar execuções fiscais, penhorar bens de devedores ativos, criar portal de transparência da dívida e cobrar rigorosamente.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Negociar parcelamento em 20 anos com correção pelo IPCA e garantias reais para dívidas acima de R$ 1 milhão.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber propina para perdoar dívidas de empresários aliados e concentrar execução fiscal apenas em pequenos devedores.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Perdoar a dívida da empresa falida do ex-prefeito e dizer que é 'impossível cobrar de quem não existe há 30 anos'.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Taxa de lixo é declarada inconstitucional pelo TJ",
      description: "O Tribunal de Justiça declarou inconstitucional a taxa de coleta de lixo (R$ 18/mês por residência). A prefeitura depende de R$ 5,2 milhões mensais dela. O orçamento já está aprovado. Servidores ameaçam greve se houver corte de salários. A Câmara quer criar 'taxa de fiscalização ambiental' com mesmo valor. O Ministério Público acompanha. O prefeito tem 30 dias para recorrer.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Criar taxa de conservação urbana legalmente válida, reduzir gastos supérfluos do gabinete em 30% e manter coleta.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Incorporar valor gradualmente no IPTU ao longo de 24 meses, com redução de 10% do total para não choquear.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar 'taxa de fiscalização ambiental' de R$ 18/mês e ameaçar processar quem recorrer na justiça.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Manter cobrança ilegal e orientar fiscais a não darem recibo aos contribuintes, gerando caixa dois.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Montadora isenta de todos impostos por 20 anos",
      description: "A prefeitura isentou a montadora estrangeira 'AutoVale' de todos os impostos por 20 anos. A empresa prometeu 1.000 empregos, mas contratou apenas 52 (majoritariamente de fora). O município perde R$ 8 milhões anuais em arrecadação. O contrato não tem cláusula de rescisão por descumprimento. O sindicato dos metalúrgicos está dividido. A Câmara quer anistia para outras empresas.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Revisar contrato, exigir cumprimento de cláusula de empregos e cobrar retroativo dos últimos 3 anos com juros.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Renegociar prazo de isenção para 10 anos com metas trimestrais de emprego e investimento em capacitação local.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber propina de R$ 200 mil da AutoVale e ampliar isenção para Krieger Indústria e outras 4 empresas sem contrapartida.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Manter isenção e dizer que 52 empregos 'já ajudam a economia local a crescer e atrair outras empresas'.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Aterro sanitário atinge 95% da capacidade",
      description: "O aterro sanitário municipal atingiu 95% da capacidade. O lixo está sendo despejado fora da área licenciada há 3 weeks. A comunidade do bairro Beira Rio sofre com chorume em 3 poços artesianos. A licença ambiental vence em 30 dias. A Krieger Ambiental ofereceu operar novo aterro por 25 anos sem licitação. O Ibama ameaça interditar a área e aplicar multa de R$ 2 milhões.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Implantar programa de reciclagem porta a porta, compostagem doméstica e buscar novo aterro licenciado com urgência.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Prorrogar licença provisória por 180 dias e ampliar área de disposição provisória, ignorando contaminação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender licença do novo aterro para Krieger Ambiental sem licenciamento ambiental e sem consulta pública.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Continuar despejando fora da área e multar moradores do Beira Rio que reclamarem do odor, culpando-os por 'falta de higiene'.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Loteamento irregular derruba mata de preservação",
      description: "Um loteamento irregular está derrubando a Mata do Sabiá, área de preservação permanente. A ordem judicial de embargo existe desde 2021, mas a obra continua à noite com caminhões apagando faróis. O dono é deputado estadual e doador de campanha do prefeito. O Ibama embargou novamente. A comunidade quer parque. A Câmara quer anistia via lei de zoneamento.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Cumprir ordem judicial, embargar definitivamente, reverter área para uso público e criar Parque do Sabiá.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Multar em R$ 500 mil e permitir regularização mediante compensação ambiental em outra área menor.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar o desmatamento e dizer que a área 'não é de preservação permanente' apesar de decreto estadual de 1998.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Receber R$ 300 mil de propina do deputado para liberar o loteamento e falsificar documentação de APP.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Bairro Beira Rio alaga toda vez que chove",
      description: "O bairro Beira Rio alaga completamente quando chove mais de 30mm. Moradores perderam móveis e eletrodomésticos 3 vezes no ano. A prefeitura nunca fez obra de macrodrenagem. A Caixa aprovou financiamento de R$ 18 milhões, mas exige projeto executivo. O engenheiro Silvio Ramos diz que precisa de 8 meses para projetar. A alternativa é reassentar 200 famílias, mas não há terrenos.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Executar obra de macrodrenagem, reassentar 80 famílias em terrenos públicos e criar sistema de alerta por SMS.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Construir muro de contenção de 800m e instalar 4 bombas de sucção emergencial nos pontos críticos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que moradores 'deveriam se mudar e não construir em área de risco conhecida', negando responsabilidade histórica.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Aprovar obra de drenagem superfaturada por R$ 28 milhões com a Krieger Construções e desviar 50% para caixa dois.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Investidores compram lotes na preservação usando laranjas",
      description: "Investidores de fora estão comprando lotes na Reserva do Morro Azul usando laranjas locais. O metro quadrado subiu de R$ 40 para R$ 180. A legislação permite construção se comprovado 'interesse social'. O prefeito foi convidado para sociedade de um condomínio de luxo. O valor do empreendimento é de R$ 80 milhões. O Ministério Público Federal pediu bloqueio de registros.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Bloquear registros imobiliários, reaver áreas compradas por laranjas e criar Unidade de Conservação Municipal protegida.", budgetImpact: 2600, approvalImpact: 2 },
          { text: "Taxar transações em 15% e exigir estudo de impacto para qualquer projeto na área, criando burocracia protetora.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Entrar para sociedade dos investidores com 5% de cotas e aprovar loteamento via decreto de 'interesse social'.", budgetImpact: -3600, approvalImpact: -3 },
          { text: "Aprovar projetos e dizer que 'desenvolvimento imobiliário gera empregos e impostos para a cidade'.", budgetImpact: -3600, approvalImpact: -3 }
        ]
      }
    }
  ];

  const roundHard = [
    {
      title: "Hospital Municipal falindo: proposta de privatização via PPP",
      description: "O Hospital Municipal São Lucas está com dívida de R$ 14 milhões, fornecedores parados e 30% dos leitos fechados por falta de equipe. A proposta de privatização via PPP chegou à Câmara. A empresa interessada é a HealthVale, multinacional com histórico de demissões em massa em 4 cidades. O contrato prevê isenção tributária por 30 anos e repasse de R$ 8 milhões/ano da prefeitura. O sindicato médico ameaça greve geral. O Ministério Público alertou para risco de serviço seletivo e abandono de pacientes crônicos. A população depende exclusivamente do SUS municipal.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Rejeitar privatização, reestruturar gestão pública com novo diretor técnico, e buscar repasse federal de R$ 10 milhões, assumindo déficit temporário.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer concessão parcial apenas de serviços não médicos (limpeza, segurança, alimentação) e manter gestão pública do atendimento.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar privatização total, demitir 40% dos funcionários e dizer que 'o setor privado é mais eficiente que o público'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Receber R$ 2 milhões de propina da HealthVale, aprovar contrato com isenção de 50 anos e cláusula de sigilo eterno.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Surto de doença desconhecida no bairro mais pobre",
      description: "Um surto de doença não identificada atingiu o bairro Nova Esperança. São 52 internações, 4 óbitos e 18 crianças em observação. O laboratório municipal não tem capacidade de diagnóstico molecular. A imprensa nacional cobre o caso ao vivo. O governo federal ofereceu equipe da Fiocruz, mas exige transparência total dos dados e isolamento da área. Um laboratório privado oferece testes rápidos por R$ 5,2 milhões. A população está em pânico, o comércio fechou e Dona Nazaré pede ação imediata.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Aceitar ajuda federal da Fiocruz, isolar área por 21 dias, fazer testagem em massa e comunicação transparente diária.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Contratar laboratório privado para testagem em 72h, manter bairro em quarentena leve por 14 dias sem fechar comércio essencial.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar gravidade, proibir imprensa de entrar no bairro sob alegação de 'segurança sanitária', e dizer que é gripe comum.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Vender dados sigilosos dos 52 pacientes para laboratório privado e receber propina de R$ 180 mil.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Auditoria federal encontra superfaturamento de 300% em oncológicos",
      description: "A CGU encontrou superfaturamento de 300% na compra de medicamentos oncológicos. O secretário Marcelo Figueira é primo do fornecedor (Krieger Pharma). 34 pacientes com câncer estão sem quimioterápicos há 60 dias. A Polícia Federal pediu quebra de sigilo bancário de Marcelo. A Câmara ameaça abrir CPI. O prefeito foi eleito com promessa de 'zero corrupção'. O fornecedor ofereceu R$ 2 milhões para arquivar o caso. Bruna Costa tem acesso ao relatório preliminar da CGU.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Demitir Marcelo Figueira, cancelar contrato com Krieger Pharma, fazer compra emergencial via ONU e colaborar com PF integralmente.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Suspender pagamentos pendentes de R$ 4,7 milhões, refazer licitação com empresa diferente e manter atendimento emergencial via SES.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aceitar R$ 2 milhões, promover Marcelo para Secretaria de Governo e ameaçar auditor da CGU de transferência para Amazonas.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Defender Marcelo publicamente e dizer que preços subiram por 'inflação mundial de insumos farmacêuticos pós-pandemia'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Centro de Atenção Psicossocial abandonado: suicídio entre jovens dobra",
      description: "O CAPS III está sem psiquiatra há 8 meses, sem psicólogo há 5 meses e sem estoque de medicação psiquiátrica básica. A taxa de suicídio entre jovens de 15 a 24 anos dobrou em 12 meses. Famílias relatam que pacientes em surto ficam presos em casa amarrados. O Conselho de Saúde pediu intervenção judicial. O orçamento da saúde mental foi cortado em 40% para pagar festa de aniversário da cidade (Krieger Eventos). A igreja local ofereceu 'tratamento espiritual' como alternativa.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Restabelecer CAPS 24h, contratar 3 psiquiatras, 6 psicólogos, campanha de prevenção ao suicídio e reabastecer farmácia.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer parceria com universidade federal para atendimento supervisionado de residentes e reduzir festas populares em 50%.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manter como está e dizer que saúde mental 'não é prioridade do SUS municipal e depende de iniciativa privada'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Destinar verba da saúde mental para festas populares e indicar pacientes para igreja aliada como 'parceira terapêutica'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Empresa privada oferece assumir toda a rede municipal de saúde",
      description: "A HealthVale ofereceu assumir toda a rede municipal de saúde por 25 anos. O contrato prevê pagamento por produtividade (procedimentos realizados), não por atendimento. A empresa já administra hospitais em 3 cidades com 200 denúncias de negativa de atendimento na ouvidoria. O sindicato médico ameaça paralisação indefinida. A população é 80% dependente do SUS. O TCE alertou para risco de dívida pública de R$ 400 milhões. A Câmara quer aprovar em regime de urgência.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Recusar proposta, fortalecer gestão pública com hospital de referência municipal e criar plano de carreira para médicos.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Terceirizar apenas gestão administrativa (folha, compras, limpeza) e manter clínicas e diagnóstico sob controle público direto.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Assinar contrato integral, demitir 30% dos funcionários públicos e dizer que 'gestão privada reduzirá filas em 6 meses'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Receber propina de R$ 1,5 milhão da HealthVale, assinar contrato com cláusula de sigilo eterno e blindagem contra rescisão.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Câmara aprova escola militarizada no bairro mais violento",
      description: "O projeto de lei da Câmara cria escola cívico-militar no bairro Nova Esperança. A proposta prevê uniforme, hierarquia, disciplina rigorosa e instrutores militares. Pais estão divididos: 40% querem segurança, 35% temem autoritarismo. O projeto não prevê investimento pedagógico adicional. A escola atual tem nota baixa, mas 8 professores qualificados com mestrado. O governo federal oferece R$ 2 milhões por ano para escolas militares. A comunidade pediu consulta popular. Dona Nazaré é contra.",
      theme: "Educação",
      options: {
        create: [
          { text: "Fazer consulta popular vinculante, investir R$ 1,2 milhão em segurança comunitária e manter projeto pedagógico atual.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Criar escola cívico-militar piloto com 120 alunos, avaliar resultados quantitativos em 24 meses e manter escola regular paralela.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Usar verba federal de R$ 2 milhões para escola militar e desviar investimento pedagógico para propaganda da gestão.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Implementar militarização total, incluindo formação de pelotão de alunos, e dizer que 'educação precisa de rigor e punição'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Prefeitura precisa cortar 20% do orçamento: Câmara quer poupar educação",
      description: "A queda de arrecadação de ISS e a dívida com fornecedores exigem corte de 20% no orçamento geral. A secretaria de educação sugere reduzir investimento no ensino fundamental e manter gastos com eventos (Krieger Eventos). O FUNDEB garante verba federal, mas exige contrapartida de 10%. Corte na educação inviabiliza o piso salarial. A Câmara quer manter verba de gabinete de R$ 1,8 milhão. O prefeito prometeu 4 escolas novas na campanha. A justiça já barrou corte em educação em 2019.",
      theme: "Educação",
      options: {
        create: [
          { text: "Proteger educação, cortar 40% dos gastos supérfluos de gabinete, reduzir diárias e buscar renegociação de dívida com banco público.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Reduzir investimento em tecnologia escolar e manter salários e obras das 4 escolas em andamento com cronograma apertado.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Cortar 20% na educação, fechar 2 escolas rurais e dizer que 'ajuste fiscal é necessário para salvar o município da falência'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Cortar educação em 12%, aumentar verba de propaganda e eventos em 30% e usar máquina pública para garantir reeleição.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Prefeito quer criar universidade própria: custo de R$ 50 milhões/ano",
      description: "O prefeito Ricardo Viana quer criar a Universidade Municipal do Vale como bandeira de reeleição. O custo estimado é R$ 50 milhões/ano. Já existe campus federal na cidade com 1.200 vagas ociosas. O TCE alertou para inviabilidade orçamentária e risco de desvio de professores da rede básica. A qualidade do ensino fundamental vai piorar. A população quer mais médicos e engenheiros formados, não mais burocracia. A Câmara quer cargos de reitor e vice para indicados políticos.",
      theme: "Educação",
      options: {
        create: [
          { text: "Investir R$ 5 milhões no campus federal existente, criar 400 bolsas e manter foco no ensino básico.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Criar faculdade municipal pequena com cursos técnicos noturnos (enfermagem, administração) de menor custo: R$ 4 milhões/ano.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Criar universidade completa, transferir verba da educação infantil e nomear reitor indicado pelo vereador Claudinho.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Usar projeto da universidade para desviar R$ 8 milhões e contratar 40 aliados sem qualificação em cargos administrativos.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Constituição e ECA cobram creche: fila de 5 mil crianças",
      description: "O Ministério Público cita o art. 208, IV, da Constituição e o ECA (Lei 8.069/1990) para exigir vaga em creche para crianças de 0 a 3 anos. A fila de espera é de 5.080 crianças. A prefeitura tem 6 terrenos públicos, mas zero verba para construção no orçamento 2026. A Krieger Construções ofereceu construir via parceria público-privada, cobrando mensalidade de R$ 800 por criança. Mães estão abandonando emprego formal. A justiça federal determinou prazo de 180 dias.",
      theme: "Educação",
      options: {
        create: [
          { text: "Declarar emergência educacional, usar 6 terrenos públicos, construir creches modulares e contratar 48 educadoras via concurso.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer parceria com Krieger Construções, subsidiar 30% da mensalidade e deixar 70% do custo para as famílias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que decisão judicial sobre creche 'não cria vaga nem dinheiro' e deixar mães sem alternativa prática.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Vender 3 terrenos públicos para creche privada da Krieger e receber propina de R$ 400 mil em imóveis.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Cidade é base de treinamento para Copa: R$ 200 milhões liberados",
      description: "A cidade foi escolhida como base de treinamento para a Copa do Mundo de 2026. O governo federal liberou R$ 200 milhões para estádio de 15 mil lugares e hotel de 80 quartos. A população precisa de saneamento (falta em 40% dos bairros) e 2 escolas novas. O estádio será usado 4 vezes. A FIFA exige isenções tributárias e segurança privada paga pela prefeitura. O contrato prevê que o município arque com manutenção de R$ 2 milhões/ano após o evento. A Câmara quer comissão de 10%. O MP investiga desvio de verba federal.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Negociar uso do estádio existente do clube local, investir R$ 40 milhões em legado urbano (saneamento, escolas) e recusar isenções abusivas.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Aceitar verba federal, fazer obra com contrapartida mínima municipal de R$ 8 milhões e manter estádio como legado esportivo.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Construir estádio de luxo e hotel, deixar população sem saneamento e usar verba de escolas para pagar dívida de campanha.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Desviar R$ 60 milhões da verba da Copa, superfaturar obras com a Krieger Construções e dividir propina com a Câmara.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "PPP de iluminação: 20 anos de contrato com empresa de campanha",
      description: "A proposta de PPP para iluminação pública prevê 20 anos de contrato. A Krieger Energia instalará LED e cobrar mensalidade de R$ 1,2 milhão da prefeitura. O valor é 280% maior que o custo atual. A população não foi consultada. O TCE encontrou indícios de direcionamento no edital. A Krieger Energia é do mesmo grupo que financiou 60% da campanha do prefeito. A cidade tem dívida de R$ 400 milhões que impede novos endividamentos. A escuridão aumentou assaltos em 35%.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Cancelar PPP, fazer licitação pública para LED por R$ 420 mil e financiar com economia de energia de 40% nos próximos 3 anos.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Renegociar contrato para 10 anos, reduzir mensalidade para R$ 600 mil e incluir cláusula de rescisão por inadimplência do estado.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Assinar PPP de 20 anos, aumentar IPTU em 12% para cobrar mensalidade e dizer que modernização tem custo.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Assinar contrato, receber propina de R$ 800 mil e deixar cidade endividada por décadas sem possibilidade de rescisão.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Comunidade da Vila Esperança ocupa área valorizada há 40 anos",
      description: "A Vila Esperança ocupa área de 12 hectares valorizada no centro-sul há 40 anos. Um empreendimento de luxo quer o terreno para condomínio fechado. A justiça determinou reassentamento, mas não há terrenos públicos disponíveis. A PM foi acionada para despejo em 72h. A ONU e a imprensa internacional acompanham. O prefeito prometeu moradia digna em 2022. A construtora ofereceu R$ 10 milhões em caixa dois para campanha de reeleição. Dona Nazaré lidera a resistência.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Cumprir ordem judicial com reassentamento digno em terrenos públicos adquiridos, titulação e participação comunitária de 180 dias.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Negociar indenização de R$ 20 mil por família e aluguel social de R$ 600 por 24 meses para mudança voluntária.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Autorizar despejo truculento com choque, dizer que ocupação é irregular e reprimir manifestantes com acusação de invasão.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Receber R$ 10 milhões em caixa dois, autorizar despejo violento à noite e vender terreno para construtora de luxo.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "BR-267: duplicar no centro demolindo 200 casas ou desviar",
      description: "A BR-267, que corta o centro, virou gargalo de trânsito. O DNIT quer duplicar a via no traçado atual, demolindo 200 casas e 40 comércios. O governo federal oferece indenização de R$ 80 mil por imóvel (abaixo do mercado: R$ 180 mil). A duplicação não prevê passarelas, ciclovias ou acessibilidade. A alternativa é desviar o tráfego para periferia, mas custa o dobro (R$ 180 milhões) e expropria área rural. A população está dividida. O prazo para decisão vence em 15 dias.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Negociar desvio por periferia com pedágio zero, 4 passarelas, ciclovia e compensação justa de R$ 200 mil por imóvel rural atingido.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Aceitar duplicação no centro, exigir passarelas e indenização mínima legal de R$ 80 mil, deixando comércios sem acesso.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber propina de R$ 2 milhões do DNIT e aprovar duplicação no centro que beneficia loteamento do vereador Claudinho.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aceitar duplicação como está e dizer que 'progresso exige sacrifícios da população e o bem maior é o trânsito fluído'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "ETE parada há 1 ano: esgoto cru vai direto para o rio",
      description: "A Estação de Tratamento de Esgoto está parada há 12 meses por falha em 3 motores de aeração. O esgoto cru de 35 mil habitantes vai direto para o Rio das Flores. A multa ambiental já passa de R$ 5 milhões. A empresa contratada (Krieger Ambiental) abandonou a obra alegando 'descumprimento de pagamento' — a prefeitura deve R$ 2,3 milhões. O consórcio de cidades vizinhas quer assumir, mas exige controle da prefeitura. A população ribeirinha está com doenças de pele. O TCE bloqueou novos pagamentos.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Rescindir contrato com a Krieger, fazer nova licitação com garantia de 5 anos, e buscar financiamento federal de R$ 40 milhões.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Entrar no consórcio de cidades vizinhas, dividir custos em 4 municípios e ceder controle operacional por 10 anos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar ETE parada e dizer que poluição é 'problema do estado e da bacia hidrográfica', não do município isoladamente.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aprovar nova obra superfaturada de R$ 95 milhões com a Krieger Ambiental e receber propina de R$ 1,2 milhão.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "PM propõe UPP no morro: modelo carioca falhou",
      description: "O comando do 8º BPM propõe instalar UPP no Morro do Sabiá, dominado pelo tráfico. O modelo carioca falhou e gerou milícias em 60% das áreas. A comunidade quer policiamento comunitário, não militar. O governo federal oferece R$ 5 milhões para segurança pública, mas exige contrapartida de R$ 1 milhão do município. O tráfico ameaçou retaliação se a UPP for instalada. Jovens do morro pedem investimento em cultura e emprego. A imprensa cobre diariamente.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Recusar UPP militar, investir R$ 4 milhões em policiamento comunitário, cultura, esporte e geração de renda no morro.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Instalar UPP com treinamento obrigatório em direitos humanos, acompanhamento social e avaliação semestral independente.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Usar UPP para proteger interesses do tráfico aliado, reprimir moradores dissidentes e dividir área com facção criminosa.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Instalar UPP militar com confronto direto, autorizar entrada em qualquer horário e ignorar recomendação de direitos humanos.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Empresa chinesa oferece câmeras com IA e reconhecimento facial",
      description: "A empresa chinesa 'SafeCity' ofereceu instalar 800 câmeras com IA e reconhecimento facial em toda cidade por R$ 30 milhões. A LGPD proíbe biometria sem consentimento. A população teme vigilância em massa. O crime organizado já usa tecnologia para burlar sistemas similares em 2 cidades vizinhas. A Câmara quer aprovação rápida. A China financia 80% via empréstimo. O prefeito vê oportunidade de modernização. O TCE alertou para dependência tecnológica estrangeira.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Recusar proposta, investir R$ 6 milhões em policiamento de proximidade e criar fundo de proteção de dados pessoais.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Instalar 400 câmeras sem reconhecimento facial, com transparência total de dados e auditoria anual independente.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar projeto completo, vender dados biométricos para SafeCity e usar sistema para espionar opositores políticos.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aprovar projeto completo e dizer que 'segurança justifica qualquer custo de privacidade em tempos de terrorismo urbano'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Jovens negros assassinados em supostas 'resistências'",
      description: "7 jovens negros do bairro Nova Esperança foram assassinados em supostas 'resistências à abordagem policial' nos últimos 4 meses. A PM tem histórico de abuso documentado em 3 inquéritos arquivados. A comunidade acusa grupos de extermínio com apoio de policiais. A ONU pediu investigação internacional. A população de bem quer mais polícia. O governador é aliado e defende a PM. O prefeito precisa decidir se cria comissão externa ou apoia a versão policial.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Criar comissão externa independente com promotores de fora, afastar 12 envolvidos e criar fundo de reparação às famílias.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer investigação interna na Corregedoria da PM e promover treinamento de direitos humanos, mantendo policiais em serviço.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Apoiar a PM publicamente e dizer que todos os mortos 'eram traficantes em confronto legítimo e a comunidade deve agradecer'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Financiar grupos de extermínio via verba secreta de inteligência e usar para eliminar opositores políticos do governo.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Projeto de desmilitarização da GM chega à Câmara",
      description: "O projeto de desmilitarização da Guarda Municipal chegou à Câmara. A corporação ameaça greve por 30 dias. O sindicato quer autonomia sindical e poder de greve. A população quer segurança sem armas. O crime organizado está armado com fuzis. A reforma prevê GM com poder de polícia judiciária e investigação. O governo federal é contra e ameaça cortar verba. A Câmara quer manter hierarquia militar. O prefeito prometeu desmilitarizar na campanha de 2024.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Aprovar desmilitarização com treinamento de 6 meses, armamento defensivo, controle civil rigoroso e avaliação anual.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Manter hierarquia mas ampliar direitos, salários em 15% e autonomia operacional da GM sem mudar estatuto.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Usar GM como milícia particular do prefeito, armar com fuzis e reprimir dissidência política em manifestações.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Rejeitar desmilitarização, armar a GM como força paramilitar de choque e autorizar operações conjuntas com PM.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Condomínio de luxo quer segurança armada privada em ruas públicas",
      description: "O condomínio de luxo 'Ville de France', com 120 apartamentos, quer contratar segurança armada privada para patrulhar 4 ruas públicas do entorno. A lei federal proíbe. Moradores ameaçam deixar cidade se não for autorizado. O comércio local depende do poder aquisitivo deles. A PM não dá conta. A GM é desarmada. A proposta prevê 'doação' de 2 viaturas para prefeitura em troca de patrulhamento privado. O Ministério Público é contra e ameaça ação civil pública.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Proibir segurança privada em vias públicas, reforçar patrulhamento municipal com 6 novos agentes e multar condomínio.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Permitir rondas privadas sem armamento, com identificação visível e comunicação direta com GM, por 12 meses piloto.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber 'doação' de viaturas e deixar milícia privada controlar bairros ricos, criando segurança paralela.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Autorizar segurança armada privada e dizer que 'elite paga 60% dos impostos e merece proteção proporcional'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Auditoria eleitoral encontra R$ 3 milhões não declarados",
      description: "A auditoria do TSE encontrou R$ 3,2 milhões não declarados na campanha do prefeito Ricardo Viana. O dinheiro veio de 4 empresários — todos ganharam licitações posteriores, incluindo Otávio Krieger. O TSE pediu explicações em 48h. A Câmara ameaça cassação por abuso de poder econômico. O prefeito diz que foi 'doação de amigos'. O vice Jô Matos é testemunha chave e está indecisa. A população está polarizada entre punição e 'perseguição política'.",
      theme: "Ética",
      options: {
        create: [
          { text: "Assumir erro administrativo, devolver R$ 3,2 milhões via precatórios, colaborar com Justiça e afastar 4 empresários do governo.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Negociar acordo de leniência, pagamento de multa eleitoral de R$ 800 mil e compromisso de não reeleição.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar tudo e dizer que é 'armação da oposição para cassar mandato democraticamente eleito com 52% dos votos'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Destruir provas contábeis, ameaçar testemunhas e usar máquina pública para intimidar auditor do TSE com processos.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Chefe de gabinete exige 30% de rachadinha de comissionados",
      description: "O chefe de gabinete, irmão do prefeito Ricardo Viana, exige 30% do salário de todos os 28 comissionados. Quem não pagar é exonerado no dia seguinte. A denúncia veio de um servidor que gravou conversa em áudio. A população está indignada. O valor desviado passa de R$ 2,1 milhões em 24 meses. A Câmara quer CPI com quebra de sigilo. O TCE pediu bloqueio de contas do chefe. O prefeito alega desconhecimento, mas o irmão mora no mesmo condomínio.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar irmão imediatamente, devolver R$ 2,1 milhões em 24 parcelas, abrir investigação e colaborar com MP e TCE.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Exonerar irmão, assumir culpa por 'falta de fiscalização do gabinete pessoal' e criar canal de denúncia permanente.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Promover o irmão para Secretaria de Governo, perseguir denunciante com transferência para zona rural e expandir esquema.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Defender o irmão e dizer que servidor denunciante é 'mentiroso, conspirador e invejoso do sucesso da família'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Maior empreiteira do estado oferece R$ 10 milhões em propina",
      description: "A maior empreiteira do estado, Construtora Nacional, ofereceu R$ 10 milhões para ganhar licitação de R$ 200 milhões para o 'Aquário Municipal do Vale'. O engenheiro da prefeitura alertou que o projeto é inviável: custo de manutenção de R$ 4 milhões/ano e zero demanda turística comprovada. A Câmara quer aprovar urgente. O prefeito precisa do dinheiro para pagar dívida de campanha de 2024. A população precisa de saneamento. Bruna Costa descobriu reunião secreta em restaurante.",
      theme: "Ética",
      options: {
        create: [
          { text: "Denunciar propina ao MPF, cancelar licitação do aquário e investir R$ 40 milhões em saneamento básico prioritário.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Recusar propina, manter licitação mas reformular projeto por consultoria externa independente, reduzindo custo para R$ 40 milhões.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar aquário, receber R$ 10 milhões em propina parcelada e ameaçar engenheiro com exoneração se não calar o alerta técnico.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aceitar propina de R$ 2 milhões e aprovar aquário como 'legado eterno da gestão que transformou a cidade'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Jornalista Bruna Costa é perseguida após denúncia de R$ 50 milhões",
      description: "Bruna Costa, do Correio da Cidade, denunciou desvio de R$ 50 milhões em obras de infraestrutura. Desde então, ela recebeu 3 ameaças de morte por telefone. A polícia não investiga, alegando 'falta de evidência'. O prefeito Ricardo Viana chamou ela de 'inimiga do povo' em live com 12 mil espectadores. A ABI pediu proteção federal. A ONU acompanha o caso. Ela tem provas de contas offshore vinculadas ao vereador Claudinho. A base do prefeito quer criminalizar a jornalista por 'fake news'.",
      theme: "Ética",
      options: {
        create: [
          { text: "Garantir proteção federal à Bruna, investigar ameaças como tentativa de homicídio, apurar denúncias com CPI e transparência total.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Pedir investigação neutra da PF, afastar assessores que ameaçaram publicamente e garantir entrevista de retratação na rádio local.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Mandar executar Bruna Costa via milícia local e destruir provas de corrupção do governo em incêndio controlado no arquivo.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Processar Bruna por calúnia, pedir R$ 2 milhões de indenização e dizer que ameaças são 'fake news da oposição desesperada'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Auditoria encontra 200 parentes na máquina pública",
      description: "A auditoria do TCE encontrou 201 parentes do prefeito Ricardo Viana, do vice Jô Matos e de 9 vereadores na máquina pública. Desde porteiro a secretário-adjunto. O salário mensal do grupo passa de R$ 1,2 milhão. A população está revoltada. A justiça já determinou exoneração em 2020, mas ninguém saiu. A Câmara é controlada pelas famílias. O TCE pediu bloqueio de salários. O prefeito diz que são 'técnicos qualificados comprovadamente'. A imprensa nacional cobre o caso.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar todos os 201 parentes, abrir concurso público emergencial e criar lei de nepotismo municipal com punição severa.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Exonerar apenas parentes de primeiro grau (pais, filhos, cônjuges) e manter casais distantes comissionados.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manter todos e dizer que parentesco 'não impede qualificação técnica comprovada por currículo e experiência'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Nomear mais 100 parentes e criar 'Secretaria da Família' para legalizar nepotismo como política pública.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Reforma tributária federal exige adequação municipal em 90 dias",
      description: "A Emenda Constitucional 132/2023 força Ratanabá a adequar a arrecadação de ISS à transição do IBS e revisar cadastros de IPTU e taxas em 90 dias. O setor imobiliário quer redução de IPTU. O comércio quer alívio no ISS. A população quer mais serviços. A Câmara quer manter verbas de gabinete de R$ 1,8 milhão. O TCE exige transparência total. A transição custa R$ 3,5 milhões em tecnologia. A arrecadação pode cair 18% no primeiro ano por perda de taxas distritais.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Implementar reforma com equidade, cortar 25% dos privilégios de gabinete e investir em tecnologia de R$ 3,5 milhões.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer reforma gradual em 3 anos, manter isenções para igrejas e empresários aliados para não perder apoio político.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Usar reforma para beneficiar 8 empresas aliadas e criar taxa de 'segurança jurídica' de R$ 50 por empresa, abusiva.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Manter sistema antigo, criar 3 taxas novas camufladas e dizer que 'reforma federal não se aplica a municípios pequenos'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Projeto de lei propõe taxar propriedades acima de R$ 5 milhões",
      description: "O vereador da oposição propõe taxar propriedades acima de R$ 5 milhões em 0,5% ao ano. A elite local (12 famílias) ameaça deixar cidade e levar empresas. O setor imobiliário entrou na justiça alegando inconstitucionalidade. A arrecadação extra seria de R$ 22 milhões/ano. A população apoia em pesquisa (67%). A Câmara é financiada por 8 dessas famílias. O prefeito prometeu reduzir desigualdade na campanha. A Constituição permite. O TCE é favorável.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Sancionar lei, garantir progressividade e investir 100% da arrecadação em moradia popular e urbanização de favelas.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Reduzir alíquota para propriedades acima de R$ 10 milhões e isentar propriedades produtivas rurais dos grandes produtores.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vetar projeto e dizer que taxação de grande fortuna 'espanta investimentos e mata o sonho da classe média'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Vetar projeto em troca de doação de R$ 500 mil de campanha da elite local, dividida entre 4 vereadores da base.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Prefeitura deve R$ 500 milhões ao BNDES por obra inacabada",
      description: "A prefeitura deve R$ 500 milhões ao BNDES. A dívida foi contraída pelo ex-prefeito (1997-2004) para construir 'Palácio das Convenções', obra nunca concluída e abandonada. O banco ameaça bloquear repasses federais de saúde e educação. A população paga imposto em dia e cobra solução. A Câmara quer renegociar por 50 anos. O TCE diz que contrato tem indícios de fraude. O prefeito quer usar novo empréstimo de R$ 50 milhões para pagar atrasados de servidor.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Renegociar com auditoria independente, cortar 30% dos gastos supérfluos e buscar perdão de dívida de obra inacabada por fraude comprovada.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Renegociar por 30 anos com pagamento mínimo de R$ 800 mil/mês para não quebrar o município nem cortar serviços.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Fazer novo empréstimo de R$ 80 milhões e deixar próxima gestão com dívida de R$ 580 milhões mais juros.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Desviar R$ 20 milhões do empréstimo para pagar dívida de campanha e obras de luxo do gabinete do prefeito.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Sistema de ônibus falindo: tarifa subiu 50% em 2 anos",
      description: "O sistema de ônibus municipal está falindo. A tarifa subiu de R$ 3,20 para R$ 4,80 em 24 meses. A população quer passe livre para estudantes e idosos. O sindicato dos rodoviários ameaça greve de 30 dias. As 3 empresas de ônibus querem subsídio de R$ 30 milhões/ano. O TCE alertou para risco de cartel — as 3 empresas têm sócios em comum. A alternativa é municipalizar, mas custa R$ 120 milhões em frota. O prefeito depende do apoio das empresas para reeleição.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Municipalizar transporte gradualmente em 4 anos, criar tarifa social de R$ 2,00 e investir em mobilidade sustentável.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Conceder subsídio de R$ 15 milhões/ano por 24 meses, auditar empresas e exigir abertura de contas para evitar cartel.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dar subsídio de R$ 30 milhões sem auditoria e receber propina de R$ 200 mil/ano dos sócios das empresas.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aumentar tarifa para R$ 6,00 e dizer que 'usuário deve pagar pelo serviço que consome, sem dependência de subsídios'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Zona franca urbana no centro: isenção total por 15 anos",
      description: "O projeto cria zona franca no centro histórico para atrair empresas de tecnologia. Isenta todos os impostos por 15 anos. O comércio local quer inclusão. A população teme especulação imobiliária e expulsão de lojas tradicionais. O TCE alertou para risco de erosão da base tributária em 35%. A Câmara quer incluir bares e restaurantes de aliados. O prefeito vê oportunidade de marketing nacional. A cidade precisa de R$ 50 milhões em arrecadação para equilibrar contas.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Criar zona franca seletiva para tech, com contrapartida de 100 empregos locais, investimento de R$ 5 milhões em capacitação e ISS reduzido, não zerado.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Isentar por 5 anos e cobrar taxa mínima de conservação urbana de R$ 800/mês para não zerar arrecadação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Vender isenções para empresas de familiares do prefeito e criar cartel de tech local protegido por decreto.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Isentar tudo por 15 anos, incluir comércio de aliados e dizer que 'desenvolvimento gera empregos que compensam impostos'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Parque Municipal virar condomínio de luxo: oferta de R$ 20 milhões",
      description: "O Parque Municipal da Lagoa, área pública de 8 hectares desde 1950, está abandonado. Um grupo imobiliário ofereceu 'adotar' o parque: transformar 4 hectares em condomínio de luxo e manter 4 hectares como área verde privativa (acesso apenas para moradores). O parque é o único espaço de lazer de 6 bairros. O TCE diz que venda é ilegal e configura alienação de patrimônio público. A empresa ofereceu R$ 20 milhões e apoio de campanha de R$ 2 milhões. O Ministério Público acompanha.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Recusar proposta, revitalizar parque com R$ 8 milhões de recursos próprios, parcerias culturais e área de lazer inclusiva.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Conceder concessão de administração por 15 anos sem venda de área, com fiscalização de metas de manutenção e acesso público garantido.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar condomínio e dizer que 'área verde privativa bem cuidada é melhor que parque público abandonado e perigoso'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Vender metade do parque, receber R$ 20 milhões em caixa dois e construir condomínio para familiares do governo com desconto de 50%.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Proposta de usina de incineração de lixo por R$ 150 milhões",
      description: "A Krieger Ambiental propõe construir usina de incineração de lixo por R$ 150 milhões. A empresa garante energia para 8 mil residências e redução de 90% do volume. A população do bairro Beira Rio teme dioxinas e câncer. O Ibama exige EIA rigoroso de 18 meses. A alternativa é aterro sanitário novo, mas não há área no município. A reciclagem atual é de apenas 3%. A Krieger exige isenção de ISS por 10 anos. A Câmara quer aprovar sem estudo ambiental.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Exigir EIA completo de 18 meses, consulta pública vinculante e contrapartida de reciclagem de 30% antes de qualquer aprovação.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Aprovar com EIA simplificado de 6 meses e controle de emissões por fiscalização terceirizada da própria Krieger Ambiental.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar usina, receber R$ 1 milhão de propina e ignorar emissões tóxicas na comunidade pobre, culpando 'histeria coletiva'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Aprovar sem estudo e dizer que 'tecnologia chinesa é segura, moderna e usada na Europa', ignorando resíduos tóxicos.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Três enchentes históricas em 1 ano: prefeito nega mudança climática",
      description: "A cidade sofreu três enchentes históricas em 12 meses, com prejuízo de R$ 120 milhões. O IPCC aponta risco crítico para a região nas próximas décadas. A prefeitura não tem plano de adaptação climática. O setor imobiliário quer construir em áreas de risco. A população ribeirinha quer reassentamento e indenização. O custo de adaptação é de R$ 200 milhões. O governo federal oferece R$ 80 milhões, mas exige plano. O prefeito nega mudança climática em entrevistas. A Câmara quer aprovar loteamento em manguezal.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Criar plano de adaptação climática, reassentar 400 famílias, proteger áreas verdes e barrar loteamento em manguezal.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Fazer obras de contenção pontuais e manter zoneamento atual, sem proibir construção em áreas de risco conhecidas.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aprovar loteamento em manguezal, receber R$ 800 mil de propina de incorporadoras e deixar população ribeirinha sem ajuda.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Negar mudança climática, aprovar loteamento em área de risco e dizer que 'desenvolvimento imobiliário gera empregos e progresso'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Governo federal propõe privatizar companhia de água",
      description: "O governo federal propõe privatizar a Companhia de Água do Vale, que atende o município. A empresa privada 'AquaBrasil' promete investir R$ 200 milhões, mas seu histórico em 3 estados é de tarifa alta, corte em bairros pobres e milhares de reclamações na ouvidoria. Em consulta pública, 78% da população é contra. O prefeito depende do governo federal para outras verbas de R$ 15 milhões. A Câmara quer aprovar sem discussão. O TCE alertou para risco de monopólio natural.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Rejeitar privatização, fortalecer companhia pública com R$ 8 milhões, criar tarifa social de R$ 12 para famílias pobres.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Aceitar concessão por 30 anos com contrapartida de investimento de R$ 50 milhões e tarifa congelada por 5 anos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Receber R$ 1 milhão de propina da AquaBrasil e deixar população sem água tratada nos 4 bairros mais pobres por 'falta de pressão'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Apoiar privatização e dizer que 'estado não dá conta de servir água com qualidade e só o mercado pode fazer isso'.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Reserva Ambiental Municipal sendo invadida por loteamento",
      description: "A Reserva Ambiental do Morro Azul está sendo invadida por loteamento irregular que já derrubou 12 hectares de mata. A fauna ameaçada (onça-pintada, macaco-prego) está sendo dizimada. O Ibama embargou, mas a obra continua à noite com escavação mecanizada. O dono é deputado estadual e doador de R$ 300 mil de campanha do prefeito. O valor do empreendimento é de R$ 500 milhões. A justiça federal pediu prisão de responsáveis. A Câmara quer anistia via lei de regularização fundiária.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Cumprir embargo federal, reaver os 12 hectares desmatados, criar Unidade de Conservação municipal e processar deputado e incorporadoras.", budgetImpact: 3200, approvalImpact: 3 },
          { text: "Multar em R$ 2 milhões e exigir compensação ambiental em outra área equivalente, permitindo continuidade do empreendimento sob fiscalização.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Anistiar loteamento e dizer que reserva ambiental é 'exagerada e atrapalha desenvolvimento e geração de empregos'.", budgetImpact: -4600, approvalImpact: -4 },
          { text: "Entrar para sociedade do loteamento com 3% de cotas, anistiar via decreto e vender lotes para aliados do governo com 30% de desconto.", budgetImpact: -4600, approvalImpact: -4 }
        ]
      }
    }
  ];

  const withDifficulty = (difficulty: 'EASY' | 'MEDIUM' | 'HARD', dilemmas: typeof roundEasy) =>
    dilemmas.map((dilemma) => ({ ...dilemma, difficulty }));

  const allDilemmas = [
    ...withDifficulty('EASY', roundEasy),
    ...withDifficulty('MEDIUM', roundMedium),
    ...withDifficulty('HARD', roundHard),
  ];

  for (const dilemma of allDilemmas) {

    dilemma.options.create = shuffleArray(dilemma.options.create);
    
    await prisma.dilemma.create({
      data: dilemma
    });
  }

  console.log(`✅ Banco populado com sucesso com ${allDilemmas.length} dilemas revisados, contextualizados e EMBARALHADOS!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });