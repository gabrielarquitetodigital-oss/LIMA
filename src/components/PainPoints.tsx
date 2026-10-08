import React from 'react';
import { 
  Layers,
  UsersRound,
  EyeOff,
  Shuffle, 
  ClockAlert, 
  TrendingDown, 
  FileSpreadsheet,
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  HelpCircle
} from 'lucide-react';
import { PAIN_POINTS, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

const iconMap: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-[#00B86B]" />,
  UsersRound: <UsersRound className="w-5 h-5 text-[#00B86B]" />,
  EyeOff: <EyeOff className="w-5 h-5 text-[#00B86B]" />,
  Shuffle: <Shuffle className="w-5 h-5 text-[#00B86B]" />,
  ClockAlert: <ClockAlert className="w-5 h-5 text-[#00B86B]" />,
  TrendingDown: <TrendingDown className="w-5 h-5 text-[#00B86B]" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-[#00B86B]" />,
};

export const PainPoints: React.FC = () => {
  return (
    <section id="dores" className="py-20 sm:py-24 bg-[#F4F8F6] border-y border-[#DCE8E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Você se identifica? */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Você se identifica?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-[#10231F] tracking-tight leading-tight font-heading">
            Seu financeiro está tomando{' '}
            <span className="text-[#00B86B]">mais tempo do que deveria?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Muitos empresários perdem horas com tarefas manuais e tomam decisões sem números claros. Veja como a Lima apoia a sua operação:
          </p>
        </div>

        {/* 7 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-2xl bg-white border border-[#DCE8E3] hover:border-[#00B86B]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs group ${
                idx === PAIN_POINTS.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#EAF1EE] transition-all">
                  {iconMap[item.icon] || <Layers className="w-5 h-5 text-[#00B86B]" />}
                </div>

                <h3 className="text-lg font-bold text-[#10231F] mb-2 leading-snug font-heading">
                  {item.pain}
                </h3>

                <p className="text-sm text-[#53645F] mb-5 leading-relaxed">
                  <span className="text-[#063D32] block text-[11px] uppercase tracking-wider font-semibold mb-1">
                    No dia a dia:
                  </span>
                  {item.consequence}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE8E3] flex items-start gap-2.5 text-xs text-[#53645F] bg-[#F4F8F6] p-3 rounded-xl border border-[#DCE8E3]">
                <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#063D32]">Como a Lima resolve: </span>
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl bg-[#063D32] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-2xl text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-1">
              Quer tirar o operacional financeiro da sua rotina?
            </h4>
            <p className="text-xs sm:text-sm text-white/80">
              Rotinas padronizadas, conciliação periódica e relatórios claros para você focar no crescimento da sua empresa.
            </p>
          </div>

          <a
            id="pain-points-whatsapp-btn"
            href={getWhatsAppUrl({ source: 'pain_points', intent: 'bpo_financeiro' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero organizar meu financeiro</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
