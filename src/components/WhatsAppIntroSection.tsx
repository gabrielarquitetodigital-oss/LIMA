import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface WhatsAppIntroSectionProps {
  onOpenContactModal?: () => void;
}

export const WhatsAppIntroSection: React.FC<WhatsAppIntroSectionProps> = ({ onOpenContactModal }) => {
  const isConfigured = isWhatsAppConfigured();
  const whatsappUrl = getWhatsAppUrl({ source: 'whatsapp_intro', intent: 'bpo_financeiro' });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured && onOpenContactModal) {
      e.preventDefault();
      onOpenContactModal();
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#DCE8E3] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-4 shadow-xs">
          <HeartHandshake className="w-4 h-4 text-[#00B86B]" />
          <span>Primeiro Contato Consultivo</span>
        </div>

        {/* Título Conforme Solicitação (Section 24) */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#10231F] tracking-tight leading-snug mb-4 font-heading">
          Quer entender como isso pode{' '}
          <span className="text-[#00B86B]">funcionar na sua empresa?</span>
        </h2>

        {/* Texto Conforme Solicitação (Section 24) */}
        <p className="text-base sm:text-lg text-[#53645F] max-w-2xl mx-auto mb-8 leading-relaxed">
          Converse com a Lima Gestão Financeira. Primeiro entendemos sua rotina e suas necessidades. Depois avaliamos o melhor caminho.
        </p>

        {/* Action Button: Falar com a Lima */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          <a
            id="whatsapp-intro-btn"
            data-cta="whatsapp-intro"
            href={whatsappUrl}
            target={isConfigured ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center justify-center gap-3 bg-[#00B86B] hover:bg-[#00A35E] text-white text-base font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar com a Lima</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Reassuring Microcopies (Section 10 & 25) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DCE8E3] text-left sm:text-center text-xs text-[#53645F]">
          <div className="flex items-center sm:justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] shrink-0"></span>
            <span>Você fala diretamente com a equipe da Lima Gestão Financeira.</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] shrink-0"></span>
            <span>Sem compromisso. Primeiro entendemos sua necessidade.</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] shrink-0"></span>
            <span>Cada empresa possui uma realidade diferente. Por isso, começamos entendendo sua rotina.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
