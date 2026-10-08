import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

export const RoiCalculator: React.FC = () => {
  const [baseSalary, setBaseSalary] = useState<number>(3000);
  const [estimatedTransactions, setEstimatedTransactions] = useState<number>(150);

  // Mathematical CLT Cost breakdown:
  const encargos = baseSalary * 0.70;
  const beneficios = 750;
  const infraestrutura = 250;
  const totalCltMonthly = baseSalary + encargos + beneficios + infraestrutura;
  const totalCltAnnual = totalCltMonthly * 12;

  // Lima BPO Estimate:
  let bpoEstimateMonthly = 1490;
  if (estimatedTransactions > 250) {
    bpoEstimateMonthly = 2290;
  } else if (estimatedTransactions > 100) {
    bpoEstimateMonthly = 1790;
  } else {
    bpoEstimateMonthly = 1290;
  }
  const totalBpoAnnual = bpoEstimateMonthly * 12;

  const monthlySavings = totalCltMonthly - bpoEstimateMonthly;
  const annualSavings = totalCltAnnual - totalBpoAnnual;
  const percentageSavings = Math.round((monthlySavings / totalCltMonthly) * 100);

  const handleCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="calculadora" className="py-20 sm:py-24 bg-white border-y border-[#DCE8E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Simulador Comparativo Ilustrativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Comparativo de Custo:{' '}
            <span className="text-[#00B86B]">BPO Especializado vs. CLT</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            A contratação interna envolve encargos, benefícios, ferramentas e riscos trabalhistas. 
            Simule o comparativo e entenda o custo operacional real:
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls (Left 6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-white border border-[#DCE8E3] p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-lg font-bold text-[#10231F] mb-6 flex items-center gap-2 font-heading">
                <span>Parâmetros da sua Empresa</span>
              </h3>

              {/* Slider 1: Base Salary */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="base-salary-range" className="text-sm font-medium text-[#10231F]">
                    Salário Base CLT de referência (Assistente / Analista):
                  </label>
                  <span className="text-base font-bold text-[#00B86B] font-mono">
                    R$ {baseSalary.toLocaleString('pt-BR')},00
                  </span>
                </div>
                <input
                  id="base-salary-range"
                  type="range"
                  min="2000"
                  max="6000"
                  step="250"
                  value={baseSalary}
                  onChange={(e) => setBaseSalary(Number(e.target.value))}
                  className="w-full h-2 bg-[#F4F8F6] border border-[#DCE8E3] rounded-lg appearance-none cursor-pointer accent-[#00B86B]"
                />
                <div className="flex justify-between text-[11px] text-[#53645F] mt-1">
                  <span>R$ 2.000 (Júnior)</span>
                  <span>R$ 4.000 (Pleno)</span>
                  <span>R$ 6.000 (Sênior)</span>
                </div>
              </div>

              {/* Slider 2: Monthly transactions */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="transactions-range" className="text-sm font-medium text-[#10231F]">
                    Volume estimado de lançamentos e contas/mês:
                  </label>
                  <span className="text-base font-bold text-[#00B86B] font-mono">
                    ~{estimatedTransactions} lançamentos
                  </span>
                </div>
                <input
                  id="transactions-range"
                  type="range"
                  min="50"
                  max="400"
                  step="25"
                  value={estimatedTransactions}
                  onChange={(e) => setEstimatedTransactions(Number(e.target.value))}
                  className="w-full h-2 bg-[#F4F8F6] border border-[#DCE8E3] rounded-lg appearance-none cursor-pointer accent-[#00B86B]"
                />
                <div className="flex justify-between text-[11px] text-[#53645F] mt-1">
                  <span>50 (Pequeno)</span>
                  <span>200 (Médio)</span>
                  <span>400+ (Alto)</span>
                </div>
              </div>

              {/* CLT Hidden Costs Breakdown */}
              <div className="rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] p-4 space-y-2 text-xs">
                <span className="text-[#063D32] font-semibold uppercase tracking-wider block mb-1">
                  Composição média do Custo CLT:
                </span>
                <div className="flex justify-between text-[#53645F]">
                  <span>Salário bruto:</span>
                  <span>R$ {baseSalary.toLocaleString('pt-BR')},00</span>
                </div>
                <div className="flex justify-between text-[#53645F]">
                  <span>Encargos (INSS, FGTS, 13º, Férias + 1/3 ~70%):</span>
                  <span className="text-rose-600">+ R$ {Math.round(encargos).toLocaleString('pt-BR')},00</span>
                </div>
                <div className="flex justify-between text-[#53645F]">
                  <span>Benefícios médios (VR, VT):</span>
                  <span className="text-rose-600">+ R$ {beneficios},00</span>
                </div>
                <div className="flex justify-between text-[#53645F]">
                  <span>Estação de trabalho e licenças:</span>
                  <span className="text-rose-600">+ R$ {infraestrutura},00</span>
                </div>
                <div className="flex justify-between font-bold text-[#10231F] pt-2 border-t border-[#DCE8E3]">
                  <span>Custo Total Estimado CLT:</span>
                  <span className="text-rose-600 text-sm font-mono">R$ {Math.round(totalCltMonthly).toLocaleString('pt-BR')}/mês</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[#53645F]">
              <AlertCircle className="w-4 h-4 text-[#00B86B] shrink-0" />
              <span>Simulação ilustrativa para planejamento e comparação operacional.</span>
            </div>
          </div>

          {/* Comparison Card (Right 6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl bg-[#063D32] text-white border border-[#063D32] p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00D084]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-white/15 text-[#00D084] font-bold border border-white/20">
                  Diferencial de ~{percentageSavings}%
                </span>
                <span className="text-[11px] text-white/70">Exemplo comparativo</span>
              </div>

              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70 block mb-1">
                  Diferencial Anual Estimado:
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono">
                  R$ {Math.round(annualSavings).toLocaleString('pt-BR')}
                </div>
                <span className="text-xs text-[#00D084] font-medium block mt-1">
                  (~R$ {Math.round(monthlySavings).toLocaleString('pt-BR')} de otimização mensal estimada)
                </span>
              </div>

              {/* Comparison table */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                  <span className="text-[11px] text-white/70 block mb-1">Equipe CLT</span>
                  <div className="text-lg font-bold text-rose-300 font-mono">
                    R$ {Math.round(totalCltMonthly).toLocaleString('pt-BR')}<span className="text-xs text-white/60 font-sans">/mês</span>
                  </div>
                  <div className="text-[10px] text-white/70 mt-2 space-y-1">
                    <div>✕ Riscos trabalhistas</div>
                    <div>✕ Férias e atestados</div>
                    <div>✕ Dependência de pessoa única</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#00B86B]/20 border border-[#00B86B]/40">
                  <span className="text-[11px] text-[#00D084] block mb-1 font-semibold">BPO Lima Gestão</span>
                  <div className="text-lg font-bold text-[#00D084] font-mono">
                    ~R$ {Math.round(bpoEstimateMonthly).toLocaleString('pt-BR')}<span className="text-xs text-white/60 font-sans">/mês</span>
                  </div>
                  <div className="text-[10px] text-white/90 mt-2 space-y-1">
                    <div>✓ Sem encargos CLT</div>
                    <div>✓ Continuidade diária</div>
                    <div>✓ Rotina padronizada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-white/15">
              <a
                id="calculator-whatsapp-btn"
                data-cta="calculadora-whatsapp"
                href={getWhatsAppUrl({ source: 'calculator', intent: 'bpo_financeiro' })}
                target={isWhatsAppConfigured() ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm sm:text-base py-4 px-6 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Quero organizar meu financeiro</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-[11px] text-white/70 mt-2.5">
                * Simulação ilustrativa com base em médias de mercado. O escopo real é alinhado conforme a necessidade da sua empresa.
              </p>
            </div>

          </div>

        </div>

        {/* Visual Support Card with calculadora.webp */}
        <div className="mt-12 rounded-2xl bg-[#F4F8F6] border border-[#DCE8E3] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xs">
          <div className="w-full md:w-56 h-36 rounded-xl overflow-hidden bg-white border border-[#DCE8E3] shrink-0">
            <img
              src="/images/calculadora.webp"
              alt="Análise visual ilustrativa de ROI e relatórios financeiros da Lima Gestão Financeira"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-left">
            <span className="text-xs font-bold text-[#063D32] uppercase tracking-wider block mb-1">
              Complemento Visual Informativo
            </span>
            <h4 className="text-lg font-bold text-[#10231F] font-heading mb-1.5">
              Previsibilidade de custo sem abrir mão de qualidade
            </h4>
            <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
              Enquanto uma contratação interna envolve processos seletivos, treinamento, riscos de rescisão e rotatividade, o BPO da Lima oferece continuidade operacional com processos estruturados para apoiar a gestão do seu negócio.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
