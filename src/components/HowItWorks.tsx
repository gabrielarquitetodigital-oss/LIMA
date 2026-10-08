import React from 'react';
import { SearchCheck, FileSpreadsheet, Send, LineChart, ShieldCheck, MessageCircle, GitFork } from 'lucide-react';
import { STEPS_PROCESS, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

const stepIcons: Record<string, React.ReactNode> = {
  SearchCheck: <SearchCheck className="w-6 h-6 text-[#00B86B]" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-[#00B86B]" />,
  Send: <Send className="w-6 h-6 text-[#00B86B]" />,
  LineChart: <LineChart className="w-6 h-6 text-[#00B86B]" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 sm:py-24 bg-[#F4F8F6] border-y border-[#DCE8E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <GitFork className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Processo Ágil & Sem Atrito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Como funciona na prática:{' '}
            <span className="text-[#00B86B]">4 passos simples</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Veja como é simples transferir a rotina operacional para a Lima sem interromper as atividades do seu negócio:
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS_PROCESS.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white border border-[#DCE8E3] p-6 flex flex-col justify-between hover:border-[#00B86B]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs group"
            >
              {/* Step number badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#DCE8E3] group-hover:text-[#00B86B]/60 transition-colors font-mono">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stepIcons[step.icon]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#10231F] mb-2 leading-snug font-heading">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE8E3] text-[11px] font-medium text-[#063D32] bg-[#F4F8F6] p-2.5 rounded-lg border border-[#DCE8E3]">
                ⚡ {step.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Security / Objection Breaker Banner */}
        <div className="mt-12 rounded-2xl bg-[#063D32] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 text-[#00D084] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                Segurança Bancária Rigorosa: Você continua no controle do seu dinheiro
              </h4>
              <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
                A Lima atua unicamente com perfil de <strong>operador bancário</strong>. Nós conferimos comprovantes e agendamos os pagamentos. 
                Quem autoriza as transações bancárias e digita o token é <strong>sempre você</strong>.
              </p>
            </div>
          </div>

          <a
            id="how-it-works-whatsapp-btn"
            href={getWhatsAppUrl({ source: 'hero', intent: 'bpo_financeiro' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com a Lima</span>
          </a>
        </div>

      </div>
    </section>
  );
};
