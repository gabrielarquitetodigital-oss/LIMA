import React, { useState } from 'react';
import { ArrowRight, MessageCircle, RefreshCw, BarChart2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

interface QuestionOption {
  label: string;
  points: number;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: QuestionOption[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Qual é o segmento principal da sua empresa?',
    subtitle: 'Cada setor possui uma rotina e particularidade fiscal diferente.',
    options: [
      { label: 'Prestação de Serviços / Consultoria / Tecnologia', points: 2 },
      { label: 'Saúde / Clínicas / Consultórios', points: 2 },
      { label: 'Comércio / Varejo / E-commerce', points: 1 },
      { label: 'Engenharia / Arquitetura / Construção', points: 2 },
      { label: 'Outro segmento', points: 1 },
    ],
  },
  {
    id: 2,
    title: 'Qual é a faixa média de faturamento mensal?',
    subtitle: 'Ajuda a dimensionar o volume operacional e de conciliação.',
    options: [
      { label: 'Até R$ 30 mil/mês', points: 1 },
      { label: 'De R$ 30 mil a R$ 100 mil/mês', points: 2 },
      { label: 'De R$ 100 mil a R$ 300 mil/mês', points: 3 },
      { label: 'Acima de R$ 300 mil/mês', points: 4 },
    ],
  },
  {
    id: 3,
    title: 'Como sua empresa gerencia a conciliação e contas hoje?',
    subtitle: 'A base para não perder dinheiro com taxas e juros.',
    options: [
      { label: 'Não fazemos conciliação periódica (acompanho saldo bancário)', points: 0 },
      { label: 'Em planilhas manuais (Excel / Google Sheets)', points: 1 },
      { label: 'Temos software financeiro, mas com lançamentos desatualizados', points: 2 },
      { label: 'O próprio sócio faz nos momentos vagos ou à noite', points: 1 },
    ],
  },
  {
    id: 4,
    title: 'Qual é o principal desafio operacional hoje?',
    subtitle: 'Onde o BPO Financeiro da Lima pode trazer alívio imediato.',
    options: [
      { label: 'Falta de tempo para rotinas operacionais e foco em clientes', points: 1 },
      { label: 'Dificuldade em enxergar a margem real de lucro do negócio', points: 0 },
      { label: 'Falta de processo estruturado de contas a receber e cobrança', points: 1 },
      { label: 'Dificuldade de controle de contas a pagar no prazo', points: 0 },
    ],
  },
];

export const FinancialDiagnostic: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, QuestionOption>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (option: QuestionOption) => {
    const updatedAnswers = { ...answers, [currentStep]: option };
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compile diagnosis result (Section 6 & 14)
  const segmentSelected = answers[0]?.label || 'Empresa';
  const revenueSelected = answers[1]?.label || 'Não informado';
  const routineSelected = answers[2]?.label || 'Manual';
  const rawPain = answers[3]?.label || 'Organização geral';
  const mainPainSelected = rawPain;

  let diagnosticDifficulty = 'organização da rotina financeira e fluxo de caixa';
  if (rawPain.includes('Falta de tempo')) {
    diagnosticDifficulty = 'falta de tempo para rotinas operacionais';
  } else if (rawPain.includes('margem real')) {
    diagnosticDifficulty = 'visibilidade da margem real e fluxo de caixa';
  } else if (rawPain.includes('contas a receber')) {
    diagnosticDifficulty = 'contas a receber e cobrança';
  } else if (rawPain.includes('contas a pagar')) {
    diagnosticDifficulty = 'organização e prazos de contas a pagar';
  }

  const totalPoints = (Object.values(answers) as QuestionOption[]).reduce((acc: number, curr: QuestionOption) => acc + curr.points, 0);

  let maturityLevel = 'Oportunidade de Organização e Controle';
  let maturityColor = 'text-[#063D32] bg-[#F4F8F6] border-[#DCE8E3]';
  let diagnosisText = 'Identificamos pontos que podem ser melhorados na organização financeira da sua empresa, especialmente no acompanhamento da rotina diária e na previsibilidade do caixa. A estruturação do BPO Financeiro ajuda a padronizar processos e liberar seu tempo para cuidar do negócio.';

  if (totalPoints >= 7) {
    maturityLevel = 'Potencial de Otimização Operacional';
    maturityColor = 'text-[#063D32] bg-[#EAF1EE] border-[#00B86B]/30';
    diagnosisText = 'Sua empresa já possui rotinas em andamento, mas o operacional financeiro consome tempo precioso da liderança. O apoio da Lima Gestão Financeira traz padronização de lançamentos, conciliação e relatórios para facilitar suas decisões.';
  }

  const whatsappUrl = getWhatsAppUrl({
    source: 'diagnostic_result',
    diagnosticDifficulty,
  });

  return (
    <section id="diagnostico" className="py-20 sm:py-24 bg-[#F4F8F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <BarChart2 className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Diagnóstico Financeiro Express</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Avalie o Nível de Organização{' '}
            <span className="text-[#00B86B]">da sua Empresa</span>
          </h2>
          <p className="mt-3 text-base text-[#53645F] leading-relaxed">
            Responda a 4 perguntas rápidas e veja os pontos prioritários para organizar seu financeiro.
          </p>
        </div>

        {/* Card Container */}
        <div className="rounded-3xl bg-white border border-[#DCE8E3] p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#53645F] mb-3">
                <span>Pergunta {currentStep + 1} de {QUESTIONS.length}</span>
                <span className="text-[#00B86B]">{Math.round(((currentStep) / QUESTIONS.length) * 100)}% concluído</span>
              </div>
              <div className="w-full h-1.5 bg-[#EAF1EE] rounded-full mb-8 overflow-hidden">
                <div 
                  className="h-full bg-[#00B86B] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Current Question */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-[#10231F] mb-2 font-heading">
                  {QUESTIONS[currentStep].title}
                </h3>
                <p className="text-sm text-[#53645F]">
                  {QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              {/* Options list */}
              <div className="space-y-3">
                {QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(option)}
                    className="w-full p-4 rounded-xl text-left bg-[#F4F8F6] hover:bg-[#EAF1EE] border border-[#DCE8E3] hover:border-[#00B86B]/60 text-[#10231F] font-medium text-sm transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{option.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#53645F] group-hover:text-[#00B86B] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-[#DCE8E3]">
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-[#53645F] hover:text-[#10231F] cursor-pointer"
                  >
                    &larr; Voltar para a pergunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result View */
            <div className="text-left space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-3 pb-4 border-b border-[#DCE8E3]">
                <span className="text-xs uppercase tracking-wider font-bold text-[#53645F]">Resultado da Avaliação</span>
                <span className={`text-xs px-3 py-1 rounded-full font-bold border ${maturityColor}`}>
                  {maturityLevel}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#10231F] mb-3 font-heading">
                  Sua empresa se beneficiaria diretamente de processos estruturados de BPO.
                </h3>
                <p className="text-sm sm:text-base text-[#53645F] leading-relaxed">
                  {diagnosisText}
                </p>
              </div>

              {/* Summary Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#F4F8F6] p-4 rounded-2xl border border-[#DCE8E3]">
                <div>
                  <span className="text-[#53645F] block mb-0.5">Segmento:</span>
                  <span className="font-semibold text-[#10231F]">{segmentSelected}</span>
                </div>
                <div>
                  <span className="text-[#53645F] block mb-0.5">Faixa de Faturamento:</span>
                  <span className="font-semibold text-[#10231F]">{revenueSelected}</span>
                </div>
                <div>
                  <span className="text-[#53645F] block mb-0.5">Rotina Atual:</span>
                  <span className="font-semibold text-[#10231F]">{routineSelected}</span>
                </div>
                <div>
                  <span className="text-[#53645F] block mb-0.5">Desafio Identificado:</span>
                  <span className="font-semibold text-[#00B86B]">{mainPainSelected}</span>
                </div>
              </div>

              {/* Action */}
              <div className="space-y-3 pt-2">
                <a
                  id="diagnostic-send-whatsapp-btn"
                  data-cta="diagnostic-whatsapp"
                  href={whatsappUrl}
                  target={isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-base py-4 px-6 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Quero organizar meu financeiro</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-xs text-[#53645F]">
                  Você fala diretamente com a equipe da Lima Gestão Financeira. Sem compromisso.
                </p>
                <p className="text-center text-[11px] text-[#8A9C96]">
                  * Avaliação orientativa inicial para apoiar o entendimento da rotina da sua empresa.
                </p>

                <div className="flex items-center justify-center gap-2 pt-1">
                  <button
                    onClick={handleReset}
                    className="text-xs text-[#53645F] hover:text-[#10231F] flex items-center gap-1.5 py-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Refazer diagnóstico</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
