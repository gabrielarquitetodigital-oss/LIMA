import { 
  ServiceItem, 
  PainPoint, 
  StepProcess, 
  CoreBenefit, 
  TargetCategory, 
  FaqItem,
  WhatsAppContext,
  LeadSource,
  LeadIntent
} from '../types';

// Constantes de contato centralizadas (sem dados inventados)
export const WHATSAPP_NUMBER: string = "INSIRA_SEU_NUMERO_AQUI";
export const DISPLAY_PHONE: string = "INSIRA_SEU_NUMERO_AQUI";
export const EMAIL: string = "INSIRA_SEU_EMAIL_AQUI";
export const INSTAGRAM_URL: string = "INSIRA_SEU_INSTAGRAM_AQUI";
export const WORKING_HOURS: string = "Segunda a Sexta, das 08h às 18h";
export const CITY_STATE: string = "Atendimento em todo o Brasil (Atendimento Digital)";

export const COMPANY_CONFIG = {
  name: 'LIMA GESTÃO FINANCEIRA',
  shortName: 'Lima',
  slogan: 'Seu financeiro organizado. Sua empresa no controle.',
  whatsappNumber: WHATSAPP_NUMBER,
  displayPhone: DISPLAY_PHONE,
  email: EMAIL,
  instagramUrl: INSTAGRAM_URL,
  workingHours: WORKING_HOURS,
  cityState: CITY_STATE,
};

/**
 * Validação centralizada do status de configuração do WhatsApp (Prompt 02.1 - Section 18)
 */
export const WHATSAPP_ENABLED: boolean = WHATSAPP_NUMBER !== "INSIRA_SEU_NUMERO_AQUI" && String(WHATSAPP_NUMBER).trim().length > 0;

export function isWhatsAppConfigured(): boolean {
  return WHATSAPP_ENABLED;
}

/**
 * Referência Interna do Atendimento Comercial (Prompt 02.2 - Seção 4)
 * Fluxo: Interesse → WhatsApp → Entendimento → Qualificação → Conversa → Proposta
 * Atendimento consultivo e humanizado, sem robôs, tabelas automáticas ou descontos fictícios.
 */
export const COMMERCIAL_ATTENDANCE_STEPS = [
  { step: 1, title: 'Receber o contato', desc: 'Acolhimento imediato e cordial com mensagem personalizada.' },
  { step: 2, title: 'Entender a empresa', desc: 'Identificar modelo de negócio, porte e segmento de atuação.' },
  { step: 3, title: 'Identificar a principal dificuldade', desc: 'Mapear se a dor é contas a pagar, conciliação, inadimplência ou fluxo de caixa.' },
  { step: 4, title: 'Entender como o financeiro é controlado atualmente', desc: 'Saber se usam ERP, planilhas, banco digital ou controle em papel.' },
  { step: 5, title: 'Entender o objetivo', desc: 'Compreender o objetivo do gestor: ter mais tempo, ter clareza de lucros ou organizar a rotina.' },
  { step: 6, title: 'Explicar o BPO adequado', desc: 'Apresentar como a Lima assume a rotina operacional sem mexer no dinheiro da empresa.' },
  { step: 7, title: 'Avaliar o escopo', desc: 'Dimensionar volume de lançamentos, contas bancárias e rotinas diárias necessárias.' },
  { step: 8, title: 'Apresentar proposta', desc: 'Apresentar proposta comercial personalizada e estruturada para a realidade da empresa.' },
];

/**
 * Gerador de mensagens comerciais humanizadas e contextualizadas por ponto de entrada (Prompt 02.2)
 */
