import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface MobileStickyCtaProps {
  onOpenContactModal?: () => void;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ onOpenContactModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isConfigured = isWhatsAppConfigured();
  const whatsappUrl = getWhatsAppUrl({ source: 'mobile_bar', intent: 'bpo_financeiro' });

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 300px (após o hero inicial)
      const scrollY = window.scrollY;
      const contactEl = document.getElementById('contato');
      
      let nearBottom = false;
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        // Se a seção de contato já estiver no viewport, esconde a barra para não cobrir o formulário
        if (rect.top < window.innerHeight - 80) {
          nearBottom = true;
        }
      }

      setIsVisible(scrollY > 280 && !nearBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured && onOpenContactModal) {
      e.preventDefault();
      onOpenContactModal();
    }
  };

  return (
    <aside 
      aria-label="Ação rápida mobile" 
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#DCE8E3] px-4 py-2.5 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left flex-1 min-w-0">
          <div className="text-xs font-bold text-[#10231F] truncate font-heading">
            Organize seu financeiro
          </div>
          <div className="text-[10px] text-[#53645F] truncate">
            Atendimento direto sem compromisso
          </div>
        </div>

        <a
          id="mobile-sticky-whatsapp-btn"
          data-cta="floating-whatsapp"
          href={whatsappUrl}
          target={isConfigured ? "_blank" : "_self"}
          rel="noopener noreferrer"
          onClick={handleClick}
          className="shrink-0 inline-flex items-center gap-1.5 bg-[#00B86B] hover:bg-[#00A35E] active:scale-95 text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>Falar com a Lima</span>
        </a>
      </div>
    </aside>
  );
};
