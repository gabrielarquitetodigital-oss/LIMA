import React, { useState } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock, Users, CheckCircle2, Edit3, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl, getWhatsAppMessage, isWhatsAppConfigured } from '../data/landingData';

export const FinalCta: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [segment, setSegment] = useState('');
  const [mainNeed, setMainNeed] = useState('');

  // Validation errors (Section 16)
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Step: 'form' | 'summary' (Section 15)
  const [step, setStep] = useState<'form' | 'summary'>('form');

  // Friendly in-UI feedback for development/unconfigured state (Section 17)
  const [showUnconfiguredNotice, setShowUnconfiguredNotice] = useState(false);
  const [copied, setCopied] = useState(false);

  const isConfigured = isWhatsAppConfigured();

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = 'Digite seu nome.';
    }
    if (!company.trim()) {
      newErrors.company = 'Informe o nome da empresa.';
    }
    if (!whatsapp.trim() || whatsapp.trim().length < 8) {
      newErrors.whatsapp = 'Informe seu WhatsApp com DDD.';
    }
    if (!segment.trim()) {
      newErrors.segment = 'Selecione seu segmento.';
    }
    if (!mainNeed.trim()) {
      newErrors.mainNeed = 'Informe sua principal necessidade.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('summary');
      setShowUnconfiguredNotice(false);
    }
  };

  const formattedLeadMessage = getWhatsAppMessage({
    source: 'contact_form',
    name: name.trim(),
    company: company.trim(),
    segment: segment.trim(),
    mainNeed: mainNeed.trim(),
  });

  const handleContinueWhatsApp = () => {
    const targetUrl = getWhatsAppUrl({
      source: 'contact_form',
      name: name.trim(),
      company: company.trim(),
      segment: segment.trim(),
      mainNeed: mainNeed.trim(),
    });

    if (isConfigured) {
      window.location.href = targetUrl;
    } else {
      setShowUnconfiguredNotice(true);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedLeadMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Petrol Green Card Banner */}
        <div className="rounded-3xl bg-[#063D32] p-8 sm:p-12 lg:p-16 shadow-2xl text-white relative overflow-hidden">
          
          {/* Subtle background photo overlay (escritorio.webp) with gradient mask */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
            <img
              src="/images/escritorio.webp"
              alt="Escritório e equipe Lima Gestão Financeira"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#063D32] via-[#063D32]/90 to-[#063D32]/80"></div>
          </div>

          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#00B86B]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Urgency & Direct WhatsApp */}
            <div className="lg:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A4D3F] text-[#00B86B] border border-[#00B86B]/30 text-xs font-bold mb-4 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00B86B]"></span>
                <span className="text-white">Atendimento Direto com a Equipe</span>
              </div>

              {/* Título Conforme Seção 11 */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-heading">
                Vamos organizar o financeiro da sua empresa?
              </h2>

              <p className="text-[#00B86B] font-semibold text-lg sm:text-xl mb-4">
                “{COMPANY_CONFIG.slogan}”
              </p>

              {/* Texto de Apoio Conforme Seção 11 */}
              <p className="text-sm sm:text-base text-[#DCE8E3] mb-8 leading-relaxed">
                Converse com a Lima Gestão Financeira e descubra como podemos ajudar sua empresa a ter mais organização e controle financeiro.
              </p>

              {/* Team Pill */}
              <div className="mb-8 p-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center gap-3.5 max-w-md">
                <div className="w-10 h-10 rounded-xl bg-[#00B86B]/20 text-[#00B86B] border border-[#00B86B]/30 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-white block">Atendimento Dedicado</span>
                  <span className="text-[11px] text-[#DCE8E3]">Você fala diretamente com a equipe da Lima Gestão Financeira.</span>
                </div>
              </div>

              {/* Botões Conforme Seção 11 */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    id="final-cta-whatsapp-btn"
                    data-cta="final-whatsapp"
                    href={getWhatsAppUrl({ source: 'final_cta', intent: 'bpo_financeiro' })}
                    target={isConfigured ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[#00B86B] hover:bg-[#00A35E] text-white font-black text-base px-7 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Falar com a Lima Gestão Financeira</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    id="final-cta-diagnostic-btn"
                    data-cta="diagnostico"
                    href="#diagnostico"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-4 rounded-xl border border-white/20 transition-all text-center cursor-pointer"
                  >
                    <span>Fazer diagnóstico financeiro</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#DCE8E3]/80 pt-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Retorno ágil</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B]" />
                    <span>Sem compromisso prévio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Commercial Form with Validation & Summary Flow */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-white p-6 sm:p-8 text-[#10231F] shadow-xl">
                
                {step === 'form' ? (
                  <div>
                    <div className="mb-5 text-left">
                      <h3 className="text-xl font-bold text-[#10231F] mb-1 font-heading">
                        Prefere adiantar suas informações?
                      </h3>
                      <p className="text-xs text-[#53645F] leading-relaxed">
                        Preencha o formulário abaixo para gerar uma mensagem contextualizada e iniciar a conversa no WhatsApp:
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} noValidate className="space-y-3.5 text-left">
                      {/* Nome */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label htmlFor="lead-name" className="block text-xs font-semibold text-[#10231F]">
                            Seu Nome Completo *
                          </label>
                          {errors.name && (
                            <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.name}
                            </span>
                          )}
                        </div>
                        <input
                          id="lead-name"
                          type="text"
                          placeholder="Ex: Carlos Silva"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border text-sm text-[#10231F] placeholder-[#8A9C96] focus:outline-none transition-colors ${
                            errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-[#DCE8E3] focus:border-[#00B86B] focus:bg-white'
                          }`}
                        />
                      </div>

                      {/* Empresa */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label htmlFor="lead-company" className="block text-xs font-semibold text-[#10231F]">
                            Nome da Sua Empresa *
                          </label>
                          {errors.company && (
                            <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.company}
                            </span>
                          )}
                        </div>
                        <input
                          id="lead-company"
                          type="text"
                          placeholder="Ex: Silva & Santos LTDA"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                            if (errors.company) setErrors({ ...errors, company: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border text-sm text-[#10231F] placeholder-[#8A9C96] focus:outline-none transition-colors ${
                            errors.company ? 'border-rose-400 bg-rose-50/30' : 'border-[#DCE8E3] focus:border-[#00B86B] focus:bg-white'
                          }`}
                        />
                      </div>

                      {/* WhatsApp */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label htmlFor="lead-whatsapp" className="block text-xs font-semibold text-[#10231F]">
                            Seu WhatsApp Comercial *
                          </label>
                          {errors.whatsapp && (
                            <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.whatsapp}
                            </span>
                          )}
                        </div>
                        <input
                          id="lead-whatsapp"
                          type="tel"
                          placeholder="(11) 98765-4321"
                          value={whatsapp}
                          onChange={(e) => {
                            setWhatsapp(e.target.value);
                            if (errors.whatsapp) setErrors({ ...errors, whatsapp: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border text-sm text-[#10231F] placeholder-[#8A9C96] focus:outline-none transition-colors ${
                            errors.whatsapp ? 'border-rose-400 bg-rose-50/30' : 'border-[#DCE8E3] focus:border-[#00B86B] focus:bg-white'
                          }`}
                        />
                      </div>

                      {/* Segmento */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label htmlFor="lead-segment" className="block text-xs font-semibold text-[#10231F]">
                            Segmento de Atuação *
                          </label>
                          {errors.segment && (
                            <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.segment}
                            </span>
                          )}
                        </div>
                        <select
                          id="lead-segment"
                          value={segment}
                          onChange={(e) => {
                            setSegment(e.target.value);
                            if (errors.segment) setErrors({ ...errors, segment: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border text-sm text-[#10231F] focus:outline-none transition-colors ${
                            errors.segment ? 'border-rose-400 bg-rose-50/30' : 'border-[#DCE8E3] focus:border-[#00B86B] focus:bg-white'
                          }`}
                        >
                          <option value="">Selecione seu segmento...</option>
                          <option value="Prestação de Serviços / Consultoria">Prestação de Serviços / Consultoria</option>
                          <option value="Comércio / Varejo / E-commerce">Comércio / Varejo / E-commerce</option>
                          <option value="Saúde / Clínicas / Consultórios">Saúde / Clínicas / Consultórios</option>
                          <option value="Restaurantes / Alimentação">Restaurantes / Alimentação</option>
                          <option value="Logística / Transportadoras">Logística / Transportadoras</option>
                          <option value="Tecnologia / Startups">Tecnologia / Startups</option>
                          <option value="Outro segmento">Outro segmento</option>
                        </select>
                      </div>

                      {/* Principal necessidade */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <label htmlFor="lead-need" className="block text-xs font-semibold text-[#10231F]">
                            Principal Necessidade *
                          </label>
                          {errors.mainNeed && (
                            <span className="text-[11px] text-rose-600 font-medium flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.mainNeed}
                            </span>
                          )}
                        </div>
                        <select
                          id="lead-need"
                          value={mainNeed}
                          onChange={(e) => {
                            setMainNeed(e.target.value);
                            if (errors.mainNeed) setErrors({ ...errors, mainNeed: '' });
                          }}
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F4F8F6] border text-sm text-[#10231F] focus:outline-none transition-colors ${
                            errors.mainNeed ? 'border-rose-400 bg-rose-50/30' : 'border-[#DCE8E3] focus:border-[#00B86B] focus:bg-white'
                          }`}
                        >
                          <option value="">Selecione sua principal necessidade...</option>
                          <option value="BPO Financeiro Completo (Rotina Diária)">BPO Financeiro Completo (Rotina Diária)</option>
                          <option value="Organização de contas a pagar">Organização de contas a pagar</option>
                          <option value="Controle de contas a receber e conciliação">Controle de contas a receber e conciliação</option>
                          <option value="Previsão e controle de fluxo de caixa">Previsão e controle de fluxo de caixa</option>
                          <option value="Régua e acompanhamento de cobrança">Régua e acompanhamento de cobrança</option>
                          <option value="Emissão de relatórios gerenciais e DRE">Emissão de relatórios gerenciais e DRE</option>
                          <option value="Estruturação financeira geral">Estruturação financeira geral</option>
                        </select>
                      </div>

                      <button
                        id="submit-proposal-whatsapp-btn"
                        data-cta="form-whatsapp"
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer mt-3"
                      >
                        <span>Avançar para o resumo</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Resumo Antes de Abrir o WhatsApp (Fluxo Transparente conforme Section 15) */
                  <div className="text-left space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between pb-3 border-b border-[#DCE8E3]">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#063D32]">
                        <CheckCircle2 className="w-4 h-4 text-[#00B86B]" />
                        <span>Resumo da sua Mensagem</span>
                      </div>
                      <button
                        onClick={() => setStep('form')}
                        className="text-xs text-[#53645F] hover:text-[#10231F] flex items-center gap-1 font-semibold cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Editar</span>
                      </button>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#F4F8F6] border border-[#DCE8E3] space-y-2 text-xs">
                      <div>
                        <span className="text-[#53645F] block">Nome:</span>
                        <span className="font-semibold text-[#10231F]">{name}</span>
                      </div>
                      <div>
                        <span className="text-[#53645F] block">Empresa:</span>
                        <span className="font-semibold text-[#10231F]">{company}</span>
                      </div>
                      <div>
                        <span className="text-[#53645F] block">WhatsApp:</span>
                        <span className="font-semibold text-[#10231F]">{whatsapp}</span>
                      </div>
                      <div>
                        <span className="text-[#53645F] block">Segmento:</span>
                        <span className="font-semibold text-[#10231F]">{segment}</span>
                      </div>
                      <div>
                        <span className="text-[#53645F] block">Principal Necessidade:</span>
                        <span className="font-semibold text-[#00B86B]">{mainNeed}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#53645F] leading-snug">
                      Ao clicar no botão abaixo, abriremos o WhatsApp com esses dados formatados para envio direto à equipe da Lima Gestão Financeira.
                    </p>

                    {showUnconfiguredNotice && (
                      <div className="p-3.5 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] text-[#10231F] text-xs space-y-2">
                        <div className="flex items-center gap-1.5 font-bold text-[#063D32]">
                          <CheckCircle2 className="w-4 h-4 text-[#00B86B] shrink-0" />
                          <span>Mensagem pronta para envio</span>
                        </div>
                        <p className="text-[11px] text-[#53645F] leading-relaxed">
                          Sua mensagem foi formatada para a equipe da Lima Gestão Financeira. Você também pode copiar o texto estruturado:
                        </p>
                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="w-full py-2 px-3 rounded-lg bg-white border border-[#DCE8E3] hover:bg-[#EAF1EE] text-[#063D32] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#00B86B]" />
                              <span>Texto copiado com sucesso!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#00B86B]" />
                              <span>Copiar mensagem formatada</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    <div className="pt-2 space-y-2">
                      <button
                        onClick={handleContinueWhatsApp}
                        data-cta="form-whatsapp"
                        className="w-full py-3.5 px-4 rounded-xl bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Continuar pelo WhatsApp</span>
                      </button>

                      <button
                        onClick={() => setStep('form')}
                        className="w-full py-2 text-xs text-[#53645F] hover:text-[#10231F] font-semibold text-center cursor-pointer"
                      >
                        Voltar e alterar dados
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
