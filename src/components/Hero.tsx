import React, { useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Layers,
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Laptop
} from 'lucide-react';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface HeroProps {
  onOpenDiagnostic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic }) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'pagamentos' | 'dre'>('geral');

  return (
    <section 
      id="inicio"
      className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-24 bg-white"
    >
      {/* Abstract light green geometric elements in background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#F4F8F6] via-[#F4F8F6]/60 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#00D084]/8 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-6 left-1/3 w-80 h-80 bg-[#00B86B]/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LADO ESQUERDO: Conteúdo comercial (1º no mobile, 45-50% desktop) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left hero-animate-fade-in">
            {/* Pequena etiqueta: BPO Financeiro */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00B86B]"></span>
              <span>BPO Financeiro</span>
            </div>

            {/* Título: Seu financeiro organizado. Linha de destaque: Sua empresa no controle. */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#10231F] tracking-tight leading-[1.14] mb-5 font-heading">
              Seu financeiro organizado.{' '}
              <span className="text-[#00B86B] block sm:inline">
                Sua empresa no controle.
              </span>
            </h1>

            {/* Texto comercial exato conforme Prompt 02.2 */}
            <p className="text-base sm:text-lg text-[#53645F] mb-8 max-w-xl leading-relaxed">
              Gestão financeira terceirizada para empresas que precisam de mais organização, visibilidade e tempo para cuidar do negócio.
            </p>

            {/* Botão principal e secundário */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
              <a
                id="hero-primary-whatsapp-btn"
                data-cta="hero-whatsapp"
                href={getWhatsAppUrl({ source: 'hero', intent: 'bpo_financeiro' })}
                target={isWhatsAppConfigured() ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#00B86B] hover:bg-[#00A35E] text-white text-base font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-current transition-transform group-hover:scale-110" />
                <span>Quero organizar meu financeiro</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                id="hero-services-secondary-btn"
                data-cta="servicos"
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4F8F6] text-[#063D32] hover:text-[#00B86B] text-base font-semibold px-6 py-4 rounded-xl border border-[#DCE8E3] hover:border-[#00B86B]/40 transition-all cursor-pointer shadow-xs"
              >
                <Layers className="w-4 h-4 text-[#00B86B]" />
                <span>Conhecer os serviços</span>
              </a>
            </div>

            {/* Mensagem de apoio */}
            <p className="text-xs text-[#53645F] mb-6 font-medium">
              Atendimento personalizado e processo adaptado à realidade de cada empresa.
            </p>

            {/* Benefícios rápidos */}
            <div className="w-full flex flex-wrap items-center gap-y-2 gap-x-6 pt-5 border-t border-[#DCE8E3] text-sm text-[#10231F] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
                <span>Mais organização</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
                <span>Mais controle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
                <span>Mais tempo</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: Imagem 01-hero-dashboard (2º no mobile, destaque visual) */}
          <div className="lg:col-span-6 relative hero-animate-fade-in-delayed">
            {/* Elementos decorativos verdes muito discretos */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#00B86B]/15 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#063D32]/10 rounded-full blur-2xl pointer-events-none"></div>

            {/* Container do Dashboard com bordas arredondadas e sombra muito suave */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#DCE8E3] p-3 sm:p-4 shadow-xl shadow-[#063D32]/8 hover:shadow-2xl transition-all duration-300">
              
              {/* Barra Superior estilo Sistema */}
              <div className="flex items-center justify-between px-2 py-2 mb-3 border-b border-[#DCE8E3]/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B86B]"></span>
                  </div>
                  <span className="text-xs font-bold text-[#10231F] ml-1.5 flex items-center gap-1.5 font-heading">
                    <Laptop className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Sistema de Gestão Lima</span>
                  </span>
                </div>

                {/* Etiqueta Solicitada: Dashboard demonstrativo */}
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F4F8F6] text-[#063D32] border border-[#DCE8E3] uppercase tracking-wider">
                  Dashboard demonstrativo
                </span>
              </div>

              {/* Foto Principal: 01-hero-dashboard (WebP com fallback JPG) */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4F8F6] border border-[#DCE8E3] group">
                <picture>
                  <source srcSet="/images/01-hero-dashboard.webp" type="image/webp" />
                  <img
                    src="/images/01-hero-dashboard.jpg"
                    alt="Dashboard de gestão financeira da Lima Gestão Financeira"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500 max-h-[380px] sm:max-h-[420px]"
                  />
                </picture>
                
                {/* Tag flutuante discreta sobre a imagem */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#DCE8E3] px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-semibold text-[#063D32]">
                  <span className="w-2 h-2 rounded-full bg-[#00B86B]"></span>
                  <span>Rotina financeira organizada</span>
                </div>

                {/* Tag flutuante de segurança bancária */}
                <div className="absolute bottom-3 right-3 bg-[#063D32]/95 backdrop-blur-xs text-white border border-white/20 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B]" />
                  <span>Aprovação no seu token</span>
                </div>
              </div>

              {/* 3 Indicadores Rápidos em Linha Abaixo da Imagem */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-[#DCE8E3]/80">
                <div className="p-2 rounded-lg bg-[#F4F8F6] border border-[#DCE8E3] text-center">
                  <span className="text-[10px] text-[#53645F] block font-medium">Contas a Pagar</span>
                  <span className="text-xs sm:text-sm font-bold text-[#10231F] font-mono">Agendadas</span>
                </div>
                <div className="p-2 rounded-lg bg-white border border-[#00B86B]/40 text-center shadow-2xs">
                  <span className="text-[10px] text-[#00B86B] block font-semibold">Contas a Receber</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00B86B] font-mono">Conciliadas</span>
                </div>
                <div className="p-2 rounded-lg bg-[#F4F8F6] border border-[#DCE8E3] text-center">
                  <span className="text-[10px] text-[#53645F] block font-medium">Relatórios DRE</span>
                  <span className="text-xs sm:text-sm font-bold text-[#10231F] font-mono">Periódicos</span>
                </div>
              </div>

            </div>

            {/* Notificação Mobile / Acompanhamento */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#53645F] px-1">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-[#00B86B]" />
                <span>Acompanhamento e notificações também pelo WhatsApp</span>
              </span>
              <a 
                href="#servicos"
                className="text-[#00B86B] font-semibold hover:underline"
              >
                Ver rotina &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
