import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  Calculator, 
  Sparkles, 
  Check, 
  Copy, 
  Building2, 
  ExternalLink
} from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface BioLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDiagnostic: () => void;
}

export const BioLinkModal: React.FC<BioLinkModalProps> = ({ isOpen, onClose, onOpenDiagnostic }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://limagestaofinanceira.com.br';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const bioLinks = [
    {
      title: 'Quero organizar meu financeiro',
      desc: 'Fale com a equipe da Lima pelo WhatsApp',
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      url: getWhatsAppUrl({ source: 'modal', intent: 'bpo_financeiro' }),
      isPrimary: true,
    },
    {
      title: 'Diagnóstico Financeiro Express (60s)',
      desc: 'Avalie a maturidade financeira do seu negócio',
      icon: <Sparkles className="w-5 h-5 text-[#00B86B]" />,
      action: () => {
        onClose();
        onOpenDiagnostic();
      },
    },
    {
      title: 'Calculadora de Economia BPO vs CLT',
      desc: 'Simule a diferença de custos para sua operação',
      icon: <Calculator className="w-5 h-5 text-[#00B86B]" />,
      action: () => {
        onClose();
        const calcEl = document.getElementById('calculadora');
        calcEl?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      title: 'Conhecer Todos os Serviços da Lima',
      desc: 'Contas a pagar, a receber, conciliação e relatórios',
      icon: <Building2 className="w-5 h-5 text-[#53645F]" />,
      action: () => {
        onClose();
        const servEl = document.getElementById('servicos');
        servEl?.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10231F]/70 backdrop-blur-sm">
      <div className="bg-white border border-[#DCE8E3] rounded-3xl max-w-sm w-full p-6 shadow-2xl relative text-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8A9C96] hover:text-[#10231F] p-1.5 rounded-full hover:bg-[#F4F8F6] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card Header */}
        <div className="flex flex-col items-center mb-6 pt-2">
          <img
            src="/images/logo.svg"
            alt="Logo Lima Gestão Financeira"
            width={64}
            height={64}
            className="w-16 h-16 object-contain rounded-2xl shadow-md mb-3"
          />
          <h3 className="text-lg font-bold text-[#10231F] font-heading">
            {COMPANY_CONFIG.name}
          </h3>
          <p className="text-xs text-[#00B86B] font-semibold mt-0.5">
            {COMPANY_CONFIG.slogan}
          </p>
          <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[11px] text-[#063D32] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B] animate-pulse"></span>
            <span>Atendimento Comercial Aberto</span>
          </div>
        </div>

        {/* Links Stack */}
        <div className="space-y-3 mb-6">
          {bioLinks.map((item, idx) => {
            if (item.url) {
              return (
                <a
                  key={idx}
                  href={item.url}
                  target={isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`w-full p-3.5 rounded-xl flex items-center gap-3 transition-all cursor-pointer ${
                    item.isPrimary
                      ? 'bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold shadow-md'
                      : 'bg-[#F4F8F6] hover:bg-white text-[#10231F] border border-[#DCE8E3]'
                  }`}
                >
                  <div className="shrink-0">{item.icon}</div>
                  <div className="text-left flex-1">
                    <div className="text-xs font-bold leading-snug">{item.title}</div>
                    <div className={`text-[10px] ${item.isPrimary ? 'text-white/90' : 'text-[#53645F]'}`}>{item.desc}</div>
                  </div>
                  <ExternalLink className={`w-3.5 h-3.5 shrink-0 ${item.isPrimary ? 'text-white/80' : 'text-[#8A9C96]'}`} />
                </a>
              );
            }

            return (
              <button
                key={idx}
                onClick={item.action}
                className="w-full p-3.5 rounded-xl bg-[#F4F8F6] hover:bg-white text-[#10231F] border border-[#DCE8E3] hover:border-[#00B86B]/40 flex items-center gap-3 transition-all cursor-pointer text-left shadow-2xs"
              >
                <div className="shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-bold leading-snug">{item.title}</div>
                  <div className="text-[10px] text-[#53645F]">{item.desc}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Share Action */}
        <div className="pt-4 border-t border-[#DCE8E3] flex items-center justify-between text-xs text-[#53645F]">
          <span>Compartilhar link:</span>
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F8F6] hover:bg-white border border-[#DCE8E3] text-[#10231F] font-medium cursor-pointer transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#00B86B]" />
                <span className="text-[#00B86B] font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#53645F]" />
                <span>Copiar Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
