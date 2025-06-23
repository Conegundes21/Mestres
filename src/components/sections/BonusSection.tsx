import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star, Zap, ArrowRight, Flame } from "lucide-react";
import EbookShowcase from "@/components/EbookShowcase";

interface BonusItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
}

const bonusItems: BonusItem[] = [
  {
    icon: <Star className="w-8 h-8 text-emerald-400" />,
    title: "Módulo de Meditação",
    description: "Técnicas avançadas para desenvolver foco e clareza mental",
    value: "R$ 197",
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-400" />,
    title: "Guia de Produtividade",
    description: "Estratégias práticas para maximizar seus resultados diários",
    value: "R$ 147",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-emerald-400" />,
    title: "Cronograma 30 Dias",
    description: "Plano prático para turbinar sua produtividade e criar novos hábitos em apenas 30 dias.",
    value: "R$ 97",
  },
];

export default function BonusSection() {
  return (
    <section
      className="bg-black py-8 md:py-10 relative"
      id="offer-section"
      data-apollo-section="offer"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <motion.img
            src="/bonus.png"
            alt="Bônus Mestres do Desenvolvimento"
            className="w-full max-w-2xl h-auto object-contain drop-shadow-xl rounded-xl md:mt-0 mt-4 sm:max-w-md"
            style={{ maxHeight: 320 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Title Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full mb-4"
            >
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Bônus Exclusivos</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent inline-flex items-center gap-3 justify-center">
                Bônus Especiais
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Flame className="w-10 h-10 text-emerald-400" />
                </motion.div>
              </h2>
              <p className="text-xl text-zinc-400">
                Ao se inscrever hoje, você receberá estes bônus exclusivos
              </p>
            </motion.div>
          </div>

          {/* Ebooks Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <EbookShowcase />
          </motion.div>

          {/* Bonus Items Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {bonusItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 p-[1px] transition-all duration-300 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 group"
              >
                <div className="relative bg-zinc-900 p-6 rounded-lg h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent opacity-50 group-hover:animate-shimmer" />
                  <div className="relative flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-emerald-500/10 rounded-full">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-300">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 flex-grow">
                      {item.description}
                    </p>
                    <div className="text-2xl font-bold text-emerald-400">
                      {item.value}
                    </div>
                    <div className="text-xs font-bold italic text-emerald-300 mt-1">
                      (Incluso Gratuitamente)
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center space-y-6"
          >
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="font-bold text-white text-base md:text-lg">Incluídos Gratuitamente na Sua Compra</span>
              </div>
              <span className="text-zinc-300 text-sm md:text-base">Você leva tudo isso SEM pagar nada a mais.</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-block group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-xl blur-md opacity-30 group-hover:opacity-70 transition-all duration-500" />
              <Button
                className="relative w-full mx-auto text-center break-words text-base md:text-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-6 px-4 rounded-lg shadow-xl group transition-all duration-300"
                onClick={() =>
                  (window.location.href =
                    "https://pay.kirvano.com/1495deef-76af-4a03-a35a-45750c275b9a")
                }
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <span className="relative flex items-center justify-center gap-2">
                  QUERO MEUS BÔNUS GRATUITOS AGORA
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
