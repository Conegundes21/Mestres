import HeroSection from "./sections/HeroSection";
import StorytellingSection from "./sections/StorytellingSection";
import BenefitsSection from "./sections/BenefitsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import BonusSection from "./sections/BonusSection";
import PricingSection from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import FinalCTASection from "./sections/FinalCTASection";

function Home() {
  return (
    <main className="bg-black [&>*]:mt-0 [&>*]:py-8 sm:py-12 md:py-16 lg:py-20">
      {/* 1️⃣ Headline – Título chamativo que prenda a atenção */}
      <HeroSection />

      {/* 2️⃣ Vídeo VSL – Deve ser responsivo e carregado corretamente */}
      {/* 3️⃣ Lead – Seção que introduz e gera conexão com o público */}
      {/* 4️⃣ História – Apresentação persuasiva, gerando identificação */}
      <StorytellingSection />

      {/* 5️⃣ Pitch – Explicação clara sobre o que está sendo oferecido */}
      <BenefitsSection />

      {/* 6️⃣ Evidência – Provas sociais, depoimentos, garantias */}
      <TestimonialsSection />

      {/* 7️⃣ Oferta – Apresentação do preço e benefícios claros */}
      <BonusSection />
      <PricingSection />

      {/* 8️⃣ Acordo – Gatilhos finais para decisão de compra */}
      <FinalCTASection />

      {/* 9️⃣ Q&A (Perguntas Frequentes) – Respostas para dúvidas comuns */}
      <FaqSection />
    </main>
  );
}

export default Home;
