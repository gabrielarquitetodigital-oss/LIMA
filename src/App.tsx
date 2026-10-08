/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { FinancialDiagnostic } from './components/FinancialDiagnostic';
import { HowItWorks } from './components/HowItWorks';
import { TechnologySection } from './components/TechnologySection';
import { SecuritySection } from './components/SecuritySection';
import { RoiCalculator } from './components/RoiCalculator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { WhatsAppIntroSection } from './components/WhatsAppIntroSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyCta } from './components/MobileStickyCta';
import { BioLinkModal } from './components/BioLinkModal';
import { QuickContactModal } from './components/QuickContactModal';

export default function App() {
  const [isBioModalOpen, setIsBioModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenDiagnostic = () => {
    const diagSection = document.getElementById('diagnostico');
    if (diagSection) {
      diagSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#10231F] flex flex-col selection:bg-[#00B86B] selection:text-white antialiased pb-14 sm:pb-0">
      {/* Navigation Header */}
      <Navbar 
        onOpenBioLink={() => setIsBioModalOpen(true)}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Slogan & Cockpit Preview */}
        <Hero onOpenDiagnostic={handleOpenDiagnostic} />

        {/* 2. Identificação do Problema: Você se identifica? */}
        <PainPoints />

        {/* 3. A Solução: Nós cuidamos da rotina financeira. Você cuida do seu negócio. */}
        <SolutionSection />

        {/* 4. Serviços: O que a Lima faz pela sua empresa */}
        <ServicesSection />

        {/* 5. Diagnóstico Financeiro Express (Funil de conversão após serviços) */}
        <FinancialDiagnostic />

        {/* 6. Como Funciona na Prática (4 Passos) */}
        <HowItWorks />

        {/* 7. Tecnologia a favor da gestão financeira */}
        <TechnologySection />

        {/* 8. Segurança Bancária & Confidencialidade */}
        <SecuritySection />

        {/* 9. Simulador Comparativo Ilustrativo (CLT vs BPO) */}
        <RoiCalculator />

        {/* 10. Benefícios Estruturais & Para Quem É */}
        <TestimonialsSection />

        {/* 11. Dúvidas Frequentes (FAQ) */}
        <FaqSection />

        {/* 12. Apresentação do WhatsApp (Section 24) */}
        <WhatsAppIntroSection onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* 13. Final High-Converting Call to Action & Commercial Form */}
        <FinalCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Widget (Section 12) */}
      <FloatingWhatsApp onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Mobile Sticky CTA Bar (Section 13) */}
      <MobileStickyCta onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Link na Bio / Quick Share Modal */}
      <BioLinkModal 
        isOpen={isBioModalOpen} 
        onClose={() => setIsBioModalOpen(false)}
        onOpenDiagnostic={handleOpenDiagnostic}
      />

      {/* Quick Contact Modal (Section 11) */}
      <QuickContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
