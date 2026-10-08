import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface NavbarProps {
  onOpenBioLink?: () => void;
  onOpenDiagnostic?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBioLink, onOpenDiagnostic }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div id="top-announcement-bar" className="bg-[#063D32] text-white text-xs py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#00D084]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-ping"></span>
            Diagnóstico de Gestão Financeira para Empresas
          </span>
          <span className="hidden sm:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/90">Mapeie a maturidade financeira do seu negócio em 60 segundos</span>
          {onOpenDiagnostic && (
            <button
              id="topbar-diagnostic-btn"
              onClick={onOpenDiagnostic}
              className="text-[#00D084] hover:text-white font-semibold underline underline-offset-2 ml-1 cursor-pointer transition-colors"
            >
              Fazer agora &rarr;
            </button>
          )}
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DCE8E3] py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-[#DCE8E3]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand: Imagem Oficial da Logo (Sem a letra 'L' antiga) */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/images/logo.svg"
              alt="Logo Lima Gestão Financeira"
              width={40}
              height={40}
              className="w-10 h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform"
              loading="eager"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-[#10231F] font-heading">
                  LIMA
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4F8F6] text-[#063D32] border border-[#DCE8E3] font-semibold tracking-wide uppercase">
                  BPO Financeiro
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#53645F] font-semibold">
                Gestão Financeira
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#53645F] hover:text-[#00B86B] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenBioLink && (
              <button
                id="header-bio-btn"
                onClick={onOpenBioLink}
                title="Acesso Rápido / Compartilhar"
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-[#F4F8F6] text-[#53645F] hover:text-[#10231F] hover:bg-[#EAF1EE] border border-[#DCE8E3] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00B86B]" />
                <span>Link na Bio</span>
              </button>
            )}

            <a
              id="header-whatsapp-cta"
              data-cta="header-whatsapp"
              href={getWhatsAppUrl({ source: 'navbar', intent: 'bpo_financeiro' })}
              target={isWhatsAppConfigured() ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Quero organizar meu financeiro</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppUrl()}
              target={isWhatsAppConfigured() ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="sm:hidden p-2.5 rounded-xl bg-[#00B86B] text-white shadow-sm"
              aria-label="WhatsApp Lima"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#10231F] hover:text-[#00B86B] rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] focus:outline-none cursor-pointer"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-b border-[#DCE8E3] shadow-lg space-y-3">
            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[#10231F] hover:bg-[#F4F8F6] hover:text-[#00B86B] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#DCE8E3] flex flex-col gap-2.5">
              {onOpenDiagnostic && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDiagnostic();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#00B86B]" />
                  Diagnóstico Financeiro (60s)
                </button>
              )}
              <a
                href={getWhatsAppUrl({ source: 'navbar', intent: 'bpo_financeiro' })}
                target={isWhatsAppConfigured() ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Quero organizar meu financeiro</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
