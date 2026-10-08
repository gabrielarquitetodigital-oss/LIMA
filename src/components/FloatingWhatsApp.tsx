import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface FloatingWhatsAppProps {
  onOpenContactModal?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenContactModal }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isConfigured = isWhatsAppConfigured();
  const whatsappUrl = getWhatsAppUrl({ source: 'floating_button', intent: 'bpo_financeiro' });

  useEffect(() => {
    // Show friendly helper tooltip after 3.5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured && onOpenContactModal) {
      e.preventDefault();
      onOpenContactModal();
    }
  };

  return (
    <aside 
      aria-label="Atendimento WhatsApp" 
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Friendly Chat Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-3 max-w-[270px] sm:max-w-xs bg-white border border-[#DCE8E3] p-3.5 rounded-2xl shadow-xl relative text-left transition-all animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#8A9C96] hover:text-[#10231F] p-1 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B86B]"
            aria-label="Fechar mensagem de ajuda"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <img
              src="/images/logo.svg"
              alt="Logo Lima Gestão Financeira"
              width={32}
              height={32}
              className="w-8 h-8 object-contain rounded-lg shrink-0 shadow-xs"
            />
            <div>
              <div className="text-[11px] font-bold text-[#063D32] mb-0.5 flex items-center gap-1 font-heading">
                <span>{COMPANY_CONFIG.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] animate-pulse"></span>
              </div>
              <p className="text-xs text-[#53645F] leading-snug">
                Olá! Quer tirar dúvidas sobre a gestão financeira da sua empresa? Estamos à disposição no WhatsApp.
              </p>
              <a
                href={whatsappUrl}
                target={isConfigured ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleClick}
                data-cta="floating-whatsapp"
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#00B86B] hover:text-[#00A35E] underline underline-offset-2 cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00B86B]"
              >
                Falar com a Lima agora &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button (Section 12: Desktop shows "Falar com a Lima", Mobile shows icon with aria-label) */}
      <a
        id="floating-whatsapp-trigger"
        data-cta="floating-whatsapp"
        href={whatsappUrl}
        target={isConfigured ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Falar com a Lima Gestão Financeira pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00B86B]/40"
      >
        <MessageCircle className="w-6 h-6 fill-current shrink-0" />
        
        {/* Desktop Text (Section 12) */}
        <span className="hidden sm:inline font-bold text-sm tracking-wide pr-1 whitespace-nowrap">
          Falar com a Lima
        </span>

        {/* Mobile accessible text indicator */}
        <span className="sr-only">
          Falar com a Lima Gestão Financeira pelo WhatsApp
        </span>
      </a>
    </aside>
  );
};
