import React, { useState } from 'react';
import { 
  ArrowDownCircle, 
  ArrowUpCircle, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Settings2, 
  Check, 
  MessageCircle, 
  Layers,
  Info
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';
import { ServiceItem } from '../types';

const serviceIcons: Record<string, React.ReactNode> = {
  ArrowDownCircle: <ArrowDownCircle className="w-6 h-6 text-[#00B86B]" />,
  ArrowUpCircle: <ArrowUpCircle className="w-6 h-6 text-[#00B86B]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00B86B]" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-[#00B86B]" />,
  FileText: <FileText className="w-6 h-6 text-[#00B86B]" />,
  Settings2: <Settings2 className="w-6 h-6 text-[#00B86B]" />,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIntent = (id: string) => {
    switch (id) {
      case 'contas-pagar':
        return 'contas_pagar' as const;
      case 'contas-receber':
        return 'contas_receber' as const;
      case 'fluxo-caixa':
        return 'fluxo_caixa' as const;
      case 'cobranca-clientes':
        return 'cobranca' as const;
      case 'conciliacao-financeira':
        return 'conciliacao' as const;
      case 'relatorios-proprietario':
        return 'relatorios' as const;
      case 'fechamento-financeiro':
        return 'fechamento' as const;
      default:
        return 'bpo_financeiro' as const;
    }
  };

  return (
    <section id="servicos" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10231F] tracking-tight font-heading">
            O que a Lima faz{' '}
            <span className="text-[#00B86B]">
              pela sua empresa
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Gestão financeira terceirizada completa, do operacional diário aos relatórios estratégicos para tomada de decisão.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const serviceUrl = getWhatsAppUrl({
              source: 'services',
              intent: getServiceIntent(service.id),
              serviceTitle: service.title,
            });

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white border border-[#DCE8E3] hover:border-[#00B86B]/50 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs group"
              >
                <div>
                  {/* Icon & Frequency Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center group-hover:bg-[#EAF1EE] group-hover:scale-105 transition-all">
                      {serviceIcons[service.icon]}
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#F4F8F6] text-[#063D32] border border-[#DCE8E3] font-semibold">
                      {service.frequency}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#00B86B] mb-1">
                    {service.tag}
                  </div>

                  <h3 className="text-xl font-bold text-[#10231F] mb-2.5 group-hover:text-[#00B86B] transition-colors font-heading">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#53645F] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#DCE8E3]">
                    <span className="text-xs font-semibold text-[#53645F] uppercase tracking-wider block mb-2">
                      Entregáveis inclusos:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#10231F]">
                        <div className="w-4 h-4 rounded-full bg-[#EAF1EE] text-[#00B86B] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Action */}
                <div className="pt-4 border-t border-[#DCE8E3] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#53645F] hover:text-[#00B86B] flex items-center gap-1 cursor-pointer py-1 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Ver detalhes</span>
                  </button>

                  <a
                    href={serviceUrl}
                    target={isWhatsAppConfigured() ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:bg-[#00A35E] bg-[#00B86B] px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Service Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white border border-[#DCE8E3] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DCE8E3]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center text-[#00B86B]">
                    {serviceIcons[selectedService.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#10231F] font-heading">{selectedService.title}</h3>
                    <span className="text-xs text-[#063D32] font-semibold">{selectedService.frequency} • {selectedService.tag}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-[#53645F] hover:text-[#10231F] text-lg font-bold p-1 cursor-pointer"
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-[#53645F] mb-6">
                <p className="leading-relaxed text-[#10231F]">
                  {selectedService.fullDesc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#063D32] mb-2">
                    Tudo o que está incluído na rotina:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#10231F]">
                        <Check className="w-4 h-4 text-[#00B86B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#DCE8E3]">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#53645F] hover:text-[#10231F] cursor-pointer"
                >
                  Fechar
                </button>
                <a
                  data-cta="services-whatsapp"
                  href={getWhatsAppUrl({
                    source: 'services',
                    intent: getServiceIntent(selectedService.id),
                    serviceTitle: selectedService.title,
                  })}
                  target={isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Falar com a Lima no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Conversion Banner após serviços */}
        <div className="mt-16 rounded-2xl bg-[#F4F8F6] border border-[#DCE8E3] p-8 text-center max-w-3xl mx-auto shadow-xs">
          <h3 className="text-xl sm:text-2xl font-bold text-[#10231F] font-heading mb-2">
            Precisa de um escopo adaptado à realidade da sua empresa?
          </h3>
          <p className="text-sm text-[#53645F] mb-6 max-w-xl mx-auto">
            Atendimento personalizado e processo adaptado ao seu volume de movimentações. Fale com a Lima e receba uma proposta detalhada.
          </p>
          <a
            id="services-custom-whatsapp-btn"
            data-cta="services-whatsapp"
            href={getWhatsAppUrl({ source: 'services', intent: 'bpo_financeiro' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Quero organizar meu financeiro</span>
          </a>
        </div>

      </div>
    </section>
  );
};
