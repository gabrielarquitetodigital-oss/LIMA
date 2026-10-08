import React from 'react';
import { Cpu, Smartphone, ShieldCheck, CheckCircle2, RefreshCw, BarChart3, Layers, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

export const TechnologySection: React.FC = () => {
  return (
    <section id="tecnologia" className="py-20 sm:py-24 bg-[#F4F8F6] border-b border-[#DCE8E3] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00B86B]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Tecnologia & Produtividade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Tecnologia a favor da{' '}
            <span className="text-[#00B86B]">gestão financeira</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Combinamos acompanhamento próximo a ferramentas modernas de gestão financeira para facilitar sua rotina. 
            Mais organização operacional, relatórios claros e acompanhamento periódico para o seu negócio.
          </p>
        </div>

        {/* Central Technology Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left: Main Dashboard Showcase Image (tecnologia.webp) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#DCE8E3] p-3 sm:p-4 shadow-xl shadow-[#063D32]/8 hover:shadow-2xl transition-all duration-300 relative group">
              
              {/* Header Bar with Badge: Interface demonstrativa */}
              <div className="flex items-center justify-between px-2 py-2 mb-3 border-b border-[#DCE8E3]/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B86B]"></span>
                  </div>
                  <span className="text-xs font-bold text-[#10231F] ml-1.5 font-heading">
                    Painel Financeiro Integrado
                  </span>
                </div>

                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F4F8F6] text-[#063D32] border border-[#DCE8E3] uppercase tracking-wider">
                  Interface demonstrativa
                </span>
              </div>

              {/* Main Image: tecnologia.webp */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4F8F6] border border-[#DCE8E3]">
                <img
                  src="/images/tecnologia.webp"
                  alt="Tecnologia e painel financeiro demonstrativo da Lima Gestão Financeira"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500 max-h-[420px]"
                />
              </div>

              {/* Subtitle note */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#53645F]">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-[#00B86B]" />
                  <span>Conferência periódica de extratos e rotinas</span>
                </span>
                <span className="text-[11px] text-[#8A9C96]">Dados ilustrativos</span>
              </div>
            </div>
          </div>

          {/* Right: Mobile Feature & Tech Highlights (sem duplicar imagens) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Mobile / Smartphone Feature Card */}
            <div className="rounded-2xl bg-white border border-[#DCE8E3] p-5 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#063D32] uppercase tracking-wider mb-1">
                  <span>No Celular e WhatsApp</span>
                </div>
                <h4 className="text-base font-bold text-[#10231F] leading-snug font-heading">
                  Acompanhe tudo onde estiver
                </h4>
                <p className="text-xs sm:text-sm text-[#53645F] mt-1 leading-relaxed">
                  Resumos periódicos, lembretes de autorização e relatórios enviados diretamente para o seu smartphone.
                </p>
              </div>
            </div>

            {/* Feature 1: ERP Compatibility */}
            <div className="rounded-2xl bg-white border border-[#DCE8E3] p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#10231F] font-heading">
                  Compatível com os principais ERPs
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
                Operamos no sistema que você já usa ou recomendamos e configuramos a ferramenta ideal para o tamanho da sua operação (Conta Azul, Omie, Bling e outros).
              </p>
            </div>

            {/* Feature 2: Automation & Auditing */}
            <div className="rounded-2xl bg-white border border-[#DCE8E3] p-5 shadow-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#10231F] font-heading">
                  Relatórios claros sem 'economês'
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
                Transformamos extratos brutos em indicadores simples: faturamento real, margem, ponto de equilíbrio e previsão de fluxo de caixa para 30, 60 e 90 dias.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Banner with CTA */}
        <div className="rounded-2xl bg-white border border-[#DCE8E3] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#10231F] font-heading">
                Sua empresa com gestão financeira estruturada
              </h4>
              <p className="text-xs sm:text-sm text-[#53645F]">
                Processos organizados e relatórios claros para apoiar sua tomada de decisão.
              </p>
            </div>
          </div>

          <a
            id="tecnologia-whatsapp-btn"
            href={getWhatsAppUrl({ source: 'services', intent: 'bpo_financeiro' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white text-sm sm:text-base font-bold px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero organizar meu financeiro</span>
          </a>
        </div>

      </div>
    </section>
  );
};
