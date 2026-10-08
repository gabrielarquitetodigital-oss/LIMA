import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Dúvidas Frequentes sobre o{' '}
            <span className="text-[#00B86B]">BPO da Lima</span>
          </h2>
          <p className="mt-4 text-base text-[#53645F] leading-relaxed">
            Respostas claras e objetivas sobre a terceirização da rotina financeira da sua empresa:
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#DCE8E3] overflow-hidden transition-all duration-200 hover:border-[#00B86B]/40 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#F4F8F6] text-[#063D32] font-semibold border border-[#DCE8E3] shrink-0 hidden sm:inline">
                      {item.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#10231F] font-heading">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#53645F] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#00B86B]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#53645F] leading-relaxed border-t border-[#DCE8E3] pt-4 bg-[#F4F8F6]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4F8F6] border border-[#DCE8E3]">
          <p className="text-sm text-[#53645F] mb-3">
            Precisa de algum detalhe específico para a operação do seu negócio?
          </p>
          <a
            id="faq-whatsapp-btn"
            href={getWhatsAppUrl({ source: 'faq', intent: 'duvida' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00B86B] hover:text-[#00A35E] cursor-pointer transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Lima no WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
