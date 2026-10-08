import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#063D32] border-t border-[#0A4D3F] text-[#DCE8E3] text-xs sm:text-sm pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0A4D3F]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Logo Lima Gestão Financeira"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-xl shadow-xs"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-heading tracking-tight">
                  {COMPANY_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#8A9C96]">
                  BPO Financeiro Especializado
                </span>
              </div>
            </div>

            <p className="text-[#00B86B] font-medium text-xs">
              “{COMPANY_CONFIG.slogan}”
            </p>

            <p className="text-[#DCE8E3] text-xs leading-relaxed max-w-sm">
              Gestão financeira terceirizada para pequenas e médias empresas. Contas a pagar, contas a receber, conciliação diária e relatórios gerenciais com rigor técnico e discrição.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8A9C96] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#00B86B]" />
              <span>Acesso restrito de operador bancário e proteção de dados.</span>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#DCE8E3]">
              <li><a href="#inicio" className="hover:text-[#00B86B] transition-colors">Início</a></li>
              <li><a href="#dores" className="hover:text-[#00B86B] transition-colors">Você se Identifica?</a></li>
              <li><a href="#solucao" className="hover:text-[#00B86B] transition-colors">A Solução</a></li>
              <li><a href="#servicos" className="hover:text-[#00B86B] transition-colors">Serviços Inclusos</a></li>
              <li><a href="#diagnostico" className="hover:text-[#00B86B] transition-colors">Diagnóstico Financeiro</a></li>
              <li><a href="#como-funciona" className="hover:text-[#00B86B] transition-colors">Como Funciona</a></li>
              <li><a href="#seguranca" className="hover:text-[#00B86B] transition-colors">Segurança Bancária</a></li>
              <li><a href="#beneficios" className="hover:text-[#00B86B] transition-colors">Benefícios</a></li>
              <li><a href="#faq" className="hover:text-[#00B86B] transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-heading">
              Canais Oficiais
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2 text-white">
                <MessageCircle className="w-4 h-4 text-[#00B86B] shrink-0" />
                <a
                  href={getWhatsAppUrl()}
                  target={isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="hover:text-[#00B86B] font-semibold transition-colors"
                >
                  WhatsApp: {COMPANY_CONFIG.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#DCE8E3]">
                <Mail className="w-4 h-4 text-[#8A9C96] shrink-0" />
                <span>{COMPANY_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-2 text-[#DCE8E3]">
                <Clock className="w-4 h-4 text-[#8A9C96] shrink-0" />
                <span>{COMPANY_CONFIG.workingHours}</span>
              </li>
              <li className="flex items-center gap-2 text-[#DCE8E3]">
                <MapPin className="w-4 h-4 text-[#8A9C96] shrink-0" />
                <span>{COMPANY_CONFIG.cityState}</span>
              </li>
            </ul>
          </div>

          {/* CTA Quick Card */}
          <div className="rounded-2xl bg-[#0A4D3F] border border-[#00B86B]/30 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold text-white block mb-1 font-heading">
                Atendimento Rápido
              </span>
              <p className="text-[11px] text-[#DCE8E3] leading-relaxed mb-3">
                Inicie uma conversa direta pelo WhatsApp e tire dúvidas sobre os planos.
              </p>
            </div>
            <a
              id="footer-whatsapp-btn"
              data-cta="footer-whatsapp"
              href={getWhatsAppUrl('Olá! Gostaria de falar com a equipe da Lima Gestão Financeira.')}
              target={isWhatsAppConfigured() ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all text-center cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Falar com a Lima</span>
            </a>
          </div>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A9C96]">
          <div>
            © {new Date().getFullYear()} {COMPANY_CONFIG.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Segurança Operacional</span>
            <span>•</span>
            <span>Acesso Restrito de Operador</span>
            <span>•</span>
            <span>Sigilo NDA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
