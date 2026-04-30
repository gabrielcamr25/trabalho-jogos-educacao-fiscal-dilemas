import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando o plantio das sementes (populando o banco)...');

  
  const roundEasy = [
    {
      title: "Material Escolar Atrasado",
      description: "O ano letivo começou e as escolas municipais ainda não receberam o material didático básico. Os pais estão reclamando da falta de livros e cadernos.",
      theme: "Educação",
      options: {
        create: [
          { text: "Antecipar a compra via licitação simplificada com empresas credenciadas no portal da transparência.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Aguardar o cronograma original e pedir que as escolas compartilhem o material velho por enquanto.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Comprar material de qualidade duvidosa de um fornecedor indicado pelo vereador da base.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Cancelar a entrega do material e usar a verba para a festa do aniversário da cidade.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Posto de Saúde Sem Remédios",
      description: "A farmácia básica da UBS central está vazia. Diabéticos e hipertensos não estão conseguindo seus medicamentos gratuitos há duas semanas.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Acionar o estoque regional do Estado e remanejar verba da publicidade municipal para reabastecer imediatamente.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Orientar os pacientes a comprarem os remédios por conta própria e reembolsar depois, se sobrar verba.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Deixar faltar e culpar o governo federal publicamente para desviar a responsabilidade.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Vender os remédios restantes para uma clínica particular e dividir o lucro com o secretário.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Lixão a Céu Aberto",
      description: "O terreno improvisado onde o caminhão de lixo descarrega virou um foco de dengue e mau cheiro. Moradores do bairro vizinho estão ameaçando processar a prefeitura.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Alugar um terreno adequado provisoriamente e acelerar o projeto de aterro sanitário com licitação aberta.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Mandar o caminhão descarregar mais longe, no limite do município vizinho.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Ignorar as reclamações e dizer que o problema é da população que gera muito lixo.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Contratar a empresa do irmão para 'limpar' o local jogando cal e terra por cima do lixo.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    },
    {
      title: "Convite do Empresário",
      description: "Um empresário local que participa de licitações municipais ofereceu pagar uma viagem de luxo para você e sua família. Ele diz que é apenas um 'agradecimento'.",
      theme: "Ética",
      options: {
        create: [
          { text: "Recusar educadamente e incluir o episódio na prestação de contas da gestão como alerta de integridade.", budgetImpact: 2000, approvalImpact: 1 },
          { text: "Aceitar a viagem, mas pagar com seu próprio dinheiro para não ficar devendo favores.", budgetImpact: 0, approvalImpact: 0 },
          { text: "Aceitar a viagem e garantir que a empresa dele ganhe a próxima licitação de paving.", budgetImpact: -5000, approvalImpact: -2 },
          { text: "Aceitar a viagem e exigir um pacote ainda mais caro, ameaçando denunciá-lo se não pagar.", budgetImpact: -5000, approvalImpact: -2 }
        ]
      }
    }
  ];

  const roundMedium = [
    {
      title: "Inadimplência do IPTU",
      description: "Mais de 40% dos imóveis do centro estão com IPTU atrasado. A arrecadação caiu e o orçamento de obras está comprometido.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Criar um programa de refinanciamento com desconto para quem regularizar em até 90 dias, ampliando a base de pagadores.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Enviar cartas de cobrança e aguardar, sem criar polêmica com os contribuintes.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Perdoar todas as dívidas em troca de apoio político nas próximas eleições.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Contratar uma empresa de cobrança agressiva que invade propriedades e humilha devedores na rua.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Escolas sem Internet",
      description: "O contrato de internet das escolas municipais venceu e a prefeitura não renovou. Professores não conseguem acessar o sistema de notas e diário eletrônico.",
      theme: "Educação",
      options: {
        create: [
          { text: "Fazer uma nova licitação emergencial com provedores locais e usar verba do fundo de tecnologia educacional.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Autorizar as escolas a usarem o pacote de dados dos celulares dos professores, prometendo ressarcir depois.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Deixar sem internet e dizer que as crianças precisam 'menos telas e mais livros'.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Assinar um contrato milionário com um provedor de outro estado, sem licitação, em troca de comissão.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "UBS em Situação Precária",
      description: "A Unidade Básica de Saúde do bairro Industrial tem infiltrações, fiação exposta e falta de água potável. A equipe teme um acidente de trabalho.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Remanejar verba do gabinete do prefeito e iniciar a reforma estrutural com empresa licitada e fiscalização técnica.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Fazer pequenos reparos elétricos e tapar os buracos com massa corrida para segurar até o próximo ano.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Fechar a UBS e mandar os pacientes para a fila do hospital regional, sobrecarregando o sistema.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Contratar a reforma com a empresa do sogro, usando material de demolição de outra obra.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    },
    {
      title: "Frota de Ônibus Quebrada",
      description: "Metade dos ônibus do transporte coletivo municipal está parada por falta de manutenção. Os estudantes e trabalhadores estão chegando atrasados todos os dias.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Abrir licitação para conserto emergencial de toda a frota e criar contrato de manutenção preventiva anual.", budgetImpact: 5000, approvalImpact: 2 },
          { text: "Reduzir o número de linhas e horários, concentrando os poucos ônibus que ainda funcionam.", budgetImpact: 2000, approvalImpact: 0 },
          { text: "Alugar ônibus velhos de uma empresa de eventos por preço superfaturado, sem licitação.", budgetImpact: -7000, approvalImpact: -3 },
          { text: "Acusar os motoristas de quebrarem os ônibus de propósito e cortar o salário deles como 'multa'.", budgetImpact: -7000, approvalImpact: -3 }
        ]
      }
    }
  ];


  const roundHard = [
    {
      title: "Caixa Dois na Campanha",
      description: "Seu tesoureiro de campanha foi flagrado recebendo dinheiro não declarado de uma construtora. A imprensa descobriu e a oposição pede seu impeachment.",
      theme: "Ética",
      options: {
        create: [
          { text: "Assumir a responsabilidade, devolver os recursos ilegais, demitir o tesoureiro e colaborar com a investigação do Ministério Público.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Negar envolvimento pessoal, afastar o tesoureiro temporariamente e aguardar a poeira baixar.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Usar a máquina pública para comprar apoio de vereadores e barrar qualquer CPI na Câmara.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Ameaçar jornalistas e destruir as provas do esquema usando a Guarda Municipal.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Reforma Tributária Municipal",
      description: "O município precisa aumentar a arrecadação para cumprir o piso salarial da educação e da saúde. A proposta é revisar a alíquota do ISS.",
      theme: "Impostos",
      options: {
        create: [
          { text: "Reduzir a alíquota do ISS para atrair novas empresas, compensando com eficiência na cobrança e corte de privilégios fiscais.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Manter a alíquota atual e criar um programa de parcelamento de dívidas antigas para injetar caixa rápido.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Aumentar o ISS para o dobro e isentar os amigos do prefeito, jogando o peso nos pequenos comerciantes.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Criar uma taxa nova disfarçada de 'contribuição de iluminação pública' sem aprovação da Câmara.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Enchente Histórica",
      description: "Chuvas torrenciais alagaram o centro da cidade. Casas foram destruídas, comércios fecharam e a drenagem urbana provou ser insuficiente.",
      theme: "Infraestrutura",
      options: {
        create: [
          { text: "Declarar estado de calamidade, usar recursos federais com transparência total e iniciar um plano de macrodrenagem de longo prazo.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Distribuir cestas básicas e prometer um estudo de drenagem para o próximo mandato.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Usar a calamidade como desculpa para desviar verba federal e comprar votos com material de construção.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Proibir a imprensa de entrar na área alagada e prender moradores que reclamam nas redes sociais.", budgetImpact: -12000, approvalImpact: -4 }
        ]
      }
    },
    {
      title: "Colapso do Hospital Municipal",
      description: "O hospital está sem médicos plantonistas, sem insumos cirúrgicos e com fila de 48h na emergência. Um paciente morreu na porta por falta de atendimento.",
      theme: "Saúde",
      options: {
        create: [
          { text: "Convocar médicos via processo seletivo emergencial, abrir licitação transparente para insumos e acionar a União para reforço.", budgetImpact: 9000, approvalImpact: 3 },
          { text: "Transferir os pacientes graves para o hospital particular da região, pagando com verba do próprio município.", budgetImpact: 4000, approvalImpact: 0 },
          { text: "Negar que houve morte e culpar a família do paciente por não ter procurado atendimento antes.", budgetImpact: -12000, approvalImpact: -4 },
          { text: "Vender os equipamentos do hospital para uma clínica particular e fechar a emergência de noite.", budgetImpact: -12000, approvalImpact: -4 }
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
