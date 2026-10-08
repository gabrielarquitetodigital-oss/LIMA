import React from 'react';
import { ShieldCheck, Lock, FileKey, EyeOff, Server } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-[#00B86B]" />,
      title: 'Operação Sem Acesso a Saques',
      desc: 'Atuamos com perfil de operador no internet banking para conferir e agendar compromissos. A autorização final e movimentação de valores é sempre do titular da conta.'
    },
    {
      icon: <FileKey className="w-5 h-5 text-[#00B86B]" />,
      title: 'Confidencialidade & Proteção de Dados',
      desc: 'Compromisso com o sigilo profissional, termos de confidencialidade e alinhamento às diretrizes da Lei Geral de Proteção de Dados (LGPD).'
    },
    {
      icon: <Server className="w-5 h-5 text-[#00B86B]" />,
      title: 'Uso de Plataformas Consolidadas',
      desc: 'Operação com os principais sistemas de gestão do mercado nacional (Conta Azul, Omie, Bling e similares), respeitando os padrões de acesso das plataformas.'
    },
    {
      icon: <EyeOff className="w-5 h-5 text-[#00B86B]" />,
      title: 'Controle e Responsabilidade',
      desc: 'Processos organizados com foco em controle, confidencialidade e responsabilidade no tratamento e arquivamento das informações da sua empresa.'
    }
  ];

  return (
    <section id="seguranca" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F8F6] border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Governança & Controle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Segurança nos Processos e{' '}
            <span className="text-[#00B86B]">Confidencialidade</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Processos organizados com foco em controle, confidencialidade e responsabilidade no tratamento das informações financeiras:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: 4 Security Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {securityPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DCE8E3] flex items-start gap-4 hover:border-[#00B86B]/50 transition-all duration-200 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F8F6] flex items-center justify-center shrink-0 border border-[#DCE8E3]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#10231F] mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Element seguranca.webp */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl sm:rounded-3xl bg-[#F4F8F6] border border-[#DCE8E3] p-4 sm:p-5 shadow-lg shadow-[#063D32]/5 text-center">
              
              {/* Image Container */}
              <div className="rounded-xl overflow-hidden bg-white border border-[#DCE8E3] relative mb-4">
                <img
                  src="/images/seguranca.webp"
                  alt="Transparência e segurança nos processos financeiros da Lima Gestão Financeira"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px]"
                />
                
                {/* Discrete Label */}
                <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-md bg-[#063D32]/90 text-white text-[10px] font-medium backdrop-blur-xs">
                  Apoio visual demonstrativo
                </div>
              </div>

              {/* Text Highlights */}
              <div className="text-left space-y-2 px-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#063D32]">
                  <ShieldCheck className="w-4 h-4 text-[#00B86B]" />
                  <span>Transparência e Controle</span>
                </div>
                <p className="text-xs text-[#53645F] leading-relaxed">
                  Toda a movimentação de saída depende da sua aprovação com seu token ou assinatura bancária. Nossa atuação foca na preparação e organização dos lançamentos.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bank Compatibility Bar */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-[#F4F8F6] border border-[#DCE8E3] p-6 text-center">
          <span className="text-xs font-semibold text-[#063D32] uppercase tracking-wider block mb-4">
            Compatibilidade com os principais bancos e plataformas de gestão empresarial:
          </span>
          <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 text-xs sm:text-sm font-semibold text-[#53645F]">
            <span className="hover:text-[#00B86B] transition-colors">Itaú Empresas</span>
            <span className="hover:text-[#00B86B] transition-colors">Bradesco PJ</span>
            <span className="hover:text-[#00B86B] transition-colors">Santander</span>
            <span className="hover:text-[#00B86B] transition-colors">Banco do Brasil</span>
            <span className="hover:text-[#00B86B] transition-colors">Inter PJ</span>
            <span className="hover:text-[#00B86B] transition-colors">Nubank PJ</span>
            <span className="hover:text-[#00B86B] transition-colors">Conta Azul</span>
            <span className="hover:text-[#00B86B] transition-colors">Omie</span>
            <span className="hover:text-[#00B86B] transition-colors">Bling</span>
          </div>
        </div>

      </div>
    </section>
  );
};
