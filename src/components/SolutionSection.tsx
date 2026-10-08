import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, Laptop, ShieldCheck, Clock } from 'lucide-react';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solucao" className="py-20 sm:py-24 bg-white relative overflow-hidden border-b border-[#DCE8E3]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00B86B]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#063D32]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* IMAGEM DA SOLUÇÃO (No mobile: imagem acima do texto com order-first lg:order-2) */}
          <div className="lg:col-span-6 order-first lg:order-2">
            <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#DCE8E3] p-3 sm:p-4 shadow-xl shadow-[#063D32]/8 hover:shadow-2xl transition-all duration-300">
              
              {/* Top Bar with Badge: Interface demonstrativa */}
              <div className="flex items-center justify-between px-2 py-2 mb-3 border-b border-[#DCE8E3]/80">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8E3]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B86B]"></span>
                  </div>
                  <span className="text-xs font-bold text-[#10231F] ml-1.5 flex items-center gap-1.5 font-heading">
                    <Laptop className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Rotina Operacional Integrada</span>
                  </span>
                </div>

                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F4F8F6] text-[#063D32] border border-[#DCE8E3] uppercase tracking-wider">
                  Interface demonstrativa
                </span>
              </div>

              {/* Main Image: solucao-dashboard.webp */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#F4F8F6] border border-[#DCE8E3] group">
                <img
                  src="/images/solucao-dashboard.webp"
                  alt="Sistema de gestão financeira demonstrativo em notebook da Lima Gestão Financeira"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500 max-h-[380px] sm:max-h-[420px]"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-[#DCE8E3] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2.5 text-xs font-semibold text-[#063D32]">
                  <div className="w-2 h-2 rounded-full bg-[#00B86B]"></div>
                  <span>Contas a pagar e receber em dia</span>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#DCE8E3]/80 text-xs text-[#53645F]">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F4F8F6]">
                  <ShieldCheck className="w-4 h-4 text-[#00B86B] shrink-0" />
                  <span>Sem acesso a transferências</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F4F8F6]">
                  <Clock className="w-4 h-4 text-[#00B86B] shrink-0" />
                  <span>Fechamento diário pontual</span>
                </div>
              </div>

            </div>
          </div>

          {/* LADO DO TEXTO: A SOLUÇÃO */}
          <div className="lg:col-span-6 order-last lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#00B86B]"></span>
              <span>A Solução</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#10231F] tracking-tight leading-tight mb-5 font-heading">
              Nós cuidamos da rotina financeira.{' '}
              <span className="text-[#00B86B]">
                Você cuida do seu negócio.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#53645F] mb-6 leading-relaxed">
              Reduza a sobrecarga diária com conciliações organizadas, acompanhamento de boletos e mais clareza para suas decisões. 
              A Lima apoia a operação financeira da sua empresa com profissionais preparados, tecnologia e processos organizados.
            </p>

            {/* Checklist of Solution Pillars */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-bold text-[#10231F] text-sm sm:text-base">Conciliação diária rigorosa: </span>
                  <span className="text-sm sm:text-base text-[#53645F]">Extratos e movimentações conferidos diariamente conforme a rotina contratada.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-bold text-[#10231F] text-sm sm:text-base">Agendamento de pagamentos: </span>
                  <span className="text-sm sm:text-base text-[#53645F]">Boletos e notas lançados no internet banking prontos para sua autorização final.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="font-bold text-[#10231F] text-sm sm:text-base">Previsibilidade de caixa e relatórios: </span>
                  <span className="text-sm sm:text-base text-[#53645F]">DRE e relatórios gerenciais claros para saber exatamente o lucro real da sua operação.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="solucao-whatsapp-btn"
                href={getWhatsAppUrl({ source: 'solution', intent: 'bpo_financeiro' })}
                target={isWhatsAppConfigured() ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#00B86B] hover:bg-[#00A35E] text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero organizar meu financeiro</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-[#F4F8F6] hover:bg-[#EAF1EE] text-[#063D32] text-sm font-semibold px-5 py-3.5 rounded-xl border border-[#DCE8E3] transition-colors text-center cursor-pointer"
              >
                <span>Conhecer os serviços</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
