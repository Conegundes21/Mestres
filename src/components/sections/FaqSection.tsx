import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Quanto tempo tenho acesso ao conteúdo?",
    answer:
      "Você terá acesso VITALÍCIO a todo o conteúdo da plataforma, incluindo atualizações futuras sem custos adicionais. Uma vez que você adquire o programa, é seu para sempre.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, basta enviar um email solicitando o reembolso e devolveremos 100% do seu investimento, sem questionamentos. Zero risco para você!",
  },
  {
    question: "Preciso ter experiência prévia?",
    answer:
      "Não! O método foi desenvolvido para funcionar independentemente do seu nível atual. Temos alunos iniciantes que conquistaram resultados extraordinários, assim como profissionais experientes que elevaram ainda mais seu patamar.",
  },
  {
    question: "Em quanto tempo vou começar a ver resultados?",
    answer:
      "Nossos alunos costumam reportar as primeiras mudanças significativas já nas primeiras 2 semanas de aplicação do método. No entanto, os resultados mais expressivos geralmente acontecem entre 60 a 90 dias de prática consistente.",
  },
  {
    question: "Como é feito o pagamento? É seguro?",
    answer:
      "Aceitamos todas as principais formas de pagamento: cartão de crédito (em até 12x) e PIX (com desconto especial). Nossa plataforma utiliza certificação SSL e criptografia de ponta a ponta, garantindo 100% de segurança na sua transação.",
  },
  {
    question: "Qual o formato do conteúdo?",
    answer:
      "O programa inclui vídeoaulas objetivas, materiais complementares em PDF, exercícios práticos e ferramentas exclusivas. Todo o conteúdo foi desenvolvido para ser facilmente consumido e aplicado no seu dia a dia.",
  },
  {
    question: "Quanto tempo preciso dedicar por dia?",
    answer:
      "O programa foi estruturado para exigir apenas 30 minutos por dia. O foco é na qualidade e consistência, não na quantidade de tempo investido. Mesmo com uma rotina ocupada, você conseguirá implementar o método.",
  },
  {
    question: "Existe suporte para dúvidas?",
    answer:
      "Sim! Você terá acesso ao nosso grupo exclusivo no Telegram onde poderá tirar suas dúvidas diretamente com nossa equipe de mentores. Além disso, realizamos encontros ao vivo mensais para responder perguntas e compartilhar atualizações.",
  },
  {
    question: "O que acontece após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, você receberá um email com suas credenciais de acesso à plataforma. Em menos de 5 minutos você já estará com acesso a todo o conteúdo e poderá começar sua jornada de transformação.",
  },
  {
    question: "Posso acessar o conteúdo pelo celular?",
    answer:
      "Sim! Nossa plataforma é 100% responsiva e otimizada para todos os dispositivos. Você pode acessar o conteúdo pelo computador, tablet ou celular, quando e onde quiser.",
  },
];

export default function FaqSection({ faqs = defaultFaqs }: FaqSectionProps) {
  return (
    <section
      className="bg-black py-8 md:py-10 relative"
      id="faq-section"
      data-apollo-section="faq"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-zinc-900/50 rounded-lg border border-zinc-800"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:text-amber-400 text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-zinc-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
