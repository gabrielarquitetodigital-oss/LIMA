import React from 'react';
import { 
  FolderCheck, 
  ShieldCheck, 
  Clock, 
  Eye, 
  Smile, 
  TrendingUp,
  ShoppingBag,
  UtensilsCrossed,
  Stethoscope,
  Truck,
  Briefcase,
  Factory,
  LineChart,
  Sparkles,
  ArrowRight, 
  MessageCircle, 
  CheckCircle2,
  Users
} from 'lucide-react';
import { CORE_BENEFITS, TARGET_CATEGORIES, getWhatsAppUrl, isWhatsAppConfigured } from '../data/landingData';

const benefitIcons: Record<string, React.ReactNode> = {
  FolderCheck: <FolderCheck className="w-6 h-6 text-[#00B86B]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00B86B]" />,
  Clock: <Clock className="w-6 h-6 text-[#00B86B]" />,
  Eye: <Eye className="w-6 h-6 text-[#00B86B]" />,
  Smile: <Smile className="w-6 h-6 text-[#00B86B]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#00B86B]" />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-[#00B86B]" />,
  UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#00B86B]" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#00B86B]" />,
  Truck: <Truck className="w-5 h-5 text-[#00B86B]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#00B86B]" />,
  Factory: <Factory className="w-5 h-5 text-[#00B86B]" />,
  LineChart: <LineChart className="w-5 h-5 text-[#00B86B]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#00B86B]" />,
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-24 bg-[#F4F8F6] border-y border-[#DCE8E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header 1: Por Que Organizar Sua Gestão Financeira? */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Por Que Organizar Sua Gestão Financeira?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Mais controle para você.{' '}
            <span className="text-[#00B86B]">Mais organização para sua empresa.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Estrutura profissional, rotinas padronizadas e informações claras para você focar no crescimento do seu negócio:
          </p>
        </div>

        {/* Benefits Grid (apresentação baseada em cards, ícones, benefícios e espaço em branco) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {CORE_BENEFITS.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl bg-white border border-[#DCE8E3] p-7 flex flex-col justify-between hover:border-[#00B86B]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-xs group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {benefitIcons[b.icon] || <ShieldCheck className="w-6 h-6 text-[#00B86B]" />}
                </div>

                <h3 className="text-xl font-bold text-[#10231F] mb-3 leading-snug font-heading">
                  {b.title}
                </h3>

                <p className="text-sm text-[#53645F] leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#DCE8E3]">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00B86B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B86B]"></span>
                  Rotina padronizada
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Header 2: Target Categories ("Para quem é") */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE8E3] text-[#063D32] text-xs font-semibold mb-3 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#00B86B]" />
            <span>Público Atendido</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10231F] tracking-tight font-heading">
            Para quem é a{' '}
            <span className="text-[#00B86B]">Lima Gestão Financeira</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#53645F] leading-relaxed">
            Nossa solução é ideal para pequenas e médias empresas que buscam organização, previsibilidade e apoio na gestão financeira:
          </p>
        </div>

        {/* Target Categories Grid (8 Segmentos focados em cards, ícones e tipografia refinada) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white border border-[#DCE8E3] hover:border-[#00B86B]/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F8F6] border border-[#DCE8E3] flex items-center justify-center mb-4">
                  {categoryIcons[cat.icon] || <CheckCircle2 className="w-5 h-5 text-[#00B86B]" />}
                </div>
                <h3 className="text-base font-bold text-[#10231F] mb-1.5 font-heading">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#53645F] leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action below */}
        <div className="mt-16 text-center">
          <a
            id="benefits-whatsapp-btn"
            href={getWhatsAppUrl({ source: 'hero', intent: 'bpo_financeiro' })}
            target={isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00B86B] hover:bg-[#00A35E] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-xl shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Quero organizar meu financeiro</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
