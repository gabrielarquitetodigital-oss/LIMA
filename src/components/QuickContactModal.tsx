import React, { useState } from 'react';
import { X, MessageCircle, ArrowRight, ShieldCheck, Copy, Check, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl, getWhatsAppMessage, isWhatsAppConfigured } from '../data/landingData';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultNeed?: string;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({ 
  isOpen, 
  onClose,
  defaultNeed = 'BPO Financeiro Completo'
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [mainNeed, setMainNeed] = useState(defaultNeed);
  const [showNotice, setShowNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  const isConfigured = isWhatsAppConfigured();

  if (!isOpen) return null;

  const messageText = getWhatsAppMessage({
    source: 'modal',
    name: name.trim(),
    company: company.trim(),
    mainNeed: mainNeed.trim(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl({
      source: 'modal',
      name: name.trim(),
      company: company.trim(),
      mainNeed: mainNeed.trim(),
    });

    if (isConfigured) {
      window.location.href = url;
      onClose();
    } else {
      setShowNotice(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10231F]/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-contact-title"
    >
      <div className="bg-white border border-[#DCE8E3] rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8A9C96] hover:text-[#10231F] p-1.5 rounded-full hover:bg-[#F4F8F6] transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header (Section 11) */}
        <div className="mb-5 pr-6">
          <div className="w-10 h-10 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center text-[#00B86B] mb-3">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <h3 id="quick-contact-title" className="text-xl sm:text-2xl font-extrabold text-[#10231F] font-heading mb-1.5">
            Vamos conversar?
          </h3>
          <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
            Conte rapidamente o que você precisa e iniciaremos a conversa pelo WhatsApp.
          </p>
        </div>

        {/* Quick form (Section 11: Campos rápidos) */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label htmlFor="quick-name" className="block text-xs font-semibold text-[#10231F] mb-1">
              Seu nome (opcional):
            </label>
            <input
              id="quick-name"
              type="text"
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-sm text-[#10231F] placeholder-[#8A9C96] focus:outline-none focus:border-[#00B86B] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="quick-company" className="block text-xs font-semibold text-[#10231F] mb-1">
              Nome da empresa (opcional):
            </label>
            <input
              id="quick-company"
              type="text"
              placeholder="Ex: Minha Empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-sm text-[#10231F] placeholder-[#8A9C96] focus:outline-none focus:border-[#00B86B] focus:bg-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="quick-need" className="block text-xs font-semibold text-[#10231F] mb-1">
              Principal necessidade:
            </label>
            <select
              id="quick-need"
              value={mainNeed}
              onChange={(e) => setMainNeed(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-sm text-[#10231F] focus:outline-none transition-colors"
            >
              <option value="BPO Financeiro Completo">BPO Financeiro Completo (Gestão diária)</option>
              <option value="Organização de contas a pagar">Organização de contas a pagar</option>
              <option value="Contas a receber e conciliação">Contas a receber e conciliação</option>
              <option value="Fluxo de caixa e previsibilidade">Fluxo de caixa e previsibilidade</option>
              <option value="Cobrança profissional de clientes">Cobrança profissional de clientes</option>
              <option value="Relatórios gerenciais e DRE">Relatórios gerenciais e DRE</option>
              <option value="Tirar dúvidas sobre os planos">Tirar dúvidas gerais sobre a Lima</option>
            </select>
          </div>

          {/* Microcopy reassuring text */}
          <div className="pt-1 text-[11px] text-[#53645F] flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B] shrink-0" />
            <span>Sem compromisso. Primeiro entendemos sua rotina.</span>
          </div>

          {showNotice && (
            <div className="p-3 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-[#10231F] text-xs space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-[#063D32]">
                <Check className="w-3.5 h-3.5 text-[#00B86B]" />
                <span>Mensagem pronta para envio</span>
              </div>
              <p className="text-[11px] text-[#53645F] leading-snug">
                Sua mensagem está formatada para a equipe comercial. Você pode copiá-la abaixo:
              </p>
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-1.5 px-3 rounded-lg bg-white border border-[#DCE8E3] hover:bg-[#EAF1EE] text-[#063D32] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Texto copiado com sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Copiar mensagem</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* CTA: Continuar pelo WhatsApp */}
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-[#00B86B] hover:bg-[#00A35E] active:scale-[0.99] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-3"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Continuar pelo WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