export function getWhatsAppMessage(context?: WhatsAppContext | string): string {
  if (typeof context === 'string') {
    return context;
  }

  // Mensagem padrão definida no Prompt 02.2 (Seção 3)
  if (!context) {
    return "Olá! Conheci a Lima Gestão Financeira pelo site e gostaria de entender como vocês podem ajudar na organização financeira da minha empresa.";
  }

  if (context.customMessage) {
    return context.customMessage;
  }

  switch (context.source) {
    case 'hero':
      return "Olá! Conheci a Lima Gestão Financeira pelo site e gostaria de organizar melhor o financeiro da minha empresa.";

    case 'services':
      if (context.intent === 'contas_pagar') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona a organização de contas a pagar na minha empresa.";
      }
      if (context.intent === 'contas_receber') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona o controle de contas a receber na minha empresa.";
      }
      if (context.intent === 'fluxo_caixa') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona a previsão e fluxo de caixa na minha empresa.";
      }
      if (context.intent === 'cobranca') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona o serviço de cobrança amigável de clientes.";
      }
      if (context.intent === 'conciliacao') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona a conciliação financeira e conferência de extratos.";
      }
      if (context.intent === 'relatorios') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de saber mais sobre a emissão de relatórios gerenciais e DRE.";
      }
      if (context.intent === 'fechamento') {
        return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de saber como funciona o fechamento financeiro mensal integrado ao contador.";
      }
      if (context.serviceTitle) {
        return `Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona o serviço de ${context.serviceTitle}.`;
      }
      return "Olá! Conheci os serviços da Lima Gestão Financeira pelo site e gostaria de entender como funciona o BPO Financeiro para a minha empresa.";

    case 'diagnostic_result':
      if (context.diagnosticDifficulty && context.diagnosticDifficulty.trim().length > 0) {
        return `Olá! Fiz o diagnóstico financeiro inicial da Lima Gestão Financeira e gostaria de conversar sobre os pontos que identifiquei na minha empresa.\n\nPrincipal dificuldade identificada: ${context.diagnosticDifficulty.trim()}.`;
      }
      return "Olá! Fiz o diagnóstico financeiro inicial da Lima Gestão Financeira e gostaria de conversar sobre os pontos que identifiquei na minha empresa.";

    case 'diagnostic':
      return "Olá! Fiz o diagnóstico financeiro inicial da Lima Gestão Financeira e gostaria de conversar sobre os pontos que identifiquei na minha empresa.";

    case 'contact_form':
      const clientName = context.name?.trim() || 'Empresário';
      const company = context.company?.trim() || 'Minha Empresa';
      const segment = context.segment?.trim() || 'Geral';
      const need = context.mainNeed?.trim() || 'BPO Financeiro';
      return `Olá! Meu nome é ${clientName}.\nConheci a Lima Gestão Financeira pelo site.\n\nEmpresa: ${company}\nSegmento: ${segment}\nPrincipal necessidade: ${need}\n\nGostaria de conversar sobre como funciona o BPO Financeiro.`;

    case 'modal':
      const mName = context.name?.trim() ? ` Meu nome é ${context.name.trim()}.` : '';
      const mCompany = context.company?.trim() ? `\nEmpresa: ${context.company.trim()}` : '';
      const mNeed = context.mainNeed?.trim() ? `\nPrincipal necessidade: ${context.mainNeed.trim()}` : '';
      return `Olá!${mName}\nConheci a Lima Gestão Financeira pelo site.${mCompany}${mNeed}\n\nGostaria de conversar sobre como funciona o BPO Financeiro.`;

    case 'final_cta':
    case 'whatsapp_intro':
      return "Olá! Conheci a Lima Gestão Financeira pelo site e gostaria de conversar sobre a organização financeira da minha empresa.";

    case 'floating_button':
    case 'mobile_bar':
      return "Olá! Conheci a Lima Gestão Financeira e gostaria de saber mais sobre o serviço de BPO Financeiro.";

    case 'pain_points':
      return "Olá! Identifiquei alguns desafios na rotina financeira da minha empresa e quero entender como a Lima pode nos apoiar.";

    case 'calculator':
      return "Olá! Fiz a simulação no comparativo da Lima Gestão Financeira e gostaria de entender como funciona o BPO para a minha empresa.";

    case 'faq':
      return "Olá! Estava lendo as dúvidas frequentes no site da Lima e gostaria de tirar uma dúvida sobre a gestão financeira.";

    case 'navbar':
      return "Olá! Conheci a Lima Gestão Financeira pelo site e gostaria de organizar melhor o financeiro da minha empresa.";

    default:
      return "Olá! Conheci a Lima Gestão Financeira pelo site e gostaria de entender como vocês podem ajudar na organização financeira da minha empresa.";
  }
}

/**
 * Função central para geração de URLs do WhatsApp com sanitização e fallback seguro
 */
export function getWhatsAppUrl(contextOrCustomMessage?: WhatsAppContext | string): string {
  if (!isWhatsAppConfigured()) {
    return '#contato';
  }
  const message = getWhatsAppMessage(contextOrCustomMessage);
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

// 7 Principais Dores (Seção "Você se identifica?" - Prompt 02)
export const PAIN_POINTS: PainPoint[] = [
  {
    id: '1',
    pain: 'Contas a pagar espalhadas',
    consequence: 'Boletos e notas fiscais recebidos por e-mail, WhatsApp e papel físico sem um controle centralizado.',
    solution: 'Centralização de todas as obrigações em calendário único, com pré-agendamento no banco pronto para sua aprovação.',
    icon: 'Layers',
  },
  {
    id: '2',
    pain: 'Contas a receber sem acompanhamento',
    consequence: 'Falta de visão diária sobre faturas liquidadas, recebimentos previstos e valores pendentes de clientes.',
    solution: 'Conciliação diária de entradas, baixa automática de títulos e controle rigoroso de cada valor creditado.',
    icon: 'UsersRound',
  },
  {
    id: '3',
    pain: 'Falta de visão do fluxo de caixa',
    consequence: 'Dificuldade para saber quanto dinheiro realmente estará disponível no caixa nos próximos 15, 30 ou 60 dias.',
    solution: 'Projeção contínua de entradas e saídas programadas, permitindo antecipar necessidades e tomar decisões seguras.',
    icon: 'EyeOff',
  },
  {
    id: '4',
    pain: 'Conciliações bancárias atrasadas',
    consequence: 'Divergências acumuladas entre os extratos bancários, cartões e o sistema da empresa gerando descontrole.',
    solution: 'Organização e conferência periódica das movimentações financeiras para facilitar a conciliação e o controle.',
    icon: 'Shuffle',
  },
  {
    id: '5',
    pain: 'Cobranças que ficam para depois',
    consequence: 'A falta de tempo na rotina faz com que clientes inadimplentes não recebam lembretes cordiais no prazo correto.',
    solution: 'Régua de cobrança profissional e respeitosa, com avisos preventivos e contato cordial com clientes pendentes.',
    icon: 'ClockAlert',
  },
  {
    id: '6',
    pain: 'Dificuldade para saber o resultado financeiro',
    consequence: 'Dúvida constante se a empresa teve lucro real no mês ou se apenas faturou para pagar despesas operacionais.',
    solution: 'Relatórios gerenciais periódicos e DRE claros, sem termos complexos, mostrando o lucro e a evolução do negócio.',
    icon: 'TrendingDown',
  },
  {
    id: '7',
    pain: 'Informações espalhadas em planilhas e documentos',
    consequence: 'Múltiplas planilhas desatualizadas, recibos perdidos e retrabalho na hora de conferir ou enviar ao contador.',
    solution: 'Ambiente financeiro estruturado com pastas digitais organizadas e integração ágil com a contabilidade.',
    icon: 'FileSpreadsheet',
  },
];

// 10 Serviços Exigidos (Seção Serviços - Section 13)
export const SERVICES: ServiceItem[] = [
  {
    id: 'contas-pagar',
    title: 'Contas a pagar',
    shortDesc: 'Organização de notas, boletos e agendamento bancário prévio para sua aprovação.',
    fullDesc: 'Lançamento criterioso de todas as despesas no sistema financeiro, classificação por categorias e agendamento no banco. A autorização final é sempre do titular da conta.',
    frequency: 'Diário',
    icon: 'ArrowDownCircle',
    deliverables: [
      'Agendamento prévio no internet banking',
      'Classificação correta por categorias de despesa',
      'Conferência de boletos e comprovantes fiscais',
      'Arquivo digital organizado de comprovantes'
    ],
    tag: 'Rotina Diária'
  },
  {
    id: 'contas-receber',
    title: 'Contas a receber',
    shortDesc: 'Emissão de boletos, notas fiscais e conciliação dos valores creditados.',
    fullDesc: 'Controle diário dos recebíveis, conferência de faturamento, liquidações bancárias e acompanhamento do calendário de entradas da empresa.',
    frequency: 'Diário',
    icon: 'ArrowUpCircle',
    deliverables: [
      'Emissão de boletos e notas fiscais',
      'Baixa automática de liquidações',
      'Controle de prazos de recebimento',
      'Relatório de entradas previstas'
    ],
    tag: 'Rotina Diária'
  },
  {
    id: 'fluxo-caixa',
    title: 'Fluxo de caixa',
    shortDesc: 'Acompanhamento claro das entradas e saídas para saber o saldo real.',
    fullDesc: 'Registro consolidado de todas as movimentações financeiras, permitindo prever a liquidez e manter o caixa sempre equilibrado.',
    frequency: 'Diário',
    icon: 'Activity',
    deliverables: [
      'Previsão de saldos futuros',
      'Controle de entradas e saídas em tempo real',
      'Alertas de oscilações financeiras',
      'Visão consolidada de todas as contas'
    ],
    tag: 'Controle Estratégico'
  },
  {
    id: 'conciliacao-financeira',
    title: 'Conciliação financeira',
    shortDesc: 'Conferência detalhada entre os extratos bancários e os registros do sistema.',
    fullDesc: 'Conferência diária para conferir lançamentos em contas correntes, cartões e contas de pagamento.',
    frequency: 'Diário',
    icon: 'ShieldCheck',
    deliverables: [
      'Conferência de saldos bancários',
      'Identificação de tarifas e taxas de cartões',
      'Redução de divergências operacionais',
      'Extrato limpo e conciliado'
    ],
    tag: 'Precisão'
  },
  {
    id: 'controle-vencimentos',
    title: 'Controle de vencimentos',
    shortDesc: 'Acompanhamento preventivo de prazos para evitar juros e atrasos.',
    fullDesc: 'Monitoramento contínuo de datas críticas de fornecedores, impostos e obrigações fixas com antecedência operacional.',
    frequency: 'Diário',
    icon: 'Clock',
    deliverables: [
      'Calendário unificado de vencimentos',
      'Prevenção de multas e encargos',
      'Priorização de pagamentos estratégicos',
      'Avisos preventivos aos gestores'
    ],
    tag: 'Prevenção'
  },
  {
    id: 'cobranca-clientes',
    title: 'Cobrança de clientes',
    shortDesc: 'Acompanhamento de faturas pendentes com comunicação profissional e respeitosa.',
    fullDesc: 'Régua de cobrança estruturada com avisos prévios de vencimento e contato cordial com clientes que possuem pendências financeiras.',
    frequency: 'Semanal',
    icon: 'UserCheck',
    deliverables: [
      'Lembretes amigáveis antes do vencimento',
      'Cobrança ativa e cordial de inadimplentes',
      'Emissão de 2ª via de boletos',
      'Relatório de status de recebimentos'
    ],
    tag: 'Recuperação'
  },
  {
    id: 'organizacao-documentos',
    title: 'Organização de documentos',
    shortDesc: 'Centralização de comprovantes, notas e recibos em pastas digitais seguras.',
    fullDesc: 'Padronização e arquivamento de todos os comprovantes fiscais e bancários com fácil localização para auditorias e consultas rápidas.',
    frequency: 'Contínuo',
    icon: 'FolderSync',
    deliverables: [
      'Armazenamento em nuvem seguro',
      'Nomenclatura padronizada de arquivos',
      'Acesso fácil para auditorias',
      'Histórico completo preservado'
    ],
    tag: 'Organização'
  },
  {
    id: 'fechamento-financeiro',
    title: 'Fechamento financeiro',
    shortDesc: 'Consolidação mensal de todas as informações financeiras da empresa.',
    fullDesc: 'Apuração completa do mês com todas as contas conciliadas, documentos arquivados e preparo de informações para a contabilidade.',
    frequency: 'Mensal',
    icon: 'CheckCircle2',
    deliverables: [
      'Fechamento mensal de contas',
      'Envio organizado ao contador',
      'Conferência de balancetes preliminares',
      'Arquivo consolidado do período'
    ],
    tag: 'Fechamento'
  },
  {
    id: 'relatorios-proprietario',
    title: 'Relatórios para o proprietário',
    shortDesc: 'Informações gerenciais claras e objetivas para facilitar a tomada de decisão.',
    fullDesc: 'Relatórios fáceis de interpretar, apresentando o desempenho do negócio, custos por centro de despesa e visão geral do resultado.',
    frequency: 'Mensal',
    icon: 'BarChart3',
    deliverables: [
      'DRE gerencial objetivo',
      'Gráficos de evolução de despesas e receitas',
      'Resumo executivo mensal',
      'Indicadores-chave em linguagem simples'
    ],
    tag: 'Visão Estratégica'
  },
  {
    id: 'planejamento-financeiro',
    title: 'Planejamento financeiro',
    shortDesc: 'Apoio na estruturação de orçamentos e visão de médio prazo.',
    fullDesc: 'Organização das bases numéricas para auxiliar o empresário a projetar metas, despesas futuras e novos investimentos com segurança.',
    frequency: 'Contínuo',
    icon: 'TrendingUp',
    deliverables: [
      'Estruturação de orçamento anual',
      'Acompanhamento do orçado vs. realizado',
      'Identificação de custos a otimizar',
      'Projeção de cenários'
    ],
    tag: 'Crescimento'
  },
];

// 4 Etapas (Seção Como Funciona - Section 14)
export const STEPS_PROCESS: StepProcess[] = [
  {
    number: '01',
    title: 'ENVIE',
    desc: 'Você envia as informações e documentos necessários.',
    highlight: 'Notas, boletos e extratos compartilhados de forma prática e segura.',
    icon: 'UploadCloud'
  },
  {
    number: '02',
    title: 'ORGANIZAMOS',
    desc: 'As informações são organizadas e classificadas.',
    highlight: 'Lançamentos no sistema financeiro com plano de contas estruturado.',
    icon: 'Layers'
  },
  {
    number: '03',
    title: 'ACOMPANHAMOS',
    desc: 'Pagamentos, recebimentos, vencimentos e demais atividades são acompanhados.',
    highlight: 'Pré-agendamento bancário: você apenas aprova com seu próprio token.',
    icon: 'CheckSquare'
  },
  {
    number: '04',
    title: 'VOCÊ ACOMPANHA',
    desc: 'Você recebe informações organizadas para acompanhar o financeiro da empresa.',
    highlight: 'Relatórios claros e visão do caixa para tomar decisões seguras.',
    icon: 'BarChart2'
  },
];

// 6 Benefícios (Seção Benefícios - Section 16)
export const CORE_BENEFITS: CoreBenefit[] = [
  {
    id: '1',
    title: 'Mais organização',
    desc: 'Informações estruturadas e centralizadas em um único ambiente seguro.',
    icon: 'FolderCheck'
  },
  {
    id: '2',
    title: 'Mais controle',
    desc: 'Acompanhamento constante de pagamentos, entradas e saldos disponíveis.',
    icon: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Mais tempo',
    desc: 'Menos horas gastas com planilhas e burocracias, mais foco nas suas vendas.',
    icon: 'Clock'
  },
  {
    id: '4',
    title: 'Mais clareza',
    desc: 'Visão exata de onde vem e para onde vai cada centavo da sua empresa.',
    icon: 'Eye'
  },
  {
    id: '5',
    title: 'Mais tranquilidade',
    desc: 'Contas pagas no prazo e rotina financeira contínua sem depender de pessoas pontuais.',
    icon: 'Smile'
  },
  {
    id: '6',
    title: 'Melhor visão para decidir',
    desc: 'Informações organizadas e relatórios gerenciais para guiar suas decisões.',
    icon: 'TrendingUp'
  }
];

// 8 Categorias (Seção Para Quem É - Section 17)
export const TARGET_CATEGORIES: TargetCategory[] = [
  {
    id: 'lojas',
    name: 'Lojas',
    desc: 'Varejo físico e e-commerce com múltiplos meios de pagamento.',
    icon: 'ShoppingBag'
  },
  {
    id: 'restaurantes',
    name: 'Restaurantes',
    desc: 'Bares, restaurantes e lanchonetes com alto giro diário de caixa.',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'clinicas',
    name: 'Clínicas e consultórios',
    desc: 'Médicos, dentistas e clínicas com rotina de agendamentos e convênios.',
    icon: 'Stethoscope'
  },
  {
    id: 'distribuidoras',
    name: 'Distribuidoras',
    desc: 'Operações comerciais com faturamento a prazo e fluxo de estoques.',
    icon: 'Truck'
  },
  {
    id: 'servicos',
    name: 'Prestadores de serviços',
    desc: 'Agências, consultorias, escritórios e tecnologia com receitas recorrentes.',
    icon: 'Briefcase'
  },
  {
    id: 'transportadoras',
    name: 'Transportadoras',
    desc: 'Empresas de logística com rotinas intensas de despesas operacionais.',
    icon: 'Navigation'
  },
  {
    id: 'pequenas-empresas',
    name: 'Pequenas empresas',
    desc: 'Negócios em fase de consolidação que precisam de organização nos números.',
    icon: 'Building'
  },
  {
    id: 'medias-empresas',
    name: 'Médias empresas',
    desc: 'Empresas em expansão que buscam eficiência operacional sem custo de equipe pesada.',
    icon: 'Building2'
  }
];

// 6 Perguntas do FAQ (Seção FAQ - Section 20)
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O que é BPO Financeiro?',
    answer: 'BPO (Business Process Outsourcing) Financeiro é a terceirização da rotina operacional financeira da sua empresa. A Lima assume tarefas diárias como lançamento e agendamento de contas a pagar, controle de contas a receber, conciliação bancária e emissão de relatórios gerenciais, permitindo que você foque na atividade principal do seu negócio.',
    category: 'Rotina'
  },
  {
    question: 'A Lima Gestão Financeira movimenta o dinheiro da minha empresa?',
    answer: 'Não. Nossa equipe atua com perfil de operador no internet banking. Nós realizamos a conferência, os lançamentos e os pré-agendamentos no sistema. A autorização final para qualquer saída ou transferência de dinheiro permanece exclusivamente sob seu controle, utilizando seu próprio token e senhas bancárias.',
    category: 'Segurança'
  },
  {
    question: 'Quais empresas podem contratar?',
    answer: 'O serviço é ideal para pequenas e médias empresas, prestadores de serviços, comércios, clínicas, distribuidoras e negócios em geral que queiram profissionalizar sua gestão financeira, organizar processos e obter relatórios claros sem os custos de manter um departamento financeiro interno.',
    category: 'Preço e Contratação'
  },
  {
    question: 'Posso contratar apenas alguns serviços?',
    answer: 'Sim. O escopo do BPO Financeiro pode ser personalizado conforme a necessidade atual da sua operação, seja para apoiar na rotina completa ou focar em rotinas específicas como contas a pagar, conciliação bancária ou controle de recebíveis, conforme o escopo contratado.',
    category: 'Rotina'
  },
  {
    question: 'Como funciona o atendimento?',
    answer: 'O atendimento é próximo, humanizado e realizado de forma digital. Você terá um canal direto de comunicação com nossa equipe via WhatsApp, e-mail institucional e reuniões periódicas para acompanhamento dos relatórios e alinhamento das rotinas financeiras.',
    category: 'Rotina'
  },
  {
    question: 'Como começo?',
    answer: 'O primeiro passo é conversar com a nossa equipe pelo WhatsApp. Entendemos a realidade da sua empresa, o volume de movimentações e os sistemas utilizados para estruturar uma proposta personalizada. Em seguida, iniciamos a fase de parametrização e transição das rotinas com total segurança.',
    category: 'Preço e Contratação'
  },
];

