export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  frequency: 'Diário' | 'Semanal' | 'Mensal' | 'Contínuo';
  icon: string;
  deliverables: string[];
  tag: string;
}

export interface PainPoint {
  id: string;
  pain: string;
  consequence: string;
  solution: string;
  icon: string;
}

export interface StepProcess {
  number: string;
  title: string;
  desc: string;
  highlight: string;
  icon: string;
}

export interface InstitutionalBenefit {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Segurança' | 'Rotina' | 'Contabilidade' | 'Preço e Contratação';
}

export interface TargetCategory {
  id: string;
  name: string;
  desc: string;
  icon: string;
}

export interface CoreBenefit {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export type LeadSource = 
  | 'hero'
  | 'services'
  | 'diagnostic'
  | 'diagnostic_result'
  | 'final_cta'
  | 'floating_button'
  | 'contact_form'
  | 'help_selector'
  | 'mobile_bar'
  | 'modal'
  | 'pain_points'
  | 'solution'
  | 'calculator'
  | 'faq'
  | 'navbar'
  | 'whatsapp_intro';

export type LeadIntent =
  | 'bpo_financeiro'
  | 'contas_pagar'
  | 'contas_receber'
  | 'fluxo_caixa'
  | 'cobranca'
  | 'conciliacao'
  | 'relatorios'
  | 'fechamento'
  | 'planejamento'
  | 'organizacao_documentos'
  | 'diagnostico'
  | 'duvida'
  | 'geral';

export interface WhatsAppContext {
  source: LeadSource;
  intent?: LeadIntent;
  name?: string;
  company?: string;
  segment?: string;
  mainNeed?: string;
  serviceTitle?: string;
  diagnosticDifficulty?: string;
  customMessage?: string;
}

export interface CommercialLeadFormData {
  name: string;
  company: string;
  whatsapp: string;
  segment: string;
  mainNeed: string;
}

export interface DiagnosticResult {
  score: number;
  level: string;
  summary: string;
  recommendedAction: string;
}
