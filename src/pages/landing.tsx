import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import StorytellingSection from "@/components/sections/StorytellingSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Storyboard1 from "@/components/Storyboard1";
import BonusSection from "@/components/sections/BonusSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import PricingSection from "@/components/sections/PricingSection";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import PaymentFlow from "@/components/PaymentFlow";
import { useState } from "react";

export default function LandingPage() {
  const [showPaymentFlow, setShowPaymentFlow] = useState(false);

  const handleOpenPaymentFlow = () => {
    setShowPaymentFlow(true);
  };

  const handleClosePaymentFlow = () => {
    setShowPaymentFlow(false);
  };

  const handlePaymentSuccess = () => {
    // Handle successful payment
    setShowPaymentFlow(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black min-h-screen"
    >
      <main className="[&>*]:mt-0 [&>*]:py-8 sm:py-12 md:py-16 lg:py-20">
        {/* 1️⃣ Headline – Título chamativo que prenda a atenção */}
        <HeroSection />

        {/* 2️⃣ Vídeo VSL – Deve ser responsivo e carregado corretamente */}
        {/* 3️⃣ Lead – Seção que introduz e gera conexão com o público */}
        {/* 4️⃣ História – Apresentação persuasiva, gerando identificação */}
        <StorytellingSection />

        {/* 5️⃣ Pitch – Explicação clara sobre o que está sendo oferecido */}
        <BenefitsSection />

        {/* 6️⃣ Evidência – Provas sociais, depoimentos, garantias */}
        <Storyboard1 />

        {/* 7️⃣ Oferta – Apresentação do preço e benefícios claros */}
        <BonusSection />
        <InvestmentSection />
        <PricingSection />

        {/* 8️⃣ Acordo – Gatilhos finais para decisão de compra */}
        <FinalCTASection />

        {/* 9️⃣ Q&A (Perguntas Frequentes) – Respostas para dúvidas comuns */}
        <FaqSection />

        <PaymentFlow
          isOpen={showPaymentFlow}
          onClose={handleClosePaymentFlow}
          onSuccess={handlePaymentSuccess}
        />
      </main>
    </motion.div>
  );
}
