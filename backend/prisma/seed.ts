import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando o plantio das sementes (populando o banco)...');

  const roundEasy = [
    {
      title: "UBS Sem Médico",
      description: "A UBS do bairro Novo Horizonte está sem médico há duas semanas. Moradores protestam na porta da prefeitura exigindo atendimento.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Contratar médicos emergencialmente via processo simplificado e garantir o atendimento.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Aguardar o próximo concurso público e pedir paciência à população.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar os protestos e afirmar que a culpa é do governo estadual.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Desviar a verba da saúde para pagar dívidas de campanha e deixar a UBS fechada.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Vacinas Esgotadas",
      description: "O estoque de vacinas da gripe acabou no primeiro dia de campanha. Idosos voltaram para casa sem ser imunizados.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Solicitar lote emergencial ao Ministério da Saúde e abrir ponto extra de vacinação.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Reduzir a quantidade por pessoa e tentar esticar o estoque restante.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Cancelar a campanha e culpar a falta de repasse federal.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender as vacinas restantes para clínica privada do parente de um assessor.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ambulância Quebrada",
      description: "A única ambulância do distrito rural quebrou na estrada de terra. Emergências agora dependem de carros de populares.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Alugar uma ambulância particular emergencialmente até a reposição do veículo.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Solicitar ajuda ao SAMU estadual e deixar a responsabilidade dividida.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Informar que não há recursos e orientar que moradores comprem carro próprio.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender a ambulância quebrada por preço de sucata para empresa de um aliado político.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Dengue em Alta",
      description: "Os casos de dengue triplicaram no último mês. O centro de saúde não tem mais soro disponível.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Declarar emergência epidemiológica e mobilizar todas as equipes de combate ao mosquito.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Fazer apenas uma campanha de conscientização nas escolas e aguardar a chuva passar.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar os dados epidemiológicos e proibir a divulgação dos números reais.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Comprar inseticidade vencido superfaturado e distribuir apenas em bairros eleitores.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Falta de Remédios",
      description: "A farmácia básica está sem insulina e anti-hipertensivos. Pacientes crônicos estão desesperados.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Adquirir medicamentos via licitação emergencial e distribuir imediatamente.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Limitar a entrega para uma caixa por família e pedir economia.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que o estoque acabou e recomendar comprar em farmácia particular.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Desviar os remédios para venda em mercado paralelo e falsificar o estoque.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Infiltração na Escola",
      description: "A Escola Municipal João Paulo está com infiltração grave. As salas de aula foram interditadas.",
      theme: "Educação",
      options: {
        create: [
          { text: "Contratar empresa para reforma emergencial e realocar alunos provisoriamente.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Transferir as aulas para o ginásio poliesportivo até o orçamento do próximo ano.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manter as aulas no pátio e afirmar que contato com a natureza é saudável.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Aprovar orçamento superfaturado de reforma e dividir o excedente com o vereador indicador.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Merenda Atrasada",
      description: "O fornecedor de merenda suspendeu as entregas por falta de pagamento. Crianças estão sem almoço.",
      theme: "Educação",
      options: {
        create: [
          { text: "Negociar o pagamento parcelado emergencial e garantir a alimentação dos alunos.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Pedir que as mães levem lanche de casa até regularizar a situação.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Suspender a merenda e alegar que o governo federal não repassou o FNDE.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Fingir pagamento e desviar a verba da merenda para cobrir outras dívidas.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Laboratório de Informática Obsoleto",
      description: "Os computadores da escola não ligam há meses. O professor de informática dá aula no quadro negro.",
      theme: "Educação",
      options: {
        create: [
          { text: "Doar equipamentos de outras secretarias ociosos e buscar parceria com empresa local.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Transformar a sala de informática em biblioteca improvisada.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que tecnologia não é prioridade e manter as aulas teóricas.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Comprar computadores usados por preço de novo e receber propina do fornecedor.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Professor Faltando",
      description: "O professor de matemática do ensino médio pediu demissão no meio do ano. A turma está sem aulas.",
      theme: "Educação",
      options: {
        create: [
          { text: "Contratar substituto imediatamente via processo seletivo simplificado.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Redistribuir a turma entre os outros professores e aumentar a carga horária deles.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar a turma sem aula e dizer que não há profissionais no mercado.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Nomear um apoiador político sem formação para dar aula de matemática.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ônibus Escolar Parado",
      description: "O transporte escolar rural quebrou. Crianças estão deixando de ir à escola por falta de condução.",
      theme: "Educação",
      options: {
        create: [
          { text: "Alugar vans emergencialmente e iniciar conserto imediato do ônibus.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Pedir que os pais se organizem em caronas solidárias temporárias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Reduzir o número de dias de aula para duas vezes por semana.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender o ônibus para sucateira ligada ao gabinete e comprar outro inutilizável.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Buraco na Avenida Principal",
      description: "Um buraco gigante abriu na Avenida Brasil após a última chuva. Dois acidentes já foram registrados.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Executar tapa-buraco emergencial e sinalizar a área de risco imediatamente.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Colocar cones e aguardar o período de chuvas passar para fazer obra definitiva.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar que o buraco é perigoso e culpar a concessionária de água pela erosão.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Aprovar recapeamento total da avenida superfaturado e dividir propina.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Ponte Precária",
      description: "A ponte de acesso ao distrito rural está com madeiras podres. O trânsito foi interditado pela Defesa Civil.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Construir ponte provisória metálica e iniciar projeto definitivo com engenheiros.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Instalar uma ponte de madeira improvisada para liberar o trânsito leve.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar a ponte interditada e dizer que não há dinheiro para obra.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Contratar empresa do primo sem licitação e usar material de segunda qualidade.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Falta de Água no Bairro",
      description: "O bairro Jardim das Flores está há cinco dias sem água por rompimento de adutora. Moradores fazem fila em cisternas.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Enviar caminhões-pipa emergenciais e iniciar reparo 24 horas da adutora.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Distribuir água em horários limitados e pedir economia à população.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Culpar a concessionária e dizer que o problema não é da prefeitura.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Cobrar taxa extra de 'emergência hídrica' dos moradores para liberar água.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Esgoto a Céu Aberto",
      description: "O bueiro entupido na Rua das Acácias jorra esgoto há uma semana. O cheiro está insuportável.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Desentupir e higienizar a área imediatamente, punindo a empresa causadora.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Colocar cal no local e agendar limpeza para a próxima semana.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que a rua é de responsabilidade dos moradores e recusar ação.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Cobrar dos moradores para fazer o serviço que deveria ser público.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Praça Abandonada",
      description: "A Praça da Matriz virou ponto de abandono de lixo e uso de drogas. O playground está destruído.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Limpar, iluminar e revitalizar a praça com projeto comunitário de segurança.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Cercar a praça e colocar um vigia noturno temporário.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Fechar a praça indefinidamente e dizer que é área estadual.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender parte da praça para construção de estacionamento privado.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Viatura Quebrada",
      description: "A única viatura da Guarda Municipal quebrou. O patrulhamento noturno foi suspenso no centro.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Alugar viaturas emergencialmente e acelerar manutenção da frota.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Reduzir o número de rondas e concentrar esforços apenas no comércio.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Cancelar o patrulhamento e dizer que segurança é função da Polícia Militar.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Comprar viaturas de luxo superfaturadas e deixar a GM sem combustível.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Posto Policial Fechando",
      description: "O posto da Polícia Militar no bairro industrial vai fechar por falta de efetivo estadual.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Oferecer sede e custeio municipal para manter o posto funcionando.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Solicitar reforço apenas nos fins de semana quando o comércio funciona.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar fechar e dizer que a culpa é exclusivamente do governo do estado.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Cobrar 'taxa de segurança' dos comerciantes para bancar policiais particulares.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Falta de Coletes",
      description: "Os agentes de trânsito estão sem coletes refletivos. Dois foram quase atropelados na BR passante.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Comprar EPIs emergenciais e suspender operações até a chegada.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Reduzir operações ao dia e evitar trabalho noturno nas rodovias.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Mandar os agentes trabalharem sem colete e dizer que é coragem profissional.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Comprar coletes de baixa qualidade superfaturados de empresa do parente.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Iluminação Pública Apagada",
      description: "As luzes do bairro industrial apagaram há um mês. Assaltos aumentaram 40%.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Trocar lâmpadas emergencialmente e fazer auditoria elétrica do bairro.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Instalar luminárias provisórias nos pontos mais críticos apenas.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que a concessionária é a responsável e recusar qualquer ação.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Fazer contrato direto com empresa de iluminação e receber mensalinho.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Brigas no Trânsito",
      description: "O cruzamento sem semáforo na saída da escola gerou três brigas graves esta semana.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Instalar semáforo temporário e colocar agente no horário de pico.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Pintar faixa de pedestre e colocar placas de advertência.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que os pais devem se educar e recusar intervenção no trânsito.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Cobrar propina de comerciantes para 'resolver' o problema do cruzamento.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Propina do Fornecedor",
      description: "Um fornecedor ofereceu 10% de desconto se o pagamento for feito em dinheiro vivo.",
      theme: "Ética",
      options: {
        create: [
          { text: "Recusar a proposta, denunciar à Controladoria e manter o processo licitatório.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Pedir o desconto legal via nota fiscal e manter o pagamento bancário.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aceitar o desconto discretamente sem deixar rastro no sistema.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Exigir 15% de propina para aprovar o pagamento em dinheiro vivo.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Nepotismo Indicado",
      description: "O vereador da base exige a nomeação do filho recém-formado para um cargo comissionado.",
      theme: "Ética",
      options: {
        create: [
          { text: "Recusar e explicar que nomeações técnicas seguem critérios de mérito.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Nomear para um cargo sem função definida e sem acesso a verba.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Atender o pedido e nomear o filho para secretaria de finanças.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Criar cargo fantasma para o filho e mais três apadrinhados do vereador.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Presente Caro",
      description: "Um empresário presenteou o prefeito com um relógio de luxo após vencer uma licitação.",
      theme: "Ética",
      options: {
        create: [
          { text: "Devolver o presente e registrar o fato na Comissão de Ética.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Aceitar e doar para leilão beneficente, declarando publicamente.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Guardar o relógio e dizer que é presente de amigo pessoal.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Exigir mais presentes de outros licitantes como 'custo de fazer negócio'.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Vazamento de Dados",
      description: "Os dados sigilosos de contribuintes vazaram na internet. A imprensa cobra explicações.",
      theme: "Ética",
      options: {
        create: [
          { text: "Abrir investigação interna, notificar vítimas e reforçar segurança digital.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Dizer que foi falha técnica pontual e contratar empresa de TI.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar o vazamento e ameaçar processar jornalistas por fake news.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender os dados restantes para empresa de marketing sem consentimento.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Redução do IPTU",
      description: "A Câmara aprovou projeto de redução geral do IPTU sem contrapartida. A arrecadação cairá 15%.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Vetar o projeto por inconstitucionalidade e propor reforma tributária estruturada.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Sancionar com redução gradual ao longo de três anos.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Sancionar imediatamente para agradar eleitores e ignorar déficit.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Aprovar redução para amigos e aumentar alíquota de rivais políticos.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Sonegação de Grande Empresa",
      description: "A maior indústria do município deixou de recolher ISS por dois anos. Dívida passa de R$ 2 milhões.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Inscrever na dívida ativa e ajuizar execução fiscal imediata.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Negociar parcelamento especial para evitar fechamento da fábrica.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Perdoar a dívida em troca de empregos e apoio político.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Receber propina para arquivar o processo e fraudar a dívida.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Taxa Irregular",
      description: "A cobrança de taxa de limpeza de festas foi considerada ilegal pelo Ministério Público.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Extirpar a taxa e regulamentar apenas cobranças legais por lei.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Renomear a taxa e criar alíquota menor com outra nomenclatura.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Manter a cobrança e orientar fiscais a agirem com mais discrição.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Dobrar a taxa e ameaçar fechar estabelecimentos que reclamarem.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Refis Abusivo",
      description: "O Refis aprovado perdoa 90% dos juros para devedores de longa data.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Vetar por ilegalidade e propor programa de regularização justo.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Sancionar com redução de 50% dos juros e parcelamento curto.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Sancionar como está para beneficiar grandes devedores aliados.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Criar Refis secreto para devedores do grupo político do prefeito.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Cobrança Indevida",
      description: "O sistema tributário duplicou o IPTU de 500 idosos por erro de programação.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Corrigir sistema, restituir valores e pedir desculpas públicas.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Estornar em parcelas ao longo do próximo ano fiscal.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Negar o erro e dizer que os idosos devem recorrer judicialmente.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Apropriar-se do dinheiro extra e dizer que será usado em obras.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Lixo Acumulado",
      description: "O caminhão de coleta quebrou e o lixo se acumula no centro há três dias.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Alugar caminhões emergenciais e acelerar manutenção da frota.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Organizar mutirão comunitário e pedir ajuda de moradores.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar acumular e culpar a empresa terceirizada pelo descaso.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Desviar verba de manutenção e deixar a cidade em estado de abandono.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Queimada Urbana",
      description: "Moradores estão queimando lixo nos lotes baldios. A fumaça invade a UBS próxima.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Proibir queimadas, multar infratores e intensificar coleta no local.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Fazer campanha educativa e pedir que não queimem nos horários de pico.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar as queimadas e dizer que é tradição local.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender autorização de queimada para desocupar terrenos para especulação.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Rio Poluído",
      description: "O rio que corta a cidade está espumando e com cheiro tóxico. Peixes estão mortos às margens.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Fiscalizar indústrias despejadoras e instalar estações de tratamento emergenciais.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Recolher os peixes mortos e aguardar relatório ambiental.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Dizer que a poluição vem de cidades vizinhas e lavar as mãos.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Receber propina da indústria poluidora para arquivar fiscalização.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Árvore Caída",
      description: "Uma árvore centenária caiu sobre a fiação elétrica. O bairro está sem luz.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Remover a árvore, restaurar energia e replantar espécies nativas.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Cortar a árvore e deixar a concessionária restabelecer a luz.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar a árvore no local e dizer que é patrimônio histórico.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender a madeira da árvore e apropriar-se do dinheiro.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Barulho de Obra Noturna",
      description: "Uma construtora está trabalhando à noite sem autorização. Moradores não dormem há uma semana.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Embargar a obra noturna e multar a construtora por poluição sonora.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Autorizar apenas aos sábados e limitar horário até 22h.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar as reclamações e dizer que obras geram empregos.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Receber propina da construtora para liberar trabalho 24 horas.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    }
  ];

  const roundMedium = [
    {
      title: "Hospital Regional Superlotado",
      description: "O Hospital Regional está com 180% de ocupação nos leitos. Pacientes aguardam em macas nos corredores há dois dias. A mídia local cobra uma solução imediata. O estado diz que não tem verba para repasse.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Abrir 30 leitos emergenciais com recursos próprios e reforçar equipe plantonista.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Instalar tendas externas para estabilização e aguardar ajuda estadual.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Transferir pacientes para hospitais particulares sem vagas e culpar a população por procurar serviço.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Desviar verba do hospital para pagar dívida de campanha e deixar a superlotação continuar.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Falta de Especialistas",
      description: "Não há cardiologista, neurologista nem ortopedista no SUS municipal há seis meses. A fila de espera ultrapassa mil pessoas. O conselho de medicina alertou para responsabilização técnica.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Contratar especialistas via processo seletivo simplificado com salário compatível.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Fazer parceria com faculdade de medicina para atendimento supervisionado.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Negar a falta e dizer que a população deve buscar plano de saúde privado.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Criar 'taxa de fila' para pular consultas e desviar dinheiro para o gabinete.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Mortalidade Infantil em Alta",
      description: "O índice de mortalidade infantil subiu 25% no último trimestre. A maioria dos óbitos ocorre por desnutrição e infecções respiratórias. O Ministério Público abriu investigação. A imprensa cobra ações concretas.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Implementar programa municipal de acompanhamento pré-natal domiciliar e nutricional.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Distribuir cestas básicas para gestantes e ampliar atendimento pediátrico.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manipular os dados epidemiológicos e dizer que a alta é sazonal.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Desviar verba do programa maternal para pagar despesas pessoais do gabinete.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Filas Enormes no SUS",
      description: "A fila para consultas eletivas no SUS chegou a quatro meses de espera. Pacientes crônicos estão abandonando o tratamento. O conselho municipal de saúde ameaça entrar na Justiça.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Criar centro de regulação municipal e contratar clínicas conveniadas para zerar filas.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Priorizar apenas casos graves e deixar eletivas para o próximo ano.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que filas são normais no SUS e culpar a demanda reprimida da população.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Vender vagas de consulta para clínica particular e dividir lucro com secretário.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Doença Respiratória e Poluição",
      description: "O número de crianças com asma dobrou após a instalação de um aterro irregular próximo à escola. Pais estão retirando filhos da rede municipal. A Secretaria de Saúde está sob pressão.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Fiscalizar e embargar o aterro irregular, além de instalar barreira sanitária.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Distribuir máscaras nas escolas e aguardar relatório de impacto ambiental.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Negar correlação entre aterro e doenças e processar pais por difamação.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina do dono do aterro e silenciar a comunidade escolar.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Analfabetismo Funcional",
      description: "O índice de analfabetismo funcional no ensino fundamental chegou a 45%. O IDEB está entre os piores do estado. Pais ameaçam tirar filhos da escola pública. A secretaria de educação está sem projeto.",
      theme: "Educação",
      options: {
        create: [
          { text: "Implementar programa de reforço escolar integral com professores extras e material didático novo.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Focar apenas no terceiro ano e tentar melhorar a avaliação externa.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Culpar a cultura local e dizer que pais não valorizam estudo.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Falsificar notas do IDEB e desviar verba do material didático.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Escola Sem Acessibilidade",
      description: "A escola municipal mais antiga não tem rampas nem elevador. Uma aluna cadeirante está sendo carregada pelos colegas para acessar a sala. O Ministério Público notificou a prefeitura.",
      theme: "Educação",
      options: {
        create: [
          { text: "Adaptar imediatamente a escola com rampas, elevador e banheiros acessíveis.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Transferir a aluna para escola mais nova e aguardar reforma estrutural.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que a escola é patrimônio histórico e não pode ser modificada.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Aprovar orçamento de adaptação superfaturado e desviar 40% do valor.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Evasão Escolar",
      description: "A evasão no ensino médio chegou a 30%. Os alunos abandonam a escola para trabalhar informalmente. O conselho tutelar está sem estrutura para abordagem. A economia local depende do trabalho infantil.",
      theme: "Educação",
      options: {
        create: [
          { text: "Criar programa de bolsa auxílio estudantil e acompanhamento psicossocial.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Fazer campanha de conscientização e busca ativa apenas nos casos extremos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que evasão é problema familiar e reduzir investimento no ensino médio.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Usar dados de evasão para desviar verba e manter alunos como mão de obra barata.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Piso Salarial dos Professores",
      description: "A prefeitura está há quatro meses sem pagar o piso nacional do magistério. Professores ameaçam greve no segundo semestre. A justiça já determinou o pagamento em duas ações distintas.",
      theme: "Educação",
      options: {
        create: [
          { text: "Regularizar imediatamente os salários e criar fundo para manutenção do piso.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Pagar parcelado e negociar acordo com o sindicato para evitar greve.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Recusar o pagamento e dizer que a lei federal não se aplica ao município.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Criar 'taxa de educação' nos impostos para cobrir o rombo e punir professores grevistas.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Tecnologia Obsoleta",
      description: "O laboratório de informática tem computadores de 2010 que não rodam programas atuais. O professor de robótica desistiu da disciplina. A escola ficou de fora de programa federal por falta de infraestrutura.",
      theme: "Educação",
      options: {
        create: [
          { text: "Fazer parceria público-privada para doação de equipamentos e capacitação de professores.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Usar tablets doados por ONG e adaptar currículo para plataformas mobile.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Cancelar a disciplina de robótica e dizer que não é essencial.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Comprar equipamentos usados por preço de novo e desviar verba para obras de luxo.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "BRT Atrasado",
      description: "A obra do BRT está dois anos atrasada e o consórcio executora pediu reequilíbrio econômico de R$ 50 milhões. O trânsito está caótico. O Ministério Público investiga superfaturamento.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Renegociar contrato com auditoria independente e exigir cronograma rigoroso.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Aceitar reequilíbrio parcial e prorrogar prazo por mais um ano.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Pagar o valor integral sem auditoria e culpar atraso em questões climáticas.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina do consórcio e aprovar reequilíbrio com aditivo secreto.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Asfalto de Baixa Qualidade",
      description: "O recapeamento da avenida principal durou apenas seis meses. O asfalto está se desmanchando. A empresa garante que cumpriu projeto. Engenheiros municipais apontam especificação inadequada.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Exigir refazer a obra às custas da empresa e aplicar multa contratual.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Fazer reparos pontuais e negociar redução de 20% no valor final.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Aceitar a obra como está e dizer que o tráfego pesado é o culpado.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Aprovar novo recapeamento superfaturado com a mesma empresa em troca de propina.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Falta de Saneamento na Periferia",
      description: "O bairro mais populoso da cidade ainda não tem rede de esgoto. A contaminação do lençol freático está comprovada. A Caixa aprovou financiamento, mas a prefeitura não apresentou projeto executivo.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Elaborar projeto executivo emergencial e iniciar obra de saneamento integrada.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Construir fossas sépticas comunitárias temporárias enquanto aguarda recurso.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que saneamento é obrigação estadual e arquivar o financiamento.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Desviar verba do saneamento para pagar dívida com fornecedor de campanha.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Ciclovia Mal Planejada",
      description: "A ciclovia inaugurada com festa passa por cima de bueiros e pontos de ônibus. Ciclistas estão sendo atropelados. O projeto foi feito sem consulta pública. A empresa de engenharia é de um ex-vereador.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Reformular o projeto com participação popular e corrigir pontos críticos.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Instalar sinalização extra e reduzir velocidade da via paralela.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter como está e dizer que ciclistas devem aprender a conviver.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Aprovar ampliação da ciclovia com a mesma empresa e receber contrapartida.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Creche Sem Vagas",
      description: "A fila de espera por creche municipal chegou a dois mil bebês. Mães estão deixando emprego por falta de onde deixar filhos. O Ministério Público cobra cumprimento da meta do PNE.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Construir creches emergenciais em terrenos públicos e contratar equipe pedagógica.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Fazer parceria com creches conveniadas e pagar vouchers para mães.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que mães devem cuidar dos filhos em casa e reduzir investimento.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Vender vagas de creche e desviar verba da construção para obras de luxo.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Milícia no Bairro",
      description: "O bairro Nova Esperança está dominado por uma milícia que cobra 'taxa de segurança'. Comerciantes pagam para não serem queimados. A PM teme entrar na área. Moradores pedem ação da Guarda Municipal.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Criar base integrada de GM e PM no bairro e programa de proteção a testemunhas.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Aumentar rondas periféricas e instalar câmeras nos acessos ao bairro.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que segurança pública é função estadual e recusar ação municipal.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Fazer acordo com a milícia para 'dividir' a área e receber mensalinho.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Violência Doméstica em Alta",
      description: "Os casos de violência doméstica triplicaram. A delegacia da mulher tem apenas dois investigadores. O abrigo municipal está lotado. A campanha 'não é não' não saiu do papel por falta de verba.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Ampliar delegacia da mulher, abrigo e criar patrulha Maria da Penha municipal.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Distribuir cartilhas e fazer parceria com ONGs para atendimento.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que violência doméstica é problema de família e não do estado.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Usar dados de vítimas para intimidar opositoras políticas e proteger agressores aliados.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Guarda Municipal Desarmada",
      description: "A GM está sem armamento adequado e coletes à prova de bala. O sindicato ameaçou greve por segurança. O conselho de segurança pública recomenda desarmamento, mas o crime organizado está armado.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Equipar a GM com armamento não letal e defensivo, além de treinamento tático.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Manter desarmamento e focar em abordagem comunitária e mediação.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Retirar a GM das ruas e dizer que segurança é problema da PM.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Comprar armamento superfaturado e revender no mercado ileal.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Tráfico Próximo à Escola",
      description: "O tráfico de drogas instalou ponto de venda em frente à escola municipal. Alunos são abordados na saída. Pais querem transferir as crianças. A PM diz que não tem efetivo para patrulhar diariamente.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Instalar base comunitária integrada, iluminação e programa de ocupação juvenil.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Aumentar rondas esporádicas e pedir que pais acompanhem filhos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Fechar a escola e transferir alunos, abandonando o bairro.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina do tráfico para não interferir no ponto de venda.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Manifestação Violenta",
      description: "Um protesto por moradia está fechando a principal ponte da cidade há três dias. O trânsito está parado. A PM pede autorização para desocupar com truculência. A mídia acompanha tudo ao vivo.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Negociar mesa de diálogo, garantir assistência social e mediar desocupação pacífica.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Bloquear acesso à ponte e deixar o protesto se esvaziar naturalmente.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Autorizar ação truculenta da PM e prender líderes do movimento.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Mandar grupos de extermínio agir à paisana durante a noite.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Funcionário Fantasma",
      description: "A auditoria interna encontrou 12 funcionários que nunca compareceram ao trabalho. Eles recebem salários há oito meses. Alguns são parentes de vereadores. A imprensa descobriu e vai denunciar.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar imediatamente, recuperar valores pagos e encaminhar à polícia.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Criar função para os 12 e tentar regularizar a situação administrativa.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter os funcionários e dizer que são assessores de gabinete.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Expandir o esquema para 30 funcionários e dividir salários com aliados.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Licitação Direcionada",
      description: "O edital de R$ 10 milhões para iluminação pública tem cláusulas que só uma empresa atende. O concorrente entrou na justiça. O prefeito foi sócio do dono da empresa favorecida até 2022.",
      theme: "Ética",
      options: {
        create: [
          { text: "Cancelar licitação, refazer edital com critérios técnicos e afastar suspeitos.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Alterar cláusulas pontuais e manter cronograma da obra.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter o edital e dizer que a empresa é a única qualificada do estado.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina de 10% e ameaçar concorrente para desistir da ação.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Assédio Moral no Servidor",
      description: "A chefia de departamento humilha funcionários publicamente há anos. Sete servidores pediram exoneração. O sindicato cobra intervenção. O chefe é irmão de um deputado estadual da base.",
      theme: "Ética",
      options: {
        create: [
          { text: "Instaurar sindicância, afastar o gestor e criar canal de denúncia anônima.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Transferir o chefe para outro departamento sem função de chefia.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Ignorar as denúncias e dizer que servidor público tem que aguentar pressão.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Promover o chefe e perseguir os servidores que denunciaram.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Superfaturamento de Evento",
      description: "A festa de aniversário da cidade custou R$ 2 milhões. O artista principal recebeu R$ 800 mil. O mercado cobra R$ 200 mil pelo mesmo show. A empresa organizadora é de um assessor do prefeito.",
      theme: "Ética",
      options: {
        create: [
          { text: "Abrir auditoria, suspender pagamentos e exigir devolução de valores.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Reduzir orçamento dos próximos eventos e mudar empresa organizadora.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que o artista é caro porque é famoso e manter contrato.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Aumentar o orçamento do próximo evento e dividir propina com assessor.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Conflito de Interesses",
      description: "O secretário de obras é dono de uma construtora que venceu três licitações no último ano. A mulher do prefeito é sócia de uma empresa de eventos que faz todas as festas municipais.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar secretário, cancelar contratos e criar lei de conflito de interesses.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Pedir que secretário venda a empresa e transfira eventos para terceiros.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que não há ilegalidade e manter tudo como está.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Ampliar contratos com empresas da família e criar offshore para receber propina.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "ISS Digital",
      description: "A prefeitura ainda cobra ISS manualmente. A sonegação é de 40%. Empresas pedem modernização. O sistema atual é de 2005 e descompatível com nota fiscal eletrônica.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Implementar nota fiscal de serviços eletrônica integrada com bancos e receita.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Criar portal web simples e manter cobrança paralela por seis meses.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter sistema antigo e dizer que empresas devem se adaptar.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Vender dados do sistema antigo para empresa de cobrança particular.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Isenção para Igreja",
      description: "A maior igreja evangélica do município pede isenção total de IPTU e ISS. Ela tem escola particular, estacionamento pago e loja de livros. O pastor é aliado político do prefeito.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Conceder isenção apenas para o templo e cobrar normalmente das atividades comerciais.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Conceder isenção parcial de 50% por cinco anos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Conceder isenção total e dizer que a igreja faz trabalho social.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Trocar isenção total por apoio político e doações de campanha em dinheiro vivo.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Dívida Ativa Milionária",
      description: "A dívida ativa da prefeitura passa de R$ 300 milhões. A maior parte é de empresa falida de um ex-prefeito. O procurador quer parcelar em 100 anos. A população paga imposto em dia.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Ajuizar execuções fiscais, penhorar bens e criar programa de transparência.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Negociar parcelamento em 20 anos com correção pelo IPCA.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Perdoar a dívida da empresa falida e dizer que é impossível cobrar.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina para perdoar dívidas de empresários aliados.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Taxa de Lixo Inconstitucional",
      description: "O Tribunal de Justiça declarou inconstitucional a taxa de coleta de lixo. A prefeitura depende de R$ 5 milhões mensais dela. O orçamento já está aprovado. Servidores ameaçam greve se cortar salários.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Criar taxa de conservação urbana legalmente válida e reduzir gastos supérfluos.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Incorporar valor no IPTU gradualmente ao longo de dois anos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter cobrança ilegal e orientar fiscais a não dar recibo.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Criar 'taxa de fiscalização' com valor igual e ameaçar quem recorrer.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Incentivo Fiscal Abusivo",
      description: "A prefeitura isentou uma montadora de todos os impostos por 20 anos. A empresa prometeu mil empregos, mas contratou apenas 50. O município perde R$ 8 milhões anuais em arrecadação.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Revisar contrato, exigir cumprimento de cláusula e cobrar retroativo.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Renegociar prazo de isenção e reduzir para 10 anos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Manter isenção e dizer que 50 empregos já ajudam a economia local.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina da montadora e ampliar isenção para outros setores.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Aterro Sanitário Saturado",
      description: "O aterro sanitário atingiu 95% da capacidade. O lixo está sendo despejado fora da área licenciada. A comunidade vizinha sofre com chorume. A licença ambiental vence em 30 dias.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Implantar programa de reciclagem, compostagem e buscar novo aterro licenciado.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Prorrogar licença provisória e ampliar área de disposição.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Continuar despejando fora da área e multar moradores que reclamarem.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Vender licença de novo aterro para empresa de aliado sem licenciamento.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Desmatamento de Área Protegida",
      description: "Um loteamento irregular está derrubando a mata de preservação permanente. Ordem judicial de embargo existe desde 2021, mas a obra continua à noite. O dono é doador de campanha do prefeito.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Cumprir ordem judicial, embargar definitivamente e reverter área para uso público.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Multar e permitir regularização mediante compensação ambiental.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Ignorar o desmatamento e dizer que a área não é de preservação.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina para liberar o loteamento e falsificar documentação ambiental.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Enchente Recorrente",
      description: "O bairro Beira Rio alaga toda vez que chove. Moradores perderam móveis e eletrodomésticos três vezes no ano. A prefeitura nunca fez obra de macrodrenagem. A Caixa aprovou financiamento.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Executar obra de macrodrenagem, reassentar famílias de área de risco e criar alerta.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Construir muro de contenção e instalar bomba de sucção emergencial.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Dizer que moradores devem se mudar e não construir em área de risco.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Aprovar obra de drenagem superfaturada e desviar 50% do valor.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Poluição Sonora de Eventos",
      description: "O festival de música no parque central passou do horário permitido até 4h da manhã. Moradores de 500 metros de distância não dormiram. A empresa organizadora não tem alvará.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Embargar evento, multar organizadora e criar lei de zoneamento de ruído.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Limitar horário e exigir isolamento acústico nos próximos eventos.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Deixar o festival continuar e dizer que turismo é mais importante.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Receber propina da organizadora para ignorar todas as irregularidades.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Especulação Imobiliária Verde",
      description: "Investidores estão comprando lotes na área de preservação usando laranjas. O valor do metro quadrado subiu 300%. A legislação permite construção se 'interesse social'. O prefeito foi convidado para sociedade.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Bloquear registros, reaver áreas e criar unidade de conservação municipal.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Taxar transações e exigir estudo de impacto para qualquer projeto.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Aprovar projetos e dizer que desenvolvimento gera empregos.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Entrar para sociedade dos investidores e aprovar loteamento em troca de cotas.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    }
  ];

  const roundHard = [
    {
      title: "Privatização do Hospital Público",
      description: "O Hospital Municipal está falindo. A proposta de privatização via PPP chegou à Câmara. A empresa interessada é multinacional com histórico de demissões em massa. O sindicato médico ameaça greve geral. A população depende exclusivamente do SUS municipal. A privatização traria investimento de R$ 100 milhões, mas o contrato prevê isenção tributária por 30 anos. O Ministério Público alertou para possibilidade de serviço seletivo.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Rejeitar privatização, reestruturar gestão pública e buscar repasse federal emergencial.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer concessão parcial de serviços não médicos e manter gestão pública do atendimento.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aprovar privatização total e dizer que o setor privado é mais eficiente.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber propina da multinacional e aprovar contrato com isenção de 50 anos.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Surto Epidêmico",
      description: "Um surto de doença desconhecida atingiu o bairro mais pobre. Já são 50 internações e três óbitos. O laboratório municipal não tem capacidade de diagnóstico. A imprensa nacional cobre o caso. O governo federal oferece ajuda, mas exige transparência total dos dados. Um laboratório privado oferece testes rápidos por R$ 5 milhões. A população está em pânico e o comércio fechou as portas.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Aceitar ajuda federal, isolar área, fazer testagem em massa e comunicação transparente.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Contratar laboratório privado para testagem e manter bairro em quarentena leve.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Negar gravidade, proibir imprensa de entrar no bairro e dizer que é gripe comum.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vender informações sigilosas sobre pacientes e receber propina do laboratório.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Corrupção na Compra de Medicamentos",
      description: "A auditoria federal encontrou superfaturamento de 300% na compra de medicamentos oncológicos. O secretário de saúde é primo do fornecedor. Pacientes com câncer estão sem quimioterápicos há dois meses. A Polícia Federal pediu quebra de sigilo bancário. A Câmara ameaça abrir CPI. O prefeito foi eleito com promessa de combate à corrupção. O fornecedor ofereceu R$ 2 milhões para arquivar o caso.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Demitir secretário, cancelar contrato, fazer compra emergencial e colaborar com PF.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Suspender pagamentos e refazer licitação com empresa diferente.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Defender o secretário e dizer que preços subiram por causa da inflação.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aceitar R$ 2 milhões, promover secretário e ameaçar auditor que denunciou.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Saúde Mental Abandonada",
      description: "O Centro de Atenção Psicossocial está sem psiquiatra, psicólogo e remédios. A taxa de suicídio entre jovens dobrou. Famílias relatam que pacientes em surto ficam presos em casa. O conselho de saúde pediu intervenção judicial. O orçamento da saúde mental foi cortado para pagar festas populares. A igreja local ofereceu 'tratamento espiritual' como alternativa. O prefeito considera saúde mental 'moda de rico'.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Restabelecer CAPS 24h, contratar equipe multiprofissional e campanha de prevenção ao suicídio.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer parceria com universidade para atendimento supervisionado e reduzir festas.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Manter como está e dizer que saúde mental não é prioridade do SUS.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Destinar verba da saúde mental para festas e indicar pacientes para igreja aliada.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Terceirização Total da Saúde",
      description: "Uma empresa de gestão privada ofereceu assumir toda a rede municipal de saúde por 25 anos. O contrato prevê pagamento por produtividade, não por atendimento. A empresa já administra hospitais em outras cidades com denúncias de negativa de atendimento. O sindicato médico ameaça paralisação indefinida. A população é 80% dependente do SUS. O TCE alertou para risco de dívida pública.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Recusar proposta, fortalecer gestão pública e criar hospital de referência municipal.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Terceirizar apenas gestão administrativa e manter clínicas sob controle público.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Assinar contrato integral e dizer que gestão privada reduzirá filas.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber propina milionária e assinar contrato com cláusula de sigilo eterno.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Escola Militarizada",
      description: "A Câmara aprovou projeto de escola militar no bairro mais violento. A proposta prevê uniforme, hierarquia e disciplina rigorosa. Pais estão divididos: uns querem segurança, outros temem autoritarismo. O projeto não prevê investimento pedagógico, apenas repressão. A escola atual tem nota baixa, mas professores qualificados. O governo federal oferece verba extra para escolas militares. A comunidade pediu consulta popular.",
      theme: "Educação",
      options: {
        create: [
          { text: "Fazer consulta popular, investir em segurança comunitária e manter projeto pedagógico atual.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Criar escola cívico-militar piloto e avaliar resultados em dois anos.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Implementar militarização total e dizer que educação precisa de rigor.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar verba federal para escola militar e desviar investimento pedagógico.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Corte de Verba na Educação",
      description: "A prefeitura precisa cortar 20% do orçamento. A secretaria de educação sugere reduzir investimento no ensino fundamental e manter gastos com eventos. O FUNDEB garante verba federal, mas exige contrapartida. Corte na educação inviabiliza o piso salarial. A Câmara quer manter verba de gabinete. O prefeito prometeu escolas novas na campanha. A justiça já barrou corte em educação em 2019.",
      theme: "Educação",
      options: {
        create: [
          { text: "Proteger educação, cortar gastos supérfluos e buscar renegociação de dívidas.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Reduzir investimento em tecnologia e manter salários e obras.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Cortar 20% na educação e dizer que ajuste fiscal é necessário.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Cortar educação e aumentar verba de propaganda e eventos para reeleição.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Currículo Ideológico",
      description: "O conselho municipal de educação quer incluir 'ideologia de gênero' e 'doutrinação política' no currículo. Grupos religiosos protestam nas escolas. O MEC ameaça cortar verba. Professores estão sendo ameaçados nas redes sociais. A cidade é polarizada. O prefeito precisa sancionar ou vetar o plano municipal de educação. A imprensa nacional está cobrindo o caso. A violência contra professores aumentou.",
      theme: "Educação",
      options: {
        create: [
          { text: "Vetar trechos ideológicos, garantir autonomia de professores e criar canal de denúncia.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Sancionar com moderação e deixar escolas decidirem conteúdo localmente.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Sancionar como está e mobilizar base religiosa para perseguir professores.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar o conflito para desviar verba da educação e criar milícia digital.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Universidade Municipal",
      description: "A prefeitura quer criar universidade própria. O custo estimado é R$ 50 milhões por ano. Já existe campus federal na cidade com vagas ociosas. O projeto é bandeira do prefeito para reeleição. O TCE alertou para inviabilidade. Professores da rede básica serão transferidos. A qualidade do ensino fundamental vai piorar. A população quer mais médicos e engenheiros, não mais burocracia.",
      theme: "Educação",
      options: {
        create: [
          { text: "Investir no campus federal existente, criar bolsas e manter foco no ensino básico.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Criar faculdade municipal pequena com cursos técnicos e noturnos.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Criar universidade completa e transferir verba da educação infantil.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar projeto da universidade para desviar verba e contratar aliados.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Educação Infantil 0-3 Anos",
      description: "A lei federal obriga municípios a oferecer creche para crianças de 0 a 3 anos. A fila de espera é de 5 mil crianças. A prefeitura tem terrenos, mas não tem dinheiro para construir. A iniciativa privada oferece parceria, mas cobra mensalidade das famílias. O Ministério Público ingressou com ação civil pública. Mães estão abandonando emprego. O orçamento de 2024 não prevê investimento em creches.",
      theme: "Educação",
      options: {
        create: [
          { text: "Declarar emergência, usar terrenos públicos, construir creches modulares e contratar concursados.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer parceria com creches privadas e subsidiar 50% da mensalidade.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Dizer que lei federal não tem verba e deixar mães sem alternativa.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vender terrenos públicos para creche privada e receber propina.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Obras da Copa do Mundo",
      description: "A cidade foi escolhida como base de treinamento para a Copa. O governo federal liberou R$ 200 milhões para estádio e hotel. A população precisa de saneamento e escolas. O estádio será usado quatro vezes. A FIFA exige isenções tributárias e segurança privada. O contrato prevê que prefeitura arque com manutenção após evento. A Câmara quer comissão de 10%. O Ministério Público investiga desvio.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Negociar uso do estádio existente, investir em legado urbano e recusar isenções abusivas.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Aceitar verba federal e fazer obra com contrapartida mínima municipal.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Construir estádio de luxo e deixar população sem saneamento.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Desviar verba da Copa, superfaturar obras e dividir com Câmara.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "PPP de Iluminação",
      description: "A proposta de PPP para iluminação pública prevê 20 anos de contrato. A empresa instalará LED e cobrar mensalidade da prefeitura. O valor é 300% maior que o custo atual. A população não foi consultada. O TCE encontrou indícios de direcionamento. A empresa é do mesmo grupo que financia campanhas do prefeito. A cidade tem dívidas que impedem novos endividamentos. A escuridão aumentou assaltos.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Cancelar PPP, fazer licitação pública para LED e financiar com economia de energia.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Renegociar contrato para 10 anos e reduzir mensalidade pela metade.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Assinar PPP de 20 anos e dizer que modernização tem custo.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Assinar contrato, receber propina e deixar cidade endividada por décadas.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Remoção de Comunidade",
      description: "A comunidade da Vila Esperança ocupa área valorizada há 40 anos. Um empreendimento de luxo quer o terreno. A justiça determinou reassentamento, mas não há onde realocar. A PM foi acionada para despejo. A ONU e a imprensa internacional acompanham. O prefeito prometeu moradia digna. O valor do terreno subiu 500%. A construtora ofereceu R$ 10 milhões em caixa dois para campanha.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Cumprir ordem judicial com reassentamento digno, titulação e participação comunitária.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Negociar indenização e aluguel social para famílias se mudarem.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Autorizar despejo truculento e dizer que ocupação é irregular.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber caixa dois, autorizar despejo violento e vender terreno para construtora.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Rodovia Estadual Dentro da Cidade",
      description: "A rodovia BR que corta o centro virou gargalo de trânsito. O DNIT quer duplicar, demolindo 200 casas. O governo federal oferece indenização baixa. A duplicação não prevê passarelas ou ciclovias. O comércio local vai perder acesso. A alternativa é desviar o tráfego para periferia, mas custa o dobro. A população está dividida. O prazo para decisão vence em 15 dias.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Negociar desvio com pedágio zero, passarelas e compensação justa aos moradores.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Aceitar duplicação e exigir passarelas e indenização mínima legal.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aceitar duplicação como está e dizer que progresso exige sacrifícios.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber propina do DNIT e aprovar projeto que beneficia loteamento do aliado.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Estação de Tratamento de Esgoto",
      description: "A ETE está parada há um ano. O esgoto cru vai direto para o rio. A multa ambiental já passa de R$ 5 milhões. A empresa contratada abandonou a obra. O consórcio de cidades vizinhas quer assumir, mas exige controle da prefeitura. A população ribeirinha está com doenças. O TCE bloqueou novos pagamentos. A obra precisa ser refeita do zero. O custo é de R$ 80 milhões.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Rescindir contrato, fazer nova licitação com garantia, e buscar financiamento federal.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Entrar no consórcio e dividir custos com cidades vizinhas.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Deixar ETE parada e dizer que poluição é problema do estado.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aprovar nova obra superfaturada com mesma empresa e receber propina.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "UPP à Moda Local",
      description: "A PM propõe instalar UPP no morro dominado pelo tráfico. O modelo carioca falhou e gerou milícias. A comunidade quer policiamento comunitário, não militar. O governo federal oferece verba para segurança pública, mas exige contrapartida. O tráfico ameaçou retaliação se a UPP for instalada. Jovens do morro pedem investimento em cultura e emprego. A imprensa cobra posição.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Recusar UPP militar, investir em policiamento comunitário, cultura e geração de renda.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Instalar UPP com treinamento em direitos humanos e acompanhamento social.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Instalar UPP militar e autorizar confronto direto sem mediação.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar UPP para proteger interesses do tráfico aliado e reprimir comunidade.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Inteligência Artificial no Reconhecimento Facial",
      description: "Uma empresa ofereceu instalar câmeras com IA e reconhecimento facial em toda cidade. O custo é R$ 30 milhões. A LGPD proíbe biometria sem consentimento. A população teme vigilância em massa. O crime organizado já usa tecnologia para burlar sistemas. A Câmara quer aprovação rápida. A China financia 80% do projeto. O prefeito vê oportunidade de modernização.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Recusar proposta, investir em policiamento de proximidade e proteção de dados.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Instalar câmeras sem reconhecimento facial e com transparência de dados.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aprovar projeto completo e dizer que segurança justifica qualquer custo.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aprovar projeto, vender dados para empresa chinesa e usar para espionar opositores.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Extermínio de Grupo Vulnerável",
      description: "Jovens negros do bairro pobre estão sendo assassinados em supostas 'resistências'. A PM tem histórico de abuso. A comunidade acusa grupos de extermínio. A ONU pediu investigação. A população de bem quer mais polícia. O governador é aliado e defende a PM. O prefeito precisa decidir se cria comissão externa de investigação ou apoia a versão policial.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Criar comissão externa independente, afastar envolvidos e reparar famílias.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer investigação interna e promover treinamento de direitos humanos na PM.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Apoiar a PM e dizer que mortos eram todos traficantes.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Financiar grupos de extermínio e usar para eliminar opositores políticos.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Desmilitarização da Guarda Municipal",
      description: "O projeto de desmilitarização da GM chegou à Câmara. A corporação ameaça greve. O sindicato quer autonomia. A população quer segurança sem armas. O crime organizado está armado. A reforma prevê GM com poder de polícia judiciária. O governo federal é contra. A Câmara quer manter hierarquia militar. O prefeito prometeu desmilitarizar na campanha.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Aprovar desmilitarização com treinamento, armamento defensivo e controle civil.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Manter hierarquia mas ampliar direitos e salários da GM.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Rejeitar desmilitarização e armar a GM como força paramilitar.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar GM como milícia particular do prefeito e reprimir dissidência.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Segurança Privada vs Pública",
      description: "O condomínio de luxo quer contratar segurança armada privada para patrulhar ruas públicas. A lei proíbe. Moradores ameaçam deixar cidade se não for autorizado. O comércio local depende deles. A PM não dá conta. A GM é desarmada. A proposta prevê 'doação' de viaturas para prefeitura em troca de patrulhamento privado. O Ministério Público é contra.",
      theme: "Segurança",
      options: {
        create: [
          { text: "Proibir segurança privada em vias públicas e reforçar patrulhamento municipal.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Permitir rondas privadas sem armamento e com identificação visível.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Autorizar segurança armada privada e dizer que elite paga impostos.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber 'doação' de viaturas e deixar milícia privada controlar bairros ricos.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Caixa Dois de Campanha",
      description: "A auditoria eleitoral encontrou R$ 3 milhões não declarados na campanha do prefeito. O dinheiro veio de empresários que ganharam licitações. O TSE pediu explicações. A Câmara ameaça cassação. O prefeito diz que foi doação de amigos. O vice é testemunha. A população está dividida entre quem quer punição e quem vê perseguição. O prazo para defesa é de 48 horas.",
      theme: "Ética",
      options: {
        create: [
          { text: "Assumir erro, devolver valores, colaborar com Justiça e afastar envolvidos.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Negociar acordo de leniência e pagamento de multa eleitoral.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Negar tudo e dizer que é armação da oposição para cassar mandato.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Destruir provas, ameaçar testemunhas e usar máquina pública para intimidar auditor.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Rachadinha no Gabinete",
      description: "O chefe de gabinete exige 30% do salário de todos os comissionados. Quem não pagar é exonerado. A denúncia veio de um servidor que gravou conversa. A população está indignada. O chefe é irmão do prefeito. O valor desviado passa de R$ 2 milhões em dois anos. A Câmara quer CPI. O prefeito alega desconhecimento. O TCE pediu bloqueio de contas.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar irmão, devolver valores, abrir investigação e colaborar com órgãos de controle.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Exonerar irmão e assumir culpa por falta de fiscalização.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Defender irmão e dizer que servidor denunciante é mentiroso.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Promover irmão, perseguir denunciante e expandir esquema para outras secretarias.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Propina da Empreiteira",
      description: "A maior empreiteira do estado ofereceu R$ 10 milhões para ganhar licitação de R$ 200 milhões. A obra é o aquário municipal. O engenheiro da prefeitura alertou para projeto inviável. A Câmara quer aprovar urgente. O prefeito precisa do dinheiro para pagar dívida de campanha. A população precisa de saneamento. A imprensa descobriu reunião secreta.",
      theme: "Ética",
      options: {
        create: [
          { text: "Denunciar propina, cancelar licitação e investir em saneamento básico.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Recusar propina mas manter licitação com projeto reformulado.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aceitar propina e aprovar aquário como legado da gestão.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aprovar aquário, receber propina e ameaçar engenheiro para calar.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Perseguição a Jornalista",
      description: "O jornalista que denunciou corrupção está sendo perseguido. Recebeu ameaças de morte. A polícia não investiga. O prefeito chamou ele de 'inimigo do povo' em live. A ABI pediu proteção. O jornalista tem provas de desvio de R$ 50 milhões. A população está dividida. A base do prefeito quer criminalizar o jornalista. A ONU acompanha o caso.",
      theme: "Ética",
      options: {
        create: [
          { text: "Garantir proteção ao jornalista, investigar ameaças e apurar denúncias.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Pedir investigação neutra e afastar assessores que ameaçaram.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Processar jornalista por calúnia e dizer que ameaças são fake news.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Mandar assassinar jornalista e destruir provas de corrupção.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Nepotismo Generalizado",
      description: "A auditoria encontrou 200 parentes do prefeito, vice e vereadores na máquina pública. Desde porteiro a secretário. O salário mensal do grupo passa de R$ 1 milhão. A população está revoltada. A justiça já determinou exoneração em 2020, mas ninguém saiu. A Câmara é controlada pela família. O TCE pediu bloqueio de salários. O prefeito diz que são técnicos qualificados.",
      theme: "Ética",
      options: {
        create: [
          { text: "Exonerar todos os parentes, abrir concurso público e criar lei de nepotismo.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Exonerar apenas parentes de primeiro grau e manter casos distantes.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Manter todos e dizer que parentesco não impede qualificação técnica.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Nomear mais 100 parentes e criar 'secretaria da família' para legalizar.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Reforma Tributária Municipal",
      description: "A reforma tributária federal exige adequação municipal. A prefeitura precisa unificar ISS, IPTU e taxas. O setor imobiliário quer redução. O comércio quer isenção. A população quer mais serviços. A Câmara quer manter verbas de gabinete. O TCE exige transparência. A transição custa R$ 5 milhões em tecnologia. A arrecadação pode cair 20% no primeiro ano.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Implementar reforma com equidade, cortar privilégios e investir em tecnologia.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer reforma gradual em 3 anos e manter algumas isenções.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Manter sistema antigo e criar taxas novas para cobrir déficit.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Usar reforma para beneficiar aliados e criar taxa de 'segurança política'.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Taxação de Grande Fortuna Local",
      description: "O projeto de lei propõe taxar propriedades acima de R$ 5 milhões. A elite local ameaça deixar cidade. O setor imobiliário entrou na justiça. A arrecadação extra seria de R$ 20 milhões. A população apoia. A Câmara é financiada por elite. O prefeito prometeu reduzir desigualdade. A constituição permite. O TCE é favorável. A mídia local é contra.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Sancionar lei, garantir progressividade e investir em moradia popular.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Reduzir alíquota para R$ 10 milhões e isentar propriedades produtivas.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Vetar projeto e dizer que taxação espanta investimentos.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vetar projeto em troca de doação milionária de campanha da elite.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Dívida com Banco Público",
      description: "A prefeitura deve R$ 500 milhões ao BNDES. A dívida foi contraída por prefeito anterior para obra de luxo inacabada. O banco ameaça bloquear repasses federais. A população paga imposto em dia. A Câmara quer renegociar por 50 anos. O TCE diz que contrato tem indícios de irregularidade. O prefeito quer usar novo empréstimo para pagar antigo. A justiça federal pediu explicações.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Renegociar com auditoria, cortar gastos supérfluos e buscar perdão de dívida.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Renegociar por 30 anos e manter pagamento mínimo.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Fazer novo empréstimo e deixar próxima gestão com a bomba.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Desviar verba do empréstimo e pagar dívida de campanha com dinheiro público.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Subsídio ao Transporte",
      description: "O sistema de ônibus está falindo. A tarifa subiu 50% em dois anos. A população quer passe livre. O sindicato dos rodoviários ameaça greve. As empresas querem subsídio de R$ 30 milhões anuais. O TCE alertou para risco de cartel. A alternativa é municipalizar, mas custa R$ 100 milhões. O prefeito depende do apoio das empresas de ônibus. A eleição é no próximo ano.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Municipalizar transporte, criar tarifa social e investir em mobilidade sustentável.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Conceder subsídio temporário e auditar empresas.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aumentar tarifa e dizer que usuário deve pagar pelo serviço.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Dar subsídio sem auditoria e receber propina das empresas de ônibus.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Zona Franca Urbana",
      description: "O projeto cria zona franca no centro para atrair empresas de tecnologia. Isenta todos os impostos por 15 anos. O comércio local quer inclusão. A população teme especulação imobiliária. O TCE alertou para risco de erosão da base tributária. A Câmara quer incluir bares e restaurantes de aliados. O prefeito vê oportunidade de marketing. A cidade precisa de R$ 50 milhões em arrecadação.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Criar zona franca seletiva para tech, com contrapartida de empregos e investimento social.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Isentar por 5 anos e cobrar taxa mínima de conservação urbana.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Isentar tudo por 15 anos e incluir comércio de aliados.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vender isenções para empresas de familiares e criar cartel de tech.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Parque Virar Condomínio",
      description: "O Parque Municipal está abandonado. Um grupo imobiliário ofereceu 'adotar' o parque e transformar metade em condomínio de luxo. A outra metade seria área verde privativa. O parque é área pública desde 1950. A população quer lazer. O TCE diz que venda é ilegal. O prefeito precisa de caixa. A empresa ofereceu R$ 20 milhões e apoio de campanha. O Ministério Público acompanha.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Recusar proposta, revitalizar parque com recursos próprios e parcerias culturais.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Conceder concessão de administração sem venda de área.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aprovar condomínio e dizer que área verde privativa é melhor que abandonada.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vender parque, receber propina e construir condomínio para familiares.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Usina de Resíduos Sólidos",
      description: "A proposta é construir usina de incineração de lixo. A empresa garante energia e redução de 90% do volume. A população vizinha teme dioxinas. O Ibama exige EIA rigoroso. O custo é R$ 150 milhões. A alternativa é aterro sanitário novo, mas não há área. A reciclagem atual é de apenas 5%. A empresa é estrangeira e exige isenção de impostos. A Câmara quer aprovar sem estudo.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Exigir EIA completo, consulta pública e contrapartida de reciclagem antes de aprovar.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Aprovar com EIA simplificado e controle de emissões.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aprovar sem estudo e dizer que tecnologia é segura.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aprovar usina, receber propina e ignorar emissões tóxicas na comunidade pobre.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Mudança Climática e Enchentes",
      description: "A cidade sofreu três enchentes históricas em um ano. O IPCC aponta risco crítico. A prefeitura não tem plano de adaptação climática. O setor imobiliário quer construir em áreas de risco. A população ribeirinha quer reassentamento. O custo de adaptação é R$ 200 milhões. O governo federal oferece verba, mas exige plano. O prefeito nega mudança climática. A Câmara quer aprovar loteamento em manguezal.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Criar plano de adaptação climática, reassentar famílias e proteger áreas verdes.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Fazer obras de contenção e manter zoneamento atual.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Negar mudança climática e aprovar loteamento em área de risco.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Aprovar loteamento, receber propina e deixar população ribeirinha sem ajuda.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Privatização da Água",
      description: "O governo federal propõe privatizar a companhia de água que atende o município. A empresa privada promete investimento, mas histórico é de tarifa alta e corte em bairros pobres. A população é contra em consulta. O prefeito depende do governo federal para outras verbas. A Câmara quer aprovar sem discussão. O TCE alertou para risco de monopólio. A água é essencial para vida.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Rejeitar privatização, fortalecer companhia pública e criar tarifa social.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Aceitar concessão com contrapartida de investimento e tarifa congelada.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Apoiar privatização e dizer que estado não dá conta.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Receber propina da empresa privada e deixar população sem áua tratada.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Loteamento em Área Preservada",
      description: "A Reserva Ambiental Municipal está sendo invadida por loteamento irregular. A fauna ameaçada de extinção está sendo dizimada. O Ibama embargou, mas obra continua à noite. O dono é deputado estadual. A população quer parque. O prefeito foi convidado para sociedade. O valor do empreendimento é R$ 500 milhões. A justiça federal pediu prisão de responsáveis. A Câmara quer anistia.",
      theme: "Meio Ambiente",
      options: {
        create: [
          { text: "Cumprir embargo, reaver área, criar unidade de conservação e processar invasores.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Multar e exigir compensação ambiental em outra área.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Anistiar loteamento e dizer que reserva é exagerada.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Entrar para sociedade, anistiar e vender lotes para aliados.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    }
  ];

  const allDilemmas = [...roundEasy, ...roundMedium, ...roundHard];

  for (const dilemma of allDilemmas) {
    await prisma.dilemma.create({
      data: dilemma
    });
  }

  console.log(`✅ Banco populado com sucesso com ${allDilemmas.length} dilemas!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });